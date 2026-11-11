import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ServiceCard } from './ServiceCard';

export const Services: React.FC = () => {
  return (
    <section
      id="servicos"
      className="py-16 md:py-24 bg-[#F7FAF6] text-neutral-900 border-b border-neutral-200"
      aria-labelledby="servicos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165C2A]/10 border border-[#2B921D]/30 text-[#165C2A] text-xs font-bold uppercase tracking-wider mb-3">
            O que fazemos
          </div>
          <h2
            id="servicos-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2F0D] tracking-tight mb-4"
          >
            Serviços Especializados em Jundiaí
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Conheça abaixo os serviços prestados pela JBA em corte de grama, poda de plantas e limpeza de piscinas em Jundiaí.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* AI Disclaimer Notice */}
        <div className="mt-8 text-center reveal-on-scroll reveal-delay-300">
          <p className="text-xs text-neutral-500 italic">
            * {siteConfig.disclaimer.aiImagesText}
          </p>
        </div>
      </div>
    </section>
  );
};
