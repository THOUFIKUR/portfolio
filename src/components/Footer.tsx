import React from 'react';
import { Mail, ArrowUp, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/contactData';
import { LinkedinIcon, GithubIcon } from './Icons';
import { SectionAtmosphere } from './SectionAtmosphere';
import {
  trackEmailClicked,
  trackLinkedInClicked,
  trackGitHubClicked,
} from '../lib/posthog';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D1911]/95 text-sand-light pt-16 pb-12 border-t border-white/10 relative overflow-hidden z-10">
      <SectionAtmosphere variant="center-glow" density="subtle" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-charcoal-light/30">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-display font-black text-3xl tracking-tighter text-sand-light">
                THOUFIKUR
              </span>
            </a>
            <p className="font-editorial text-sand/85 text-base max-w-sm leading-relaxed">
              Multidisciplinary Creative &amp; Technology Professional. Exploring visual communication, electrical engineering systems, and practical software.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full font-display text-xs font-semibold tracking-wide bg-forest/40 text-sand border border-forest/60">
                Current: 6th Sem B.E. EEE @ SVCE
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold text-sand uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-editorial text-base text-sand/80">
              <li>
                <a href="#selected-work" className="hover:text-purple-light transition-colors">
                  Featured Creative Work
                </a>
              </li>
              <li>
                <a href="#creative-archive" className="hover:text-purple-light transition-colors">
                  Complete Artwork Archive
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-purple-light transition-colors">
                  Case Studies & Process
                </a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-purple-light transition-colors">
                  Electrical Engineering Track
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-purple-light transition-colors">
                  Software & Tech Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-light transition-colors">
                  About & Background
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Profiles */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display text-xs font-bold text-sand uppercase tracking-widest">
              Connect Directly
            </h4>
            <p className="font-editorial text-base text-sand/80">
              Verified external profiles — open directly in new tabs:
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={PERSONAL_INFO.emailAction}
                onClick={() => trackEmailClicked()}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-charcoal-muted hover:bg-forest text-sand font-display text-sm font-medium transition-all duration-200 border border-charcoal-light/40"
                aria-label="Send email to Thoufikur"
              >
                <Mail className="w-4 h-4 text-purple-light" />
                <span>Email</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkedInClicked()}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-charcoal-muted hover:bg-forest text-sand font-display text-sm font-medium transition-all duration-200 border border-charcoal-light/40"
                aria-label="Thoufikur's LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon className="w-4 h-4 text-purple-light" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGitHubClicked()}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-charcoal-muted hover:bg-forest text-sand font-display text-sm font-medium transition-all duration-200 border border-charcoal-light/40"
                aria-label="Thoufikur's GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4 text-purple-light" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-purple-electric hover:bg-purple-dark text-white font-display text-sm font-semibold transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-editorial text-sm text-sand/75 gap-4">
          <p>
            © {new Date().getFullYear()} Thoufikur Rahaman Y. Art-directed portfolio based on original 79-page design archive and verified resume.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-charcoal-muted hover:bg-charcoal-light text-sand-light font-display text-xs transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
