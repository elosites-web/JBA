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
            Por Que Escolher a JBA
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            Informações claras e verificáveis sobre a nossa forma de trabalhar.
          </p>
        </div>

        {/* 3 Verifiable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((item, index) => {
            const delayClass =
              index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : '';

            return (
              <div
                key={item.title}
                className={`rounded-2xl bg-[#0f3d14]/70 p-8 border border-[#165C2A] hover:border-[#77D100]/50 transition-all duration-300 text-left flex flex-col reveal-on-scroll ${delayClass}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A2F0D] border border-[#165C2A] flex items-center justify-center mb-5 shadow-inner">
                  {icons[index]}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-emerald-100/80 leading-relaxed flex-grow">
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
