import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ArrowUpRight, FileText } from 'lucide-react';

export type PortfolioTrack = 'creative' | 'engineering' | 'technology';

interface NavbarProps {
  activeTrack: PortfolioTrack;
  onTrackChange: (track: PortfolioTrack) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTrack, onTrackChange, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#selected-work' },
    { label: 'Archive', href: '#creative-archive' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#122015]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-white/10 text-ivory'
          : 'bg-gradient-to-b from-[#0E1B11]/85 to-transparent py-4 text-ivory'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Brand Wordmark - Strictly THOUFIKUR without punctuation or dots */}
          <a
            href="#"
            className="group flex-shrink-0 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric rounded-lg px-1"
            aria-label="Thoufikur Home"
          >
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-ivory group-hover:text-sand transition-colors whitespace-nowrap">
              THOUFIKUR
            </span>
          </a>

          {/* Centered Formwood-Inspired Glass Pill Navigation & Track Selector */}
          <div className="hidden xl:flex flex-shrink-0 items-center bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/15 shadow-sm">
            {(['creative', 'engineering', 'technology'] as PortfolioTrack[]).map((track) => {
              const isActive = activeTrack === track;
              return (
                <button
                  key={track}
                  type="button"
                  onClick={() => onTrackChange(track)}
                  className={`px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 whitespace-nowrap capitalize focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric ${
                    isActive
                      ? 'bg-purple-electric text-white shadow-purple-glow'
                      : 'text-sand-light/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {track}
                </button>
              );
            })}
          </div>

          {/* Section Anchors */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-5 text-sm font-medium"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sand-light/85 hover:text-white transition-colors relative py-1 whitespace-nowrap rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-electric hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Resume & Contact */}
          <div className="hidden sm:flex flex-shrink-0 items-center space-x-2.5">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/5 text-xs font-semibold text-ivory hover:bg-white/15 hover:border-purple-light/60 transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              title="Download Resume PDF"
            >
              <FileText className="w-3.5 h-3.5 text-sand" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-forest text-ivory border border-forest-light/40 text-xs font-semibold hover:bg-forest-light hover:shadow-purple-glow transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
            >
              <Mail className="w-3.5 h-3.5 text-purple-light" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center space-x-2 flex-shrink-0">
            <button
              type="button"
              onClick={onOpenResume}
              className="sm:hidden p-2 text-ivory rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              aria-label="Download Resume"
            >
              <FileText className="w-5 h-5 text-sand" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ivory hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#132217]/95 backdrop-blur-xl border-b border-white/10 px-4 py-5 space-y-5 shadow-2xl">
          <div className="flex flex-col space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-light">
              Portfolio Track
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(['creative', 'engineering', 'technology'] as PortfolioTrack[]).map((track) => (
                <button
                  key={track}
                  type="button"
                  onClick={() => {
                    onTrackChange(track);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold capitalize border transition-all ${
                    activeTrack === track
                      ? 'bg-purple-electric text-white border-purple-electric shadow-purple-glow'
                      : 'bg-white/5 text-sand-light border-white/15 hover:bg-white/10'
                  }`}
                >
                  {track}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium text-ivory"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-light" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border border-white/25 text-ivory font-semibold text-sm bg-white/5 hover:bg-white/10 transition-colors"
            >
              <FileText className="w-4 h-4 text-sand" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-forest text-ivory font-semibold text-sm"
            >
              <Mail className="w-4 h-4 text-purple-light" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
