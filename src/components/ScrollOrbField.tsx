import React, { useEffect, useRef, useState } from 'react';

interface ScrollOrbFieldProps {
  /** Subtle ambient parallax layer spanning full document height */
}

/**
 * Ambient scroll-reactive orb & SVG expansion rings across dark/light sections.
 * Hidden from screen readers and disabled under `prefers-reduced-motion: reduce`.
 */
export const ScrollOrbField: React.FC<ScrollOrbFieldProps> = () => {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);

    if (mq.matches) {
      return () => mq.removeEventListener('change', onChange);
    }

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      mq.removeEventListener('change', onChange);
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const waveX = reducedMotion ? 0 : Math.sin(scrollY * 0.002) * 38;
  const waveY = reducedMotion ? 0 : Math.cos(scrollY * 0.0018) * 44;
  const ringScale = reducedMotion ? 1 : 0.92 + (Math.sin(scrollY * 0.003) + 1) * 0.12;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-hero-atmosphere"
    >
      {/* Unified First-Page Dot Matrix Atmosphere Across Entire Site */}
      <div className="absolute inset-0 dot-matrix-overlay opacity-80" />

      {/* Ambient Forest Green Radial Light */}
      <div
        className="absolute top-[22%] -left-24 w-[28rem] h-[28rem] rounded-full bg-forest-light/25 blur-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${waveX * 0.5}px, ${waveY}px, 0)`,
        }}
      />

      {/* Ambient Electric Purple Radial Light */}
      <div
        className="absolute top-[52%] -right-24 w-[30rem] h-[30rem] rounded-full bg-purple-electric/20 blur-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${waveY * -0.45}px, ${waveX * -0.6}px, 0)`,
        }}
      />

      {/* Expanding Circle Accent on Scroll */}
      <div
        className="hidden lg:block absolute top-[40%] right-[5%] w-24 h-24 rounded-full border border-purple-electric/30 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(0, ${-waveY * 0.3}px, 0) scale(${ringScale})`,
        }}
      />

      {/* Secondary Expanding Ring */}
      <div
        className="hidden md:block absolute bottom-[18%] left-[4%] w-28 h-28 rounded-full border border-forest-light/30 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${waveX * 0.3}px, ${waveY * -0.25}px, 0) scale(${ringScale})`,
        }}
      />

      {/* Sparse Floating Luminous Particles */}
      <span className="absolute top-[30%] left-[8%] w-1.5 h-1.5 rounded-full bg-purple-light/55 animate-particle" />
      <span className="absolute top-[64%] right-[12%] w-1.5 h-1.5 rounded-full bg-sand/45 animate-particle" style={{ animationDelay: '1.6s' }} />
      <span className="hidden sm:block absolute bottom-[28%] left-[42%] w-1 h-1 rounded-full bg-purple-light/50 animate-particle" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};

interface ScrollPathDividerProps {
  variant?: 'light' | 'dark';
}

/**
 * Subtle curved vector path that draws cleanly via stroke-dashoffset when entering view.
 */
export const ScrollPathDivider: React.FC<ScrollPathDividerProps> = ({ variant = 'light' }) => {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      setDrawn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const strokeColor = variant === 'dark' ? 'rgba(139, 92, 246, 0.45)' : 'rgba(31, 93, 43, 0.28)';

  return (
    <div aria-hidden="true" className="w-full overflow-hidden py-2 pointer-events-none select-none">
      <svg
        ref={ref}
        viewBox="0 0 1200 60"
        fill="none"
        className="w-full h-10 sm:h-12"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 Q 300 4, 600 30 T 1200 30"
          stroke={strokeColor}
          strokeWidth="2"
          strokeDasharray="1300"
          strokeDashoffset={drawn ? 0 : 1300}
          style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.22, 1, 0.36, 1)' }}
        />
        <circle
          cx="600"
          cy="30"
          r="5"
          fill="#8B5CF6"
          className="transition-opacity duration-700"
          style={{ opacity: drawn ? 0.9 : 0 }}
        />
      </svg>
    </div>
  );
};
