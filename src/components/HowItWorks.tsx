import React from 'react';
import { MessageSquare, CalendarClock, CheckCheck, ArrowRight } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <MessageSquare key="msg" className="w-6 h-6 text-[#77D100]" />,
    <CalendarClock key="cal" className="w-6 h-6 text-[#77D100]" />,
    <CheckCheck key="check" className="w-6 h-6 text-[#4FD0FF]" />,
  ];

  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 bg-white border-b border-neutral-200"
      aria-labelledby="como-funciona-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165C2A]/10 border border-[#2B921D]/30 text-[#165C2A] text-xs font-bold uppercase tracking-wider mb-3">
            Passo a passo simples
          </div>
          <h2
            id="como-funciona-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2F0D] tracking-tight mb-4"
          >
            Como Funciona o Atendimento
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Sem complicações: processo direto e transparente do primeiro contato até a conclusão do serviço.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {siteConfig.howItWorks.map((item, index) => {
            const delayClass =
              index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : '';

            return (
              <div
                key={item.step}
                className={`relative rounded-2xl bg-[#F7FAF6] p-8 border border-neutral-200/80 hover:border-[#2B921D]/50 hover:shadow-lg transition-all duration-300 flex flex-col text-left group reveal-on-scroll ${delayClass}`}
              >
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#0A2F0D] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {stepIcons[index]}
                  </div>
                  <span className="text-3xl font-black text-neutral-300 group-hover:text-[#2B921D]/40 transition-colors">
                    0{item.step}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#165C2A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action prompt */}
        <div className="mt-12 text-center reveal-on-scroll reveal-delay-300">
          <a
            href={buildWhatsAppLink('Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento com a JBA em Jundiaí.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#165C2A] hover:text-[#2B921D] transition-colors group"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#2B921D]" />
            <span>Iniciar etapa 1 agora pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
