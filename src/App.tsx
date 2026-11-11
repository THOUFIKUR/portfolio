import React, { useState, useEffect } from 'react';
import { Navbar, PortfolioTrack } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ScrollOrbField, ScrollPathDivider } from './components/ScrollOrbField';
import { HeroSection } from './sections/HeroSection';
import { SelectedCreativeSection } from './sections/SelectedCreativeSection';
import { CreativeGallerySection } from './sections/CreativeGallerySection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { EngineeringSection } from './sections/EngineeringSection';
import { TechnologySection } from './sections/TechnologySection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { LeadershipSection } from './sections/LeadershipSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import {
  CREATIVE_PROJECTS,
  CASE_STUDIES,
  ENGINEERING_PROJECTS,
  TECHNOLOGY_PROJECTS,
  CreativeProject,
  CaseStudy,
} from './data/projectsManifest';

export const App: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<PortfolioTrack>('creative');
  const [selectedArtwork, setSelectedArtwork] = useState<CreativeProject | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync track with URL hash on load and hashchange
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('engineering')) {
        setActiveTrack('engineering');
      } else if (hash.includes('technology')) {
        setActiveTrack('technology');
      } else {
        setActiveTrack('creative');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Track scroll progress for minimal top progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict zero-duplication split:
  // Featured projects (6) appear in SelectedCreativeSection;
  // Remaining non-featured projects (22) appear in CreativeGallerySection.
  const featuredProjects = CREATIVE_PROJECTS.filter((p) => p.featured);
  const archiveProjects = CREATIVE_PROJECTS.filter((p) => !p.featured);

  const handleTrackChange = (track: PortfolioTrack) => {
    setActiveTrack(track);
    window.location.hash = track;

    // Smooth scroll to relevant section
    if (track === 'creative') {
      const el = document.getElementById('selected-work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (track === 'engineering') {
      const el = document.getElementById('engineering');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (track === 'technology') {
      const el = document.getElementById('technology');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenArtworkById = (projectId: string) => {
    const found = CREATIVE_PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setSelectedArtwork(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#102015] text-ivory flex flex-col font-sans selection:bg-purple-electric selection:text-white relative overflow-x-clip">
      {/* Ambient Scroll-Driven Orb Field */}
      <ScrollOrbField />

      {/* Minimal Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-black/40 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-purple-electric to-purple-light shadow-[0_0_12px_rgba(139,92,246,0.75)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Fixed Navbar */}
      <Navbar activeTrack={activeTrack} onTrackChange={handleTrackChange} />

      <main className="flex-grow relative z-10">
        {/* PAGE 01: Hero Section */}
        <HeroSection
          activeTrack={activeTrack}
          onTrackChange={handleTrackChange}
        />

        {/* PAGE 02: Selected Creative Work (Top 6 Flagship Projects) */}
        <SelectedCreativeSection
          featuredProjects={featuredProjects}
          onOpenLightbox={(project) => setSelectedArtwork(project)}
        />

        <ScrollPathDivider variant="dark" />

        {/* PAGE 04: Graphic Design Case Studies */}
        <CaseStudiesSection
          caseStudies={CASE_STUDIES}
          onOpenCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        <ScrollPathDivider variant="dark" />

        {/* PAGE 03: Complete Graphic Design Archive (Remaining 38 Unique Non-Featured Works) */}
        <CreativeGallerySection
          projects={archiveProjects}
          onOpenLightbox={(project) => setSelectedArtwork(project)}
        />

        <ScrollPathDivider variant="dark" />

        {/* PAGE 05: Electrical & Electronics Engineering Track (Deep Forest Green Atmospheric Band) */}
        <EngineeringSection engineeringProjects={ENGINEERING_PROJECTS} />

        <ScrollPathDivider variant="dark" />

        {/* PAGE 06: Software & Technology Track (With verified GitHub and live URLs) */}
        <TechnologySection techProjects={TECHNOLOGY_PROJECTS} />

        {/* PAGE 07: Experience & Internships (Schwing Stetter, CMRL) */}
        <ExperienceSection />

        {/* PAGE 08: About Me (with Second Portrait) */}
        <AboutSection />

        {/* PAGE 09: Skills & Toolkit */}
        <SkillsSection />

        {/* PAGE 10: Leadership & Activities (E-Cell, Science Club, BIS) */}
        <LeadershipSection />

        {/* PAGE 11: Achievements & Verified Resume Integration */}
        <AchievementsSection />

        {/* PAGE 12: Contact Section (Verified External Links) */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Lightbox Modal for Original Artwork Inspection */}
      <Lightbox
        project={selectedArtwork}
        projectsList={CREATIVE_PROJECTS}
        onClose={() => setSelectedArtwork(null)}
        onSelectProject={(project) => setSelectedArtwork(project)}
      />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenProjectById={handleOpenArtworkById}
      />
    </div>
  );
};

export default App;
