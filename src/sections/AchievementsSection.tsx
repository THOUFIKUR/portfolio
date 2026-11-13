import React from 'react';
import { Trophy, Download, ArrowUpRight, FileText } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/resumeData';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard } from '../components/PremiumMotion';
import { SectionAtmosphere } from '../components/SectionAtmosphere';

interface AchievementsSectionProps {
  onOpenResume: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="achievements" className="py-24 bg-[#112016]/80 text-ivory border-t border-white/10 relative overflow-hidden z-10">
      <SectionAtmosphere variant="right-glow" accentRing={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="space-y-3 mb-14 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-purple-light" />
            <span>Milestones & Documentation</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Achievements & Resume
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Hackathon honours, prototype recognition, and verified candidate resume.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Achievements List */}
          <div className="lg:col-span-7 space-y-4">
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 75} direction="left">
                <SpotlightCard variant={idx % 2 === 0 ? 'forest' : 'purple'} className="rounded-2xl">
                  <div className="p-6 sm:p-7 flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-black/30 text-purple-light border border-purple-electric/35 flex-shrink-0 mt-0.5">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-display font-bold uppercase tracking-wider text-purple-light">
                          0{idx + 1} · {ach.type}
                        </span>
                        <span className="font-editorial italic text-sm font-semibold text-sand">
                          {ach.event}
                        </span>
                      </div>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-ivory">
                        {ach.title}
                      </h4>
                      <p className="font-editorial text-[15px] sm:text-base text-sand-light/90 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Official Resume Signature Showcase Card */}
          <ScrollReveal className="lg:col-span-5" delayMs={120} direction="right">
            <SpotlightCard variant="purple">
              <div className="p-8 space-y-6 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-purple-electric/30 filter blur-2xl pointer-events-none"
                />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/15 backdrop-blur border border-white/20 text-ivory">
                      <FileText className="w-6 h-6 text-sand" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-display font-semibold bg-emerald-400/15 text-emerald-300 border border-emerald-400/30">
                      PDF Ready
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ivory">
                    Official Candidate Resumes
                  </h3>
                  <p className="font-editorial text-base text-sand-light/90 leading-relaxed">
                    Download verified technical resumes tailored for Electrical &amp; AI or Embedded Systems engineering tracks.
                  </p>
                </div>

                <div className="divide-y divide-white/10 rounded-2xl bg-black/30 border border-white/15 px-5 font-editorial text-sm sm:text-[15px] relative z-10">
                  <div className="py-3.5 flex items-center justify-between gap-2">
                    <span className="text-sand/80">Education</span>
                    <span className="font-semibold text-ivory text-right">SVCE · B.E. EEE</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between gap-2">
                    <span className="text-sand/80">Current Stage</span>
                    <span className="font-semibold text-ivory text-right">Third year / Sixth semester</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between gap-2">
                    <span className="text-sand/80">CGPA</span>
                    <span className="font-semibold text-purple-light text-right">8.39 / 10.0 (Up to 4th Semester)</span>
                  </div>
                </div>

                <div className="pt-2 relative z-10">
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="w-full inline-flex items-center justify-center space-x-2 py-4 px-6 rounded-full bg-ivory text-charcoal font-display font-bold text-sm hover:bg-sand transition-all duration-200 shadow-lg hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
                  >
                    <Download className="w-4 h-4 text-forest" />
                    <span>Download Resume (PDF)</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-electric opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
