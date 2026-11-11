import React from 'react';
import { Eye, ArrowUpRight, Layers } from 'lucide-react';
import { CreativeProject } from '../data/projectsManifest';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard, SignatureCardVariant } from '../components/PremiumMotion';

interface SelectedCreativeSectionProps {
  featuredProjects: CreativeProject[];
  onOpenLightbox: (project: CreativeProject) => void;
}

const bentoVariants: SignatureCardVariant[] = ['purple', 'forest', 'charcoal', 'obsidian', 'forest', 'purple'];

export const SelectedCreativeSection: React.FC<SelectedCreativeSectionProps> = ({
  featuredProjects,
  onOpenLightbox,
}) => {
  return (
    <section
      id="selected-work"
      className="py-24 bg-[#122317]/75 text-ivory border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
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

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
          {featuredProjects.map((project, idx) => {
            const isLarge = idx === 0 || idx === 3;
            const colSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <ScrollReveal
                key={project.id}
                delayMs={idx * 75}
                direction="up"
                className={colSpan}
              >
                <SpotlightCard
                  variant={bentoVariants[idx % bentoVariants.length]}
                  className="h-full group"
                >
                  <article className="h-full flex flex-col justify-between">
                    {/* Contained Artwork Frame */}
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(project)}
                      className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#0C150F] cursor-pointer flex items-center justify-center p-4 sm:p-5 border-b border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-electric"
                      aria-label={`Inspect ${project.title}`}
                    >
                      <picture className="w-full h-full flex items-center justify-center">
                        <source srcSet={project.image} type="image/webp" />
                        <img
                          src={project.imageJpg}
                          alt={project.title}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        />
                      </picture>

                      {/* Hover Pill */}
                      <div className="absolute inset-0 bg-[#0D1610]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-ivory text-charcoal text-xs font-display font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                          <Eye className="w-4 h-4 text-purple-electric" />
                          <span>Inspect Artwork</span>
                        </span>
                      </div>
                    </button>

                    {/* Card Footer */}
                    <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2 font-editorial text-sm">
                          <span className="italic text-purple-light font-semibold">
                            {project.category}
                          </span>
                          <span className="text-sand/75 font-medium">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory group-hover:text-sand transition-colors leading-snug">
                          <button
                            type="button"
                            onClick={() => onOpenLightbox(project)}
                            className="text-left focus:outline-none focus-visible:underline"
                          >
                            {project.title}
                          </button>
                        </h3>

                        <p className="font-editorial text-[15px] sm:text-base text-sand-light/85 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-editorial">
                        <span className="text-sand-light/75">
                          Role: <strong className="text-ivory">{project.role}</strong>
                        </span>
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(project)}
                          className="inline-flex items-center space-x-1 font-display text-xs font-bold text-purple-light hover:text-white transition-colors"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
