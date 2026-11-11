import React from 'react';
import { Navigation } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServiceArea: React.FC = () => {
  return (
    <section
      id="atendimento"
      className="py-16 md:py-20 bg-white border-b border-neutral-200"
      aria-labelledby="atendimento-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0A2F0D] to-[#165C2A] text-white p-8 sm:p-12 shadow-xl border border-[#2B921D]/30 relative overflow-hidden reveal-on-scroll">
          
          {/* Subtle background rings */}
          <div
            className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#77D100]/10 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[#0A84C9]/15 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2F0D]/70 border border-[#77D100]/40 text-[#77D100] text-xs font-bold tracking-wide">
                <Navigation className="w-3.5 h-3.5" />
                <span>Local de Atuação</span>
              </div>

              {/* Exact Title */}
              <h2
                id="atendimento-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
              >
                {siteConfig.serviceArea.title}
              </h2>

              {/* Exact Text */}
              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                {siteConfig.serviceArea.text}
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={buildWhatsAppLink(siteConfig.serviceArea.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white font-bold text-base shadow-lg transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#77D100]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>{siteConfig.serviceArea.ctaText}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
