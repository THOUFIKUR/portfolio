import React, { useEffect, useRef, useState } from 'react';

type RevealDirection = 'up' | 'left' | 'right' | 'scale';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: RevealDirection;
}

const hiddenStateClasses: Record<RevealDirection, string> = {
  up: 'opacity-0 translate-y-7 blur-[2px]',
  left: 'opacity-0 -translate-x-7 blur-[2px]',
  right: 'opacity-0 translate-x-7 blur-[2px]',
  scale: 'opacity-0 scale-[0.96] translate-y-4 blur-[2px]',
};

/**
 * Kinetic viewport-reveal wrapper featuring exponential deceleration, directional entry,
 * and automatic `prefers-reduced-motion: reduce` compliance.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-0' : hiddenStateClasses[direction]
      } ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
};
