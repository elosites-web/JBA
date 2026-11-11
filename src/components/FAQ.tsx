import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FAQ: React.FC = () => {
  // Open the first item by default for clear UX
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-[#F7FAF6] text-neutral-900 border-b border-neutral-200"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165C2A]/10 border border-[#2B921D]/30 text-[#165C2A] text-xs font-bold uppercase tracking-wider mb-3">
            Tire suas dúvidas
          </div>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2F0D] tracking-tight mb-4"
          >
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Confira as principais informações sobre os serviços da JBA em Jundiaí.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndices.includes(index);
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;
            const delayClass =
              index === 1
                ? 'reveal-delay-100'
                : index === 2
                ? 'reveal-delay-200'
                : index === 3
                ? 'reveal-delay-300'
                : '';

            return (
              <div
                key={item.question}
                className={`rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm transition-all duration-200 hover:border-[#2B921D]/40 reveal-on-scroll ${delayClass}`}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] gap-4"
                >
                  <span className="font-bold text-neutral-900 text-base sm:text-lg">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-out ${
                      isOpen ? 'rotate-180 bg-[#165C2A] text-[#77D100]' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq-accordion-content ${isOpen ? 'is-open' : ''}`}
                >
                  <div className="faq-accordion-inner">
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                      <p>{item.answer}</p>
                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2">
                        <WhatsAppIcon className="w-4 h-4 text-[#2B921D]" />
                        <a
                          href={buildWhatsAppLink(`Olá, Aristeu! Tenho uma dúvida sobre: ${item.question}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-[#165C2A] hover:text-[#2B921D] underline"
                        >
                          Conversar sobre isso no WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional help note */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-neutral-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 reveal-on-scroll reveal-delay-200">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#165C2A]/10 flex items-center justify-center shrink-0 text-[#165C2A]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900">Tem outra pergunta?</p>
              <p className="text-xs text-neutral-500">Converse diretamente com o Aristeu Barbosa pelo WhatsApp.</p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink('Olá, Aristeu! Gostaria de tirar uma dúvida sobre os serviços da JBA em Jundiaí.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0A2F0D] hover:bg-[#165C2A] text-white text-xs font-bold transition-colors inline-flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#77D100]" />
            <span>Falar com o Aristeu</span>
          </a>
        </div>

      </div>
    </section>
  );
};
