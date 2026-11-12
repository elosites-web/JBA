import React, { useState, useEffect } from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let isOutsideHero = false;

    const evaluateHeroPosition = () => {
      const heroEl = document.getElementById('inicio');
      if (!heroEl) return;

      const rect = heroEl.getBoundingClientRect();
      // Considered completely left only when the bottom of #inicio is above the top of the viewport
      const hasLeftHero = rect.bottom <= 0;

      if (hasLeftHero) {
        if (!isOutsideHero) {
          isOutsideHero = true;
          if (timer) clearTimeout(timer);
          // Start 35-second delay timer after leaving Hero
          timer = setTimeout(() => {
            setIsVisible(true);
            setIsBouncing(true);
          }, 35000);
        }
      } else {
        // Visitor is viewing the Hero or has returned into it
        if (isOutsideHero) {
          isOutsideHero = false;
        }
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        // Button must never appear while viewing Hero
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', evaluateHeroPosition, { passive: true });
    window.addEventListener('resize', evaluateHeroPosition, { passive: true });

    // Initial check
    evaluateHeroPosition();

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('scroll', evaluateHeroPosition);
      window.removeEventListener('resize', evaluateHeroPosition);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ${
        isVisible
          ? `opacity-100 translate-y-0 scale-100 ${isBouncing ? 'animate-whatsapp-bounce' : ''}`
          : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
      onAnimationEnd={() => setIsBouncing(false)}
    >
      <a
        href={buildWhatsAppLink('Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento em Jundiaí.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar visita para orçamento no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full jba-floating-whatsapp text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#77D100] cursor-pointer"
      >
        {/* Subtle gradient-matched pulse wave */}
        <span className="jba-whatsapp-pulse" aria-hidden="true" />

        {/* Tactile inner glossy highlight reflection */}
        <span className="jba-whatsapp-highlight" aria-hidden="true" />

        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]" />

        {/* Hover / focus tooltip for desktop */}
        <span
          role="tooltip"
          className="absolute right-full mr-3 hidden sm:group-hover:flex items-center whitespace-nowrap rounded-lg bg-[#0A2F0D] px-3 py-1.5 text-xs font-bold text-white shadow-lg border border-[#165C2A] transition-opacity pointer-events-none"
        >
          Solicitar visita no WhatsApp
        </span>
      </a>
    </div>
  );
};
