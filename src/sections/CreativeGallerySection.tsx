import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Eye, ArrowUpRight, Folder, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreativeProject } from '../data/projectsManifest';
import { SectionAtmosphere } from '../components/SectionAtmosphere';
import { trackArtworkCategoryFiltered } from '../lib/posthog';

gsap.registerPlugin(ScrollTrigger);

interface CreativeGallerySectionProps {
  projects: CreativeProject[];
  onOpenLightbox: (project: CreativeProject) => void;
}

// Module neon accent variants matching website palette:
// Electric Purple (#8B5CF6), Emerald Green (#22C55E), Cyan/Teal (#06B6D4), Sand Gold (#E8DCC4)
const MODULE_THEMES = [
  {
    border: 'border-purple-electric/70 hover:border-purple-light',
    glow: 'shadow-[0_0_30px_rgba(139,92,246,0.32)]',
    badge: 'bg-purple-electric/25 text-purple-light border-purple-electric/40',
    pin: 'bg-purple-electric',
    pinGlow: 'shadow-[0_0_8px_#8b5cf6]',
  },
  {
    border: 'border-emerald-400/70 hover:border-emerald-300',
    glow: 'shadow-[0_0_30px_rgba(52,211,153,0.32)]',
    badge: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/40',
    pin: 'bg-emerald-400',
    pinGlow: 'shadow-[0_0_8px_#34d399]',
  },
  {
    border: 'border-cyan-400/70 hover:border-cyan-300',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.32)]',
    badge: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/40',
    pin: 'bg-cyan-400',
    pinGlow: 'shadow-[0_0_8px_#22d3ee]',
  },
  {
    border: 'border-sand/70 hover:border-sand-light',
    glow: 'shadow-[0_0_30px_rgba(232,220,196,0.28)]',
    badge: 'bg-sand/20 text-sand border-sand/40',
    pin: 'bg-sand',
    pinGlow: 'shadow-[0_0_8px_#e8dcc4]',
  },
];

