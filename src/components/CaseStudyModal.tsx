import React, { useEffect, useCallback } from 'react';
import { X, Eye, User, Building, Wrench, Check } from 'lucide-react';
import { CaseStudy } from '../data/projectsManifest';
import { trackProjectOpened, trackProjectModalClosed } from '../lib/posthog';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onOpenProjectById: (projectId: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onOpenProjectById,
}) => {
  const handleClose = useCallback(() => {
    if (study) {
      trackProjectModalClosed({
        id: study.id,
        title: study.title,
      });
    }
    onClose();
  }, [study, onClose]);

  useEffect(() => {
    if (study) {
      trackProjectOpened({
        id: study.id,
        title: study.title,
        category: study.category,
      });
    }
  }, [study?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (study) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [study, handleClose]);

  if (!study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${study.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#09120C]/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative max-w-3xl w-full my-6 bg-[#131C15] text-ivory rounded-3xl border border-white/15 shadow-2xl shadow-purple-electric/10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-4 bg-[#18221A]/95 backdrop-blur border-b border-white/10">
          <div className="min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-soft block">
              {study.category}
            </span>
            <h2 className="font-display text-lg sm:text-xl font-bold text-ivory truncate">
              {study.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-full text-sand/75 hover:text-ivory hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-ivory">
          {/* Actual Artwork Preview */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0D1610] border border-white/10 p-4 sm:p-6 flex items-center justify-center min-h-[240px] max-h-[380px]">
            <picture className="w-full h-full flex items-center justify-center">
              <source srcSet={study.coverImage} type="image/webp" />
              <img
                src={study.coverImageJpg}
                alt={study.title}
                className="max-h-[330px] max-w-full object-contain rounded-lg shadow-xl"
              />
            </picture>
          </div>

          {/* Factual Context Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#18221A] border border-white/10 text-xs">
            <div>
              <span className="text-sand/65 flex items-center gap-1.5 mb-1 font-medium">
                <User className="w-3.5 h-3.5 text-forest-light" />
                <span>Role</span>
              </span>
              <span className="font-semibold text-ivory">{study.role}</span>
            </div>
            <div>
              <span className="text-sand/65 flex items-center gap-1.5 mb-1 font-medium">
                <Building className="w-3.5 h-3.5 text-forest-light" />
                <span>Organisation</span>
              </span>
              <span className="font-semibold text-ivory">{study.organization}</span>
            </div>
            <div>
              <span className="text-sand/65 flex items-center gap-1.5 mb-1 font-medium">
                <Wrench className="w-3.5 h-3.5 text-purple-soft" />
                <span>Confirmed Tools</span>
              </span>
              <span className="font-semibold text-ivory">{study.tools.join(', ')}</span>
            </div>
          </div>

          {/* One-line Summary */}
          <p className="text-sm sm:text-base text-ivory/90 leading-relaxed font-medium">
            {study.summary}
          </p>

          {/* Grounded Visual Observations */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-purple-soft">
              Visual Observations
            </h3>
            <ul className="space-y-2.5">
              {study.observations.map((obs, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#18221A] border border-white/10 text-xs sm:text-sm text-sand/85"
                >
                  <Check className="w-4 h-4 text-purple-soft flex-shrink-0 mt-0.5" />
                  <span>{obs}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional Retrospective Note */}
          {study.retrospectiveNote && (
            <div className="p-4 rounded-2xl bg-purple-electric/10 border border-purple-electric/25 text-xs sm:text-sm text-sand/85 leading-relaxed">
              {study.retrospectiveNote}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#18221A]/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              const targetId = study.linkedProjectId;
              onClose();
              onOpenProjectById(targetId);
            }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-electric text-white text-xs font-semibold hover:bg-purple-dark transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Open Artwork in Lightbox</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 border border-white/15 text-ivory text-xs font-semibold hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
