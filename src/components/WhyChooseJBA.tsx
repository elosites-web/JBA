import React from 'react';
import { MapPin, Layers, UserCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WhyChooseJBA: React.FC = () => {
  const icons = [
    <MapPin key="map" className="w-6 h-6 text-[#77D100]" />,
    <Layers key="layers" className="w-6 h-6 text-[#77D100]" />,
    <UserCheck key="user" className="w-6 h-6 text-[#4FD0FF]" />,
  ];

  return (
    <section
      id="diferenciais"
      className="py-16 md:py-24 bg-[#0A2F0D] text-white border-b border-[#165C2A]"
      aria-labelledby="diferenciais-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165C2A] border border-[#77D100]/40 text-[#77D100] text-xs font-bold uppercase tracking-wider mb-3">
            Compromisso e Transparência
          </div>
          <h2
            id="diferenciais-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Atendimento direto e informações claras
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            Conheça como funciona o contato com a JBA.
          </p>
        </div>

        {/* 3 Verifiable Cards with Premium Translucent Glass & Coordinated Step-Card Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((item, index) => {
            const delayClass =
              index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : '';

            return (
              <div
                key={item.title}
                className={`step-card-interactive group relative rounded-2xl p-8 border border-[#2B921D]/35 hover:border-[#77D100]/60 bg-gradient-to-b from-[#165C2A]/40 via-[#0e3b12]/55 to-[#0A2F0D]/75 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-[#2B921D]/20 text-left flex flex-col reveal-on-scroll ${delayClass}`}
              >
                {/* Subtle top glossy specular highlight reflection */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none rounded-t-2xl"
                />

                {/* Coordinated icon container with smooth scaling & subtle lime glow on hover */}
                <div className="w-14 h-14 rounded-2xl bg-[#0A2F0D]/90 border border-[#2B921D]/40 group-hover:border-[#77D100]/60 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(119,209,0,0.25)] transition-all duration-300">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {icons[index]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#77D100] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-emerald-100/90 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
