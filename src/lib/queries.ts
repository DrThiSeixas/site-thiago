import { groq } from 'next-sanity';
// Legacy Studio uses resumo/conteudo/dataPublicacao and a string category.
// Keep those published documents readable while the new Studio is rolled out.
export const PUBLIC_ARTIGO = groq`_type == "artigo" && !(_id in path("drafts.**")) && defined(slug.current) && coalesce(retirado, false) == false && coalesce(area, "societario") in ["societario", "tributario"] && coalesce(statusEditorial, "aprovado") == "aprovado" && dateTime(coalesce(publicadoEm, dataPublicacao + "T12:00:00Z")) <= dateTime(now())`;
export const ARTIGO_CARD_FIELDS = groq`
 _id, titulo, slug, "chamada": coalesce(chamada, resumo),
 "publicadoEm": coalesce(publicadoEm, dataPublicacao + "T12:00:00Z"), tempoLeitura,
 "area": coalesce(area, "societario"),
 "categoria": coalesce(categoriaRef->{titulo,slug,pilar}, categoria->{titulo,slug,pilar}, {"titulo": categoria}),
 "capa": capa{asset->{url, metadata{lqip}}, alt}, noindex
`;
export const artigosQuery = groq`*[${PUBLIC_ARTIGO} && coalesce(noindex,false) == false] | order(coalesce(publicadoEm,dataPublicacao) desc){${ARTIGO_CARD_FIELDS}}`;
export const artigosDestaqueQuery = groq`*[${PUBLIC_ARTIGO} && coalesce(noindex,false) == false] | order(coalesce(publicadoEm,dataPublicacao) desc)[0...3]{${ARTIGO_CARD_FIELDS}}`;
export const artigoBySlugQuery = groq`*[${PUBLIC_ARTIGO} && slug.current == $slug][0]{
 ${ARTIGO_CARD_FIELDS},metaTitulo,metaDescricao,
 "autor":autor->{nome,slug,oab,bio,"foto":foto{asset->{url},alt}},
 "ogImage":ogImage{asset->{url}},"corpo":coalesce(corpo,conteudo),
 "relacionados":relacionados[]->[${PUBLIC_ARTIGO} && coalesce(noindex,false) == false]{${ARTIGO_CARD_FIELDS}}
}`;
export const allArtigoSlugsQuery=groq`*[${PUBLIC_ARTIGO} && coalesce(noindex,false) == false].slug.current`;
export const sitemapArtigosQuery=groq`*[${PUBLIC_ARTIGO} && coalesce(noindex,false) == false]{"slug":slug.current,"updatedAt":_updatedAt}`;
export const categoriasQuery=groq`*[_type=="categoria"] | order(titulo asc){titulo,slug,pilar,"total":count(*[${PUBLIC_ARTIGO} && coalesce(noindex,false)==false && references(^._id)])}`;
