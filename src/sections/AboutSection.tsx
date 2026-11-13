import React from 'react';
import { User, Compass, Lightbulb, Heart } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { PortraitAuraFrame, SpotlightCard } from '../components/PremiumMotion';
import { SectionAtmosphere } from '../components/SectionAtmosphere';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#17211A] text-ivory border-t border-white/10 relative overflow-hidden z-10"
    >
      <SectionAtmosphere variant="right-glow" density="dense" accentRing={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Framed Original Portrait 2 (`mine1.jpg` without overlapping cards) */}
          <ScrollReveal direction="left" className="lg:col-span-5 flex flex-col items-center space-y-5">
            <PortraitAuraFrame
              webpSrc="/images/thoufikur-about.webp"
              jpgSrc="/images/thoufikur-about.jpg"
              alt="Thoufikur Rahaman Y — Designer and Electrical Engineering Student"
              aspectClass="aspect-[3/4]"
              maxWidthClass="max-w-md"
              gradientBottomClass="from-[#121B15]/85 via-[#121B15]/25"
            />

            {/* Identity caption cleanly outside portrait frame */}
            <SpotlightCard variant="obsidian" accentBar={false} className="w-full max-w-md rounded-2xl">
              <div className="px-5 py-4 flex items-center justify-between gap-4">
                <div>
                  <span className="font-display font-bold text-base text-ivory block">
                    Thoufikur Rahaman Y
                  </span>
                  <span className="font-editorial italic text-sm text-sand-light/85">
                    Graphic Designer · EEE Undergraduate · Technology Enthusiast
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-display font-bold bg-purple-electric/25 text-purple-light border border-purple-electric/45 flex-shrink-0">
                  SVCE
                </span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Right Column: Narrative Biography */}
          <ScrollReveal direction="right" className="lg:col-span-7 space-y-6" delayMs={100}>
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-display font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-4 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
                <User className="w-3.5 h-3.5 text-purple-light" />
                <span>About</span>
              </div>
              <h2 className="section-heading font-display font-bold text-ivory">
                About Thoufikur
              </h2>
            </div>

            <blockquote className="font-editorial italic text-xl sm:text-2xl text-sand leading-relaxed border-l-2 border-purple-electric pl-5 py-1">
              "I am Thoufikur Rahaman Y, an Electrical and Electronics Engineering undergraduate at Sri Venkateswara College of Engineering, bridging design, multimedia, software, and AI."
            </blockquote>

            <div className="space-y-4 font-editorial text-base sm:text-lg text-sand-light/90 leading-relaxed">
              <p>
                I combine structured engineering discipline with visual storytelling — directing event campaigns, leading student multimedia teams, and building embedded hardware and computer vision tools.
              </p>
              <p>
                Roles as Chief Design Officer at E-Cell, Executive Director of Multimedia at SVCE Science Club (2026–27), Deputy Secretary at BIS Student Chapter, and industrial internships at Schwing Stetter and CMRL keep my workflow grounded in real execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/15">
              <SpotlightCard variant="forest" className="rounded-2xl">
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center space-x-2 text-ivory font-display font-bold text-xs uppercase tracking-wider">
                    <span className="p-1.5 rounded-lg bg-emerald-400/15 text-emerald-300">
                      <Compass className="w-4 h-4" />
                    </span>
                    <span>Curiosity</span>
                  </div>
                  <p className="font-editorial text-sm sm:text-[15px] text-sand-light/85 leading-relaxed">
                    Bridging visual craft with practical engineering systems.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard variant="purple" className="rounded-2xl">
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center space-x-2 text-ivory font-display font-bold text-xs uppercase tracking-wider">
                    <span className="p-1.5 rounded-lg bg-purple-electric/30 text-purple-light">
                      <Lightbulb className="w-4 h-4" />
                    </span>
                    <span>Clarity</span>
                  </div>
                  <p className="font-editorial text-sm sm:text-[15px] text-sand-light/90 leading-relaxed">
                    Honest documentation of authentic work, tools, and scope.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard variant="charcoal" className="rounded-2xl">
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center space-x-2 text-ivory font-display font-bold text-xs uppercase tracking-wider">
                    <span className="p-1.5 rounded-lg bg-sand/15 text-sand">
                      <Heart className="w-4 h-4" />
                    </span>
                    <span>Execution</span>
                  </div>
                  <p className="font-editorial text-sm sm:text-[15px] text-sand-light/85 leading-relaxed">
                    Shipping reliable visuals and hardware prototypes on schedule.
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
