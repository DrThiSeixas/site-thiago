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
  description: 'Atuação societária e tributária para empresas, sócios e famílias empresárias.',
  openGraph: { title: `Atuação — ${site.nomeCurto}`, images: ['/assets/fotos/og-institucional.jpg'] },
  alternates: { canonical: '/atuacao' },
};

const romanos = ['i','ii','iii','iv','v','vi'];

export default function AtuacaoPage() {
  const frentesArr = Object.values(frentes);
  return (
    <>
      <Nav />
      <header id="conteudo" className="page-head">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Início</Link>
            <span className="sep">/</span>Atuação
          </div>
          <h1 className="fade d1" dangerouslySetInnerHTML={{__html:'Duas frentes para as questões <em>da sua empresa.</em>'}} />
          <p className="lede fade d2">
            Societário: regras entre sócios, administração, família e continuidade. Tributário: cobranças, dívida ativa, execução fiscal e alternativas jurídicas. O trabalho parte da situação concreta e dos documentos.
          </p>
        </div>
      </header>

      <section className="act-index">
        <div className="wrap">
          <div className="act-index-grid">
            <Link href="/advocacia-tributaria" className="act-index-item"><span className="n">Tributário</span><h3>Cobranças e questões tributárias</h3><span className="arr">→</span></Link>
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
