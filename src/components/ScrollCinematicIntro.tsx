import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollCinematicIntro.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollCinematicIntroProps {
  children: React.ReactNode;
  videoSrc?: string;
}

const DEFAULT_VIDEO_SRC = '/videos/portfolio-intro.mp4';
const VIDEO_PHASE_END = 0.78;
const FRAME_STEP_SEC = 1 / 30;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const getScrollTrackHeight = () =>
  typeof window !== 'undefined' && window.innerWidth < 768 ? 1400 : 2100;

const MemoizedSiteContent = React.memo<{ children: React.ReactNode }>(({ children }) => (
  <>{children}</>
));

export const ScrollCinematicIntro: React.FC<ScrollCinematicIntroProps> = ({
  children,
  videoSrc = DEFAULT_VIDEO_SRC,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const siteSlotRef = useRef<HTMLDivElement>(null);
  const siteLayerRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const skippedRef = useRef(false);
  const releasedRef = useRef(false);
  const completedRef = useRef(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [introFailed, setIntroFailed] = useState(false);
  const [introCompleted, setIntroCompleted] = useState(false);
  const [skipState, setSkipState] = useState<'active' | 'fading' | 'done'>('active');
  const [scrollTrackHeight, setScrollTrackHeight] = useState<number>(getScrollTrackHeight);

  // Sync reduced-motion media listener
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const introBypassed = prefersReducedMotion || introFailed || skipState === 'done' || introCompleted;

  // Keep reserved slot height synced to the website's natural height without scroll re-renders
  useEffect(() => {
    if (introBypassed) return;
    const slotEl = siteSlotRef.current;
    const siteEl = siteLayerRef.current;
    if (!slotEl || !siteEl) return;

    const syncSlotHeight = () => {
      if (!releasedRef.current && !skippedRef.current && siteEl.offsetHeight > 0) {
        slotEl.style.minHeight = `${siteEl.offsetHeight}px`;
      } else {
        slotEl.style.minHeight = '';
      }
    };

    syncSlotHeight();

    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(syncSlotHeight);
    ro.observe(siteEl);
    return () => ro.disconnect();
  }, [introBypassed]);

  // Responsive scroll distance updates on resize / orientation change
  useEffect(() => {
    const updateTrackHeight = () => {
      const next = getScrollTrackHeight();
      setScrollTrackHeight((prev) => (prev === next ? prev : next));
    };
    window.addEventListener('resize', updateTrackHeight);
    window.addEventListener('orientationchange', updateTrackHeight);
    return () => {
      window.removeEventListener('resize', updateTrackHeight);
      window.removeEventListener('orientationchange', updateTrackHeight);
    };
  }, []);

  // GSAP ScrollTrigger + zero-react-render rAF smoothing + fast seek pipeline
  useEffect(() => {
    if (introBypassed) {
      if (siteLayerRef.current) {
        siteLayerRef.current.classList.remove('sci-site-layer--pinned');
        siteLayerRef.current.style.opacity = '';
        siteLayerRef.current.style.pointerEvents = '';
        siteLayerRef.current.style.visibility = '';
      }
      if (siteSlotRef.current) {
        siteSlotRef.current.style.minHeight = '';
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill(true);
        scrollTriggerRef.current = null;
      }
      return;
    }

    const rootEl = rootRef.current;
    const spacerEl = spacerRef.current;
    const slotEl = siteSlotRef.current;
    const siteEl = siteLayerRef.current;
    const overlayEl = videoOverlayRef.current;
    const cueEl = scrollCueRef.current;
    const videoEl = videoRef.current;

    if (!rootEl || !spacerEl || !slotEl || !siteEl || !overlayEl || !videoEl) return;

    let duration =
      Number.isFinite(videoEl.duration) && videoEl.duration > 0 ? videoEl.duration : 0;
    let targetProgress = 0;
    let smoothProgress = 0;
    let lastFrameTime = performance.now();
    let rafId: number | null = null;
    let seekingInFlight = false;
    let lastSeekIssuedAt = 0;
    let desiredSeekTime = 0;
    let touchUnlocked = false;
    let disposed = false;

    const getSafeEndTime = (rawDuration: number) => Math.max(rawDuration - 0.04, 0.05);

    const setReleasedDOM = (released: boolean) => {
      if (releasedRef.current === released) return;
      releasedRef.current = released;
      siteEl.classList.toggle('sci-site-layer--pinned', !released);
      if (released) {
        slotEl.style.minHeight = '';
      } else if (siteEl.offsetHeight > 0) {
        slotEl.style.minHeight = `${siteEl.offsetHeight}px`;
      }
    };

    const trySeekToDesired = () => {
      if (disposed || skippedRef.current || !videoEl || duration <= 0 || videoEl.readyState < 1) {
        return;
      }

      const safeEnd = getSafeEndTime(duration);
      const target = clamp(desiredSeekTime, 0, safeEnd);
      const diff = Math.abs(videoEl.currentTime - target);
      const atBoundary = target <= 0.015 || target >= safeEnd - 0.015;
      const minDelta = atBoundary ? 0.004 : FRAME_STEP_SEC * 0.45;

      if (diff <= minDelta) return;

      const now = performance.now();
      if (seekingInFlight && videoEl.seeking && now - lastSeekIssuedAt < 100) {
        return;
      }

      seekingInFlight = true;
      lastSeekIssuedAt = now;
      try {
        videoEl.currentTime = target;
      } catch {
        seekingInFlight = false;
      }
    };

    const completeIntroAndResetScroll = () => {
      if (completedRef.current || disposed) return;
      completedRef.current = true;
      releasedRef.current = true;
      skippedRef.current = true;

      // 1. Kill the ScrollTrigger immediately so scroll changes don't fire trigger callbacks
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill(true);
        scrollTriggerRef.current = null;
      }

      // 2. Hide video overlay, release pin, collapse spacer
      if (overlayEl) {
        overlayEl.style.opacity = '0';
        overlayEl.style.visibility = 'hidden';
        overlayEl.style.pointerEvents = 'none';
        overlayEl.style.display = 'none';
      }

      if (siteEl) {
        siteEl.classList.remove('sci-site-layer--pinned');
        siteEl.style.opacity = '1';
        siteEl.style.visibility = 'visible';
        siteEl.style.pointerEvents = 'auto';
      }

      if (slotEl) {
        slotEl.style.minHeight = '';
      }

      if (spacerEl) {
        spacerEl.style.height = '0px';
        spacerEl.style.display = 'none';
      }

      // 3. Reset document scroll to absolute top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

      // 4. Update React state
      setIntroCompleted(true);
      setSkipState('done');

      // 5. In next animation frame, ensure scroll is 0 and refresh ScrollTrigger for the page
      window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        ScrollTrigger.refresh();
      });
    };

    const renderVisualState = (p: number) => {
      if (disposed || skippedRef.current || completedRef.current) return;

      if (!videoEl.paused) {
        videoEl.pause();
      }

      if (duration > 0) {
        const videoNorm = clamp(p / VIDEO_PHASE_END, 0, 1);
        desiredSeekTime = videoNorm * getSafeEndTime(duration);
        trySeekToDesired();
      }

      if (cueEl) {
        cueEl.style.opacity = String(clamp(1 - p / 0.12, 0, 1));
      }

      const rawFade =
        p <= VIDEO_PHASE_END
          ? 0
          : clamp((p - VIDEO_PHASE_END) / (1 - VIDEO_PHASE_END), 0, 1);
      const fadeNorm = rawFade * rawFade * (3 - 2 * rawFade);
      const videoAlpha = 1 - fadeNorm;

      overlayEl.style.opacity = String(videoAlpha);
      overlayEl.style.pointerEvents = fadeNorm > 0.35 ? 'none' : 'auto';
      overlayEl.style.visibility = videoAlpha <= 0.005 ? 'hidden' : 'visible';

      if (p >= 0.995 || fadeNorm >= 0.99) {
        siteEl.style.opacity = '1';
        siteEl.style.visibility = 'visible';
        siteEl.style.pointerEvents = 'auto';
        overlayEl.style.opacity = '0';
        overlayEl.style.visibility = 'hidden';
        completeIntroAndResetScroll();
        return;
      } else {
        setReleasedDOM(false);
        if (fadeNorm <= 0.001) {
          siteEl.style.opacity = '0';
          siteEl.style.visibility = 'hidden';
          siteEl.style.pointerEvents = 'none';
        } else {
          siteEl.style.visibility = 'visible';
          siteEl.style.opacity = String(fadeNorm);
          siteEl.style.pointerEvents = fadeNorm > 0.35 ? 'auto' : 'none';
        }
      }
    };

    const tickSmoothing = (now: number) => {
      rafId = null;
      if (disposed || skippedRef.current) return;

      const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
      lastFrameTime = now;

      const delta = targetProgress - smoothProgress;
      if (Math.abs(delta) < 0.0004) {
        smoothProgress = targetProgress;
        renderVisualState(smoothProgress);
        return;
      }

      const factor = 1 - Math.exp(-24 * dt);
      smoothProgress += delta * factor;
      renderVisualState(smoothProgress);
      rafId = window.requestAnimationFrame(tickSmoothing);
    };

    const ensureLoopRunning = () => {
      if (rafId === null && !disposed && !skippedRef.current) {
        lastFrameTime = performance.now();
        rafId = window.requestAnimationFrame(tickSmoothing);
      }
    };

    const handleSeeked = () => {
      seekingInFlight = false;
      trySeekToDesired();
    };

    const handleLoadedMetadata = () => {
      if (Number.isFinite(videoEl.duration) && videoEl.duration > 0) {
        duration = videoEl.duration;
      }
      videoEl.pause();
      desiredSeekTime =
        clamp(targetProgress / VIDEO_PHASE_END, 0, 1) * getSafeEndTime(duration);
      trySeekToDesired();
    };

    const handleCanPlay = () => {
      videoEl.pause();
      trySeekToDesired();
    };

    const handleError = () => {
      setIntroFailed(true);
    };

    const handleFirstTouch = () => {
      if (touchUnlocked || !videoEl) return;
      touchUnlocked = true;
      const p = videoEl.play();
      if (p && typeof p.then === 'function') {
        p.then(() => {
          videoEl.pause();
          trySeekToDesired();
        }).catch(() => {
          // Continue with direct currentTime seeking
        });
      }
    };

    videoEl.pause();
    videoEl.addEventListener('loadedmetadata', handleLoadedMetadata);
    videoEl.addEventListener('loadeddata', handleCanPlay);
    videoEl.addEventListener('canplay', handleCanPlay);
    videoEl.addEventListener('seeked', handleSeeked);
    videoEl.addEventListener('error', handleError);
    window.addEventListener('touchstart', handleFirstTouch, { passive: true, once: true });

    if (videoEl.readyState >= 1) {
      handleLoadedMetadata();
    }

    // Initial visual setup at progress = 0
    releasedRef.current = false;
    siteEl.classList.add('sci-site-layer--pinned');
    if (siteEl.offsetHeight > 0) {
      slotEl.style.minHeight = `${siteEl.offsetHeight}px`;
    }
    overlayEl.style.opacity = '1';
    overlayEl.style.pointerEvents = 'auto';
    overlayEl.style.visibility = 'visible';
    siteEl.style.opacity = '0';
    siteEl.style.visibility = 'hidden';
    siteEl.style.pointerEvents = 'none';

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: spacerEl,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (skippedRef.current || completedRef.current) return;
          targetProgress = clamp(self.progress, 0, 1);
          ensureLoopRunning();
        },
        onLeave: () => {
          if (skippedRef.current || completedRef.current) return;
          targetProgress = 1;
          smoothProgress = 1;
          completeIntroAndResetScroll();
        },
      });

      scrollTriggerRef.current = st;
    }, rootEl);

    return () => {
      disposed = true;
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      videoEl.removeEventListener('loadedmetadata', handleLoadedMetadata);
      videoEl.removeEventListener('loadeddata', handleCanPlay);
      videoEl.removeEventListener('canplay', handleCanPlay);
      videoEl.removeEventListener('seeked', handleSeeked);
      videoEl.removeEventListener('error', handleError);
      window.removeEventListener('touchstart', handleFirstTouch);
      ctx.revert();
      scrollTriggerRef.current = null;
    };
  }, [introBypassed, videoSrc, scrollTrackHeight]);

  const handleSkipIntro = () => {
    if (completedRef.current || introCompleted) return;
    completedRef.current = true;
    releasedRef.current = true;
    skippedRef.current = true;

    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill(true);
      scrollTriggerRef.current = null;
    }

    const overlayEl = videoOverlayRef.current;
    const siteEl = siteLayerRef.current;
    const slotEl = siteSlotRef.current;
    const spacerEl = spacerRef.current;

    if (overlayEl) {
      overlayEl.style.opacity = '0';
      overlayEl.style.visibility = 'hidden';
      overlayEl.style.pointerEvents = 'none';
      overlayEl.style.display = 'none';
    }

    if (siteEl) {
      siteEl.classList.remove('sci-site-layer--pinned');
      siteEl.style.visibility = 'visible';
      siteEl.style.opacity = '1';
      siteEl.style.pointerEvents = 'auto';
    }

    if (slotEl) {
      slotEl.style.minHeight = '';
    }

    if (spacerEl) {
      spacerEl.style.height = '0px';
      spacerEl.style.display = 'none';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

    setIntroCompleted(true);
    setSkipState('done');

    window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    });
  };

  if (prefersReducedMotion) {
    return (
      <div className="sci-site-layer sci-reduced-enter">
        <MemoizedSiteContent>{children}</MemoizedSiteContent>
      </div>
    );
  }

  const showSpacer = !introBypassed && skipState === 'active';

  return (
    <div ref={rootRef} className="sci-root">
      {showSpacer && (
        <div
          ref={spacerRef}
          aria-hidden="true"
          className="sci-spacer"
          style={{ height: `${scrollTrackHeight}px` }}
        />
      )}

      <div ref={siteSlotRef} className="sci-site-slot">
        <div ref={siteLayerRef} className="sci-site-layer">
          <MemoizedSiteContent>{children}</MemoizedSiteContent>
        </div>
      </div>

      {!introBypassed && (
        <div
          ref={videoOverlayRef}
          aria-label="Scroll-driven cinematic introduction"
          className={`sci-video-overlay ${
            skipState === 'fading' ? 'sci-video-overlay--skip-fade' : ''
          }`}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="sci-video-element"
          />
          <div className="sci-vignette" aria-hidden="true" />

          <button
            type="button"
            onClick={handleSkipIntro}
            className="sci-skip-btn"
            aria-label="Skip intro and view portfolio"
          >
            <span>Skip Intro</span>
          </button>

          <div ref={scrollCueRef} className="sci-scroll-cue" aria-hidden="true">
            <span>Scroll</span>
            <span className="sci-scroll-line" />
          </div>
        </div>
      )}
    </div>
  );
};
