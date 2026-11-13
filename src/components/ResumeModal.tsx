import React, { useEffect, useCallback } from 'react';
import { X, Download, FileText, Zap, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/contactData';
import { trackResumeDownloaded } from '../lib/posthog';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleDownload = (type: 'electrical_ai' | 'embedded_systems') => {
    trackResumeDownloaded(type);
    // Keep brief delay so download begins smoothly before closing modal
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const { electricalAi, embeddedSystems } = PERSONAL_INFO.resumes;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Download Resume Options"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-[#111e14] text-ivory rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl shadow-purple-electric/15">
        {/* Glow backdrop accent */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-purple-electric/25 blur-3xl pointer-events-none"
        />

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
          <div className="flex items-center space-x-2.5">
            <div className="p-2.5 rounded-xl bg-white/10 text-purple-light border border-white/15">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-ivory">
                Download Resume
              </h3>
              <p className="font-editorial text-xs sm:text-sm text-sand/80">
                Select your required track (PDF)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-sand/75 hover:text-ivory hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Two Resume Cards */}
        <div className="space-y-4 pt-6 relative z-10">
          {/* Option 1: Electrical Resume */}
          <div className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-emerald-400/50 transition-all duration-200">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-base sm:text-lg font-bold text-ivory group-hover:text-emerald-300 transition-colors">
                    Electrical Resume
                  </h4>
                </div>
              </div>

              <a
                href={electricalAi.path}
                download={electricalAi.filename}
                onClick={() => handleDownload('electrical_ai')}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-forest hover:bg-forest-light text-ivory font-display text-xs sm:text-sm font-semibold border border-emerald-400/30 hover:border-emerald-400 shadow-md transition-all flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <Download className="w-4 h-4 text-emerald-300" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Option 2: Embedded System Resume */}
          <div className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-purple-electric/50 transition-all duration-200">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-base sm:text-lg font-bold text-ivory group-hover:text-purple-light transition-colors">
                    Embedded System Resume
                  </h4>
                </div>
              </div>

              <a
                href={embeddedSystems.path}
                download={embeddedSystems.filename}
                onClick={() => handleDownload('embedded_systems')}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-forest hover:bg-forest-light text-ivory font-display text-xs sm:text-sm font-semibold border border-purple-electric/40 hover:border-purple-electric shadow-md transition-all flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <Download className="w-4 h-4 text-purple-light" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
