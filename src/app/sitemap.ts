import type { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity';
import { sitemapArtigosQuery } from '@/lib/queries';
import { site } from '@/lib/site';

type ArtigoSitemap = { slug: string; updatedAt: string };

/**
 * Sitemap dinâmico — combina rotas fixas (páginas institucionais)
 * com rotas geradas a partir do Sanity (artigos publicados).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url;
  const now = new Date();

  // Rotas fixas (páginas institucionais)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`,         lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/sobre`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/metodo`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/atuacao`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contato`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/artigos`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
  ];

  // Landings por frente de atuação
  const frenteRoutes: MetadataRoute.Sitemap = site.frentes.map((f) => ({
    url: `${base}/atuacao/${f.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Artigos — puxa do Sanity (silenciosamente ignora erros)
  let artigoRoutes: MetadataRoute.Sitemap = [];
  try {
    const artigos = await sanityClient.fetch<ArtigoSitemap[]>(sitemapArtigosQuery);
    artigoRoutes = artigos.map((a) => ({
      url: `${base}/artigos/${a.slug}`,
      lastModified: new Date(a.updatedAt),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    artigoRoutes = [];
  }

  return [...staticRoutes, ...frenteRoutes, ...artigoRoutes];
}
