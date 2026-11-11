import React from 'react';
import { Code2, Sparkles, Terminal, Brain, Trophy, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { TechnologyProject } from '../data/projectsManifest';
import { GithubIcon } from '../components/Icons';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard, SignatureCardVariant } from '../components/PremiumMotion';

interface TechnologySectionProps {
  techProjects: TechnologyProject[];
}

const protoVariants: SignatureCardVariant[] = ['purple', 'forest', 'obsidian', 'charcoal'];

export const TechnologySection: React.FC<TechnologySectionProps> = ({ techProjects }) => {
  return (
    <section
      id="technology"
      className="py-24 bg-[#142519]/80 text-ivory border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="space-y-3 mb-14 max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <Code2 className="w-3.5 h-3.5 text-purple-light" />
            <span>Technology & Prototypes</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Software, AI & Development
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Honest technical scope across coursework fundamentals, databases, and AI-assisted prototypes.
          </p>
        </ScrollReveal>

        {/* Hero-Matched 3 Signature Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Programming & DB */}
          <ScrollReveal delayMs={40} direction="up">
            <SpotlightCard variant="forest" className="h-full">
              <div className="h-full p-7 space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded-xl bg-emerald-400/15 text-emerald-300 border border-emerald-400/25">
                      <Terminal className="w-4 h-4" />
                    </span>
                    <span className="font-display text-xs font-bold text-emerald-300/85">01</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ivory">
                    Programming & Databases
                  </h3>
                  <p className="font-editorial text-base text-sand-light/85 leading-relaxed">
                    Coursework languages and relational persistence foundations:
                  </p>
                </div>

                <div className="divide-y divide-white/10 border-t border-white/10 pt-1">
                  {[
                    { name: 'C & Java', role: 'Academic Study' },
                    { name: 'SQLite', role: 'Local Database' },
                    { name: 'Supabase', role: 'Cloud Database' },
                  ].map((item) => (
                    <div key={item.name} className="py-3 flex items-center justify-between">
                      <span className="font-editorial text-base font-semibold text-ivory">{item.name}</span>
                      <span className="font-display text-xs text-emerald-300 font-semibold">{item.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 2: AI-Assisted Development */}
          <ScrollReveal delayMs={110} direction="up">
            <SpotlightCard variant="charcoal" className="h-full">
              <div className="h-full p-7 space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded-xl bg-sand/15 text-sand border border-sand/25">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <span className="font-display text-xs font-bold text-sand/85">02</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ivory">
                    AI-Assisted Development
                  </h3>
                  <p className="font-editorial text-base text-sand-light/85 leading-relaxed">
                    Web interfaces & API endpoints built with AI-assisted workflows:
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {['Python', 'JavaScript', 'HTML & CSS', 'React + Vite', 'Tailwind CSS', 'FastAPI'].map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-2.5 rounded-xl bg-black/30 border border-white/10 font-editorial text-sm font-semibold text-ivory text-center"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <p className="font-editorial italic text-sm text-sand-light/75 pt-1 border-t border-white/10">
                    Transparently framed as AI-assisted project engineering.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 3: AI & Computer Vision */}
          <ScrollReveal delayMs={180} direction="up">
            <SpotlightCard variant="purple" className="h-full">
              <div className="h-full p-7 space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded-xl bg-purple-electric/30 text-purple-light border border-purple-light/35">
                      <Brain className="w-4 h-4" />
                    </span>
                    <span className="font-display text-xs font-bold text-purple-light">03</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ivory">
                    AI & Computer Vision
                  </h3>
                  <p className="font-editorial text-base text-sand-light/85 leading-relaxed">
                    Applied across hackathon awards and diagnostic screening models:
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="divide-y divide-white/10 border-t border-white/10">
                    {[
                      { lib: 'OpenCV & MediaPipe', tag: 'Vision Tracking' },
                      { lib: 'YOLOv8', tag: 'Object Detection' },
                      { lib: 'EfficientNetB3 · ONNX', tag: 'Retinal Screening' },
                    ].map((row) => (
                      <div key={row.lib} className="py-2.5 flex items-center justify-between">
                        <span className="font-editorial text-base font-semibold text-ivory">{row.lib}</span>
                        <span className="font-display text-xs text-purple-light font-semibold">{row.tag}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-editorial italic text-sm text-sand-light/85 pt-1">
                    Applied in Smart Attendance System & RetinaScan AI.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>

        {/* Software Project Cards */}
        <div className="space-y-6">
          <ScrollReveal direction="up" className="flex items-end justify-between gap-4 flex-wrap">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ivory">
              Software & Prototype Breakdowns
            </h3>
            <span className="text-xs font-display font-semibold uppercase tracking-wider text-purple-light">
              Live Deployments & GitHub Sources
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {techProjects.map((p, idx) => (
              <ScrollReveal key={p.id} delayMs={idx * 85} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <SpotlightCard variant={protoVariants[idx % protoVariants.length]} className="h-full">
                  <div className="h-full p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-3.5 py-1 rounded-full text-xs font-display font-semibold bg-purple-electric/25 text-purple-light border border-purple-electric/45">
                          {p.classification}
                        </span>
                        <div className="flex items-center gap-3">
                          {p.award && (
                            <span className="inline-flex items-center space-x-1.5 text-sm font-editorial italic font-semibold text-sand">
                              <Trophy className="w-4 h-4 text-purple-light" />
                              <span>{p.award}</span>
                            </span>
                          )}
                          <span className="font-display text-xs font-bold text-white/50">0{idx + 1}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-display text-2xl font-bold text-ivory leading-snug">
                          {p.title}
                        </h4>
                        <p className="font-editorial text-base text-sand-light/85 mt-1 leading-relaxed">
                          {p.subtitle}
                        </p>
                      </div>

                      <p className="font-editorial text-base sm:text-[17px] text-sand-light/90 leading-relaxed">
                        {p.description}
                      </p>

                      <div className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1">
                        <strong className="font-display text-sand uppercase tracking-wider text-xs block">
                          Direct Contribution
                        </strong>
                        <p className="font-editorial text-[15px] text-sand-light/85 leading-relaxed">{p.ownerContribution}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-purple-electric/15 border border-purple-electric/30 space-y-1">
                        <span className="text-xs font-display font-bold uppercase tracking-wider text-purple-light block">
                          AI-Assisted Workflow Note
                        </span>
                        <p className="font-editorial text-[15px] text-sand-light/85 leading-relaxed">{p.aiAssistedPortion}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <span className="text-xs font-display font-semibold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-2">
                            <CheckCircle className="w-4 h-4" /> Implemented Scope
                          </span>
                          <ul className="space-y-1.5 font-editorial text-sm sm:text-[15px] text-sand-light/85">
                            {p.implementedFeatures.slice(0, 3).map((f, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <span className="text-emerald-300 font-bold">›</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-xs font-display font-semibold uppercase tracking-wider text-sand/80 flex items-center gap-1.5 mb-2">
                            <Clock className="w-4 h-4 text-purple-light" /> Future Scope
                          </span>
                          <ul className="space-y-1.5 font-editorial text-sm sm:text-[15px] text-sand-light/80">
                            {p.plannedFeatures.slice(0, 3).map((f, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <span className="text-purple-light font-bold">›</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* External Action Buttons & Tech Stack Strip */}
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      {(p.liveUrl || p.githubUrl) && (
                        <div className="flex flex-wrap gap-2.5">
                          {p.liveUrl && (
                            <a
                              href={p.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-forest hover:bg-forest-light text-ivory text-xs font-display font-semibold border border-emerald-400/30 shadow-sm transition-all hover:-translate-y-0.5"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
                              <span>Visit Live Project</span>
                            </a>
                          )}
                          {p.githubUrl && (
                            <a
                              href={p.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-purple-electric text-ivory text-xs font-display font-semibold border border-white/20 transition-all hover:-translate-y-0.5"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              <span>View Source Code</span>
                            </a>
                          )}
                        </div>
                      )}

                      <div className="font-editorial italic text-sm text-sand/85">
                        Stack: {p.technologiesUsed.join(' · ')}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