export const CreativeGallerySection: React.FC<CreativeGallerySectionProps> = ({
  projects,
  onOpenLightbox,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const circuitSvgRef = useRef<SVGSVGElement>(null);
  const cardGridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [circuitProgress, setCircuitProgress] = useState(0);

  // Preserve existing categories and exact project counts
  const categories = useMemo(() => {
    const cats = ['All'];
    projects.forEach((p) => {
      if (!cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  // Scroll-driven circuit trace drawing & signal propagation with full scroll reversal
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCircuitProgress(1);
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 65%',
        end: 'top 10%',
        scrub: 0.8,
        onUpdate: (self) => {
          setCircuitProgress(self.progress);
        },
      });
    }, sectionEl);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="creative-archive"
      className="py-20 sm:py-24 bg-[#0D1911] text-ivory border-t border-white/10 relative overflow-hidden z-10"
      aria-label="Complete Graphic Design Archive — Circuit Assembly"
    >
      <SectionAtmosphere variant="dual-glow" density="dense" accentRing={true} />

      {/* PCB Trace Overlay Layer across the Section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80"
      >
        <svg
          ref={circuitSvgRef}
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Glow filters for emerald & electric-purple signal buses */}
            <filter id="pcb-glow-purple" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="pcb-glow-green" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background PCB Ground Plane Grids */}
          <pattern id="pcb-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="rgba(34, 197, 94, 0.05)"
              strokeWidth="0.8"
            />
            <circle cx="24" cy="24" r="1.2" fill="rgba(232, 220, 196, 0.08)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pcb-grid)" />

          {/* Left PCB Power & Signal Bus Traces */}
          <path
            d="M 20 0 V 160 L 60 200 V 420 L 100 460 V 900 L 40 960 V 1800"
            fill="none"
            stroke="rgba(34, 197, 94, 0.35)"
            strokeWidth="2"
            strokeDasharray="1800"
            strokeDashoffset={1800 * (1 - circuitProgress)}
          />
          <path
            d="M 36 0 V 140 L 76 180 V 400 L 116 440 V 880 L 56 940 V 1800"
            fill="none"
            stroke="rgba(139, 92, 246, 0.45)"
            strokeWidth="2.5"
            filter="url(#pcb-glow-purple)"
            strokeDasharray="1800"
            strokeDashoffset={1800 * (1 - circuitProgress)}
          />

          {/* Right PCB Power & Signal Bus Traces */}
          <path
            d="M 98% 0 V 220 L calc(98% - 50px) 270 V 620 L calc(98% - 90px) 660 V 1200 L 98% 1260 V 1800"
            fill="none"
            stroke="rgba(34, 197, 94, 0.4)"
            strokeWidth="2"
            strokeDasharray="1800"
            strokeDashoffset={1800 * (1 - circuitProgress)}
          />
          <path
            d="M calc(98% - 16px) 0 V 200 L calc(98% - 66px) 250 V 600 L calc(98% - 106px) 640 V 1180 L calc(98% - 16px) 1240 V 1800"
            fill="none"
            stroke="rgba(139, 92, 246, 0.5)"
            strokeWidth="2.5"
            filter="url(#pcb-glow-purple)"
            strokeDasharray="1800"
            strokeDashoffset={1800 * (1 - circuitProgress)}
          />

          {/* Horizontal Interconnect Tracks across rows */}
          <path
            d="M 80 430 H calc(50% - 120px) L calc(50% - 90px) 460 H calc(50% + 90px) L calc(50% + 120px) 430 H calc(100% - 80px)"
            fill="none"
            stroke="rgba(34, 197, 94, 0.38)"
            strokeWidth="1.8"
            strokeDasharray="1200"
            strokeDashoffset={1200 * (1 - circuitProgress)}
          />
        </svg>

        {/* Decorative SMD Resistors on Left & Right PCB Borders (Matching Reference Image) */}
        <div className="hidden lg:block absolute top-[280px] left-6 w-5 h-11 rounded-sm bg-[#16291C] border border-white/20 shadow-md">
          <div className="w-full h-1.5 bg-gray-400" />
          <div className="w-full h-1 bg-[#8B5CF6] my-0.5" />
          <div className="w-full h-1 bg-[#22C55E] my-0.5" />
          <div className="w-full h-1 bg-[#E8DCC4] my-0.5" />
          <div className="w-full h-1.5 bg-gray-400 absolute bottom-0" />
        </div>
        <div className="hidden lg:block absolute top-[620px] left-6 w-5 h-11 rounded-sm bg-[#16291C] border border-white/20 shadow-md">
          <div className="w-full h-1.5 bg-gray-400" />
          <div className="w-full h-1 bg-amber-500 my-0.5" />
          <div className="w-full h-1 bg-[#8B5CF6] my-0.5" />
          <div className="w-full h-1.5 bg-gray-400 absolute bottom-0" />
        </div>
        <div className="hidden lg:block absolute top-[360px] right-6 w-5 h-11 rounded-sm bg-[#16291C] border border-white/20 shadow-md">
          <div className="w-full h-1.5 bg-gray-400" />
          <div className="w-full h-1 bg-[#22C55E] my-0.5" />
          <div className="w-full h-1 bg-[#8B5CF6] my-0.5" />
          <div className="w-full h-1.5 bg-gray-400 absolute bottom-0" />
        </div>
        <div className="hidden lg:block absolute top-[780px] right-6 w-5 h-11 rounded-sm bg-[#16291C] border border-white/20 shadow-md">
          <div className="w-full h-1.5 bg-gray-400" />
          <div className="w-full h-1 bg-cyan-400 my-0.5" />
          <div className="w-full h-1 bg-[#8B5CF6] my-0.5" />
          <div className="w-full h-1.5 bg-gray-400 absolute bottom-0" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-black/40 px-4 py-1.5 rounded-full border border-purple-electric/40 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.25)]">
            <Folder className="w-3.5 h-3.5 text-purple-light" />
            <span>Graphic Artwork Archive</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Complete Graphic Design Archive
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Leadership announcements, E-Cell branding, event campaigns, festival graphics, and certificates.
          </p>
        </div>

        {/* Category Filter Bar (Preserves all existing categories, pills, and counts) */}
        <div
          role="tablist"
          aria-label="Filter artwork by category"
          className="flex items-center sm:justify-center gap-2.5 mb-10 overflow-x-auto sm:overflow-visible sm:flex-wrap pb-2 sm:pb-0"
        >
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  trackArtworkCategoryFiltered(cat);
                  setSelectedCategory(cat);
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-display font-semibold transition-all duration-300 flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric cursor-pointer ${
                  isSelected
                    ? 'bg-purple-electric text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-purple-light/50 scale-[1.03]'
                    : 'bg-[#101E14]/90 text-sand-light/85 hover:bg-[#15271A] hover:text-white border border-white/15'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-black/40 text-sand'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Central Microprocessor IC Anchor (Visual Reference Design) */}
        <div className="flex flex-col items-center justify-center my-6 relative">
          {/* Incoming & Outgoing PCB Bus Traces */}
          <div className="w-full max-w-xl h-0.5 bg-gradient-to-r from-transparent via-purple-electric to-transparent opacity-60 mb-2" />

          {/* Central IC Chip Unit */}
          <div className="relative group/chip flex items-center justify-center">
            {/* Top and Bottom IC Contact Pins */}
            <div className="absolute -top-2 flex space-x-2">
              <span className="w-1.5 h-2 bg-emerald-400 rounded-t-sm shadow-[0_0_6px_#34d399]" />
              <span className="w-1.5 h-2 bg-emerald-400 rounded-t-sm shadow-[0_0_6px_#34d399]" />
              <span className="w-1.5 h-2 bg-purple-electric rounded-t-sm shadow-[0_0_6px_#8b5cf6]" />
              <span className="w-1.5 h-2 bg-emerald-400 rounded-t-sm shadow-[0_0_6px_#34d399]" />
              <span className="w-1.5 h-2 bg-emerald-400 rounded-t-sm shadow-[0_0_6px_#34d399]" />
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0B150F] border-2 border-emerald-400/70 p-2 shadow-[0_0_35px_rgba(52,211,153,0.38),inset_0_0_20px_rgba(139,92,246,0.3)] flex flex-col items-center justify-center transition-transform duration-300 group-hover/chip:scale-105">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-purple-light filter drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-pulse" />
            </div>

            <div className="absolute -bottom-2 flex space-x-2">
              <span className="w-1.5 h-2 bg-emerald-400 rounded-b-sm shadow-[0_0_6px_#34d399]" />
              <span className="w-1.5 h-2 bg-purple-electric rounded-b-sm shadow-[0_0_6px_#8b5cf6]" />
              <span className="w-1.5 h-2 bg-purple-electric rounded-b-sm shadow-[0_0_6px_#8b5cf6]" />
              <span className="w-1.5 h-2 bg-emerald-400 rounded-b-sm shadow-[0_0_6px_#34d399]" />
              <span className="w-1.5 h-2 bg-emerald-400 rounded-b-sm shadow-[0_0_6px_#34d399]" />
            </div>
          </div>

          <div className="w-full max-w-xl h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60 mt-2" />
        </div>

        {/* Circuit Assembly Module Cards Grid */}
        <div
          ref={cardGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 mt-8 relative"
        >
          {filteredProjects.map((project, idx) => {
            const theme = MODULE_THEMES[idx % MODULE_THEMES.length];
            const moduleId = `MOD-${String(idx + 1).padStart(2, '0')}`;

            return (
              <div
                key={project.id}
                className="relative group/module transition-transform duration-300 hover:-translate-y-1"
                style={{
                  transitionDelay: `${(idx % 4) * 40}ms`,
                }}
              >
                {/* Top PCB Solder Via Contact Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                  <span className={`w-2 h-3 ${theme.pin} rounded-sm ${theme.pinGlow}`} />
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400/80 bg-[#0D1911] mt-[-3px]" />
                </div>

                {/* Electronic Module Housing Card */}
                <article
                  className={`rounded-2xl bg-[#0F1E14]/95 border-2 ${theme.border} ${theme.glow} p-4 sm:p-5 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 h-full`}
                >
                  {/* Module Header Bar: Institutional SVCE Tag + Module ID */}
                  <div className="flex items-center justify-between text-[11px] font-display font-semibold tracking-wider text-sand/80 pb-2.5 border-b border-white/10">
                    <span className="uppercase text-ivory flex items-center space-x-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.pin}`} />
                      <span>SVCE</span>
                    </span>
                    <span className="font-mono text-purple-light text-[10px] tracking-widest">{moduleId}</span>
                  </div>

                  {/* Clean Contained Artwork Stage */}
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(project)}
                    className="relative w-full aspect-[4/5] bg-[#07100A] rounded-xl overflow-hidden flex items-center justify-center p-3 cursor-pointer my-3 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-electric group/art"
                    aria-label={`Open ${project.title} in detail modal`}
                  >
                    <picture className="w-full h-full flex items-center justify-center">
                      <source srcSet={project.image} type="image/webp" />
                      <img
                        src={project.imageJpg}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain rounded-lg shadow-lg group-hover/art:scale-[1.04] transition-transform duration-300 ease-out"
                      />
                    </picture>

                    {/* Hover Inspect Action Overlay */}
                    <div className="absolute inset-0 bg-[#07100A]/60 opacity-0 group-hover/art:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                      <span className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-ivory text-charcoal text-xs font-display font-bold shadow-xl">
                        <Eye className="w-3.5 h-3.5 text-purple-electric" />
                        <span>Inspect Artwork</span>
                      </span>
                    </div>
                  </button>

                  {/* Metadata Row: Category Badge + Year */}
                  <div className="flex items-center justify-between gap-2 text-xs font-editorial mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-display font-semibold text-[10px] uppercase tracking-wider ${theme.badge} backdrop-blur-sm`}
                    >
                      {project.category}
                    </span>
                    <span className="font-mono text-sand/75 text-xs">{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-sm sm:text-base font-bold text-ivory hover:text-sand transition-colors line-clamp-2 leading-snug my-1">
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(project)}
                      className="text-left focus:outline-none focus-visible:underline cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>

                  {/* Project Description */}
                  <p className="font-editorial text-xs sm:text-[13px] text-sand-light/80 line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Module Footer: Client / Role & Open Action */}
                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between font-editorial text-xs">
                    <span className="text-sand/75 truncate max-w-[65%]">
                      {project.client}
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(project)}
                      className="inline-flex items-center space-x-1 font-display text-xs font-bold text-purple-light hover:text-white transition-colors flex-shrink-0 cursor-pointer group/link"
                    >
                      <span>Open</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </article>

                {/* Bottom PCB Solder Via Contact Pin */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-purple-electric/80 bg-[#0D1911]" />
                  <span className={`w-2 h-3 ${theme.pin} rounded-sm mt-[-3px] ${theme.pinGlow}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
