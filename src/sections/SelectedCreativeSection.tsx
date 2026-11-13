import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Eye, Layers, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreativeProject } from '../data/projectsManifest';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionAtmosphere } from '../components/SectionAtmosphere';

gsap.registerPlugin(ScrollTrigger);

interface SelectedCreativeSectionProps {
  featuredProjects: CreativeProject[];
  onOpenLightbox: (project: CreativeProject) => void;
}

export const SelectedCreativeSection: React.FC<SelectedCreativeSectionProps> = ({
  featuredProjects,
  onOpenLightbox,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  });

  // Track window resize for responsive 3D perspective geometry
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Arrange the 6 featured projects so Chief Design Officer Profile is front-center,
  // with E-Cell Inauguration Backdrop on the left and Gandhi Jayanti on the right,
  // exactly matching the visual reference design.
  const orderedProjects = useMemo(() => {
    if (!featuredProjects || featuredProjects.length === 0) return [];
    const p53 = featuredProjects.find((p) => p.id === 'creative-p53');
    const p60 = featuredProjects.find((p) => p.id === 'creative-p60');
    const p33 = featuredProjects.find((p) => p.id === 'creative-p33');
    const p64 = featuredProjects.find((p) => p.id === 'creative-p64');
    const p49 = featuredProjects.find((p) => p.id === 'creative-p49');
    const p40 = featuredProjects.find((p) => p.id === 'creative-p40');

    const ordered = [p53, p60, p33, p64, p49, p40].filter(Boolean) as CreativeProject[];
    if (ordered.length === featuredProjects.length) return ordered;
    return featuredProjects;
  }, [featuredProjects]);

  const total = orderedProjects.length;

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Scroll-driven rotation (forward on scroll down, reverse on scroll up)
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl || total <= 1) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 35%',
        end: 'bottom 65%',
        scrub: 0.6,
        onUpdate: (self) => {
          const idx = Math.min(total - 1, Math.max(0, Math.round(self.progress * (total - 1))));
          setActiveIndex(idx);
        },
      });
    }, sectionEl);

    return () => ctx.revert();
  }, [total]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        prevCard();
      } else {
        nextCard();
      }
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevCard();
    } else if (e.key === 'ArrowRight') {
      nextCard();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-[#112015]/85 text-ivory border-t border-white/10 relative overflow-hidden z-10"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Selected Creative Work 3D Carousel"
    >
      <SectionAtmosphere variant="dual-glow" accentRing={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
              <Layers className="w-3.5 h-3.5 text-purple-light" />
              <span>Featured Selection</span>
            </div>
            <h2 className="section-heading font-display font-bold text-ivory">
              Selected Creative Work
            </h2>
            <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
              Signature campus identities, technical campaign posters, and original visual productions.
            </p>
          </div>

          <a
            href="#creative-archive"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/25 bg-white/5 text-xs font-display font-bold uppercase tracking-wider text-ivory hover:bg-white/15 hover:border-purple-electric/60 transition-all group w-max focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
          >
            <span>Explore Full Archive</span>
            <ArrowUpRight className="w-4 h-4 text-purple-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </ScrollReveal>

        {/* 3D Carousel Stage */}
        <div
          ref={stageRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full py-2 sm:py-6 flex flex-col items-center select-none"
          style={{ perspective: isMobile ? '1000px' : '1500px' }}
        >
          {/* Circular 3D Perspective Card Stage */}
          <div
            className="relative w-full max-w-5xl h-[490px] sm:h-[520px] md:h-[540px] flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {orderedProjects.map((project, idx) => {
              // Calculate shortest circular modular offset
              let offset = (idx - activeIndex) % total;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;

              // Compute 3D transforms matching the attached visual reference
              let transformStyle = '';
              let opacity = 0;
              let zIndex = 10;
              let filter = 'brightness(1)';
              let pointerEvents: 'auto' | 'none' = 'auto';

              if (isMobile) {
                if (offset === 0) {
                  transformStyle = 'translate3d(0, 0, 70px) rotateY(0deg) scale(1)';
                  opacity = 1;
                  zIndex = 40;
                } else if (offset === -1) {
                  transformStyle = 'translate3d(-190px, 0, -20px) rotateY(28deg) scale(0.82)';
                  opacity = 0.65;
                  zIndex = 25;
                  filter = 'brightness(0.7)';
                } else if (offset === 1) {
                  transformStyle = 'translate3d(190px, 0, -20px) rotateY(-28deg) scale(0.82)';
                  opacity = 0.65;
                  zIndex = 25;
                  filter = 'brightness(0.7)';
                } else {
                  transformStyle = `translate3d(${offset < 0 ? -300 : 300}px, 0, -120px) rotateY(${offset < 0 ? 50 : -50}deg) scale(0.65)`;
                  opacity = 0;
                  zIndex = 10;
                  pointerEvents = 'none';
                }
              } else {
                // Desktop 3D Arc
                if (offset === 0) {
                  transformStyle = 'translate3d(0, 0, 140px) rotateY(0deg) scale(1.04)';
                  opacity = 1;
                  zIndex = 50;
                  filter = 'brightness(1)';
                } else if (offset === -1) {
                  transformStyle = 'translate3d(-330px, 0, 20px) rotateY(32deg) scale(0.88)';
                  opacity = 0.85;
                  zIndex = 35;
                  filter = 'brightness(0.72)';
                } else if (offset === 1) {
                  transformStyle = 'translate3d(330px, 0, 20px) rotateY(-32deg) scale(0.88)';
                  opacity = 0.85;
                  zIndex = 35;
                  filter = 'brightness(0.72)';
                } else if (offset === -2) {
                  transformStyle = 'translate3d(-580px, 0, -120px) rotateY(56deg) scale(0.72)';
                  opacity = 0.42;
                  zIndex = 20;
                  filter = 'brightness(0.5)';
                } else if (offset === 2) {
                  transformStyle = 'translate3d(580px, 0, -120px) rotateY(-56deg) scale(0.72)';
                  opacity = 0.42;
                  zIndex = 20;
                  filter = 'brightness(0.5)';
                } else {
                  transformStyle = 'translate3d(0, 0, -300px) rotateY(180deg) scale(0.5)';
                  opacity = 0;
                  zIndex = 10;
                  pointerEvents = 'none';
                }
              }

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (isCenter) {
                      onOpenLightbox(project);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                  className={`absolute w-[295px] sm:w-[330px] md:w-[360px] transition-all duration-700 ease-out cursor-pointer ${
                    isCenter ? 'ring-1 ring-purple-electric/70 shadow-[0_0_50px_rgba(139,92,246,0.42)]' : ''
                  }`}
                  style={{
                    transform: transformStyle,
                    opacity,
                    zIndex,
                    filter,
                    pointerEvents,
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  aria-label={`${project.title} - ${isCenter ? 'Current artwork' : 'Click to bring to center'}`}
                >
                  <article className="rounded-3xl bg-[#121E16]/95 border border-white/15 p-4 sm:p-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl h-[445px] sm:h-[470px] md:h-[490px]">
                    {/* Header: Institutional branding line */}
                    <div className="flex items-center justify-between text-[11px] font-display font-semibold tracking-wider text-sand/75 pb-2 border-b border-white/10">
                      <span className="uppercase text-ivory">SVCE</span>
                      <span className="uppercase text-purple-light">{project.client || 'Portfolio'}</span>
                    </div>

                    {/* Contained Artwork Frame */}
                    <div className="relative w-full h-[175px] sm:h-[190px] md:h-[205px] rounded-2xl overflow-hidden bg-[#0A120D] border border-white/10 flex items-center justify-center p-2 my-2 group/thumb">
                      <picture className="w-full h-full flex items-center justify-center">
                        <source srcSet={project.image} type="image/webp" />
                        <img
                          src={project.imageJpg}
                          alt={project.title}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain rounded-xl group-hover/thumb:scale-[1.03] transition-transform duration-300"
                        />
                      </picture>

                      {isCenter && (
                        <div className="absolute inset-0 bg-[#0A120D]/50 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-ivory text-charcoal text-xs font-display font-bold shadow-xl">
                            <Eye className="w-3.5 h-3.5 text-purple-electric" />
                            <span>Inspect Artwork</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meta Row: Category Badge + Year */}
                    <div className="flex items-center justify-between gap-2 text-xs font-editorial mb-1.5">
                      <span className="px-3 py-0.5 rounded-full font-display font-semibold text-[11px] uppercase tracking-wider bg-purple-electric/25 text-purple-light border border-purple-electric/40 backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="font-mono text-sand/75 text-xs">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-ivory leading-snug line-clamp-2 my-1">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-editorial text-xs sm:text-[13px] text-sand-light/85 leading-relaxed line-clamp-2 mb-2">
                      {project.description}
                    </p>

                    {/* Card Footer: Role & View Details */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-editorial">
                      <span className="text-sand-light/75 inline-flex items-center space-x-1.5 truncate mr-2">
                        <User className="w-3.5 h-3.5 text-purple-light flex-shrink-0" />
                        <span className="truncate">
                          Role: <strong className="text-ivory font-medium">{project.role}</strong>
                        </span>
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenLightbox(project);
                        }}
                        className="inline-flex items-center space-x-1 text-xs font-display font-bold text-purple-light hover:text-white transition-colors flex-shrink-0 group/btn"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Glowing Floor Aura Ring underneath cards */}
          <div
            className="w-[90%] max-w-4xl h-24 rounded-full border border-purple-electric/45 shadow-[0_0_70px_rgba(139,92,246,0.4),inset_0_0_35px_rgba(139,92,246,0.25)] pointer-events-none mt-[-20px] sm:mt-[-25px]"
            style={{
              transform: 'rotateX(75deg)',
              background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.22) 0%, rgba(31,93,43,0.14) 50%, transparent 75%)',
            }}
            aria-hidden="true"
          />

          {/* Navigation Controls: Prev / Pagination Dots / Next */}
          <div className="flex items-center justify-center space-x-4 mt-8 z-30">
            <button
              type="button"
              onClick={prevCard}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-purple-electric/25 hover:border-purple-electric text-ivory flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric cursor-pointer shadow-lg active:scale-95"
              aria-label="Previous creative artwork"
            >
              <ChevronLeft className="w-5 h-5 text-purple-light" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
              {orderedProjects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? 'w-6 h-2 bg-purple-electric shadow-[0_0_12px_#8b5cf6]'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextCard}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-purple-electric/25 hover:border-purple-electric text-ivory flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric cursor-pointer shadow-lg active:scale-95"
              aria-label="Next creative artwork"
            >
              <ChevronRight className="w-5 h-5 text-purple-light" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
