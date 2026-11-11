import React from 'react';
import { ArrowUpRight, Layers, Wrench } from 'lucide-react';
import { CaseStudy } from '../data/projectsManifest';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard, SignatureCardVariant } from '../components/PremiumMotion';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  onOpenCaseStudy: (study: CaseStudy) => void;
}

const cardVariants: SignatureCardVariant[] = ['purple', 'forest', 'charcoal', 'obsidian'];

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  caseStudies,
  onOpenCaseStudy,
}) => {
  return (
    <section
      id="case-studies"
      className="py-24 bg-[#142218]/80 text-ivory border-t border-white/10 relative overflow-hidden z-10"
    >
      {/* Ambient Radial Accents */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-purple-electric/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-24 w-[24rem] h-[24rem] rounded-full bg-forest-light/20 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="space-y-3 mb-14 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-purple-light" />
            <span>Design Notes · Distinct Archive Selection</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Graphic Design Case Studies
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Focused visual analysis on layout hierarchy and typography across four distinct archive works.
          </p>
        </ScrollReveal>

        {/* 4 Non-Repeated Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {caseStudies.map((study, idx) => (
            <ScrollReveal
              key={study.id}
              delayMs={idx * 90}
              direction={idx % 2 === 0 ? 'left' : 'right'}
            >
              <SpotlightCard
                variant={cardVariants[idx % cardVariants.length]}
                className="h-full group"
              >
                <article className="h-full flex flex-col justify-between">
                  {/* Contained Artwork Preview on Deep Framing Backdrop */}
                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy(study)}
                    className="relative w-full aspect-[16/9] bg-[#0B130E] p-4 flex items-center justify-center overflow-hidden border-b border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-electric"
                  >
                    <picture className="w-full h-full flex items-center justify-center">
                      <source srcSet={study.coverImage} type="image/webp" />
                      <img
                        src={study.coverImageJpg}
                        alt={study.title}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      />
                    </picture>

                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-display font-semibold bg-charcoal/85 text-sand-light border border-white/15 backdrop-blur-sm">
                      {study.category}
                    </span>
                    <span className="absolute top-3.5 right-3.5 font-display text-xs font-bold tracking-wider px-2.5 py-1 rounded-full bg-purple-electric/25 text-purple-light border border-purple-electric/40 backdrop-blur-sm">
                      0{idx + 1}
                    </span>
                  </button>

                  {/* Factual Content Body — Larger Times New Roman + Concise Hierarchy */}
                  <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-editorial italic text-purple-light">
                        <span>{study.role}</span>
                        <span className="text-sand/85 not-italic">{study.organization}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold text-ivory group-hover:text-sand transition-colors leading-snug">
                        <button
                          type="button"
                          onClick={() => onOpenCaseStudy(study)}
                          className="text-left focus:outline-none focus-visible:underline"
                        >
                          {study.title}
                        </button>
                      </h3>

                      <p className="font-editorial text-base sm:text-[17px] text-sand-light/90 leading-relaxed">
                        {study.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center space-x-1.5 text-sm font-editorial text-sand/80">
                        <Wrench className="w-4 h-4 text-purple-light" />
                        <span>Tools: {study.tools.join(', ')}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(study)}
                        className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-purple-electric/25 hover:bg-purple-electric text-ivory text-xs font-display font-bold border border-purple-electric/45 transition-all group-hover:translate-x-0.5"
                      >
                        <span>Open Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
