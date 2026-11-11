import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FinalCTA: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A2F0D] to-[#061e08] text-white relative overflow-hidden"
      aria-label="Chamada para Ação Final"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#2B921D]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 reveal-on-scroll">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#165C2A]/80 border border-[#77D100]/40 text-[#77D100] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Solicite seu atendimento</span>
        </div>

        {/* Exact Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          {siteConfig.finalCta.title}
        </h2>

        {/* Exact Text */}
        <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          {siteConfig.finalCta.text}
        </p>

        {/* Main CTA */}
        <div className="pt-2 flex items-center justify-center">
          <a
            href={buildWhatsAppLink(siteConfig.finalCta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white text-base font-bold shadow-2xl shadow-emerald-950/80 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#77D100]"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>{siteConfig.finalCta.ctaText}</span>
          </a>
        </div>

        <p className="text-xs text-emerald-200/60 pt-4">
          Atendimento direto com Aristeu Barbosa • Jundiaí, SP
        </p>

      </div>
    </section>
  );
};
