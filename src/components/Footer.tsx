import React from 'react';
import { MessageCircle, Phone, MapPin, User, Shield } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051a07] text-white border-t border-[#165C2A]/60 pt-14 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#165C2A]/40">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo height={56} />
            <p className="text-sm font-semibold text-emerald-100/90 leading-relaxed">
              {siteConfig.brand.fullName}
            </p>
            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-sm">
              Serviços de corte de grama com roçadeira, poda de plantas com tesourão e limpeza de piscinas residenciais.
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
                  <strong>Telefone/WhatsApp:</strong> {siteConfig.brand.phoneFormatted}
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
              Solicite seu orçamento diretamente pelo aplicativo de mensagens.
            </p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] text-white text-xs font-bold transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Legal, AI disclaimer & LGPD notes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60 text-center md:text-left">
          <div className="space-y-1">
            <p>
              © {currentYear} {siteConfig.brand.fullName}. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-emerald-300/50">
              * {siteConfig.disclaimer.aiImagesText}
            </p>
            <p className="text-[11px] text-emerald-300/50">
              Controlador dos dados de atendimento: {siteConfig.brand.responsiblePerson} (JBA).
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-300/70">
              <Shield className="w-3.5 h-3.5 text-[#77D100]" />
              <span>Sem rastreadores invasivos • Respeito à sua privacidade</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
