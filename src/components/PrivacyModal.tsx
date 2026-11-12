import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Shield, ExternalLink, Lock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management and escape key listener
  useEffect(() => {
    if (!isOpen) return;

    // Focus the close button when opened
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body background scroll while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#051a07]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#0A2F0D] text-white border border-[#2B921D]/50 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden z-10 animate-header-fade-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#165C2A]/70 bg-[#0e3b12]/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#165C2A] border border-[#77D100]/40 flex items-center justify-center text-[#77D100]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 id="privacy-modal-title" className="text-lg sm:text-xl font-extrabold text-white">
                Política de Privacidade
              </h2>
              <p className="text-xs text-emerald-200/70">
                {siteConfig.brand.fullName} • Jundiaí, SP
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-[#165C2A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] cursor-pointer"
            aria-label="Fechar política de privacidade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 text-xs sm:text-sm text-emerald-100/90 leading-relaxed overscroll-contain">
          
          <div className="p-4 rounded-xl bg-[#165C2A]/40 border border-[#2B921D]/30 flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#77D100] shrink-0 mt-0.5" />
            <p className="text-xs text-emerald-100">
              <strong>Compromisso de Transparência:</strong> Este website foi construído para apresentar os serviços da JBA e facilitar o contato direto com Aristeu Barbosa sem intermediários ou rastreamento oculto.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-1.5 text-[#77D100]">
              1. Ausência de Banco de Dados Próprio
            </h3>
            <p>
              Este website institucional não possui servidor backend próprio para gravação, armazenamento ou processamento de bancos de dados contendo dados cadastrais dos visitantes. Nenhuma informação preenchida neste site é gravada em bancos de dados administrados pela JBA.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-1.5 text-[#77D100]">
              2. Funcionamento do Formulário e Direcionamento ao WhatsApp
            </h3>
            <p>
              O formulário de solicitação de visita e orçamento tem como única função organizar os dados preenchidos pelo usuário (nome, serviço de interesse, bairro em Jundiaí e preferências de agendamento) em um formato de texto amigável.
            </p>
            <p className="mt-1.5">
              Ao clicar no botão de envio, o visitante é direcionado para o aplicativo oficial do <strong>WhatsApp</strong>, onde a mensagem preenchida é carregada para que o próprio usuário decida enviá-la para o contato de Aristeu Barbosa ({siteConfig.brand.phoneFormatted}).
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-1.5 text-[#77D100]">
              3. Compartilhamento e Tratamento com Terceiros (WhatsApp / Meta)
            </h3>
            <p>
              Ao optar por iniciar o diálogo via WhatsApp, a troca de mensagens e os dados nela contidos passam a ser transmitidos através da infraestrutura técnica da <strong>Meta Platforms, Inc. (WhatsApp)</strong>. O tratamento desses dados em trânsito e no dispositivo é regido exclusivamente pelos Termos de Serviço e pela Política de Privacidade do WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-1.5 text-[#77D100]">
              4. Cookies e Tecnologias de Rastreamento
            </h3>
            <p>
              O website da JBA não utiliza cookies de publicidade direcionada, pixels de conversão invasivos nem ferramentas de rastreamento comportamental de terceiros.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-1.5 text-[#77D100]">
              5. Contato Direto
            </h3>
            <p>
              Para esclarecer dúvidas sobre os serviços, agendamento de visitas ou sobre este aviso, entre em contato diretamente com Aristeu Barbosa pelo WhatsApp: <strong>{siteConfig.brand.phoneFormatted}</strong>.
            </p>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-4 sm:p-5 border-t border-[#165C2A]/70 bg-[#0e3b12]/90 flex items-center justify-between gap-4">
          <a
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-emerald-300/80 hover:text-white inline-flex items-center gap-1 focus:outline-none focus-visible:underline"
          >
            <span>Privacidade do WhatsApp</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white text-xs font-bold transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
};
