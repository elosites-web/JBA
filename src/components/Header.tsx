import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Jundiaí', href: '#atendimento' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A2F0D]/95 backdrop-blur-md border-b border-[#165C2A]/60 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] rounded-lg p-1"
            aria-label="JBA Jardinagem e Piscinas - Início"
          >
            <BrandLogo height={52} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-emerald-100/90 hover:text-[#77D100] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] rounded px-1.5 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.brand.whatsappNumber}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-emerald-200/80 hover:text-white transition-colors"
              title="Ligar para JBA"
            >
              <Phone className="w-3.5 h-3.5 text-[#77D100]" />
              <span>{siteConfig.brand.phoneFormatted}</span>
            </a>

            {/* Click tracking hook comment: Google Ads / Meta Pixel conversion trigger */}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white text-sm font-bold shadow-md hover:shadow-emerald-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
              /* FUTURE TRACKING: onClick={() => window.gtag?.('event', 'conversion', { send_to: '...' })} */
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-full bg-[#2B921D] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
              aria-label="Orçamento no WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-[#165C2A]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden bg-[#0A2F0D] border-b border-[#165C2A] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl"
          role="region"
          aria-label="Menu móvel"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-emerald-100 hover:bg-[#165C2A]/60 hover:text-[#77D100] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#165C2A]/60 space-y-3">
            <div className="flex items-center gap-2 text-xs text-emerald-300/80 px-3">
              <Phone className="w-3.5 h-3.5 text-[#77D100]" />
              <span>{siteConfig.brand.phoneFormatted} • Jundiaí, SP</span>
            </div>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] text-white font-bold shadow-md transition-all text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Pedir orçamento no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
