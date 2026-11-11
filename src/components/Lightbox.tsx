import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Calendar, User, Building } from 'lucide-react';
import { CreativeProject } from '../data/projectsManifest';

interface LightboxProps {
  project: CreativeProject | null;
  projectsList: CreativeProject[];
  onClose: () => void;
  onSelectProject: (project: CreativeProject) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  project,
  projectsList,
  onClose,
  onSelectProject,
}) => {
  const currentIndex = project
    ? projectsList.findIndex((p) => p.id === project.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (projectsList.length === 0) return;
    if (currentIndex > 0) {
      onSelectProject(projectsList[currentIndex - 1]);
    } else if (currentIndex === 0) {
      onSelectProject(projectsList[projectsList.length - 1]);
    }
  }, [currentIndex, projectsList, onSelectProject]);

  const handleNext = useCallback(() => {
    if (projectsList.length === 0) return;
    if (currentIndex < projectsList.length - 1) {
      onSelectProject(projectsList[currentIndex + 1]);
    } else if (currentIndex === projectsList.length - 1) {
      onSelectProject(projectsList[0]);
    }
  }, [currentIndex, projectsList, onSelectProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, handlePrev, handleNext]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Artwork viewer: ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-3 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-charcoal-muted text-sand-light hover:bg-forest transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
        aria-label="Close artwork viewer (Escape)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-charcoal-muted/85 hover:bg-forest text-sand-light transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
        aria-label="Previous artwork (Left Arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-charcoal-muted/85 hover:bg-forest text-sand-light transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
        aria-label="Next artwork (Right Arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Layout */}
      <div className="relative max-w-6xl w-full max-h-[92vh] flex flex-col lg:flex-row bg-[#131C15] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
        {/* Artwork Preview Stage */}
        <div className="flex-1 flex items-center justify-center bg-[#0C120E] p-4 sm:p-6 overflow-hidden min-h-[300px] lg:min-h-[520px]">
          <picture className="flex items-center justify-center w-full h-full">
            <source srcSet={project.image} type="image/webp" />
            <img
              src={project.imageJpg}
              alt={project.title}
              className="max-h-[58vh] lg:max-h-[82vh] max-w-full object-contain mx-auto rounded shadow-lg"
            />
          </picture>
        </div>

        {/* Sidebar Metadata */}
        <div className="w-full lg:w-80 xl:w-96 p-6 flex flex-col justify-between bg-[#18221A] text-ivory border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto max-h-[35vh] lg:max-h-[82vh]">
          <div className="space-y-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-electric/20 text-purple-light border border-purple-electric/40 mb-3">
                {project.category}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory leading-snug">
                {project.title}
              </h3>
            </div>

            <p className="text-sand-light/85 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="pt-3 space-y-2.5 text-xs sm:text-sm text-sand/80 border-t border-white/10">
              <div className="flex items-center space-x-2.5">
                <Calendar className="w-4 h-4 text-purple-light flex-shrink-0" />
                <span>Year: {project.year}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <User className="w-4 h-4 text-purple-light flex-shrink-0" />
                <span>Role: {project.role}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Building className="w-4 h-4 text-purple-light flex-shrink-0" />
                <span>Organisation: {project.client}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-sand/70">
            <span>
              {currentIndex + 1} of {projectsList.length}
            </span>
            <a
              href={project.rawArtwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-purple-light hover:text-white transition-colors font-medium"
            >
              <span>View Original Hi-Res</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
