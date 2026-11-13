import React from 'react';

export interface SectionAtmosphereProps {
  /**
   * Layout variant of ambient glow orbs across sections:
   * - 'dual-glow' (default): green top-left, purple bottom-right
   * - 'reverse-glow': purple top-right, green bottom-left
   * - 'left-glow': green top-left, purple mid-left
   * - 'right-glow': purple top-right, green mid-right
   * - 'center-glow': soft centered atmosphere
   */
  variant?: 'dual-glow' | 'reverse-glow' | 'left-glow' | 'right-glow' | 'center-glow';
  /**
   * Floating luminous particle density:
   * - 'default': 6 particles
   * - 'dense': 8 particles (for taller sections)
   * - 'subtle': 4 particles (for shorter sections/footer)
   */
  density?: 'default' | 'dense' | 'subtle';
  /**
   * Include decorative geometric accent ring
   */
  accentRing?: boolean;
}

interface ParticleConfig {
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: string;
  delay: string;
  hideOnMobile?: boolean;
}

export const SectionAtmosphere: React.FC<SectionAtmosphereProps> = ({
  variant = 'dual-glow',
  density = 'default',
  accentRing = false,
}) => {
  const particlesByDensity: Record<'subtle' | 'default' | 'dense', ParticleConfig[]> = {
    subtle: [
      { top: '18%', left: '8%', size: 5, color: 'bg-purple-light/65', delay: '0.2s' },
      { top: '42%', right: '10%', size: 6, color: 'bg-sand/55', delay: '1.6s' },
      { top: '74%', left: '16%', size: 4, color: 'bg-emerald-400/50', delay: '2.8s' },
      { top: '60%', right: '22%', size: 5, color: 'bg-purple-light/50', delay: '0.9s', hideOnMobile: true },
    ],
    default: [
      { top: '12%', left: '7%', size: 5, color: 'bg-purple-light/65', delay: '0.3s' },
      { top: '24%', right: '9%', size: 6, color: 'bg-sand/55', delay: '1.7s' },
      { top: '46%', left: '5%', size: 4, color: 'bg-emerald-400/55', delay: '2.5s' },
      { top: '64%', right: '12%', size: 5, color: 'bg-purple-light/55', delay: '1.1s' },
      { top: '82%', left: '15%', size: 4, color: 'bg-sand-light/50', delay: '3.4s' },
      { top: '38%', left: '48%', size: 5, color: 'bg-purple-electric/45', delay: '2.1s', hideOnMobile: true },
    ],
    dense: [
      { top: '10%', left: '6%', size: 5, color: 'bg-purple-light/65', delay: '0.2s' },
      { top: '22%', right: '8%', size: 6, color: 'bg-sand/55', delay: '1.5s' },
      { top: '36%', left: '12%', size: 4, color: 'bg-emerald-400/55', delay: '2.7s' },
      { top: '50%', right: '14%', size: 5, color: 'bg-purple-electric/55', delay: '0.8s' },
      { top: '68%', left: '8%', size: 5, color: 'bg-sand/50', delay: '3.2s' },
      { top: '82%', right: '10%', size: 4, color: 'bg-purple-light/55', delay: '1.9s' },
      { top: '28%', left: '52%', size: 4, color: 'bg-sand-light/45', delay: '2.4s', hideOnMobile: true },
      { top: '76%', left: '44%', size: 5, color: 'bg-emerald-400/45', delay: '1.3s', hideOnMobile: true },
    ],
  };

  const activeParticles = particlesByDensity[density];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Crisp Dot Matrix Texture (Matches First Page Hero) */}
      <div className="absolute inset-0 dot-matrix-overlay opacity-90" />

      {/* Dynamic Ambient Glowing Orbs */}
      {variant === 'dual-glow' && (
        <>
          <div className="absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-forest-light/25 blur-3xl animate-orb-drift" />
          <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] rounded-full bg-purple-electric/20 blur-3xl animate-orb-drift-reverse" />
          <div className="hidden lg:block absolute bottom-12 left-1/3 w-64 h-64 rounded-full bg-forest-light/15 blur-3xl" />
        </>
      )}

      {variant === 'reverse-glow' && (
        <>
          <div className="absolute -top-20 -right-20 w-[30rem] h-[30rem] rounded-full bg-purple-electric/20 blur-3xl animate-orb-drift-reverse" />
          <div className="absolute top-1/2 -left-24 w-[32rem] h-[32rem] rounded-full bg-forest-light/25 blur-3xl animate-orb-drift" />
          <div className="hidden lg:block absolute bottom-8 right-1/4 w-72 h-72 rounded-full bg-purple-electric/15 blur-3xl" />
        </>
      )}

      {variant === 'left-glow' && (
        <>
          <div className="absolute -top-20 -left-20 w-[32rem] h-[32rem] rounded-full bg-forest-light/30 blur-3xl animate-orb-drift" />
          <div className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] rounded-full bg-purple-electric/20 blur-3xl animate-orb-drift-reverse" />
        </>
      )}

      {variant === 'right-glow' && (
        <>
          <div className="absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-purple-electric/25 blur-3xl animate-orb-drift-reverse" />
          <div className="absolute bottom-12 right-1/4 w-[28rem] h-[28rem] rounded-full bg-forest-light/20 blur-3xl animate-orb-drift" />
        </>
      )}

      {variant === 'center-glow' && (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] rounded-full bg-forest-light/20 blur-3xl animate-orb-drift" />
          <div className="absolute bottom-10 right-1/4 w-[26rem] h-[26rem] rounded-full bg-purple-electric/15 blur-3xl animate-orb-drift-reverse" />
        </>
      )}

      {/* Decorative Geometric Accent Rings */}
      {accentRing && (
        <>
          <div
            className="hidden lg:block absolute top-[22%] right-[6%] w-28 h-28 rounded-full border border-purple-electric/25 animate-subtle-float"
            style={{ animationDelay: '0.8s' }}
          />
          <div
            className="hidden md:block absolute bottom-[18%] left-[4%] w-32 h-32 rounded-full border border-forest-light/30 animate-subtle-float"
            style={{ animationDelay: '2.2s' }}
          />
        </>
      )}

      {/* Floating Luminous Particles (Exact match to First Page animate-particle) */}
      {activeParticles.map((pt, idx) => (
        <span
          key={idx}
          className={`${pt.hideOnMobile ? 'hidden md:block' : ''} absolute rounded-full ${pt.color} animate-particle`}
          style={{
            top: pt.top,
            left: pt.left,
            right: pt.right,
            width: `${pt.size}px`,
            height: `${pt.size}px`,
            animationDelay: pt.delay,
          }}
        />
      ))}
    </div>
  );
};

