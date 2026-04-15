import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { sanityClient } from '@/lib/sanity';
import { artigosQuery, categoriasQuery } from '@/lib/queries';
import { site } from '@/lib/site';
import '../internals.css';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'Artigos',
  description: 'Textos técnicos sobre holding, governança familiar e societária, organização sucessória e reorganização societária.',
  openGraph: { title: `Artigos — ${site.nomeCurto}`, images: ['/assets/fotos/og-institucional.jpg'] },
  alternates: { canonical: '/artigos' },
};

type Artigo = {
  _id: string;
  titulo: string;
  slug: { current: string };
  chamada: string;
  publicadoEm: string;
  tempoLeitura?: number;
  categoria?: { titulo: string; slug: { current: string } };
};

type Categoria = { titulo: string; slug: { current: string }; total: number };

function formatarData(iso: string) {
  try { return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }); }
  catch { return ''; }
}

export default async function ArtigosPage() {
  let artigos: Artigo[] = [];
  let categorias: Categoria[] = [];
  try {
    [artigos, categorias] = await Promise.all([
      sanityClient.fetch<Artigo[]>(artigosQuery),
      sanityClient.fetch<Categoria[]>(categoriasQuery),
    ]);
  } catch {
    artigos = []; categorias = [];
  }

  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Artigos</div>
          <h1 className="fade d1" dangerouslySetInnerHTML={{__html:'Textos técnicos sobre <em>holding</em>, governança e sucessão.'}} />
          <p className="lede fade d2">Reflexões autorais sobre decisões jurídicas, tributárias e estruturais que aparecem nos projetos do escritório. Sem receita pronta — cada texto é um recorte de um problema real que exige leitura atenta.</p>
        </div>
      </header>

      {categorias.length > 0 && (
        <section className="filters">
          <div className="wrap">
            <div className="filter-list">
              <Link href="/artigos" className="filter-chip active">Todos</Link>
              {categorias.map((c) => (
                <Link key={c.slug.current} href={`/artigos?cat=${c.slug.current}`} className="filter-chip">
                  {c.titulo}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="artigos-list">
        <div className="wrap">
          {artigos.length === 0 ? (
            <div style={{padding:'80px 0',textAlign:'center',color:'rgba(239,231,212,.6)',fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',fontSize:18}}>
              Os primeiros ensaios serão publicados em breve.
            </div>
          ) : (
            <div className="artigos-grid">
              {artigos.map((a) => (
                <Link key={a._id} href={`/artigos/${a.slug.current}`} className="card-art">
                  {a.categoria && <span className="cat">{a.categoria.titulo}</span>}
                  <h3>{a.titulo}</h3>
                  <p>{a.chamada}</p>
                  <div className="foot">
                    <span>{formatarData(a.publicadoEm)}{a.tempoLeitura ? ` · ${a.tempoLeitura} min` : ''}</span>
                    <span className="arr">→</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
