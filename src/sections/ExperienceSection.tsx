import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, CheckCircle2, Calendar, ArrowUpRight } from 'lucide-react';
import { INTERNSHIPS_DATA } from '../data/resumeData';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard } from '../components/PremiumMotion';
import { SectionAtmosphere } from '../components/SectionAtmosphere';

export const ExperienceSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setLineVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-24 bg-[#112016]/80 text-ivory border-t border-white/10 relative overflow-hidden z-10"
    >
      <SectionAtmosphere variant="left-glow" accentRing={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="space-y-3 mb-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5 text-purple-light" />
            <span>Industrial Field Experience</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Internships & Exposure
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Industrial field observation across heavy machinery electrical controls and metropolitan transit grids.
          </p>
        </ScrollReveal>

        {/* Animated Purple/Forest Connector Spine */}
        <div
          ref={timelineRef}
          className="mb-9 hidden md:flex items-center space-x-3"
          aria-hidden="true"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/25 shadow-[0_0_14px_rgba(52,211,153,0.65)]" />
          <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-emerald-400 via-purple-electric to-emerald-400 origin-left transition-transform duration-1000 ease-out ${
                lineVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>
          <span className="w-3.5 h-3.5 rounded-full bg-purple-electric ring-4 ring-purple-electric/25 shadow-[0_0_14px_rgba(139,92,246,0.75)]" />
        </div>

        {/* Experience Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {INTERNSHIPS_DATA.map((exp, idx) => (
            <ScrollReveal
              key={idx}
              delayMs={idx * 100}
              direction={idx % 2 === 0 ? 'left' : 'right'}
            >
              <SpotlightCard
                variant={idx === 0 ? 'forest' : 'purple'}
                className="h-full"
              >
                <div className="h-full p-7 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="inline-flex items-center space-x-1.5 px-4 py-1 rounded-full text-xs sm:text-sm font-editorial font-semibold bg-black/30 text-sand border border-white/15">
                        <Calendar className="w-3.5 h-3.5 text-purple-light" />
                        <span>{exp.duration}</span>
                      </span>
                      <div className="flex items-center space-x-1.5 text-sm font-editorial italic text-sand-light/85">
                        <MapPin className="w-4 h-4 text-purple-light" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-ivory leading-tight">
                          {exp.company}
                        </h3>
                        <p className="font-editorial italic text-base sm:text-lg font-semibold text-purple-light mt-1">
                          {exp.role}
                        </p>
                      </div>
                      <span className="font-display text-sm font-bold text-white/40 flex items-center gap-0.5">
                        0{idx + 1}
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    <p className="font-editorial text-base sm:text-[17px] text-sand-light/90 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/10">
                      <span className="text-xs font-display font-bold uppercase tracking-wider text-sand block">
                        Technical Exposure
                      </span>
                      <ul className="divide-y divide-white/10 font-editorial text-[15px] sm:text-base text-sand-light/90">
                        {exp.verifiedExposure.map((item, i) => (
                          <li key={i} className="py-2.5 flex items-start space-x-2.5">
                            <CheckCircle2 className="w-4 h-4 text-purple-light flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/30 border border-white/10 text-sm font-editorial text-sand/85 flex items-center justify-between">
                    <span>Confirmed Internship Record</span>
                    <span className="inline-flex items-center space-x-1.5 text-xs font-display font-semibold text-purple-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-electric" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
