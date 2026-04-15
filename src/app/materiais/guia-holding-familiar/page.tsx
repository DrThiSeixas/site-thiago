import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { CaptureForm } from './CaptureForm';
import { site } from '@/lib/site';
import '../../internals.css';

export const metadata: Metadata = {
  title: 'Guia da Holding Familiar',
  description: 'Guia técnico de 28 páginas sobre as 30 decisões fundamentais na constituição de holding familiar: estrutura, integralização, cláusulas protetivas, governança, ITCMD.',
  openGraph: { title: `Guia da Holding Familiar — ${site.nomeCurto}`, images: ['/assets/fotos/og-institucional.jpg'] },
  alternates: { canonical: '/materiais/guia-holding-familiar' },
};

const capitulos = [
  { n: '01', titulo: 'Quando a holding faz sentido — e quando não faz', subitens: ['Três cenários em que resolve','Dois cenários em que só atrapalha','Ponto de equilíbrio econômico'] },
  { n: '02', titulo: 'Três tipos de holding (pura, mista, patrimonial)', subitens: ['Definições práticas','Qual tipo para qual cenário','Implicações tributárias'] },
  { n: '03', titulo: 'Integralização de imóveis — ITBI e ganho de capital', subitens: ['Tema 796 do STF','Atividade preponderante','Valor histórico vs mercado'] },
  { n: '04', titulo: 'Regime tributário — presumido, real ou Simples', subitens: ['Comparativo prático','Limites e requisitos','Projeção de economia real'] },
  { n: '05', titulo: 'Cláusulas protetivas — as quatro clássicas', subitens: ['Incomunicabilidade, impenhorabilidade, inalienabilidade, reversão','Limites legais','Casos em que o judiciário afastou'] },
  { n: '06', titulo: 'Doação com reserva de usufruto', subitens: ['Mecânica e efeitos tributários','ITCMD sobre nua-propriedade','Extinção do usufruto e novo fato gerador (ou não)'] },
  { n: '07', titulo: 'Acordo de sócios — o que a holding precisa', subitens: ['Regras de decisão','Entrada e saída de herdeiros','Mecanismos de impasse'] },
  { n: '08', titulo: 'ITCMD por estado — análise comparativa', subitens: ['Alíquotas e bases','Planejamento antecipado','Mudanças legislativas'] },
  { n: '09', titulo: 'Interface com governança familiar', subitens: ['Acordo familiar, protocolos, conselho','Camadas complementares','Erros comuns'] },
  { n: '10', titulo: 'Cronograma típico de um projeto de holding', subitens: ['Etapas, prazos, entregáveis','Pontos de decisão do cliente','O que esperar em cada fase'] },
];

