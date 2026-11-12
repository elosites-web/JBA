import React, { useState } from 'react';
import { Phone, MapPin, User, Shield, ChevronUp } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#051a07] text-white border-t border-[#165C2A]/60 pt-10 pb-32 sm:pb-36 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Brand, Business Data & Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#165C2A]/40">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo height={56} />
            <p className="text-sm font-semibold text-emerald-100/90 leading-relaxed">
              {siteConfig.brand.fullName}
            </p>
            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-sm">
              Serviços de corte de grama com roçadeira, poda de plantas com tesourão de jardineiro, limpeza de piscinas e paisagismo em Jundiaí.
            </p>
          </div>

          {/* Business & Responsible Data Column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-[#77D100]">
              Informações Oficiais
            </h3>

            <ul className="space-y-2.5 text-xs text-emerald-100/90">
              <li className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#77D100] shrink-0" />
                <span>
                  <strong>Responsável:</strong> {siteConfig.brand.responsiblePerson}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#77D100] shrink-0" />
                <span>
                  <strong>Localização:</strong> {siteConfig.brand.fullLocation}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#77D100] shrink-0" />
                <span>
                  <strong>WhatsApp:</strong> {siteConfig.brand.phoneFormatted}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Action Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-[#77D100]">
              Atendimento Direto
            </h3>
            <p className="text-xs text-emerald-200/70 leading-relaxed">
              Solicite uma visita para avaliação e orçamento diretamente pelo aplicativo de mensagens.
            </p>
            <a
              href={buildWhatsAppLink('Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento com a JBA em Jundiaí.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] text-white text-xs font-bold transition-all shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bar with quick navigation back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-b border-[#165C2A]/40 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#77D100] animate-pulse" />
            <span className="text-xs font-semibold text-emerald-100/90 tracking-wide">
              JBA • Serviços Especializados em Jundiaí e Região
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao início da página"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0e3b12] hover:bg-[#165C2A] active:bg-[#0A2F0D] text-emerald-100 hover:text-white border border-[#2B921D]/50 hover:border-[#77D100] shadow-md hover:shadow-emerald-950/60 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] cursor-pointer"
          >
            <span>Voltar ao Topo</span>
            <ChevronUp className="w-4 h-4 text-[#77D100] transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Legal, AI disclaimer & LGPD notes (lg:pr-80 xl:pr-96 reserves space on desktop so floating WhatsApp + tooltip never overlaps) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-emerald-200/60 text-center md:text-left lg:pr-80 xl:pr-96">
          <div className="space-y-1.5 max-w-xl">
            <p>
              © {currentYear} {siteConfig.brand.fullName}. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-emerald-300/50">
              * {siteConfig.disclaimer.aiImagesText}
            </p>
            <p className="text-[11px] text-emerald-300/50">
              Este site não armazena dados em servidores próprios. As mensagens preenchidas são direcionadas diretamente ao WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center md:items-end gap-3 text-[11px] shrink-0">
            <span className="flex items-center gap-1.5 text-emerald-300/70">
              <Shield className="w-3.5 h-3.5 text-[#77D100]" />
              <span>Privacidade e transparência</span>
            </span>

            <span className="hidden sm:inline text-emerald-600">•</span>

            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="text-[#77D100] hover:text-white underline font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] rounded cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>
        </div>

      </div>

      {/* Accessible Privacy Notice Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </footer>
  );
};
