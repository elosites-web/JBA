export interface ServiceItem {
  id: 'corte-de-grama' | 'poda-de-plantas' | 'limpeza-de-piscinas' | 'paisagismo';
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  srcSet?: string;
  alt: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'corte-de-grama' | 'poda-de-plantas' | 'limpeza-de-piscinas' | 'paisagismo';
  categoryLabel: string;
  image: string;
  srcSet?: string;
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
    fullName: 'JBA — Serviço de Jardinagem, Paisagismo e Limpeza de Piscinas',
    shortName: 'JBA Jardinagem, Paisagismo e Piscinas',
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
    title: 'Jardinagem, paisagismo e limpeza de piscinas em Jundiaí.',
    subtitle:
      'A JBA oferece serviços de jardinagem, paisagismo e limpeza de piscinas em Jundiaí, SP.',
    ctaText: 'Consultar visita e orçamento',
  },
  services: [
    {
      id: 'corte-de-grama',
      title: 'Corte de grama',
      shortTitle: 'Corte de grama',
      description:
        'Cuidado com a grama e a vegetação do seu espaço, utilizando roçadeira.',
      image: '/images/foto-corte-grama.webp',
      srcSet:
        '/images/foto-corte-grama-400w.webp 400w, /images/foto-corte-grama-800w.webp 800w, /images/foto-corte-grama.webp 1200w',
      alt: 'Fotografia ilustrativa de corte de grama com roçadeira.',
      ctaText: 'Solicitar avaliação',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de corte de grama em Jundiaí.',
    },
    {
      id: 'poda-de-plantas',
      title: 'Poda de plantas',
      shortTitle: 'Poda de plantas',
      description:
        'Poda e cuidado de plantas e vegetação com tesourão de jardineiro.',
      image: '/images/foto-poda-plantas.webp',
      srcSet:
        '/images/foto-poda-plantas-400w.webp 400w, /images/foto-poda-plantas-800w.webp 800w, /images/foto-poda-plantas.webp 1200w',
      alt: 'Fotografia ilustrativa de poda de plantas com tesourão de jardineiro.',
      ctaText: 'Solicitar avaliação',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de poda de plantas em Jundiaí.',
    },
    {
      id: 'limpeza-de-piscinas',
      title: 'Limpeza de piscinas',
      shortTitle: 'Limpeza de piscina',
      description:
        'Serviço de limpeza de piscinas. Consulte os detalhes diretamente pelo WhatsApp.',
      image: '/images/foto-limpeza-piscina.webp',
      srcSet:
        '/images/foto-limpeza-piscina-400w.webp 400w, /images/foto-limpeza-piscina-800w.webp 800w, /images/foto-limpeza-piscina.webp 1200w',
      alt: 'Fotografia ilustrativa de piscina limpa com água tratada.',
      ctaText: 'Solicitar avaliação',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de limpeza de piscina em Jundiaí.',
    },
    {
      id: 'paisagismo',
      title: 'Paisagismo',
      shortTitle: 'Paisagismo',
      description:
        'Serviços de paisagismo para valorizar e organizar áreas verdes, com avaliação presencial das características do espaço.',
      image: '/images/foto-plantas-paisagismo.webp',
      srcSet:
        '/images/foto-plantas-paisagismo-400w.webp 400w, /images/foto-plantas-paisagismo-800w.webp 800w, /images/foto-plantas-paisagismo.webp 1200w',
      alt: 'Fotografia ilustrativa de plantas ornamentais e arranjo de paisagismo em área externa.',
      ctaText: 'Solicitar avaliação',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de paisagismo em Jundiaí.',
    },
  ],
  gallery: [
    {
      id: 'galeria-corte-grama-1',
      title: 'Corte de Grama e Manutenção',
      category: 'corte-de-grama',
      categoryLabel: 'Corte de Grama',
      image: '/images/foto-corte-grama.webp',
      srcSet:
        '/images/foto-corte-grama-400w.webp 400w, /images/foto-corte-grama-800w.webp 800w, /images/foto-corte-grama.webp 1200w',
      alt: 'Fotografia ilustrativa de corte de grama em área ajardinada.',
      description:
        'Cuidado e corte de grama com roçadeira em áreas ajardinadas.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de corte de grama em Jundiaí.',
    },
    {
      id: 'galeria-poda-plantas-1',
      title: 'Poda de Cerca Viva e Arbustos',
      category: 'poda-de-plantas',
      categoryLabel: 'Poda de Plantas',
      image: '/images/foto-poda-plantas.webp',
      srcSet:
        '/images/foto-poda-plantas-400w.webp 400w, /images/foto-poda-plantas-800w.webp 800w, /images/foto-poda-plantas.webp 1200w',
      alt: 'Fotografia ilustrativa de poda de plantas com tesourão de jardineiro.',
      description:
        'Poda e alinhamento de plantas, arbustos e cerca viva com tesourão de jardineiro.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de poda de plantas em Jundiaí.',
    },
    {
      id: 'galeria-limpeza-piscina-1',
      title: 'Limpeza de Piscina',
      category: 'limpeza-de-piscinas',
      categoryLabel: 'Limpeza de Piscina',
      image: '/images/foto-limpeza-piscina.webp',
      srcSet:
        '/images/foto-limpeza-piscina-400w.webp 400w, /images/foto-limpeza-piscina-800w.webp 800w, /images/foto-limpeza-piscina.webp 1200w',
      alt: 'Fotografia ilustrativa de piscina limpa com tratamento de água.',
      description:
        'Limpeza e aspiração de piscinas com equipamentos adequados.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de limpeza de piscina em Jundiaí.',
    },
    {
      id: 'galeria-corte-grama-2',
      title: 'Corte de Gramado Amplo',
      category: 'corte-de-grama',
      categoryLabel: 'Corte de Grama',
      image: '/images/foto-gramado-amplo.webp',
      alt: 'Fotografia ilustrativa de corte de gramado em área ampla.',
      description:
        'Corte de grama com roçadeira em áreas amplas.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de corte de grama em Jundiaí.',
    },
    {
      id: 'galeria-poda-plantas-2',
      title: 'Alinhamento e Cuidado de Folhagens',
      category: 'poda-de-plantas',
      categoryLabel: 'Poda de Plantas',
      image: '/images/foto-cerca-viva.webp',
      alt: 'Fotografia ilustrativa de poda de cerca viva ornamental.',
      description:
        'Alinhamento e manutenção de cercas vivas e plantas ornamentais.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de poda de plantas em Jundiaí.',
    },
    {
      id: 'galeria-limpeza-piscina-2',
      title: 'Área Externa com Piscina Limpa',
      category: 'limpeza-de-piscinas',
      categoryLabel: 'Limpeza de Piscina',
      image: '/images/foto-piscina-cristalina.webp',
      alt: 'Fotografia ilustrativa de área externa com piscina limpa.',
      description:
        'Serviço de limpeza periódica de piscinas residenciais.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de limpeza de piscina em Jundiaí.',
    },
    {
      id: 'galeria-paisagismo-1',
      title: 'Arranjos e Paisagismo',
      category: 'paisagismo',
      categoryLabel: 'Paisagismo',
      image: '/images/foto-plantas-paisagismo.webp',
      srcSet:
        '/images/foto-plantas-paisagismo-400w.webp 400w, /images/foto-plantas-paisagismo-800w.webp 800w, /images/foto-plantas-paisagismo.webp 1200w',
      alt: 'Fotografia ilustrativa de plantas ornamentais e arranjo de paisagismo em área externa.',
      description:
        'Referência visual para organização e valorização de áreas verdes com plantas ornamentais.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de paisagismo em Jundiaí.',
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Solicite uma visita',
      description:
        'Entre em contato pelo WhatsApp, informe o serviço desejado e indique sua preferência de data para uma visita.',
    },
    {
      step: 2,
      title: 'Avaliação presencial e orçamento',
      description:
        'Aristeu vai até o imóvel para avaliar pessoalmente as características do local e apresentar o orçamento.',
    },
    {
      step: 3,
      title: 'Combine a realização do serviço',
      description:
        'Após conhecer o orçamento e alinhar os detalhes diretamente com Aristeu, você poderá combinar a realização do serviço.',
    },
  ],
  whyChooseUs: [
    {
      title: 'Atendimento em Jundiaí, SP',
      description:
        'Serviços prestados na cidade de Jundiaí, SP.',
    },
    {
      title: 'Quatro serviços em um único canal',
      description:
        'Corte de grama com roçadeira, poda de plantas com tesourão de jardineiro, limpeza de piscinas e paisagismo.',
    },
    {
      title: 'Contato direto pelo WhatsApp com Aristeu Barbosa',
      description:
        'Sem intermediários: você conversa diretamente com quem é responsável pelo serviço.',
    },
  ],
  serviceArea: {
    title: 'Atendimento em Jundiaí',
    text: 'A JBA oferece serviços de jardinagem, paisagismo e limpeza de piscinas em Jundiaí, SP.',
    ctaText: 'Consultar visita e orçamento',
    whatsappMessage:
      'Olá, Aristeu! Gostaria de consultar a disponibilidade para uma visita de avaliação em Jundiaí.',
  },
  faq: [
    {
      question: 'A JBA trabalha com preços fixos?',
      answer:
        'Não. Cada serviço depende das características e das condições do local. Por isso, Aristeu realiza uma avaliação presencial antes de apresentar o orçamento.',
    },
    {
      question: 'Como funciona a visita para orçamento?',
      answer:
        'Você entra em contato pelo WhatsApp, informa o serviço desejado e combina uma data com Aristeu. Ele vai até o imóvel para avaliar o serviço pessoalmente e apresentar o orçamento. A visita só fica confirmada após o alinhamento direto pelo WhatsApp.',
    },
    {
      question: 'Posso escolher o dia e o horário da visita?',
      answer:
        'Você pode informar sua preferência de data e período no formulário. Aristeu entrará em contato para verificar a disponibilidade e confirmar o agendamento.',
    },
    {
      question: 'Quais serviços posso solicitar à JBA?',
      answer:
        'Você pode solicitar corte de grama com roçadeira, poda de plantas e cerca viva com tesourão de jardineiro, limpeza de piscinas e serviços de paisagismo.',
    },
    {
      question: 'Em qual cidade a JBA atende?',
      answer:
        'A JBA atende na cidade de Jundiaí, SP.',
    },
    {
      question: 'O que preciso informar ao solicitar uma visita?',
      answer:
        'Informe qual serviço você necessita (corte de grama, poda de plantas, limpeza de piscina ou paisagismo), se desejar informe o bairro em Jundiaí e sua preferência de data e período para a visita de avaliação.',
    },
    {
      question: 'O que acontece depois da visita?',
      answer:
        'Durante a visita, Aristeu avalia pessoalmente as características e condições do local para apresentar o orçamento. Com o orçamento aprovado, vocês combinam a realização do serviço.',
    },
  ],
  finalCta: {
    title: 'Vamos conversar sobre seu jardim, paisagismo ou piscina?',
    text: 'Entre em contato com a JBA e solicite uma visita para avaliação e orçamento do serviço que você procura em Jundiaí.',
    ctaText: 'Solicitar visita no WhatsApp',
    whatsappMessage:
      'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento com a JBA em Jundiaí.',
  },
  disclaimer: {
    aiImagesText: 'Fotografias ilustrativas de banco de imagens para referência visual dos serviços da JBA.',
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
