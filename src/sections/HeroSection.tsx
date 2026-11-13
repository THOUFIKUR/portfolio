import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Mail, Layers, Cpu, Code2, UserCheck, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/contactData';
import { PortfolioTrack } from '../components/Navbar';
import { PortraitAuraFrame } from '../components/PremiumMotion';

interface HeroSectionProps {
  activeTrack: PortfolioTrack;
  onTrackChange: (track: PortfolioTrack) => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeTrack,
  onTrackChange,
  onOpenResume,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onMq = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onMq);

    if (mq.matches) {
      return () => mq.removeEventListener('change', onMq);
    }

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrollY(Math.min(window.scrollY, 700));
        rafId = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      mq.removeEventListener('change', onMq);
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const parallax = reducedMotion ? 0 : scrollY;

  const trackConfigs: Record<
    PortfolioTrack,
    {
      badge: string;
      focusLine: string;
      headlineLead: string;
      headlineAccent: string;
      supportCopy: string;
      ctaLabel: string;
      ctaHref: string;
    }
  > = {
    creative: {
      badge: 'Creative Track Active',
      focusLine: 'Graphic Designer · EEE Undergraduate · Technology Enthusiast',
      headlineLead: 'Creative mind.',
      headlineAccent: 'Engineering mindset.',
      supportCopy:
        'Crafting structured visual systems, event campaigns, editorial posters, and multimedia identities backed by an engineering foundation.',
      ctaLabel: 'Explore Creative Work',
      ctaHref: '#selected-work',
    },
    engineering: {
      badge: 'Engineering Track Active',
      focusLine: 'B.E. Electrical & Electronics Engineering · SVCE',
      headlineLead: 'Engineering precision.',
      headlineAccent: 'Creative systems.',
      supportCopy:
        'Third-year EEE student with industrial field exposure in heavy machinery controls, power substations, protection relays, and embedded hardware.',
      ctaLabel: 'Explore Engineering Systems',
      ctaHref: '#engineering',
    },
    technology: {
      badge: 'Technology Track Active',
      focusLine: 'Software · Computer Vision · Hardware Prototypes',
      headlineLead: 'Practical prototypes.',
      headlineAccent: 'Applied computing.',
      supportCopy:
        'Building hackathon-tested IoT computer-vision prototypes, adaptive quiz APIs, and AI-assisted web tools with transparent implementation.',
      ctaLabel: 'Explore Technology Projects',
      ctaHref: '#technology',
    },
  };

  const cfg = trackConfigs[activeTrack];

  // Sparse decorative particle positions (hidden from screen readers)
  const particles = [
    { top: '16%', left: '12%', size: 5, delay: '0s' },
    { top: '28%', left: '46%', size: 6, delay: '1.3s' },
    { top: '68%', left: '14%', size: 4, delay: '2.1s' },
    { top: '22%', right: '14%', size: 6, delay: '0.8s' },
    { top: '52%', right: '8%', size: 4, delay: '2.7s' },
    { top: '76%', right: '38%', size: 5, delay: '1.7s' },
  ];

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-0 overflow-hidden bg-hero-atmosphere text-ivory">
      {/* Dot Matrix & Atmospheric Texture */}
      <div aria-hidden="true" className="absolute inset-0 dot-matrix-overlay pointer-events-none" />

      {/* Controlled Ambient Electric Purple + Forest Green Radial Glows */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-forest-light/35 blur-3xl pointer-events-none animate-orb-drift"
        style={{ transform: `translate3d(0, ${parallax * 0.12}px, 0)` }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[18%] right-[-6rem] w-[32rem] h-[32rem] rounded-full bg-purple-electric/25 blur-3xl pointer-events-none animate-orb-drift-reverse"
        style={{ transform: `translate3d(0, ${-parallax * 0.1}px, 0)` }}
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute bottom-[22%] left-[44%] w-72 h-72 rounded-full bg-purple-electric/15 blur-3xl pointer-events-none"
      />

      {/* Sparse Luminous Particles */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((pt, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-purple-light/60 animate-particle"
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

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Staggered Editorial Copy */}
          <div className="lg:col-span-6 min-w-0 space-y-6">
            {/* Active Track Indicator */}
            <div
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/10 border border-purple-electric/45 backdrop-blur-md text-xs sm:text-sm font-display font-semibold text-sand-light shadow-purple-glow animate-hero-up"
              style={{ animationDelay: '0.05s' }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-electric" />
              <span>{cfg.badge}</span>
            </div>

            {/* Identity Role Subtitle */}
            <p
              className="text-sm sm:text-base font-editorial italic font-medium text-purple-light tracking-wide animate-hero-up"
              style={{ animationDelay: '0.12s' }}
            >
              {cfg.focusLine}
            </p>

            {/* Confident Cream / Ivory Display Headline */}
            <h1
              className="hero-headline font-display font-extrabold text-ivory tracking-tight animate-hero-up"
              style={{ animationDelay: '0.18s' }}
            >
              <span className="block">{cfg.headlineLead}</span>
              <span className="block text-sand">{cfg.headlineAccent}</span>
            </h1>

            {/* Restrained Quote Line */}
            <blockquote
              className="text-lg sm:text-xl font-editorial italic text-sand-light/95 leading-relaxed max-w-xl border-l-2 border-purple-electric pl-4 animate-hero-up"
              style={{ animationDelay: '0.24s' }}
            >
              "{PERSONAL_INFO.supportingLine}"
            </blockquote>

            <p
              className="text-base sm:text-[17px] font-editorial text-sand-light/85 max-w-lg leading-relaxed animate-hero-up"
              style={{ animationDelay: '0.3s' }}
            >
              {cfg.supportCopy}
            </p>

            {/* Structured Button Hierarchy: Forest Filled / Outlined / Tertiary Purple */}
            <div
              className="pt-2 flex flex-wrap items-center gap-3 animate-hero-up"
              style={{ animationDelay: '0.36s' }}
            >
              <a
                href={cfg.ctaHref}
                className="group inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-forest hover:bg-forest-light text-ivory font-display font-bold text-sm border border-white/15 shadow-purple-glow hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <span>{cfg.ctaLabel}</span>
                <ArrowDown className="w-4 h-4 text-purple-light group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full border border-sand/35 bg-white/5 hover:bg-white/15 text-ivory font-display font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <FileText className="w-4 h-4 text-sand" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full bg-purple-electric/20 hover:bg-purple-electric/35 border border-purple-electric/45 text-sand-light font-display font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <Mail className="w-4 h-4 text-purple-light" />
                <span>Contact</span>
              </a>
            </div>

            {/* Interactive Track Switcher */}
            <div
              className="pt-5 border-t border-white/15 flex flex-wrap items-center gap-2 text-xs sm:text-sm animate-hero-up"
              style={{ animationDelay: '0.42s' }}
            >
              <span className="text-sand/75 font-editorial italic mr-1">Track:</span>
              {(
                [
                  { id: 'creative', label: 'Creative Design' },
                  { id: 'engineering', label: 'Electrical Engineering' },
                  { id: 'technology', label: 'Technology & AI' },
                ] as { id: PortfolioTrack; label: string }[]
              ).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onTrackChange(t.id)}
                  className={`px-4 py-1.5 rounded-full border font-display text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric ${
                    activeTrack === t.id
                      ? 'bg-purple-electric text-white border-purple-electric shadow-purple-glow'
                      : 'bg-white/5 text-sand-light/85 border-white/15 hover:bg-white/15'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Framed Original Photograph + Animated Outer Perimeter Floating Skill Chips (Zero Face Overlap) */}
          <div
            className="lg:col-span-6 min-w-0 flex flex-col items-center lg:items-end"
            style={{ transform: `translate3d(0, ${-parallax * 0.05}px, 0)` }}
          >
            <div className="relative w-full max-w-[390px] flex justify-center">
              <PortraitAuraFrame
                webpSrc="/images/thoufikur-hero.webp"
                jpgSrc="/images/thoufikur-hero.jpg"
                alt="Thoufikur Rahaman Y — Multidisciplinary Designer and EEE Undergraduate"
                aspectClass="aspect-[4/5]"
                maxWidthClass="max-w-[390px]"
                gradientBottomClass="from-[#112416]/90 via-[#112416]/35"
                priority={true}
              />

              {/* Floating Skill Pill 1: Outer Top-Left Sky/Tree Zone (Never touches face/suit) */}
              <div
                className="hidden sm:flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-[#102015]/95 backdrop-blur-md border border-purple-electric/55 shadow-purple-glow absolute -left-8 top-8 z-20 animate-subtle-float pointer-events-none"
                style={{ animationDuration: '5.5s' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-purple-electric shadow-[0_0_8px_#8B5CF6] flex-shrink-0" />
                <div className="leading-tight">
                  <span className="font-display text-xs sm:text-[13px] font-bold text-ivory block">
                    Graphic Design
                  </span>
                  <span className="font-editorial text-xs text-sand/90">
                    Visual &amp; Brand Design
                  </span>
                </div>
              </div>

              {/* Floating Skill Pill 2: Outer Lower-Left Foliage Margin */}
              <div
                className="hidden sm:flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-[#102015]/95 backdrop-blur-md border border-emerald-400/50 shadow-xl absolute -left-9 bottom-20 z-20 animate-subtle-float pointer-events-none"
                style={{ animationDuration: '6.4s', animationDelay: '0.8s' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399] flex-shrink-0" />
                <div className="leading-tight">
                  <span className="font-display text-xs sm:text-[13px] font-bold text-ivory block">
                    Electrical Engineering
                  </span>
                  <span className="font-editorial text-xs text-sand/90">
                    Power &amp; Core Systems
                  </span>
                </div>
              </div>

              {/* Floating Skill Pill 3: Bottom-Right Lower Margin (Responsive safe inside 390px on mobile) */}
              <div
                className="flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-[#1C1433]/95 backdrop-blur-md border border-purple-light/60 shadow-purple-glow absolute right-3 bottom-4 sm:-right-6 sm:bottom-8 z-20 animate-subtle-float pointer-events-none"
                style={{ animationDuration: '5.8s', animationDelay: '1.4s' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-purple-light shadow-[0_0_8px_#A78BFA] flex-shrink-0" />
                <div className="leading-tight">
                  <span className="font-display text-xs sm:text-[13px] font-bold text-ivory block">
                    Software &amp; AI Tech
                  </span>
                  <span className="font-editorial text-xs text-sand-light">
                    AI, Vision &amp; Web
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Formwood-Inspired Floating Information Cards Positioned Cleanly BELOW Portrait (Zero Face/Body Overlap) */}
        <div className="mt-7 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Creative Direction */}
          <button
            type="button"
            onClick={() => onTrackChange('creative')}
            className={`spotlight-surface premium-sheen text-left rounded-2xl p-5 border transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric animate-subtle-float ${
              activeTrack === 'creative'
                ? 'bg-forest/85 border-purple-electric/75 shadow-purple-glow'
                : 'bg-charcoal/85 border-white/15 hover:border-purple-electric/45 shadow-lg'
            }`}
            style={{ animationDuration: '7s' }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="p-2 rounded-xl bg-white/10 text-sand">
                <Layers className="w-4 h-4" />
              </span>
              <ArrowUpRight className="w-4 h-4 text-purple-light" />
            </div>
            <h2 className="font-display text-base font-bold text-ivory">
              Creative Direction
            </h2>
            <p className="font-editorial text-sm text-sand-light/85 mt-1">
              Graphic Design & Visual Communication
            </p>
          </button>

          {/* Card 2: Engineering */}
          <button
            type="button"
            onClick={() => onTrackChange('engineering')}
            className={`spotlight-surface premium-sheen text-left rounded-2xl p-5 border transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric animate-subtle-float ${
              activeTrack === 'engineering'
                ? 'bg-forest/85 border-purple-electric/75 shadow-purple-glow'
                : 'bg-charcoal/85 border-white/15 hover:border-purple-electric/45 shadow-lg'
            }`}
            style={{ animationDuration: '8s', animationDelay: '0.6s' }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="p-2 rounded-xl bg-white/10 text-purple-light">
                <Cpu className="w-4 h-4" />
              </span>
              <ArrowUpRight className="w-4 h-4 text-purple-light" />
            </div>
            <h2 className="font-display text-base font-bold text-ivory">
              Engineering
            </h2>
            <p className="font-editorial text-sm text-sand-light/85 mt-1">
              Electrical & Electronics · Industrial Systems
            </p>
          </button>

          {/* Card 3: Technology (Purple Signature Panel) */}
          <button
            type="button"
            onClick={() => onTrackChange('technology')}
            className={`spotlight-surface premium-sheen text-left rounded-2xl p-5 border transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white animate-subtle-float ${
              activeTrack === 'technology'
                ? 'bg-purple-electric text-white border-white/40 shadow-purple-glow'
                : 'bg-gradient-to-br from-purple-electric/85 to-purple-dark/90 text-white border-purple-light/40 hover:border-white/50 shadow-purple-glow'
            }`}
            style={{ animationDuration: '7.5s', animationDelay: '1.1s' }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="p-2 rounded-xl bg-white/20 text-white">
                <Code2 className="w-4 h-4" />
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </div>
            <h2 className="font-display text-base font-bold text-white">
              Technology
            </h2>
            <p className="font-editorial text-sm text-white/90 mt-1">
              AI · Software Projects · Computer Vision
            </p>
          </button>

          {/* Card 4: Identity */}
          <a
            href="#about"
            className="spotlight-surface premium-sheen text-left rounded-2xl p-5 border border-sand/30 bg-ivory/95 text-charcoal hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric animate-subtle-float block"
            style={{ animationDuration: '8.5s', animationDelay: '1.6s' }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="p-2 rounded-xl bg-forest/10 text-forest">
                <UserCheck className="w-4 h-4" />
              </span>
              <span className="text-xs font-display font-bold px-2.5 py-0.5 rounded-full bg-forest/10 text-forest">
                SVCE
              </span>
            </div>
            <h2 className="font-display text-base font-bold text-charcoal">
              THOUFIKUR RAHAMAN Y
            </h2>
            <p className="font-editorial text-sm text-charcoal-muted mt-1">
              B.E. EEE · 6th Semester · Sriperumbudur
            </p>
          </a>
        </div>
      </div>

      {/* Seamless Marquee Ribbon Bridging Hero to Selected Work */}
      <div className="w-full max-w-full min-w-0 py-3 bg-[#102014] text-sand-light overflow-hidden border-t border-white/10 relative z-10">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Graphic Design</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-electric" />
              <span>Electrical & Electronics</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sand" />
              <span>Multimedia Direction</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-electric" />
              <span>Computer Vision & IoT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sand" />
              <span>Visual Communication</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-electric" />
              <span>Industrial Automation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sand" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
