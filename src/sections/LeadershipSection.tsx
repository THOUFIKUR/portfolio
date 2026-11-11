import React from 'react';
import { Users, CheckCircle2, Calendar, ArrowUpRight } from 'lucide-react';
import { LEADERSHIP_DATA } from '../data/resumeData';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard, SignatureCardVariant } from '../components/PremiumMotion';

const leadershipVariants: SignatureCardVariant[] = ['forest', 'purple', 'charcoal', 'obsidian'];

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="py-24 bg-[#15261A]/75 text-ivory border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="space-y-3 mb-14 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <Users className="w-3.5 h-3.5 text-purple-light" />
            <span>Collegiate Responsibility</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Leadership & Campus Activities
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Student leadership across creative direction, multimedia production, technical teams, and standards chapters.
          </p>
        </ScrollReveal>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_DATA.map((item, idx) => (
            <ScrollReveal key={idx} delayMs={idx * 85} direction="up">
              <SpotlightCard variant={leadershipVariants[idx % leadershipVariants.length]} className="h-full">
                <div className="h-full p-6 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 text-sm font-editorial text-sand-light/85">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-purple-light" />
                        <span>{item.period}</span>
                      </div>
                      <span className="font-display text-xs font-bold text-purple-light flex items-center gap-0.5">
                        0{idx + 1}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold text-ivory leading-snug">
                        {item.role}
                      </h3>
                      <p className="font-editorial italic text-base font-semibold text-sand mt-1">
                        {item.organization}
                      </p>
                      <p className="font-editorial text-sm text-sand-light/70 mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    <p className="font-editorial text-[15px] text-sand-light/90 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <span className="text-xs font-display font-bold uppercase tracking-wider text-purple-light block">
                        Key Contributions
                      </span>
                      <ul className="space-y-2 font-editorial text-sm sm:text-[15px] text-sand-light/85">
                        {item.responsibilities.slice(0, 2).map((r, i) => (
                          <li key={i} className="flex items-start space-x-2 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-purple-light flex-shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-editorial italic text-sand/85">
                    <span>Confirmed Office Bearer</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-electric" />
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
