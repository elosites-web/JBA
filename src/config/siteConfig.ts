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
    logoUrl: '/images/jba-logo-transparente.png',
    logoTransparentUrl: '/images/jba-logo-transparente.png',
    faviconUrl: '/favicon-512x512.png',
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
      alt: 'Profissional fictício utilizando roçadeira para cortar grama em um jardim residencial.',
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
      alt: 'Profissional fictício realizando a poda de uma cerca viva com tesourão de jardineiro.',
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
      alt: 'Profissional fictício realizando a limpeza de uma piscina residencial com cabo telescópico e aspirador.',
      ctaText: 'Orçar limpeza de piscina',
      whatsappMessage:
        'Olá, Aristeu! Gostaria de solicitar um orçamento para limpeza de piscina em Jundiaí.',
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
        'Serviços prestados na cidade de Jundiaí para residências, condomínios e chácaras.',
    },
    {
      title: 'Três serviços em um único contato',
      description:
        'Corte de grama, poda de cerca viva e plantas e limpeza de piscina com o mesmo profissional.',
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
