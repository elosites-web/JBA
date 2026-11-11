import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, ZoomIn } from 'lucide-react';
import { GalleryItem, buildWhatsAppLink } from '../config/siteConfig';

interface GalleryModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset imageLoaded when item changes
  useEffect(() => {
    setImageLoaded(false);
  }, [item?.id]);

  // Lock background scroll when open & handle keyboard events
  useEffect(() => {
    if (!isOpen || !item) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, item, items, onClose, onNavigate]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevItem = items[(currentIndex - 1 + items.length) % items.length];
  const nextItem = items[(currentIndex + 1) % items.length];

  const isPool = item.category === 'limpeza-de-piscinas';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0A2F0D] text-white border border-[#2B921D]/40 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Counter and Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#165C2A]/60">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                isPool ? 'bg-[#0A84C9] text-white' : 'bg-[#2B921D] text-white'
              }`}
            >
              {item.categoryLabel}
            </span>
            <span className="text-xs text-emerald-200/70 font-medium">
              Foto {currentIndex + 1} de {items.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-emerald-200 hover:text-white hover:bg-[#165C2A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
            aria-label="Fechar visualização ampliada"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container with Nav Buttons */}
        <div className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden flex items-center justify-center">
          {/* Skeleton Shimmer while loading */}
          {!imageLoaded && (
            <div className="absolute inset-0 skeleton-shimmer flex items-center justify-center z-10">
              <ZoomIn className="w-8 h-8 text-neutral-400 animate-pulse" />
            </div>
          )}

          <img
            src={item.image}
            alt={item.alt}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Previous Button */}
          <button
            type="button"
            onClick={() => onNavigate(prevItem)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#0A2F0D]/80 hover:bg-[#165C2A] text-white border border-[#2B921D]/50 shadow-lg backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
            aria-label="Foto anterior (Seta esquerda)"
            title="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => onNavigate(nextItem)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#0A2F0D]/80 hover:bg-[#165C2A] text-white border border-[#2B921D]/50 shadow-lg backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
            aria-label="Próxima foto (Seta direita)"
            title="Próxima"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Details & CTA Footer */}
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#072309] border-t border-[#165C2A]/60">
          <div className="space-y-1.5 max-w-xl text-left">
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              {item.description}
            </p>
            <p className="text-[11px] text-emerald-300/50 italic pt-1">
              * Imagem ilustrativa representativa do padrão de serviço executado pela JBA em Jundiaí.
            </p>
          </div>

          <a
            href={buildWhatsAppLink(item.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white font-bold text-sm shadow-xl transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#77D100]"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Orçar este serviço no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
