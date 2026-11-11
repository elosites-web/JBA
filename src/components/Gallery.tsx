import React, { useState } from 'react';
import { Maximize2, Sparkles, Scissors, Waves, Image as ImageIcon } from 'lucide-react';
import { siteConfig, GalleryItem } from '../config/siteConfig';
import { GalleryModal } from './GalleryModal';

type CategoryFilter = 'todos' | 'corte-de-grama' | 'poda-de-plantas' | 'limpeza-de-piscinas';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filterTabs: { id: CategoryFilter; label: string; icon?: React.ReactNode }[] = [
    { id: 'todos', label: 'Todos os Serviços' },
    {
      id: 'corte-de-grama',
      label: 'Corte de Grama',
      icon: <Sparkles className="w-3.5 h-3.5 text-[#77D100]" />,
    },
    {
      id: 'poda-de-plantas',
      label: 'Poda de Plantas',
      icon: <Scissors className="w-3.5 h-3.5 text-[#77D100]" />,
    },
    {
      id: 'limpeza-de-piscinas',
      label: 'Limpeza de Piscinas',
      icon: <Waves className="w-3.5 h-3.5 text-[#4FD0FF]" />,
    },
  ];

  const filteredItems =
    activeCategory === 'todos'
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeCategory);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="galeria"
      className="py-16 md:py-24 bg-white text-neutral-900 border-b border-neutral-200"
      aria-labelledby="galeria-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165C2A]/10 border border-[#2B921D]/30 text-[#165C2A] text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-[#2B921D]" />
            <span>Galeria de Trabalhos</span>
          </div>
          <h2
            id="galeria-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2F0D] tracking-tight mb-4"
          >
            Trabalhos e Resultados em Jundiaí
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Veja exemplos do padrão visual e do cuidado aplicado nos serviços de corte de grama, poda de plantas e manutenção de piscinas residenciais.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 reveal-on-scroll reveal-delay-100">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            const count =
              tab.id === 'todos'
                ? siteConfig.gallery.length
                : siteConfig.gallery.filter((i) => i.category === tab.id).length;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] cursor-pointer ${
                  isActive
                    ? 'bg-[#0A2F0D] text-white shadow-md'
                    : 'bg-[#F7FAF6] text-neutral-700 hover:bg-neutral-200/70 border border-neutral-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[#165C2A] text-[#77D100]' : 'bg-neutral-200 text-neutral-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isLoaded = loadedImages[item.id] || false;
            const isPool = item.category === 'limpeza-de-piscinas';
            const delayClass =
              index % 3 === 1
                ? 'reveal-delay-100'
                : index % 3 === 2
                ? 'reveal-delay-200'
                : '';

            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer reveal-on-scroll ${delayClass}`}
                onClick={() => setSelectedItem(item)}
              >
                {/* 4:3 Aspect Ratio Image with Skeleton Shimmer */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  {!isLoaded && (
                    <div
                      className="absolute inset-0 skeleton-shimmer z-10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <ImageIcon className="w-8 h-8 text-neutral-400 animate-pulse" />
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad(item.id)}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    width="600"
                    height="450"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-md backdrop-blur-md ${
                        isPool ? 'bg-[#0A84C9]/90' : 'bg-[#0A2F0D]/90'
                      }`}
                    >
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F0D]/90 via-[#0A2F0D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white z-20">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                      <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-xs text-emerald-100/90 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="text-[11px] text-[#77D100] font-semibold mt-2 inline-flex items-center gap-1">
                      Clique para ampliar e ver detalhes →
                    </span>
                  </div>
                </div>

                {/* Visible Card Footer */}
                <div className="p-4 bg-white text-left">
                  <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#165C2A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer below gallery */}
        <div className="mt-8 text-center reveal-on-scroll reveal-delay-200">
          <p className="text-xs text-neutral-500 italic max-w-xl mx-auto">
            * Imagens ilustrativas geradas por inteligência artificial representando os serviços prestados pela JBA em Jundiaí, SP, até disponibilização das fotos reais pelo Aristeu.
          </p>
        </div>

      </div>

      {/* Enlarged Modal / Lightbox */}
      <GalleryModal
        isOpen={!!selectedItem}
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(item) => setSelectedItem(item)}
      />
    </section>
  );
};
