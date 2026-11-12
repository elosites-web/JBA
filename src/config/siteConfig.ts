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
      'Corte de grama, poda de plantas, limpeza de piscinas e paisagismo. Fale diretamente com Aristeu e solicite uma visita para avaliação.',
    ctaText: 'Consultar visita e orçamento',
  },
  services: [
    {
      id: 'corte-de-grama',
      title: 'Corte de grama',
      shortTitle: 'Corte de grama',
      description:
        'Corte de grama para cuidar de jardins, quintais e outras áreas gramadas.',
      image: '/images/corte-de-grama.webp',
      srcSet:
        '/images/corte-de-grama-400w.webp 400w, /images/corte-de-grama-800w.webp 800w, /images/corte-de-grama.webp 1200w',
      alt: 'Fotografia ilustrativa de corte de grama por profissional com uniforme da JBA.',
      ctaText: 'Solicitar avaliação',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de corte de grama em Jundiaí.',
    },
    {
      id: 'poda-de-plantas',
      title: 'Poda de plantas',
      shortTitle: 'Poda de plantas',
      description:
        'Poda de plantas, arbustos e cercas vivas.',
      image: '/images/poda-de-plantas.webp',
      srcSet:
        '/images/poda-de-plantas-400w.webp 400w, /images/poda-de-plantas-800w.webp 800w, /images/poda-de-plantas.webp 1200w',
      alt: 'Fotografia ilustrativa de poda de plantas e cerca viva por profissional com uniforme da JBA.',
      ctaText: 'Solicitar avaliação',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de poda de plantas em Jundiaí.',
    },
    {
      id: 'limpeza-de-piscinas',
      title: 'Limpeza de piscinas',
      shortTitle: 'Limpeza de piscinas',
      description:
        'Limpeza de piscinas. Entre em contato para conversar sobre as necessidades do local e solicitar uma avaliação.',
      image: '/images/limpeza-de-piscinas.webp',
      srcSet:
        '/images/limpeza-de-piscinas-400w.webp 400w, /images/limpeza-de-piscinas-800w.webp 800w, /images/limpeza-de-piscinas.webp 1200w',
      alt: 'Fotografia ilustrativa de limpeza de piscinas por profissional com uniforme da JBA.',
      ctaText: 'Solicitar avaliação',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de limpeza de piscinas em Jundiaí.',
    },
    {
      id: 'paisagismo',
      title: 'Paisagismo',
      shortTitle: 'Paisagismo',
      description:
        'Serviços de paisagismo para organização e valorização de áreas verdes, considerando as características de cada espaço.',
      image: '/images/paisagismo.webp',
      srcSet:
        '/images/paisagismo-400w.webp 400w, /images/paisagismo-800w.webp 800w, /images/paisagismo.webp 1200w',
      alt: 'Fotografia ilustrativa de plantio e organização de plantas ornamentais em paisagismo por profissional com uniforme da JBA.',
      ctaText: 'Solicitar avaliação',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de paisagismo em Jundiaí.',
    },
  ],
  gallery: [
    {
      id: 'galeria-corte-grama-1',
      title: 'Manutenção de gramado',
      category: 'corte-de-grama',
      categoryLabel: 'Corte de grama',
      image: '/images/foto-corte-grama.webp',
      srcSet:
        '/images/foto-corte-grama-400w.webp 400w, /images/foto-corte-grama-800w.webp 800w, /images/foto-corte-grama.webp 1200w',
      alt: 'Fotografia ilustrativa de corte de grama em área ajardinada.',
      description:
        'Corte de grama em área ajardinada.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de corte de grama em Jundiaí.',
    },
    {
      id: 'galeria-poda-plantas-1',
      title: 'Poda de cerca viva',
      category: 'poda-de-plantas',
      categoryLabel: 'Poda de plantas',
      image: '/images/foto-poda-plantas.webp',
      srcSet:
        '/images/foto-poda-plantas-400w.webp 400w, /images/foto-poda-plantas-800w.webp 800w, /images/foto-poda-plantas.webp 1200w',
      alt: 'Fotografia ilustrativa de poda de plantas e cerca viva.',
      description:
        'Alinhamento e manutenção de arbustos e cercas vivas.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de poda de plantas em Jundiaí.',
    },
    {
      id: 'galeria-limpeza-piscina-1',
      title: 'Tratamento e limpeza de piscinas',
      category: 'limpeza-de-piscinas',
      categoryLabel: 'Limpeza de piscinas',
      image: '/images/foto-limpeza-piscina.webp',
      srcSet:
        '/images/foto-limpeza-piscina-400w.webp 400w, /images/foto-limpeza-piscina-800w.webp 800w, /images/foto-limpeza-piscina.webp 1200w',
      alt: 'Fotografia ilustrativa de piscina residencial com água limpa e tratada.',
      description:
        'Higienização física e limpeza periódica de piscinas.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de limpeza de piscinas em Jundiaí.',
    },
    {
      id: 'galeria-corte-grama-2',
      title: 'Cuidado de gramado amplo',
      category: 'corte-de-grama',
      categoryLabel: 'Corte de grama',
      image: '/images/foto-gramado-amplo.webp',
      alt: 'Fotografia ilustrativa de terreno amplo com gramado bem aparado.',
      description:
        'Aparo uniforme da vegetação em terreno espaçoso.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de corte de grama em Jundiaí.',
    },
    {
      id: 'galeria-poda-plantas-2',
      title: 'Poda de folhagens ornamentais',
      category: 'poda-de-plantas',
      categoryLabel: 'Poda de plantas',
      image: '/images/foto-cerca-viva.webp',
      alt: 'Fotografia ilustrativa de plantas e folhagens ornamentais podadas.',
      description:
        'Poda cuidadosa para valorização estética de plantas de jardim.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de poda de plantas em Jundiaí.',
    },
    {
      id: 'galeria-limpeza-piscina-2',
      title: 'Piscina residencial limpa',
      category: 'limpeza-de-piscinas',
      categoryLabel: 'Limpeza de piscinas',
      image: '/images/foto-piscina-cristalina.webp',
      alt: 'Fotografia ilustrativa de área externa com piscina limpa.',
      description:
        'Espaço de lazer com água tratada e bordas limpas.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de limpeza de piscinas em Jundiaí.',
    },
    {
      id: 'galeria-paisagismo-1',
      title: 'Composição paisagística',
      category: 'paisagismo',
      categoryLabel: 'Paisagismo',
      image: '/images/foto-plantas-paisagismo.webp',
      srcSet:
        '/images/foto-plantas-paisagismo-400w.webp 400w, /images/foto-plantas-paisagismo-800w.webp 800w, /images/foto-plantas-paisagismo.webp 1200w',
      alt: 'Fotografia ilustrativa de plantas ornamentais e canteiro paisagístico.',
      description:
        'Organização de plantas e canteiros ornamentais para áreas externas.',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento de paisagismo em Jundiaí.',
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Solicite uma visita',
      description:
        'Entre em contato pelo WhatsApp, informe o serviço desejado e, se preferir, indique uma data para a visita.',
    },
    {
      step: 2,
      title: 'Avaliação presencial e orçamento',
      description:
        'Aristeu avalia pessoalmente as características do local e prepara o orçamento de acordo com o serviço solicitado.',
    },
    {
      step: 3,
      title: 'Combine a realização',
      description:
        'Se estiver de acordo com o orçamento, combine diretamente com Aristeu os detalhes para a realização do serviço.',
    },
  ],
  whyChooseUs: [
    {
      title: 'Atendimento em Jundiaí',
      description:
        'Atuação confirmada na cidade de Jundiaí, SP.',
    },
    {
      title: 'Quatro opções de serviço',
      description:
        'Corte de grama, poda de plantas, limpeza de piscinas e paisagismo em um único canal de contato.',
    },
    {
      title: 'Contato direto com o responsável',
      description:
        'Converse diretamente com Aristeu Barbosa para solicitar a visita e esclarecer suas dúvidas.',
    },
  ],
  serviceArea: {
    title: 'Atendimento em Jundiaí, SP',
    text: 'A JBA realiza atendimento em Jundiaí. Entre em contato para verificar a disponibilidade de uma visita de avaliação.',
    ctaText: 'Consultar visita e orçamento',
    whatsappMessage:
      'Olá, Aristeu! Gostaria de consultar a disponibilidade para uma visita de avaliação em Jundiaí.',
  },
  faq: [
    {
      question: 'A JBA trabalha com preços fixos?',
      answer:
        'Não. O valor depende das dimensões e das características do espaço. Por isso, Aristeu realiza uma avaliação presencial no imóvel antes de apresentar o orçamento.',
    },
    {
      question: 'Como funciona a visita para orçamento?',
      answer:
        'Você entra em contato pelo WhatsApp e informa qual serviço procura. Aristeu agenda a visita para avaliar o local pessoalmente. O orçamento é apresentado após essa verificação presencial.',
    },
    {
      question: 'Posso escolher o dia e o horário da visita?',
      answer:
        'Sim. Você pode informar sua preferência de data e período (manhã ou tarde). Aristeu verificará a disponibilidade para confirmar o agendamento da visita.',
    },
    {
      question: 'Quais serviços posso solicitar à JBA?',
      answer:
        'Você pode solicitar corte de grama, poda de plantas, limpeza de piscinas e paisagismo.',
    },
    {
      question: 'Em qual cidade a JBA atende?',
      answer:
        'O atendimento da JBA é confirmado na cidade de Jundiaí, SP.',
    },
    {
      question: 'O que preciso informar ao solicitar uma visita?',
      answer:
        'Basta indicar qual serviço você necessita, seu bairro em Jundiaí e sua preferência de data e período para a visita de avaliação.',
    },
    {
      question: 'O que acontece depois da visita?',
      answer:
        'Com a avaliação presencial concluída, Aristeu apresenta o orçamento. Estando de acordo, vocês combinam diretamente a realização do serviço.',
    },
  ],
  finalCta: {
    title: 'Vamos cuidar do seu espaço?',
    text: 'Fale diretamente com Aristeu, explique o que você precisa e solicite uma visita para avaliação e orçamento.',
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
