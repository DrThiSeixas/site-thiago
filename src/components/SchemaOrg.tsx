import { site, enderecoCompleto } from '@/lib/site';

/**
 * Marcação Schema.org (JSON-LD) usada no layout raiz.
 * Combina: LegalService + Person + Organization + Website.
 * Renderizado server-side, sem JS do lado cliente.
 */
export function SchemaOrg() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': `${site.url}#legalservice`,
        name: site.nome,
        url: site.url,
        description: site.descricao,
        areaServed: { '@type': 'Country', name: 'Brasil' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.endereco.logradouro,
          addressLocality: site.endereco.cidade,
          addressRegion: site.endereco.uf,
          postalCode: site.endereco.cep,
          addressCountry: site.endereco.pais,
        },
        telephone: `+${site.contato.whatsapp}`,
        email: site.contato.email,
        founder: { '@id': `${site.url}#person` },
        knowsAbout: [
          'Direito Societário',
          'Holding Patrimonial',
          'Governança Familiar',
          'Governança Societária',
          'Planejamento Sucessório',
          'Organização Patrimonial',
          'Reorganização Societária',
        ],
      },
      {
        '@type': 'Person',
        '@id': `${site.url}#person`,
        name: site.autor,
        jobTitle: 'Advogado',
        identifier: site.oab,
        url: `${site.url}/sobre`,
        sameAs: [site.contato.linkedin],
        worksFor: { '@id': `${site.url}#legalservice` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.endereco.cidade,
          addressRegion: site.endereco.uf,
          addressCountry: site.endereco.pais,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}#website`,
        url: site.url,
        name: site.nome,
        inLanguage: 'pt-BR',
        publisher: { '@id': `${site.url}#legalservice` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * Marcação específica para artigos individuais.
 */
export function ArticleSchema({
  titulo,
  descricao,
  slug,
  publicadoEm,
  atualizadoEm,
  autor,
  imagemUrl,
}: {
  titulo: string;
  descricao: string;
  slug: string;
  publicadoEm: string;
  atualizadoEm?: string;
  autor: string;
  imagemUrl?: string;
}) {
  const url = `${site.url}/artigos/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: titulo,
    description: descricao,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    datePublished: publicadoEm,
    dateModified: atualizadoEm || publicadoEm,
    author: { '@type': 'Person', name: autor, identifier: site.oab },
    publisher: {
      '@type': 'Organization',
      name: site.nome,
      logo: { '@type': 'ImageObject', url: `${site.url}/assets/escudo.png` },
    },
    ...(imagemUrl && { image: imagemUrl }),
    inLanguage: 'pt-BR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
