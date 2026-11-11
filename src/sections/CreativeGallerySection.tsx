import React, { useState, useMemo } from 'react';
import { Eye, Grid, ArrowUpRight } from 'lucide-react';
import { CreativeProject } from '../data/projectsManifest';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard } from '../components/PremiumMotion';

interface CreativeGallerySectionProps {
  projects: CreativeProject[];
  onOpenLightbox: (project: CreativeProject) => void;
}

export const CreativeGallerySection: React.FC<CreativeGallerySectionProps> = ({
  projects,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

  return (
    <section
      id="creative-archive"
      className="py-24 bg-[#112016]/80 text-ivory border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="space-y-3 mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <Grid className="w-3.5 h-3.5 text-purple-light" />
            <span>Curated Artwork Archive · {projects.length} Unique Works</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Complete Graphic Design Archive
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Leadership announcements, E-Cell branding, event campaigns, festival graphics, and certificates.
          </p>
        </ScrollReveal>

        {/* Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter artwork by category"
          className="flex items-center sm:justify-center gap-2 mb-12 overflow-x-auto sm:overflow-visible sm:flex-wrap pb-2 sm:pb-0"
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
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-display font-semibold transition-all duration-200 flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric ${
                  isSelected
                    ? 'bg-purple-electric text-white shadow-purple-glow border border-purple-light/40'
                    : 'bg-white/10 text-sand-light/90 hover:bg-white/15 border border-white/15'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-black/30 text-sand'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Expansive Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delayMs={(idx % 4) * 35} direction="up">
              <SpotlightCard
                variant={idx % 3 === 0 ? 'forest' : idx % 3 === 1 ? 'charcoal' : 'purple'}
                className="h-full group rounded-2xl"
              >
                <article className="h-full flex flex-col justify-between">
                  {/* Clean Contained Artwork Stage */}
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(project)}
                    className="relative w-full aspect-[4/5] bg-[#0B130E] overflow-hidden flex items-center justify-center p-3.5 cursor-pointer border-b border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-electric"
                    aria-label={`Open ${project.title} in lightbox`}
                  >
                    <picture className="w-full h-full flex items-center justify-center">
                      <source srcSet={project.image} type="image/webp" />
                      <img
                        src={project.imageJpg}
                        alt={project.title}
                        decoding="async"
                        className="max-h-full max-w-full object-contain rounded shadow-lg group-hover:scale-[1.04] transition-transform duration-300 ease-out"
                      />
                    </picture>

                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 bg-[#0D1610]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                      <span className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-ivory text-charcoal text-xs font-display font-bold shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-purple-electric" />
                        <span>View Artwork</span>
                      </span>
                    </div>
                  </button>

                  {/* Typography Metadata Area */}
                  <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2 font-editorial text-xs sm:text-sm">
                        <span className="italic font-semibold text-purple-light truncate">
                          {project.category}
                        </span>
                        <span className="text-sand/70 font-medium flex-shrink-0">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="font-display text-base sm:text-lg font-bold text-ivory group-hover:text-sand transition-colors line-clamp-2 leading-snug">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(project)}
                          className="text-left focus:outline-none focus-visible:underline"
                        >
                          {project.title}
                        </button>
                      </h3>

                      <p className="font-editorial text-sm sm:text-[15px] text-sand-light/80 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between font-editorial text-sm">
                      <span className="text-sand/75 truncate max-w-[65%]">
                        {project.client}
                      </span>
                      <button
                        type="button"
                        onClick={() => onOpenLightbox(project)}
                        className="inline-flex items-center space-x-1 font-display text-xs font-bold text-purple-light hover:text-white transition-colors flex-shrink-0"
                      >
                        <span>Open</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
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
