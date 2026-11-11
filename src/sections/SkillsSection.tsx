import React from 'react';
import { Wrench } from 'lucide-react';
import { SKILL_GROUPS } from '../data/resumeData';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard, SignatureCardVariant } from '../components/PremiumMotion';

const groupVariants: SignatureCardVariant[] = ['forest', 'purple', 'charcoal', 'obsidian', 'forest', 'purple'];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[#122317]/80 text-ivory border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="space-y-3 mb-14 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <Wrench className="w-3.5 h-3.5 text-purple-light" />
            <span>Structured Toolkit</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Skills & Technical Toolkit
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Confirmed tools and capabilities organized cleanly by domain.
          </p>
        </ScrollReveal>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <ScrollReveal key={idx} delayMs={(idx % 3) * 85} direction="up">
              <SpotlightCard variant={groupVariants[idx % groupVariants.length]} className="h-full">
                <div className="h-full p-7 flex flex-col space-y-5">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-display font-bold uppercase tracking-wider text-purple-light">
                        0{idx + 1} · {group.title.split('&')[0].trim()}
                      </span>
                      <span className="text-xs font-display font-semibold text-sand/75">
                        {group.skills.length} Skills
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory leading-snug">
                      {group.title}
                    </h3>
                    <p className="font-editorial text-[15px] sm:text-base text-sand-light/85 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Clean Hairline Kinetic Rows */}
                  <div className="divide-y divide-white/10 pt-2 border-t border-white/10">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/row py-3 flex items-baseline justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-start space-x-2.5 min-w-0">
                          <span className="mt-2 w-1 h-3.5 rounded-full bg-purple-electric/60 group-hover/row:bg-purple-light group-hover/row:h-4 transition-all flex-shrink-0" />
                          <span className="font-editorial text-[15px] sm:text-base font-semibold text-ivory group-hover/row:text-sand transition-colors leading-snug">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-editorial italic text-sm text-sand-light/80 text-right flex-shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Transparency Note */}
        <ScrollReveal direction="up" delayMs={80}>
          <div className="mt-12 p-4 rounded-2xl bg-black/25 border border-white/10 font-editorial italic text-sm sm:text-base text-sand-light/80 text-center max-w-2xl mx-auto">
            Presented strictly by verified coursework, club leadership, and project experience.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
