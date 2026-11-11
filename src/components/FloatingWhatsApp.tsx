import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after user scrolls past first 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      {/* Click tracking hook comment: Google Ads / Meta Pixel */}
      <a
        href={buildWhatsAppLink('Olá, Aristeu! Gostaria de pedir um orçamento para serviços em Jundiaí.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Aristeu no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white shadow-2xl shadow-emerald-950/50 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#77D100]"
        /* FUTURE TRACKING: onClick={() => window.gtag?.('event', 'conversion', { send_to: '...', event_category: 'floating_whatsapp' })} */
      >
        {/* Subtle pulse wave */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none duration-1000"
          aria-hidden="true"
        />

        <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 fill-white relative z-10" />

        {/* Hover / focus tooltip for desktop */}
        <span
          role="tooltip"
          className="absolute right-full mr-3 hidden sm:group-hover:flex items-center whitespace-nowrap rounded-lg bg-[#0A2F0D] px-3 py-1.5 text-xs font-bold text-white shadow-lg border border-[#165C2A] transition-opacity"
        >
          Orçamento no WhatsApp
        </span>
      </a>
    </div>
  );
};
