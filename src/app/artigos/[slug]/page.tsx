import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { PortableBody } from '@/components/PortableBody';
import { ArticleSchema } from '@/components/SchemaOrg';
import { sanityClient } from '@/lib/sanity';
import { artigoBySlugQuery, allArtigoSlugsQuery } from '@/lib/queries';
import { site } from '@/lib/site';
import '../../internals.css';

export const revalidate = 600;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const slugs = await sanityClient.fetch<string[]>(allArtigoSlugsQuery);
    return slugs.map((slug) => ({ slug }));
  } catch { return []; }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const a = await sanityClient.fetch<any>(artigoBySlugQuery, { slug });
    if (!a) return {};
    const titulo = a.metaTitulo || a.titulo;
    const descricao = a.metaDescricao || a.chamada;
    const og = a.ogImage?.asset?.url || a.capa?.asset?.url || '/assets/fotos/og-institucional.jpg';
    return {
      title: titulo,
      description: descricao,
      alternates: { canonical: `/artigos/${slug}` },
      openGraph: {
        title: titulo,
        description: descricao,
        type: 'article',
        publishedTime: a.publicadoEm,
        authors: [site.autor],
        images: [{ url: og, width: 1200, height: 630 }],
      },
      robots: a.noindex ? { index: false, follow: false } : undefined,
    };
  } catch { return {}; }
}

function formatarData(iso: string) {
  try { return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }); }
  catch { return ''; }
}

export default async function ArtigoPage({ params }: PageProps) {
  const { slug } = await params;
  let a: any = null;
  try {
    a = await sanityClient.fetch<any>(artigoBySlugQuery, { slug });
  } catch {}
  if (!a) notFound();

  // Extrai H2s do corpo para o TOC
  const toc: { id: string; titulo: string }[] = [];
  if (Array.isArray(a.corpo)) {
    for (const block of a.corpo) {
      if (block?._type === 'block' && block.style === 'h2') {
        const texto = (block.children || []).map((c: any) => c.text || '').join('');
        const id = texto.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        if (texto && id) toc.push({ id, titulo: texto });
      }
    }
  }

  return (
    <>
      <Nav />
      <ArticleSchema
        titulo={a.titulo}
        descricao={a.metaDescricao || a.chamada}
        slug={slug}
        publicadoEm={a.publicadoEm}
        autor={a.autor?.nome || site.autor}
        imagemUrl={a.ogImage?.asset?.url || a.capa?.asset?.url}
      />

      <header className="art-head">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Início</Link>
            <span className="sep">/</span>
            <Link href="/artigos">Artigos</Link>
            {a.categoria && (<><span className="sep">/</span>{a.categoria.titulo}</>)}
          </div>
          {a.categoria && <span className="cat">— Ensaio · {a.categoria.titulo}</span>}
          <h1>{a.titulo}</h1>
          <p className="deck">{a.chamada}</p>
          <div className="meta-row">
            <span className="author">{a.autor?.nome || site.autor}</span>
            <span>{formatarData(a.publicadoEm)}</span>
            {a.tempoLeitura && <span>Leitura {a.tempoLeitura} min</span>}
            <span>{a.autor?.oab || site.oab}</span>
          </div>
        </div>
      </header>

      <section className="art-body">
        <div className="wrap">
          <div className="art-grid">
            {toc.length > 0 && (
              <aside className="toc">
                <span className="label">Neste ensaio</span>
                {toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`}>{t.titulo}</a>
                ))}
              </aside>
            )}
            <article className="prose">
              <PortableBody value={a.corpo} />

              <hr />

              <div className="author-box">
                <div className="photo">
                  <Image
                    src="/assets/fotos/avatar-md.jpg"
                    alt={a.autor?.nome || site.autor}
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <div className="name" dangerouslySetInnerHTML={{__html: (a.autor?.nome || site.autor).replace(/^(\S+)\s(.+)$/, '$1 <em>$2</em>')}} />
                  <span className="oab">{a.autor?.oab || site.oab}</span>
                  <p>{a.autor?.bio || `Advogado com atuação concentrada em direito societário, estruturação patrimonial, holding, governança e organização sucessória. ${site.endereco.cidade} — ${site.endereco.uf}.`}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {Array.isArray(a.relacionados) && a.relacionados.length > 0 && (
        <section className="related">
          <div className="wrap">
            <span className="eyebrow">Leituras relacionadas</span>
            <div className="related-grid">
              {a.relacionados.map((r: any) => (
                <Link key={r._id} href={`/artigos/${r.slug.current}`} className="rel-card">
                  {r.categoria && <span className="cat">{r.categoria.titulo}</span>}
                  <h4>{r.titulo}</h4>
                  <p>{r.chamada}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <Whats />
    </>
  );
}
