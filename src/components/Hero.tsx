import React from 'react';
import { MapPin, CheckCircle, ArrowDown } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative text-white pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#165C2A]"
      aria-label="Apresentação JBA"
    >
      {/* Full-width Photography Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-garden-premium.webp"
          alt="Jardim residencial bem cuidado com gramado viçoso e folhagens ornamentais"
          className="w-full h-full object-cover object-[50%_center] sm:object-[60%_35%] transform scale-105 transition-transform duration-1000"
          loading="eager"
          fetchPriority="high"
          width="2400"
          height="1600"
        />
        {/* Refined editorial gradient: high contrast on content left, vibrant photograph reveal on right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A2F0D]/95 via-[#0A2F0D]/75 to-[#0A2F0D]/30 lg:from-[#0A2F0D]/92 lg:via-[#0A2F0D]/60 lg:to-[#0A2F0D]/20"
          aria-hidden="true"
        />
        {/* Subtle vertical vignette grounding top and bottom borders */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A2F0D] via-transparent to-[#0A2F0D]/50"
          aria-hidden="true"
        />
        {/* Subtle natural cinematic corner vignette */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_50%,rgba(10,47,13,0.4)_100%)] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left reveal-on-scroll">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#165C2A]/80 border border-[#77D100]/40 text-emerald-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-[#77D100]" />
              <span>{siteConfig.brand.fullLocation}</span>
            </div>

            {/* Official Logo in Prominent Display */}
            <div className="flex justify-center lg:justify-start pt-1 pb-2">
              <img
                src={siteConfig.brand.logoUrl}
                alt={siteConfig.brand.fullName}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-md"
                width="340"
                height="98"
                loading="eager"
              />
            </div>

            {/* Exact Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {siteConfig.hero.title}
            </h1>

            {/* Exact Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={buildWhatsAppLink('Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento com a JBA em Jundiaí.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white text-base font-bold shadow-xl shadow-emerald-950/60 hover:shadow-emerald-900/80 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#77D100]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>{siteConfig.hero.ctaText}</span>
              </a>

              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#165C2A]/60 hover:bg-[#165C2A] text-emerald-100 hover:text-white border border-[#2B921D]/50 text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
              >
                <span>Conhecer serviços</span>
                <ArrowDown className="w-4 h-4 text-[#77D100]" />
              </a>
            </div>

            {/* Verifiable Trust Highlights */}
            <div className="pt-4 border-t border-[#165C2A]/70 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5 bg-[#0e3b12]/60 p-2.5 rounded-lg border border-[#165C2A]/40">
                <CheckCircle className="w-4 h-4 text-[#77D100] shrink-0" />
                <span className="text-xs text-emerald-100/90 font-medium">Corte de grama, poda e piscinas</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0e3b12]/60 p-2.5 rounded-lg border border-[#165C2A]/40">
                <CheckCircle className="w-4 h-4 text-[#77D100] shrink-0" />
                <span className="text-xs text-emerald-100/90 font-medium">Contato com Aristeu Barbosa</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0e3b12]/60 p-2.5 rounded-lg border border-[#165C2A]/40">
                <CheckCircle className="w-4 h-4 text-[#4FD0FF] shrink-0" />
                <span className="text-xs text-emerald-100/90 font-medium">Atendimento em Jundiaí, SP</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 reveal-on-scroll reveal-delay-200">
            <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-[#165C2A]/60 to-[#0A2F0D] border border-[#2B921D]/40 shadow-2xl">
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] border border-[#2B921D]/40 bg-[#0e3b12] skeleton-shimmer">
                  <img
                    src="/images/foto-corte-grama.webp"
                    alt="Corte de grama com roçadeira"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    loading="eager"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5 z-10">
                    <span className="text-[10px] font-bold text-white leading-tight">Corte de Grama</span>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden aspect-[4/3] border border-[#2B921D]/40 bg-[#0e3b12] skeleton-shimmer">
                  <img
                    src="/images/foto-poda-plantas.webp"
                    alt="Poda de plantas com tesourão"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    loading="eager"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5 z-10">
                    <span className="text-[10px] font-bold text-white leading-tight">Poda de Plantas</span>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden aspect-[4/3] border border-[#0A84C9]/50 bg-[#0e3b12] skeleton-shimmer">
                  <img
                    src="/images/foto-limpeza-piscina.webp"
                    alt="Limpeza de piscinas"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    loading="eager"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5 z-10">
                    <span className="text-[10px] font-bold text-white leading-tight">Limpeza de Piscina</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Card */}
              <div className="bg-[#0A2F0D]/90 rounded-xl p-4 border border-[#165C2A] text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#77D100]">Atendimento Local</span>
                  <span className="text-[11px] text-emerald-200/70">Jundiaí, SP</span>
                </div>
                <p className="text-xs text-emerald-100/90 leading-relaxed mb-3">
                  Precisa de manutenção no jardim ou na piscina? Envie uma mensagem para combinar uma visita de avaliação com o Aristeu.
                </p>
                <a
                  href={buildWhatsAppLink('Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento em Jundiaí.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#2B921D] hover:bg-[#34ab23] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>

              {/* Mandatory AI disclaimer */}
              <p className="mt-2.5 text-[10px] text-emerald-200/50 text-center">
                {siteConfig.disclaimer.aiImagesText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
