import React from 'react';
import { Sparkles, Scissors, Waves } from 'lucide-react';
import { buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const VisualShowcase: React.FC = () => {
  const showcaseItems = [
    {
      category: 'Corte de Grama',
      title: 'Gramados Uniformes e Bem Cuidados',
      description:
        'Corte de grama com roçadeira, proporcionando alinhamento e limpeza para áreas verdes em Jundiaí.',
      image: '/images/foto-gramado-amplo.webp',
      alt: 'Fotografia ilustrativa de gramado verde amplo e bem nivelado',
      icon: <Sparkles className="w-4 h-4 text-[#77D100]" />,
      whatsappMsg:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de corte de grama em Jundiaí.',
    },
    {
      category: 'Poda de Plantas',
      title: 'Cercas Vivas e Folhagens Alinhadas',
      description:
        'Poda manual com tesourão de jardineiro, garantindo acabamento reto, harmonia estética e saúde vegetal.',
      image: '/images/foto-cerca-viva.webp',
      alt: 'Fotografia ilustrativa de poda de cerca viva com folhagens verdes',
      icon: <Scissors className="w-4 h-4 text-[#77D100]" />,
      whatsappMsg:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de poda de plantas em Jundiaí.',
    },
    {
      category: 'Limpeza de Piscinas',
      title: 'Água Cristalina e Área Externa Organizada',
      description:
        'Serviço de limpeza de piscinas para que sua área de lazer fique sempre limpa, transparente e agradável.',
      image: '/images/foto-piscina-cristalina.webp',
      alt: 'Fotografia ilustrativa de piscina limpa com água cristalina e deck ensolarado',
      icon: <Waves className="w-4 h-4 text-[#4FD0FF]" />,
      whatsappMsg:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de limpeza de piscina em Jundiaí.',
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-[#0A2F0D] text-white relative overflow-hidden border-b border-[#165C2A]"
      aria-label="Destaques Visuais dos Serviços"
    >
      {/* Background Decorative Panorama */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/images/foto-banner-jardim.webp"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
          width="1600"
          height="800"
        />
        <div className="absolute inset-0 bg-[#0A2F0D] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#165C2A]/80 border border-[#77D100]/40 text-[#77D100] text-xs font-bold uppercase tracking-wider mb-3">
            Padrão de Cuidado
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Atenção aos Detalhes no Seu Espaço
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            Fotografias profissionais de referência ilustrando os serviços oferecidos pela JBA para a manutenção da sua área externa em Jundiaí.
          </p>
        </div>

        {/* 3 Large Visual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => {
            const delayClass =
              index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : '';

            return (
              <div
                key={item.category}
                className={`group flex flex-col rounded-2xl overflow-hidden bg-[#0e3b12]/90 border border-[#165C2A] hover:border-[#77D100]/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 reveal-on-scroll ${delayClass}`}
              >
                {/* Large 16:10 Photograph */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A2F0D]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="375"
                  />
                  {/* Subtle Gradient Shade on Bottom of Photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b12] via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0A2F0D]/90 text-white border border-[#2B921D]/40 backdrop-blur-md shadow-md">
                      {item.icon}
                      <span>{item.category}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#77D100] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-emerald-100/80 leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <a
                      href={buildWhatsAppLink(item.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white text-xs sm:text-sm font-bold shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <span>Solicitar avaliação no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-emerald-200/50 italic">
          * Fotografias ilustrativas de banco de imagens para referência visual dos serviços prestados.
        </p>

      </div>
    </section>
  );
};
