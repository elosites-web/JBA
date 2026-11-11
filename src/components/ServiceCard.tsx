import React from 'react';
import { Scissors, Sparkles, Waves, Trees } from 'lucide-react';
import { ServiceItem, buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const isPool = service.id === 'limpeza-de-piscinas';

  // Distinct visual icon per service
  const renderIcon = () => {
    switch (service.id) {
      case 'corte-de-grama':
        return <Sparkles className="w-5 h-5 text-[#77D100]" />;
      case 'poda-de-plantas':
        return <Scissors className="w-5 h-5 text-[#77D100]" />;
      case 'limpeza-de-piscinas':
        return <Waves className="w-5 h-5 text-[#4FD0FF]" />;
      case 'paisagismo':
        return <Trees className="w-5 h-5 text-[#77D100]" />;
    }
  };

  const delayClass =
    index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : index === 3 ? 'reveal-delay-300' : '';

  return (
    <div
      className={`service-card-interactive group flex flex-col rounded-2xl overflow-hidden bg-white border reveal-on-scroll ${delayClass} ${
        isPool
          ? 'border-[#0A84C9]/30 hover:border-[#0A84C9] hover:shadow-xl hover:shadow-[#0A84C9]/15 shadow-sm'
          : 'border-[#2B921D]/20 hover:border-[#2B921D] hover:shadow-xl hover:shadow-[#2B921D]/15 shadow-sm'
      }`}
    >
      {/* 4:3 Aspect Ratio Image with Structured Skeleton State */}
      <ImageWithSkeleton
        src={service.image}
        alt={service.alt}
        theme="light"
        containerClassName="aspect-[4/3]"
        className="transition-all duration-700 ease-out group-hover:scale-105"
        loading="lazy"
        width="600"
        height="450"
      >
        {/* Category badge on photo */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md ${
              isPool ? 'bg-[#0A84C9]/90' : 'bg-[#0A2F0D]/90'
            }`}
          >
            {renderIcon()}
            <span>{service.shortTitle}</span>
          </span>
        </div>
      </ImageWithSkeleton>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6 text-left">
        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#165C2A] transition-colors mb-2.5">
          {service.title}
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed flex-grow mb-6">
          {service.description}
        </p>

        {/* CTA Button */}
        <div className="mt-auto pt-2">
          <a
            href={buildWhatsAppLink(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white transition-all shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-4 ${
              isPool
                ? 'bg-[#0A84C9] hover:bg-[#086da7] focus-visible:ring-[#4FD0FF]'
                : 'bg-[#2B921D] hover:bg-[#257c19] focus-visible:ring-[#77D100]'
            }`}
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>{service.ctaText}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
