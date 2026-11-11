import React from 'react';
import { Cpu, GraduationCap, Wrench, CheckCircle2, Zap, ArrowUpRight } from 'lucide-react';
import { EDUCATION_DATA } from '../data/resumeData';
import { EngineeringProject } from '../data/projectsManifest';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard, SignatureCardVariant } from '../components/PremiumMotion';

interface EngineeringSectionProps {
  engineeringProjects: EngineeringProject[];
}

export const EngineeringSection: React.FC<EngineeringSectionProps> = ({
  engineeringProjects,
}) => {
  const tools = [
    { name: 'AutoCAD', area: 'Electrical Drafting' },
    { name: 'MATLAB', area: 'System Simulation' },
    { name: 'Siemens TIA Portal', area: 'PLC Engineering' },
    { name: 'EPLAN', area: 'Control Schematics' },
    { name: 'Fusion 360', area: '3D Enclosures' },
    { name: 'KiCad', area: 'PCB Layout' },
    { name: 'Tinkercad', area: 'Circuit Prototyping' },
  ];

  const focusAreas = [
    'Power Distribution Systems',
    'Transformers & Switchgear',
    'Relay Protection Fundamentals',
    'Motor Control Fundamentals',
    'PLC & SCADA Fundamentals',
    'Industrial Automation',
    'ESP32 Embedded Systems',
    'Raspberry Pi & IoT',
  ];

  const projectVariants: SignatureCardVariant[] = ['purple', 'forest', 'charcoal'];

  return (
    <section
      id="engineering"
      className="py-24 bg-[#122518]/85 text-ivory border-t border-white/10 relative overflow-hidden z-10"
    >
      {/* Ambient Radial Accents */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-forest-light/25 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-purple-electric/15 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="space-y-3 mb-14 max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-purple-light" />
            <span>Electrical & Electronics Engineering</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Engineering Background & Systems
          </h2>
          <p className="font-editorial text-lg sm:text-xl text-sand-light/85 leading-relaxed">
            Power infrastructure, substation protection, control automation, and embedded hardware.
          </p>
        </ScrollReveal>

        {/* Hero-Matched Architectural Education Panel */}
        <ScrollReveal direction="scale">
          <SpotlightCard variant="obsidian" className="mb-12">
            <div className="p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold text-purple-light uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>Undergraduate Degree · 2024 – 2028</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-ivory tracking-tight">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="font-editorial text-lg sm:text-xl font-semibold text-sand">
                    {EDUCATION_DATA.institution}
                  </p>
                  <p className="font-editorial text-sm sm:text-base text-sand-light/75">
                    {EDUCATION_DATA.location} · {EDUCATION_DATA.period}
                  </p>
                </div>

                {/* Editorial Split Metric Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1B4225]/90 to-[#112717]/95 border border-emerald-400/25">
                    <span className="text-xs font-display font-semibold uppercase tracking-wider text-emerald-300 block">
                      Academic Stage
                    </span>
                    <span className="font-display text-lg sm:text-xl font-bold text-ivory mt-1.5 block">
                      {EDUCATION_DATA.currentStage}
                    </span>
                  </div>

                  <div
                    className="p-5 rounded-2xl bg-gradient-to-br from-purple-electric/30 to-[#22183C]/95 border border-purple-electric/45"
                    title={EDUCATION_DATA.cgpaNote}
                  >
                    <span className="text-xs font-display font-semibold uppercase tracking-wider text-purple-light block">
                      Cumulative Standing
                    </span>
                    <span className="font-display text-lg sm:text-xl font-bold text-ivory mt-1.5 block">
                      {EDUCATION_DATA.cgpa}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-black/30 border border-white/10 p-6 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-sand">
                    Academic Focus
                  </span>
                  <span className="font-display text-xs font-bold text-purple-light">
                    SVCE EEE
                  </span>
                </div>
                <ul className="space-y-3 font-editorial text-base text-sand-light/90">
                  {EDUCATION_DATA.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2.5 pb-3 last:pb-0 border-b last:border-b-0 border-white/10 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-light flex-shrink-0 mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* Structured Focus Areas & Tool Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          <ScrollReveal direction="left" delayMs={60}>
            <SpotlightCard variant="forest" className="h-full">
              <div className="p-7 sm:p-8 h-full flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-emerald-300 font-display font-bold text-xs uppercase tracking-wider">
                      <Zap className="w-4 h-4" />
                      <span>01 · Power & Control Domains</span>
                    </div>
                    <span className="text-xs font-display font-semibold text-sand/75">8 Tracks</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ivory">
                    Core Technical Domains
                  </h3>
                  <p className="font-editorial text-base text-sand-light/85 leading-relaxed">
                    Coursework and internship exposure across power & automation systems:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1">
                  {focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="group/row flex items-center justify-between py-2.5 border-b border-white/10 hover:border-purple-electric/60 transition-colors"
                    >
                      <div className="flex items-center space-x-2.5 min-w-0">
                        <span className="font-display text-xs font-bold text-purple-light/90">
                          0{idx + 1}
                        </span>
                        <span className="font-editorial text-[15px] text-ivory group-hover/row:translate-x-0.5 transition-transform truncate">
                          {area}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal direction="right" delayMs={120}>
            <SpotlightCard variant="purple" className="h-full">
              <div className="p-7 sm:p-8 h-full flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-purple-light font-display font-bold text-xs uppercase tracking-wider">
                      <Wrench className="w-4 h-4" />
                      <span>02 · Engineering Software Matrix</span>
                    </div>
                    <span className="text-xs font-display font-semibold text-sand/75">CAD · PLC · EDA</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ivory">
                    Engineering Software Tools
                  </h3>
                  <p className="font-editorial text-base text-sand-light/85 leading-relaxed">
                    Drafting, simulation, and PLC platforms applied in lab and project work:
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="group/tile p-3.5 rounded-xl bg-black/25 hover:bg-purple-electric/20 border border-white/10 hover:border-purple-light/50 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <span className="font-display text-sm sm:text-base font-bold text-ivory block truncate">
                        {tool.name}
                      </span>
                      <span className="font-editorial italic text-xs text-purple-light block mt-0.5 truncate">
                        {tool.area}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="pt-3 border-t border-white/10 font-editorial italic text-sm text-sand-light/75">
                  Reflects laboratory and coursework project familiarity.
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>

        {/* Engineering Systems & Hardware Projects */}
        <div className="space-y-6">
          <ScrollReveal direction="up" className="flex items-end justify-between gap-4 flex-wrap">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ivory">
              Engineering Projects & Field Studies
            </h3>
            <span className="text-xs font-display font-semibold uppercase tracking-wider text-purple-light">
              Hardware · Traction · Substation Automation
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {engineeringProjects.map((p, idx) => (
              <ScrollReveal key={p.id} delayMs={idx * 90} direction="up">
                <SpotlightCard variant={projectVariants[idx % projectVariants.length]} className="h-full">
                  <div className="h-full p-6 sm:p-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-display font-semibold bg-white/10 text-sand border border-white/15">
                          {p.badge}
                        </span>
                        <span className="inline-flex items-center space-x-1 text-xs font-display font-bold text-purple-light">
                          <span>0{idx + 1}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div>
                        <span className="text-xs font-display font-medium text-emerald-300/95 uppercase tracking-wider block mb-1.5">
                          {p.status}
                        </span>
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-ivory leading-snug">
                          {p.title}
                        </h4>
                        <p className="font-editorial text-base text-sand-light/85 mt-1.5 leading-relaxed">
                          {p.subtitle}
                        </p>
                      </div>

                      <div className="space-y-3 font-editorial text-[15px] sm:text-base text-sand-light/90 pt-3 border-t border-white/10">
                        <div>
                          <strong className="font-display text-sand font-semibold uppercase tracking-wider text-xs block mb-1">
                            Problem Addressed
                          </strong>
                          <p className="leading-relaxed line-clamp-3">{p.problem}</p>
                        </div>
                        <div>
                          <strong className="font-display text-sand font-semibold uppercase tracking-wider text-xs block mb-1">
                            System Architecture
                          </strong>
                          <p className="leading-relaxed line-clamp-3">{p.architecture}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                        {p.hardware.slice(0, 3).map((hw, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-black/30 font-editorial text-xs text-ivory border border-white/10"
                          >
                            {hw}
                          </span>
                        ))}
                        {p.software.slice(0, 2).map((sw, i) => (
                          <span
                            key={`sw-${i}`}
                            className="px-2.5 py-1 rounded-md bg-purple-electric/20 font-editorial text-xs text-purple-light border border-purple-electric/35"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-black/30 border border-white/10 font-editorial text-sm sm:text-[15px] text-sand-light/90 leading-relaxed">
                      <strong className="font-display text-sand text-xs uppercase tracking-wider mr-1.5">Build:</strong>
                      {p.actualImplementation}
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
