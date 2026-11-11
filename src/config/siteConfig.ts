export interface ServiceItem {
  id: 'corte-de-grama' | 'poda-de-plantas' | 'limpeza-de-piscinas';
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  alt: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'corte-de-grama' | 'poda-de-plantas' | 'limpeza-de-piscinas';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  whatsappMessage: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    fullName: string;
    shortName: string;
    responsiblePerson: string;
    city: string;
    state: string;
    fullLocation: string;
    phoneFormatted: string;
    phoneNumberRaw: string;
    whatsappNumber: string;
    whatsappBaseUrl: string;
    logoUrl: string;
    logoTransparentUrl: string;
    faviconUrl: string;
  };
  services: ServiceItem[];
  gallery: GalleryItem[];
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  howItWorks: {
    step: number;
    title: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  serviceArea: {
    title: string;
    text: string;
    ctaText: string;
    whatsappMessage: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
  finalCta: {
    title: string;
    text: string;
    ctaText: string;
    whatsappMessage: string;
  };
  disclaimer: {
    aiImagesText: string;
    privacyNote: string;
  };

  // Optional business properties (null or empty by default - nothing rendered if null)
  optionalInfo: {
    publicAddress: string | null;
    openingHours: string | null;
    neighborhoodsList: string[] | null;
    instagramUrl: string | null;
    paymentMethods: string[] | null;
    yearsOfExperience: string | null;
    serviceExtraDetails: string | null;
    authorizedRealPhotos: string[] | null;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'JBA',
    fullName: 'JBA — Serviço de Jardinagem e Limpeza de Piscinas',
    shortName: 'JBA Jardinagem e Piscinas',
    responsiblePerson: 'Aristeu Barbosa',
    city: 'Jundiaí',
    state: 'SP',
    fullLocation: 'Jundiaí, SP',
    phoneFormatted: '(11) 97702-1656',
    phoneNumberRaw: '5511977021656',
    whatsappNumber: '5511977021656',
    whatsappBaseUrl: 'https://wa.me/5511977021656',
    logoUrl: '/images/jba-logo.png',
    logoTransparentUrl: '/images/jba-logo.png',
    faviconUrl: '/images/favicon-512x512.png',
  },
  hero: {
    title: 'Jardinagem e limpeza de piscinas em Jundiaí.',
    subtitle:
      'Conheça os serviços da JBA em corte de grama, poda de plantas e limpeza de piscinas. Solicite seu orçamento pelo WhatsApp.',
    ctaText: 'Pedir orçamento no WhatsApp',
  },
  services: [
    {
      id: 'corte-de-grama',
      title: 'Corte de grama',
      shortTitle: 'Corte de grama',
      description:
        'Cuidado com a grama e a vegetação do seu espaço, utilizando roçadeira.',
      image: '/images/corte-de-grama.webp',
      alt: 'Corte de grama com roçadeira em jardim.',
      ctaText: 'Orçar corte de grama',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar um orçamento para corte de grama em Jundiaí.',
    },
    {
      id: 'poda-de-plantas',
      title: 'Poda de plantas',
      shortTitle: 'Poda de plantas',
      description:
        'Poda e cuidado de plantas e vegetação com tesourão de jardineiro.',
      image: '/images/poda-de-plantas.webp',
      alt: 'Poda de plantas e cerca viva com tesourão de jardineiro.',
      ctaText: 'Orçar poda de plantas',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar um orçamento para poda de plantas em Jundiaí.',
    },
    {
      id: 'limpeza-de-piscinas',
      title: 'Limpeza de piscinas',
      shortTitle: 'Limpeza de piscina',
      description:
        'Serviço de limpeza de piscinas. Consulte os detalhes diretamente pelo WhatsApp.',
      image: '/images/limpeza-de-piscinas.webp',
      alt: 'Limpeza de piscina com equipamento telescópico.',
      ctaText: 'Orçar limpeza de piscina',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar um orçamento para limpeza de piscina em Jundiaí.',
    },
  ],
  gallery: [
    {
      id: 'galeria-corte-grama-1',
      title: 'Gramado Bem Aparado',
      category: 'corte-de-grama',
      categoryLabel: 'Corte de Grama',
      image: '/images/galeria-corte-grama-1.webp',
      alt: 'Gramado bem aparado com canteiros floridos em Jundiaí.',
      description:
        'Corte uniforme e alinhamento de bordas ao longo dos canteiros e calçada de pedra.',
      whatsappMessage:
        'Olá, Aristeu! Vi o trabalho de corte de grama na galeria e gostaria de um orçamento em Jundiaí.',
    },
    {
      id: 'galeria-poda-plantas-1',
      title: 'Poda e Nivelamento de Cerca Viva',
      category: 'poda-de-plantas',
      categoryLabel: 'Poda de Plantas',
      image: '/images/galeria-poda-plantas-1.webp',
      alt: 'Cerca viva verde densa com linhas retas e arbustos esculturais podados.',
      description:
        'Alinhamento com tesourão de jardineiro, acabamento reto e preservação da folhagem saudável.',
      whatsappMessage:
        'Olá, Aristeu! Vi a poda de cerca viva na galeria e gostaria de solicitar um orçamento para poda em Jundiaí.',
    },
    {
      id: 'galeria-limpeza-piscina-1',
      title: 'Piscina Cristalina e Cuidada',
      category: 'limpeza-de-piscinas',
      categoryLabel: 'Limpeza de Piscina',
      image: '/images/galeria-limpeza-piscina-1.webp',
      alt: 'Piscina de azulejos azuis com água limpa e espelhada.',
      description:
        'Aspiração do fundo, remoção de folhas e limpeza das bordas para água limpa e transparente.',
      whatsappMessage:
        'Olá, Aristeu! Vi a limpeza de piscina na galeria e gostaria de solicitar um orçamento em Jundiaí.',
    },
    {
      id: 'galeria-corte-grama-2',
      title: 'Corte de Grama em Área Ampla',
      category: 'corte-de-grama',
      categoryLabel: 'Corte de Grama',
      image: '/images/galeria-corte-grama-2.webp',
      alt: 'Área ampla de gramado verde em Jundiaí com corte alinhado.',
      description:
        'Corte de extensões de gramado com roçadeira e descarte organizado de sobras.',
      whatsappMessage:
        'Olá, Aristeu! Vi o corte de grama em área ampla na galeria e gostaria de um orçamento em Jundiaí.',
    },
    {
      id: 'galeria-poda-plantas-2',
      title: 'Paisagismo e Poda de Folhagens Tropicais',
      category: 'poda-de-plantas',
      categoryLabel: 'Poda de Plantas',
      image: '/images/galeria-poda-plantas-2.webp',
      alt: 'Arbustos tropicais, palmeiras e plantas ornamentais podadas em jardim.',
      description:
        'Cuidado com palmeiras, arbustos e canteiros, promovendo crescimento saudável e visual harmonioso.',
      whatsappMessage:
        'Olá, Aristeu! Vi o cuidado com plantas ornamentais na galeria e gostaria de um orçamento em Jundiaí.',
    },
    {
      id: 'galeria-limpeza-piscina-2',
      title: 'Área de Lazer com Piscina Tratada',
      category: 'limpeza-de-piscinas',
      categoryLabel: 'Limpeza de Piscina',
      image: '/images/galeria-limpeza-piscina-2.webp',
      alt: 'Piscina com água azul pura refletindo árvores ao lado de deck de madeira.',
      description:
        'Manutenção de piscina, aspiração e equilíbrio para água limpa e convidativa.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de um orçamento para manutenção de piscina em Jundiaí.',
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Peça seu orçamento',
      description:
        'Entre em contato pelo WhatsApp e informe qual serviço você precisa para o seu imóvel.',
    },
    {
      step: 2,
      title: 'Combine os detalhes',
      description:
        'Converse diretamente com Aristeu Barbosa para alinhar todas as informações do atendimento.',
    },
    {
      step: 3,
      title: 'Serviço realizado',
      description:
        'O serviço é realizado com zelo e cuidado conforme o que foi acordado entre as partes.',
    },
  ],
  whyChooseUs: [
    {
      title: 'Atendimento em Jundiaí, SP',
      description:
        'Serviços prestados na cidade de Jundiaí, SP.',
    },
    {
      title: 'Três serviços em um único canal',
      description:
        'Corte de grama com roçadeira, poda de plantas com tesourão de jardineiro e limpeza de piscinas.',
    },
    {
      title: 'Contato direto pelo WhatsApp com Aristeu Barbosa',
      description:
        'Sem intermediários: você conversa diretamente com quem é responsável pelo serviço.',
    },
  ],
  serviceArea: {
    title: 'Atendimento em Jundiaí',
    text: 'A JBA oferece serviços de jardinagem e limpeza de piscinas em Jundiaí, SP.',
    ctaText: 'Consultar disponibilidade',
    whatsappMessage:
      'Olá, Aristeu! Gostaria de consultar a disponibilidade de atendimento para serviços em Jundiaí.',
  },
  faq: [
    {
      question: 'Quais serviços posso solicitar à JBA?',
      answer:
        'Você pode solicitar corte de grama com roçadeira, poda de plantas e cerca viva com tesourão de jardineiro, e limpeza de piscinas residenciais.',
    },
    {
      question: 'Em qual cidade a JBA atende?',
      answer:
        'A JBA atende na cidade de Jundiaí, SP.',
    },
    {
      question: 'Como faço para solicitar um orçamento?',
      answer:
        'Basta clicar em qualquer botão do WhatsApp deste site ou preencher o formulário abaixo. A mensagem será direcionada diretamente para o WhatsApp do Aristeu Barbosa.',
    },
    {
      question: 'O que preciso informar ao pedir um orçamento?',
      answer:
        'Informe qual serviço você necessita (corte de grama, poda de plantas ou limpeza de piscina), se desejar informe o bairro em Jundiaí e descreva brevemente o tamanho ou estado da área.',
    },
    {
      question: 'O que está incluído em cada serviço?',
      answer:
        'Cada atendimento é alinhado de forma transparente conforme a necessidade do seu espaço. Converse diretamente com o Aristeu pelo WhatsApp para alinhar os detalhes específicos do seu pedido.',
    },
  ],
  finalCta: {
    title: 'Vamos conversar sobre seu jardim ou piscina?',
    text: 'Entre em contato com a JBA e solicite um orçamento para o serviço que você procura em Jundiaí.',
    ctaText: 'Pedir orçamento no WhatsApp',
    whatsappMessage:
      'Olá, Aristeu! Gostaria de solicitar um orçamento para serviços em Jundiaí.',
  },
  disclaimer: {
    aiImagesText: 'Imagens ilustrativas geradas por inteligência artificial.',
    privacyNote:
      'As informações preenchidas serão utilizadas apenas para montar sua mensagem no WhatsApp. Este site não possui armazenamento ou envio de dados para um servidor.',
  },
  // Optional business properties (null or empty by default - nothing rendered if null)
  optionalInfo: {
    publicAddress: null,
    openingHours: null,
    neighborhoodsList: null,
    instagramUrl: null,
    paymentMethods: null,
    yearsOfExperience: null,
    serviceExtraDetails: null,
    authorizedRealPhotos: null,
  },
};

/**
 * Helper to build sanitized WhatsApp URLs
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.brand.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
