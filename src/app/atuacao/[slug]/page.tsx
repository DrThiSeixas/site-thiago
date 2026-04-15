import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { frentes, frenteSlugs } from '@/lib/frentes';
import { site } from '@/lib/site';
import '../../internals.css';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return frenteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const frente = frentes[slug];
  if (!frente) return {};
  return {
    title: frente.titulo,
    description: frente.metaDescricao,
    openGraph: {
      title: `${frente.titulo} — ${site.nomeCurto}`,
      description: frente.metaDescricao,
      images: ['/assets/fotos/og-institucional.jpg'],
    },
    alternates: { canonical: `/atuacao/${slug}` },
  };
}

export default async function FrentePage({ params }: PageProps) {
  const { slug } = await params;
  const frente = frentes[slug];
  if (!frente) notFound();

  return (
    <>
      <Nav />
      <header className="land-hero">
        <div className="wrap">
          <div className="crumb" style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',fontSize:13,color:'rgb(var(--brass-2))',marginBottom:28,letterSpacing:'.02em'}}>
            <Link href="/">Início</Link>
            <span className="sep" style={{margin:'0 10px',color:'rgba(239,231,212,.3)'}}>/</span>
            <Link href="/atuacao">Atuação</Link>
            <span className="sep" style={{margin:'0 10px',color:'rgba(239,231,212,.3)'}}>/</span>
            {frente.titulo}
          </div>
          <h1 className="fade d1" dangerouslySetInnerHTML={{__html: frente.heroH1}} />
          <p className="lede fade d2" dangerouslySetInnerHTML={{__html: frente.heroLede}} />
          <div className="hero-ctas fade d3">
            <Link href="/contato" className="btn-primary">Solicitar diagnóstico <span className="arr">→</span></Link>
            <a href="#primeira" className="btn-ghost">Saiba mais <span className="arr">→</span></a>
          </div>
        </div>
      </header>

      <section className="facts">
        <div className="wrap">
          <div className="facts-grid">
            {frente.facts.map((f, i) => (
              <div key={i} className="fact">
                <div className="lbl">{f.lbl}</div>
                <div className="val" dangerouslySetInnerHTML={{__html: f.val}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-land" id="primeira">
        <div className="wrap">
          <span className="eyebrow">{frente.sec1Eyebrow}</span>
          <h2 dangerouslySetInnerHTML={{__html: frente.sec1Titulo}} />
          <p className="lede-sec">{frente.sec1Lede}</p>
          <div className="signs">
            {frente.signs.map((s, i) => (
              <article key={i} className="sign">
                <span className="idx">{s.idx}</span>
                <h3 dangerouslySetInnerHTML={{__html: s.titulo}} />
                <p dangerouslySetInnerHTML={{__html: s.texto}} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-land alt">
        <div className="wrap">
          <span className="eyebrow">{frente.sec2Eyebrow}</span>
          <h2 dangerouslySetInnerHTML={{__html: frente.sec2Titulo}} />
          <p className="lede-sec">{frente.sec2Lede}</p>
          <div className="instruments">
            {frente.instruments.map((inst, i) => (
              <article key={i} className="inst">
                <span className="tag">{inst.tag}</span>
                <h4 dangerouslySetInnerHTML={{__html: inst.titulo}} />
                <p dangerouslySetInnerHTML={{__html: inst.texto}} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="wrap">
          <span className="eyebrow">Posição</span>
          <blockquote dangerouslySetInnerHTML={{__html: frente.philosophyQuote}} />
          <div className="sig">Princípio de trabalho</div>
        </div>
      </section>

      <section className="faq-sec">
        <div className="wrap">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(32px,4vw,52px)',lineHeight:1.05,letterSpacing:'-.02em',color:'rgb(var(--paper))',marginBottom:20}} dangerouslySetInnerHTML={{__html: `Dúvidas recorrentes sobre <em style="font-family:var(--font-instrument-serif);color:rgb(var(--brass-2))">${frente.titulo.toLowerCase()}</em>.`}} />
          <div className="faq">
            {frente.faqs.map((f, i) => (
              <details key={i}>
                <summary>{f.pergunta}</summary>
                <div className="ans" dangerouslySetInnerHTML={{__html: f.resposta}} />
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="land-cta">
        <div className="wrap">
          <span className="eyebrow">Conversa estratégica</span>
          <h2 dangerouslySetInnerHTML={{__html: frente.ctaTitulo}} />
          <p>{frente.ctaTexto}</p>
          <div className="actions">
            <Link href="/contato" className="btn-ink">Solicitar diagnóstico <span className="arr">→</span></Link>
            <Link href="/atuacao" className="btn-ink-ghost">Ver outras frentes <span className="arr" style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic'}}>→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
