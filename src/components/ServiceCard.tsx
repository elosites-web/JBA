import React, { useState } from 'react';
import { Scissors, Sparkles, Waves, Image as ImageIcon } from 'lucide-react';
import { ServiceItem, buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
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
    }
  };

  const delayClass =
    index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : '';

  return (
    <div
      className={`group flex flex-col rounded-2xl overflow-hidden bg-white border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal-on-scroll ${delayClass} ${
        isPool
          ? 'border-[#0A84C9]/30 hover:border-[#0A84C9] shadow-sm'
          : 'border-[#2B921D]/20 hover:border-[#2B921D] shadow-sm'
      }`}
    >
      {/* 4:3 Aspect Ratio Image with Skeleton Screen */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
        
        {/* Skeleton Screen Placeholder */}
        {!isLoaded && (
          <div
            className="absolute inset-0 skeleton-shimmer z-10 flex flex-col items-center justify-center p-4 transition-opacity duration-300"
            aria-hidden="true"
          >
            {/* Pulsing center icon placeholder */}
            <div className="w-12 h-12 rounded-full bg-neutral-300/60 flex items-center justify-center text-neutral-400 mb-2 animate-pulse">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div className="h-2.5 w-24 bg-neutral-300/60 rounded-full animate-pulse" />

            {/* Skeleton badge placeholder */}
            <div className="absolute top-3 left-3 w-28 h-6 bg-neutral-300/70 rounded-full animate-pulse" />
          </div>
        )}

        {/* Real Service Image */}
        <img
          src={service.image}
          alt={service.alt}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          }`}
          loading="lazy"
          width="600"
          height="450"
        />

        {/* Category badge on photo (fades in once loaded or positioned above) */}
        <div
          className={`absolute top-3 left-3 z-20 transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md ${
              isPool ? 'bg-[#0A84C9]/90' : 'bg-[#0A2F0D]/90'
            }`}
          >
            {renderIcon()}
            <span>{service.shortTitle}</span>
          </span>
        </div>
      </div>

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
          {/* Click tracking hook comment: Google Ads / Meta Pixel */}
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
