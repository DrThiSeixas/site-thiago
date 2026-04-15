import { groq } from 'next-sanity';

/** Projeção padrão para cards e listas (leve) */
export const ARTIGO_CARD_FIELDS = groq`
  _id,
  titulo,
  slug,
  chamada,
  publicadoEm,
  tempoLeitura,
  "categoria": categoria->{titulo, slug, pilar},
  "capa": capa{asset->{url, metadata{lqip}}, alt},
  noindex
`;

/** Todos os artigos publicados, mais recentes primeiro */
export const artigosQuery = groq`
  *[_type == "artigo" && !(_id in path("drafts.**")) && coalesce(noindex, false) == false]
    | order(publicadoEm desc) {
      ${ARTIGO_CARD_FIELDS}
    }
`;

/** Artigos em destaque na Home (os 3 mais recentes) */
export const artigosDestaqueQuery = groq`
  *[_type == "artigo" && !(_id in path("drafts.**")) && coalesce(noindex, false) == false]
    | order(publicadoEm desc)[0...3] {
      ${ARTIGO_CARD_FIELDS}
    }
`;

/** Artigo individual completo (usa slug) */
export const artigoBySlugQuery = groq`
  *[_type == "artigo" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    titulo,
    slug,
    chamada,
    publicadoEm,
    tempoLeitura,
    metaTitulo,
    metaDescricao,
    noindex,
    "categoria": categoria->{titulo, slug, pilar},
    "autor": autor->{
      nome, slug, oab, bio,
      "foto": foto{asset->{url}, alt}
    },
    "capa": capa{asset->{url, metadata{lqip, dimensions}}, alt},
    "ogImage": ogImage{asset->{url}},
    corpo,
    "relacionados": relacionados[]->{
      ${ARTIGO_CARD_FIELDS}
    }
  }
`;

/** Slugs de todos os artigos publicados (usado em generateStaticParams) */
export const allArtigoSlugsQuery = groq`
  *[_type == "artigo" && !(_id in path("drafts.**")) && coalesce(noindex, false) == false].slug.current
`;

/** Sitemap — todos os artigos com data de atualização */
export const sitemapArtigosQuery = groq`
  *[_type == "artigo" && !(_id in path("drafts.**")) && coalesce(noindex, false) == false]{
    "slug": slug.current,
    "updatedAt": coalesce(_updatedAt, publicadoEm)
  }
`;

/** Categorias com contagem */
export const categoriasQuery = groq`
  *[_type == "categoria"] | order(titulo asc) {
    titulo, slug, pilar,
    "total": count(*[_type == "artigo" && references(^._id)])
  }
`;
