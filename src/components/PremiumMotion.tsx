import React, { useRef, useState } from 'react';

export type SignatureCardVariant = 'forest' | 'purple' | 'charcoal' | 'obsidian';

interface SpotlightCardProps {
  children: React.ReactNode;
  variant?: SignatureCardVariant;
  className?: string;
  accentBar?: boolean;
}

const variantSurface: Record<SignatureCardVariant, { container: string; spotlight: string; topBar: string }> = {
  forest: {
    container:
      'bg-gradient-to-br from-[#193B22]/92 via-[#13291A]/95 to-[#0E1E13]/96 border-emerald-400/20 hover:border-emerald-300/45 shadow-[0_20px_50px_-22px_rgba(16,80,36,0.55)]',
    spotlight: 'rgba(52, 211, 153, 0.14)',
    topBar: 'from-emerald-400/80 via-forest-light to-purple-electric/75',
  },
  purple: {
    container:
      'bg-gradient-to-br from-[#2B1D4A]/92 via-[#1B1932]/95 to-[#14171D]/96 border-purple-electric/35 hover:border-purple-light/65 shadow-[0_20px_50px_-20px_rgba(139,92,246,0.42)]',
    spotlight: 'rgba(167, 139, 250, 0.22)',
    topBar: 'from-purple-light via-purple-electric to-emerald-400/70',
  },
  charcoal: {
    container:
      'bg-gradient-to-br from-[#1E2520]/94 via-[#161C18]/96 to-[#111512]/98 border-sand/15 hover:border-purple-electric/50 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.65)]',
    spotlight: 'rgba(232, 220, 196, 0.13)',
    topBar: 'from-sand/75 via-purple-electric/75 to-forest-light/75',
  },
  obsidian: {
    container:
      'bg-gradient-to-br from-[#16271C]/95 via-[#141A24]/95 to-[#1D162C]/95 border-white/15 hover:border-purple-electric/55 shadow-[0_20px_50px_-20px_rgba(91,33,182,0.35)]',
    spotlight: 'rgba(139, 92, 246, 0.19)',
    topBar: 'from-purple-electric via-forest-light to-sand/80',
  },
};

/**
 * Interactive Hero-matched glassmorphic card featuring cursor-tracking radial spotlight,
 * diagonal sheen sweep on hover, and signature color surfaces.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  variant = 'forest',
  className = '',
  accentBar = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const styleCfg = variantSurface[variant];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ '--spotlight-color': styleCfg.spotlight } as React.CSSProperties}
      className={`spotlight-surface premium-sheen relative rounded-3xl border backdrop-blur-md overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 ${styleCfg.container} ${className}`}
    >
      {accentBar && (
        <div
          aria-hidden="true"
          className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${styleCfg.topBar} opacity-80 pointer-events-none z-10`}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

interface PortraitAuraFrameProps {
  webpSrc: string;
  jpgSrc: string;
  alt: string;
  aspectClass?: string;
  maxWidthClass?: string;
  gradientBottomClass?: string;
  priority?: boolean;
}

/**
 * Framed editorial portrait component with animated forest + electric purple aurora aura,
 * interactive 3D pointer tilt, and clean border brackets (zero face/body overlay).
 */
export const PortraitAuraFrame: React.FC<PortraitAuraFrameProps> = ({
  webpSrc,
  jpgSrc,
  alt,
  aspectClass = 'aspect-[4/5]',
  maxWidthClass = 'max-w-[390px]',
  gradientBottomClass = 'from-[#112416]/90 via-[#112416]/35',
  priority = false,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: Number((-py * 6).toFixed(2)), ry: Number((px * 6).toFixed(2)) });
    el.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      className={`relative w-full ${maxWidthClass} group`}
    >
      {/* Slowly Rotating Ambient Forest + Purple Aurora Glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[2.75rem] bg-[conic-gradient(from_140deg_at_50%_50%,rgba(139,92,246,0.42),rgba(31,93,43,0.5),rgba(167,139,250,0.22),rgba(45,138,68,0.45),rgba(139,92,246,0.42))] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-aurora-spin pointer-events-none"
      />

      {/* Precision Outer Corner Framing Accents (never overlapping subject) */}
      <span
        aria-hidden="true"
        className="absolute -top-2 -left-2 w-7 h-7 border-t-2 border-l-2 border-purple-light/65 rounded-tl-2xl pointer-events-none transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-2 -right-2 w-7 h-7 border-b-2 border-r-2 border-emerald-400/65 rounded-br-2xl pointer-events-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
      />

      {/* Interactive Tilting Editorial Frame */}
      <div
        style={{
          transform: `perspective(950px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          '--spotlight-color': 'rgba(167, 139, 250, 0.2)',
        } as React.CSSProperties}
        className={`spotlight-surface premium-sheen relative ${aspectClass} rounded-[2rem] overflow-hidden border border-white/25 group-hover:border-purple-light/55 bg-charcoal shadow-2xl transition-transform duration-300 ease-out animate-portrait-reveal`}
      >
        <picture className="w-full h-full block">
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={jpgSrc}
            alt={alt}
            fetchPriority={priority ? 'high' : undefined}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </picture>

        {/* Bottom Deep Atmospheric Vignette */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${gradientBottomClass} to-transparent pointer-events-none`}
        />
      </div>
    </div>
  );
};

