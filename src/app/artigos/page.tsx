import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { sanityClient } from '@/lib/sanity';
import { artigosQuery, categoriasQuery } from '@/lib/queries';
import { acervo } from '@/lib/acervo';
import { site } from '@/lib/site';
import '../internals.css';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'Artigos',
  description: 'Artigos sobre regras entre sócios, continuidade empresarial, cobranças fiscais e alternativas tributárias.',
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
  area: string;
  categoria?: { titulo: string; slug: { current: string } };
};

type Categoria = { titulo: string; slug: { current: string }; total: number };

function formatarData(iso: string) {
  try { return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }); }
  catch { return ''; }
}

export default async function ArtigosPage({searchParams}:{searchParams:Promise<{area?:string;cat?:string}>}) {
  const params=await searchParams;
  const area=['societario','tributario'].includes(params.area||'')?params.area:undefined;
  let unavailable=false;
  let artigos: Artigo[] = [];
  let categorias: Categoria[] = [];
  try {
    [artigos, categorias] = await Promise.all([
      sanityClient.fetch<Artigo[]>(artigosQuery),
      sanityClient.fetch<Categoria[]>(categoriasQuery),
    ]);
  } catch {
    artigos = []; categorias = []; unavailable=true;
    console.error('Falha ao consultar o editorial no Sanity.');
  }

  artigos=artigos.filter(a=>(!area||a.area===area)&&(!params.cat||a.categoria?.slug?.current===params.cat));
  return (
    <>
      <Nav />
      <header id="conteudo" className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Artigos</div>
          <h1 className="fade d1">Leituras sobre a sociedade<br/>e as questões tributárias da empresa.</h1>
          <p className="lede fade d2">Reflexões autorais sobre decisões jurídicas, tributárias e estruturais que aparecem nos projetos do escritório. Sem receita pronta — cada texto é um recorte de um problema real que exige leitura atenta.</p>
        </div>
      </header>

      {(
        <section className="filters">
          <div className="wrap">
            <div className="filter-list">
              <Link href="/artigos" className={`filter-chip ${!area&&!params.cat?'active':''}`}>Todos</Link>
              <Link href="/artigos?area=societario" className={`filter-chip ${area==='societario'?'active':''}`}>Societário</Link>
              <Link href="/artigos?area=tributario" className={`filter-chip ${area==='tributario'?'active':''}`}>Tributário</Link>
              {categorias.map((c) => (
                <Link key={c.slug.current} href={`/artigos?cat=${encodeURIComponent(c.slug.current)}`} className={`filter-chip ${params.cat===c.slug.current?'active':''}`}>
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
              {unavailable?'Os artigos estão temporariamente indisponíveis. Tente novamente mais tarde.':'Ainda não há artigos publicados nesta seleção.'}
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

      {!params.cat && area!=='tributario' && <section><div className="wrap"><h2 style={{fontSize:36,marginBottom:28}}>Do acervo revisado</h2><div className="artigos-grid">{acervo.map(a=><Link className="card-art" key={a.slug} href={`/acervo/${a.slug}`}><span className="cat">{a.categoria}</span><h3>{a.titulo}</h3><p>{a.chamada}</p><div className="foot">Revisado em outubro de 2026 <span>→</span></div></Link>)}</div></div></section>}
      <Footer />
      <Whats />
    </>
  );
}
