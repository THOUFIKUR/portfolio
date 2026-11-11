import React from 'react';
import { Mail, Send, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/contactData';
import { LinkedinIcon, GithubIcon } from '../components/Icons';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard } from '../components/PremiumMotion';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#142519]/75 text-ivory border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-purple-light bg-white/10 px-3.5 py-1.5 rounded-full border border-purple-electric/35 backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 text-purple-light" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="section-heading font-display font-bold text-ivory">
            Let's Connect
          </h2>
          <p className="font-editorial italic text-xl sm:text-2xl text-sand leading-relaxed">
            "Have an opportunity or a project in mind? Let's connect."
          </p>
          <p className="font-editorial text-base sm:text-lg text-sand-light/85 max-w-lg mx-auto leading-relaxed">
            Available for Graphic Designer internships, multimedia projects, and engineering collaborations.
          </p>
        </ScrollReveal>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
          {/* Card 1: Email */}
          <ScrollReveal delayMs={40} direction="up">
            <SpotlightCard variant="forest" className="h-full">
              <a
                href={PERSONAL_INFO.emailAction}
                className="h-full group p-6 flex flex-col justify-between space-y-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <div className="space-y-3">
                  <div className="p-3 w-max rounded-2xl bg-black/30 text-ivory border border-white/15 group-hover:bg-purple-electric transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-light">
                      Primary Contact
                    </span>
                    <h3 className="font-display text-lg font-bold text-ivory">
                      Direct Email
                    </h3>
                  </div>
                  <p className="font-editorial text-base sm:text-lg text-sand-light/90 break-all">
                    {PERSONAL_INFO.email}
                  </p>
                </div>

                <div className="flex items-center justify-between font-display text-xs font-semibold tracking-wide text-sand pt-3 border-t border-white/10">
                  <span>Open Mail Client</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 2: LinkedIn */}
          <ScrollReveal delayMs={110} direction="up">
            <SpotlightCard variant="purple" className="h-full">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full group p-6 flex flex-col justify-between space-y-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <div className="space-y-3">
                  <div className="p-3 w-max rounded-2xl bg-purple-electric text-white shadow-sm">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-light">
                      Professional Network
                    </span>
                    <h3 className="font-display text-lg font-bold text-ivory">
                      LinkedIn Profile
                    </h3>
                  </div>
                  <p className="font-editorial text-base sm:text-lg text-sand-light/90">
                    Connect and view experience updates
                  </p>
                </div>

                <div className="flex items-center justify-between font-display text-xs font-semibold tracking-wide text-purple-light pt-3 border-t border-white/10">
                  <span>View Profile</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 3: GitHub */}
          <ScrollReveal delayMs={180} direction="up">
            <SpotlightCard variant="charcoal" className="h-full">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full group p-6 flex flex-col justify-between space-y-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <div className="space-y-3">
                  <div className="p-3 w-max rounded-2xl bg-white/10 text-ivory border border-white/15 group-hover:bg-purple-electric transition-colors">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-light">
                      Code Repositories
                    </span>
                    <h3 className="font-display text-lg font-bold text-ivory">
                      GitHub Profile
                    </h3>
                  </div>
                  <p className="font-editorial text-base sm:text-lg text-sand-light/90">
                    Explore prototypes &amp; project code
                  </p>
                </div>

                <div className="flex items-center justify-between font-display text-xs font-semibold tracking-wide text-sand pt-3 border-t border-white/10">
                  <span>Visit Repositories</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            </SpotlightCard>
          </ScrollReveal>
        </div>

        {/* Location & Direct CTA Banner */}
        <ScrollReveal direction="scale" delayMs={120}>
          <SpotlightCard variant="obsidian" className="max-w-4xl mx-auto">
            <div className="p-7 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start space-x-1.5 font-display text-xs text-purple-light font-semibold tracking-wide">
                  <MapPin className="w-4 h-4" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <h4 className="font-display text-xl font-bold text-ivory">
                  Open to Remote &amp; On-Site Creative Internships
                </h4>
                <p className="font-editorial text-base text-sand-light/85">
                  Fast response via direct email or LinkedIn messaging.
                </p>
              </div>

              <a
                href={PERSONAL_INFO.emailAction}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-forest hover:bg-forest-light text-ivory font-display text-sm font-bold border border-emerald-400/25 shadow-purple-glow hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-electric"
              >
                <Send className="w-4 h-4 text-purple-light" />
                <span>Send Direct Message</span>
              </a>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
};