export default function GuiaHoldingPage() {
  return (
    <>
      <Nav />

      <section style={{padding:'80px 0 60px',borderBottom:'1px solid var(--hair)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,zIndex:-1,background:'radial-gradient(900px 500px at 85% 0%, rgba(166,138,77,.12), transparent 60%)'}} />
        <div className="wrap">
          <div style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',fontSize:13,color:'rgb(var(--brass-2))',marginBottom:28,letterSpacing:'.02em'}}>
            <Link href="/" style={{color:'rgb(var(--brass-2))'}}>Início</Link>
            <span style={{margin:'0 10px',color:'rgba(239,231,212,.3)'}}>/</span>
            <Link href="/materiais" style={{color:'rgb(var(--brass-2))'}}>Materiais</Link>
            <span style={{margin:'0 10px',color:'rgba(239,231,212,.3)'}}>/</span>
            Guia da Holding Familiar
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1.3fr 1fr',gap:80,alignItems:'center'}} className="guia-grid">
            <div>
              <span className="eyebrow" style={{marginBottom:20,display:'block'}}>Guia I · 28 páginas</span>
              <h1 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(42px,6vw,84px)',lineHeight:0.98,letterSpacing:'-.025em',color:'rgb(var(--paper))',marginBottom:32}}>
                Guia da Holding <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass-2))',fontWeight:400}}>Familiar</em>
              </h1>
              <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:21,lineHeight:1.55,color:'rgba(239,231,212,.88)',marginBottom:20,maxWidth:620}}>
                As <em style={{fontFamily:'var(--font-instrument-serif)'}}>30 decisões técnicas</em> que separam holdings bem-feitas de holdings que viram problema.
              </p>
              <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:17,lineHeight:1.65,color:'rgba(239,231,212,.72)',maxWidth:620}}>
                Um guia denso, para quem vai abrir ou reestruturar uma holding patrimonial e quer entender — em profundidade técnica — o que está em jogo em cada escolha. Estrutura, integralização, cláusulas protetivas, governança, ITCMD, regime tributário.
              </p>
            </div>

            <div style={{background:'rgb(var(--paper))',color:'rgb(var(--ink))',padding:'42px 40px',position:'relative'}}>
              <div style={{fontFamily:'var(--font-instrument-sans)',fontSize:11,letterSpacing:'.24em',textTransform:'uppercase',color:'rgb(var(--brass))',fontWeight:500,marginBottom:18}}>
                Receber por e-mail
              </div>
              <h3 style={{fontFamily:'var(--font-fraunces)',fontWeight:500,fontVariationSettings:'"opsz" 72',fontSize:24,lineHeight:1.2,letterSpacing:'-.01em',color:'rgb(var(--ink))',marginBottom:22}}>
                Download gratuito
              </h3>
              <CaptureForm />
              <p style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',fontSize:13,color:'rgba(13,26,43,.6)',marginTop:20,lineHeight:1.5}}>
                Você receberá o link do PDF no e-mail indicado. Sem spam. Descadastro imediato a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'100px 0',background:'rgb(var(--ink-2))',borderBottom:'1px solid var(--hair)'}}>
        <div className="wrap">
          <span className="eyebrow" style={{marginBottom:16,display:'block'}}>Sumário</span>
          <h2 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(32px,4vw,52px)',lineHeight:1.05,letterSpacing:'-.02em',color:'rgb(var(--paper))',marginBottom:50,maxWidth:900}}>
            O que você vai <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass-2))',fontWeight:400}}>encontrar</em> no guia
          </h2>

          <div style={{borderTop:'1px solid var(--hair)'}}>
            {capitulos.map((c) => (
              <div key={c.n} style={{display:'grid',gridTemplateColumns:'80px 1fr',gap:40,padding:'32px 0',borderBottom:'1px solid var(--hair)',alignItems:'baseline'}}>
                <span style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:40,color:'rgb(var(--brass-2))',letterSpacing:'-.02em'}}>
                  {c.n}
                </span>
                <div>
                  <h3 style={{fontFamily:'var(--font-fraunces)',fontWeight:500,fontVariationSettings:'"opsz" 72',fontSize:22,letterSpacing:'-.01em',color:'rgb(var(--paper))',marginBottom:10}}>
                    {c.titulo}
                  </h3>
                  <p style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',fontSize:15,color:'rgba(239,231,212,.6)',lineHeight:1.6}}>
                    {c.subitens.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'120px 0',background:'rgb(var(--paper))',color:'rgb(var(--ink))'}}>
        <div className="wrap">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:80,alignItems:'center'}}>
            <div>
              <Image src="/assets/fotos/retrato-reflexivo-duotone.jpg" alt="Thiago Seixas" width={800} height={1000} style={{width:'100%',height:'auto'}} />
            </div>
            <div>
              <span style={{fontFamily:'var(--font-instrument-sans)',fontSize:11,letterSpacing:'.24em',textTransform:'uppercase',color:'rgb(var(--brass))',fontWeight:500,marginBottom:16,display:'block'}}>
                Quem escreveu
              </span>
              <h2 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(32px,4vw,52px)',lineHeight:1.05,letterSpacing:'-.02em',color:'rgb(var(--ink))',marginBottom:24}}>
                Thiago <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass))',fontWeight:400}}>Seixas</em>
              </h2>
              <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:18,lineHeight:1.65,color:'rgba(13,26,43,.82)',marginBottom:20}}>
                Advogado com atuação concentrada em direito societário — {site.oab}. Conduz projetos de estruturação patrimonial, holding, organização sucessória e governança — familiar e societária — por meio de método próprio de trabalho.
              </p>
              <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:18,lineHeight:1.65,color:'rgba(13,26,43,.82)',marginBottom:28}}>
                Especialização específica em holdings (2018) e atualização técnica contínua (Holding Masters, 2025). Este guia condensa o essencial do que aparece em projetos reais conduzidos pelo escritório.
              </p>
              <Link href="/sobre" className="btn-ink-ghost" style={{color:'rgb(var(--ink))',borderBottomColor:'var(--hair-dark-strong)'}}>
                Conhecer a trajetória <span className="arr" style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic'}}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Whats />
      <style>{`
        @media(max-width:1000px){
          .guia-grid{grid-template-columns:1fr!important;gap:50px!important}
        }
      `}</style>
    </>
  );
}
