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
const FRAME_STEP_SEC = 1 / 24;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const getScrollTrackHeight = () =>
  typeof window !== 'undefined' && window.innerWidth < 768 ? 1350 : 2100;

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

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [introFailed, setIntroFailed] = useState(false);
  const [skipState, setSkipState] = useState<'active' | 'fading' | 'done'>('active');
  const [introReleased, setIntroReleased] = useState(false);
  const [scrollTrackHeight, setScrollTrackHeight] = useState<number>(getScrollTrackHeight);

  // Sync reduced-motion media listener
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const introBypassed = prefersReducedMotion || introFailed || skipState === 'done';

  // Keep reserved slot height synced to the website's natural height so scrollY never jumps
  useEffect(() => {
    if (introBypassed) return;
    const slotEl = siteSlotRef.current;
    const siteEl = siteLayerRef.current;
    if (!slotEl || !siteEl) return;

    const syncSlotHeight = () => {
      if (!introReleased && siteEl.offsetHeight > 0) {
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
  }, [introBypassed, introReleased]);

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

  // GSAP ScrollTrigger + silky rAF damping + event-driven seek pipeline
  useEffect(() => {
    if (introBypassed) {
      if (siteLayerRef.current) {
        siteLayerRef.current.style.opacity = '';
        siteLayerRef.current.style.pointerEvents = '';
        siteLayerRef.current.style.visibility = '';
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill(true);
        scrollTriggerRef.current = null;
      }
      return;
    }

    const rootEl = rootRef.current;
    const spacerEl = spacerRef.current;
    const siteEl = siteLayerRef.current;
    const overlayEl = videoOverlayRef.current;
    const cueEl = scrollCueRef.current;
    const videoEl = videoRef.current;

    if (!rootEl || !spacerEl || !siteEl || !overlayEl || !videoEl) return;

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

    const trySeekToDesired = () => {
      if (disposed || !videoEl || duration <= 0 || videoEl.readyState < 1) return;

      const safeEnd = getSafeEndTime(duration);
      const target = clamp(desiredSeekTime, 0, safeEnd);
      const diff = Math.abs(videoEl.currentTime - target);
      const atBoundary = target <= 0.015 || target >= safeEnd - 0.015;
      const minDelta = atBoundary ? 0.005 : FRAME_STEP_SEC * 0.6;

      if (diff <= minDelta) return;

      const now = performance.now();
      if (seekingInFlight && videoEl.seeking && now - lastSeekIssuedAt < 140) {
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

    const renderVisualState = (p: number) => {
      if (disposed || skippedRef.current) return;
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
      // Smooth sine-eased crossfade curve for filmic transition
      const fadeNorm = rawFade * rawFade * (3 - 2 * rawFade);
      const videoAlpha = 1 - fadeNorm;

      overlayEl.style.opacity = String(videoAlpha);
      overlayEl.style.pointerEvents = fadeNorm > 0.35 ? 'none' : 'auto';
      overlayEl.style.visibility = videoAlpha <= 0.005 ? 'hidden' : 'visible';

      if (p >= 0.998) {
        siteEl.style.opacity = '';
        siteEl.style.visibility = 'visible';
        siteEl.style.pointerEvents = 'auto';
      } else if (fadeNorm <= 0.001) {
        // Hide off-phase DOM compositing while video covers 100% of screen
        siteEl.style.opacity = '0';
        siteEl.style.visibility = 'hidden';
        siteEl.style.pointerEvents = 'none';
      } else {
        siteEl.style.visibility = 'visible';
        siteEl.style.opacity = String(fadeNorm);
        siteEl.style.pointerEvents = fadeNorm > 0.35 ? 'auto' : 'none';
      }
    };

    const tickSmoothing = (now: number) => {
      rafId = null;
      if (disposed || skippedRef.current) return;

      const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
      lastFrameTime = now;

      const delta = targetProgress - smoothProgress;
      if (Math.abs(delta) < 0.0005) {
        smoothProgress = targetProgress;
        renderVisualState(smoothProgress);
        return;
      }

      // Snappy frame-rate-independent damping (~18 rad/s) keeps mouse wheels silky without lag
      const factor = 1 - Math.exp(-18 * dt);
      smoothProgress += delta * factor;
      renderVisualState(smoothProgress);
      rafId = window.requestAnimationFrame(tickSmoothing);
    };

    const ensureLoopRunning = () => {
      if (rafId === null && !disposed) {
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
          if (skippedRef.current) return;
          targetProgress = clamp(self.progress, 0, 1);

          if (targetProgress >= 0.998) {
            setIntroReleased((prev) => (prev ? prev : true));
          } else {
            setIntroReleased((prev) => (prev ? false : prev));
          }

          ensureLoopRunning();
        },
        onLeave: () => {
          if (skippedRef.current) return;
          targetProgress = 1;
          smoothProgress = 1;
          renderVisualState(1);
          setIntroReleased(true);
        },
        onEnterBack: () => {
          if (skippedRef.current) return;
          overlayEl.style.visibility = 'visible';
          setIntroReleased(false);
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
    if (skipState !== 'active') return;
    skippedRef.current = true;
    setSkipState('fading');
    setIntroReleased(true);

    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill(true);
      scrollTriggerRef.current = null;
    }

    if (siteLayerRef.current) {
      siteLayerRef.current.style.visibility = 'visible';
      siteLayerRef.current.style.opacity = '1';
      siteLayerRef.current.style.pointerEvents = 'auto';
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    window.setTimeout(() => {
      if (siteLayerRef.current) {
        siteLayerRef.current.style.opacity = '';
      }
      setSkipState('done');
      ScrollTrigger.refresh();
    }, 360);
  };

  if (prefersReducedMotion) {
    return (
      <div className="sci-site-layer sci-reduced-enter">
        {children}
      </div>
    );
  }

  const showSpacer = !introBypassed && skipState === 'active';
  const pinSiteBehindIntro = !introBypassed && !introReleased && skipState === 'active';

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
        <div
          ref={siteLayerRef}
          className={`sci-site-layer ${pinSiteBehindIntro ? 'sci-site-layer--pinned' : ''}`}
        >
          {children}
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
