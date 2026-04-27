/**
 * Metadados e constantes do site — fonte única de verdade.
 * Alterações aqui se propagam para SEO, Schema.org, footer, navegação, etc.
 */

export const site = {
  nome: 'Thiago Seixas Advocacia Societária',
  nomeCurto: 'Thiago Seixas',
  oab: 'OAB/SP 249.179',
  autor: 'Thiago Seixas',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://thiagoseixas.adv.br',
  descricao:
    'Advocacia societária aplicada à organização de empresas, patrimônios e famílias empresárias. Holding patrimonial, governança familiar e organização sucessória com visão preventiva.',

  contato: {
    email: process.env.NEXT_PUBLIC_EMAIL || 'contato@thiagoseixas.adv.br',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5519999302552',
    whatsappFormatado: '(19) 99930-2552',
    linkedin: 'https://www.linkedin.com/in/thiagoseixas',
  },

  endereco: {
    logradouro: 'Rua Coronel Lúcio, 1053',
    bairro: 'Centro',
    cidade: 'Vargem Grande do Sul',
    uf: 'SP',
    cep: '13.880-041',
    pais: 'BR',
  },

  nav: [
    { href: '/advocacia-societaria', label: 'Societário' },
    { href: '/holding-patrimonial-familiar', label: 'Holding' },
    { href: '/metodo', label: 'Método' },
    { href: '/artigos', label: 'Artigos' },
    { href: '/sobre', label: 'Sobre' },
  ],

  frentes: [
    { slug: 'holding-patrimonial', titulo: 'Holding Patrimonial', emph: 'Patrimonial' },
    { slug: 'governanca-familiar', titulo: 'Governança Familiar', emph: 'Familiar' },
    { slug: 'governanca-societaria', titulo: 'Governança Societária', emph: 'Societária' },
    { slug: 'organizacao-patrimonial', titulo: 'Organização Patrimonial', emph: 'Patrimonial' },
    { slug: 'organizacao-sucessoria', titulo: 'Organização Sucessória', emph: 'Sucessória' },
    { slug: 'estruturacao-preventiva', titulo: 'Estruturação Societária Preventiva', emph: 'Preventiva' },
  ] as const,
} as const;

export const waUrl = (texto?: string) => {
  const base = `https://wa.me/${site.contato.whatsapp}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
};

export const enderecoCompleto = () => {
  const e = site.endereco;
  return `${e.logradouro} — ${e.bairro} — ${e.cidade} — ${e.uf} — CEP ${e.cep}`;
};

export const mapsUrl = () => {
  const e = site.endereco;
  const q = encodeURIComponent(`${e.logradouro} ${e.bairro} ${e.cidade} ${e.uf} ${e.cep}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
};
