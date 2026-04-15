import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import { frentes } from '@/lib/frentes';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Atuação',
  description: 'Seis frentes de atuação: holding, governança familiar e societária, organização patrimonial e sucessória, estruturação societária preventiva.',
  openGraph: { title: `Atuação — ${site.nomeCurto}`, images: ['/assets/fotos/og-institucional.jpg'] },
  alternates: { canonical: '/atuacao' },
};

const romanos = ['i','ii','iii','iv','v','vi'];

export default function AtuacaoPage() {
  const frentesArr = Object.values(frentes);
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Início</Link>
            <span className="sep">/</span>Atuação
          </div>
          <h1 className="fade d1" dangerouslySetInnerHTML={{__html:'Direito societário aplicado à <em>arquitetura</em> patrimonial.'}} />
          <p className="lede fade d2">
            As frentes abaixo não são serviços isolados — são dimensões de um mesmo trabalho integrado, conduzido com método e visão preventiva. Cada uma pode ser ponto de partida; todas convergem para o mesmo princípio: estruturas desenhadas para a realidade concreta do cliente.
          </p>
        </div>
      </header>

      <section className="act-index">
        <div className="wrap">
          <div className="act-index-grid">
            {frentesArr.map((f, i) => (
              <Link key={f.slug} href={`/atuacao/${f.slug}`} className="act-index-item">
                <span className="n">{romanos[i]}. frente</span>
                <h3 dangerouslySetInnerHTML={{__html: f.titulo.replace(` ${f.emph}`, ` <em>${f.emph}</em>`) }} />
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'120px 0'}}>
        <div className="wrap">
          <span className="eyebrow">Primeiro passo</span>
          <h2 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(40px,5vw,72px)',lineHeight:1,letterSpacing:'-.02em',color:'rgb(var(--paper))',margin:'24px 0 28px',maxWidth:900}} dangerouslySetInnerHTML={{__html:'Começamos pelo <em style="font-family:var(--font-instrument-serif);color:rgb(var(--brass-2))">diagnóstico</em> — não pela solução.'}} />
          <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:18,lineHeight:1.6,color:'rgba(239,231,212,.75)',maxWidth:720,marginBottom:36}}>
            Independentemente de qual frente for o ponto de partida, o trabalho começa por compreender o cenário. A direção técnica só faz sentido depois desse entendimento — e é nessa conversa que decidimos, juntos, se e como seguimos.
          </p>
          <Link href="/contato" className="btn-primary">Agendar conversa estratégica <span className="arr">→</span></Link>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
