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
  title: 'Checklist — Alteração Contratual de LTDA',
  description: 'Checklist técnico de 13 páginas sobre alteração contratual de LTDA: quóruns legais, registros, prazos, armadilhas documentais e ordem das operações.',
  openGraph: { title: `Checklist — Alteração Contratual de LTDA · ${site.nomeCurto}`, images: ['/assets/fotos/og-institucional.jpg'] },
  alternates: { canonical: '/materiais/checklist-alteracao-contratual-ltda' },
};

const blocos = [
  { n: '01', titulo: 'Identificação da matéria e do quórum', subitens: ['Matéria da alteração','Quóruns legais (CC art. 1.076)','Verificação do contrato vigente'] },
  { n: '02', titulo: 'Partes, consentimento e capacidade', subitens: ['Sócios atuais','Outorga conjugal','Novos ingressantes'] },
  { n: '03', titulo: 'Capital social e integralização', subitens: ['Aumento e redução','Cessão de quotas','Integralização em bens'] },
  { n: '04', titulo: 'Administração e poderes', subitens: ['Administrador pessoa natural','Poderes e vedações','Destituição'] },
  { n: '05', titulo: 'Objeto social e atividades', subitens: ['Alteração de objeto','CNAEs','Registros complementares'] },
  { n: '06', titulo: 'Documento e assinaturas', subitens: ['Redação técnica','Assinaturas e visto OAB','Anexos obrigatórios'] },
  { n: '07', titulo: 'Registro e prazos', subitens: ['Preparação do processo','Prazo de 30 dias','Pós-registro'] },
  { n: '08', titulo: 'Armadilhas clássicas', subitens: ['Na assinatura','Na integralização','No registro','Nas consequências societárias'] },
];

export default function ChecklistPage() {
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
            Checklist de Alteração Contratual de LTDA
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1.3fr 1fr',gap:80,alignItems:'center'}} className="guia-grid">
            <div>
              <span className="eyebrow" style={{marginBottom:20,display:'block'}}>Guia II · 13 páginas</span>
              <h1 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(40px,6vw,80px)',lineHeight:0.98,letterSpacing:'-.025em',color:'rgb(var(--paper))',marginBottom:32}}>
                Checklist — Alteração Contratual <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass-2))',fontWeight:400}}>de LTDA</em>
              </h1>
              <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:21,lineHeight:1.55,color:'rgba(239,231,212,.88)',marginBottom:20,maxWidth:620}}>
                Os quóruns, prazos, registros e armadilhas que separam uma alteração <em style={{fontFamily:'var(--font-instrument-serif)'}}>limpa</em> de uma nulidade descoberta anos depois.
              </p>
              <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:17,lineHeight:1.65,color:'rgba(239,231,212,.72)',maxWidth:620}}>
                Oito blocos de verificação, uso imediato antes de qualquer alteração. Cobre desde identificação de matéria e quórum até armadilhas clássicas que aparecem em due diligence.
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
            Os <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass-2))',fontWeight:400}}>oito</em> blocos de verificação
          </h2>

          <div style={{borderTop:'1px solid var(--hair)'}}>
            {blocos.map((c) => (
              <div key={c.n} style={{display:'grid',gridTemplateColumns:'80px 1fr',gap:40,padding:'28px 0',borderBottom:'1px solid var(--hair)',alignItems:'baseline'}}>
                <span style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:38,color:'rgb(var(--brass-2))',letterSpacing:'-.02em'}}>
                  {c.n}
                </span>
                <div>
                  <h3 style={{fontFamily:'var(--font-fraunces)',fontWeight:500,fontVariationSettings:'"opsz" 72',fontSize:20,letterSpacing:'-.01em',color:'rgb(var(--paper))',marginBottom:8}}>
                    {c.titulo}
                  </h3>
                  <p style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',fontSize:14.5,color:'rgba(239,231,212,.6)',lineHeight:1.6}}>
                    {c.subitens.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'100px 0',background:'rgb(var(--paper))',color:'rgb(var(--ink))'}}>
        <div className="wrap">
          <div style={{maxWidth:820,margin:'0 auto',textAlign:'center'}}>
            <span style={{fontFamily:'var(--font-instrument-sans)',fontSize:11,letterSpacing:'.24em',textTransform:'uppercase',color:'rgb(var(--brass))',fontWeight:500,marginBottom:18,display:'block'}}>
              Para quem é
            </span>
            <h2 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(28px,3.6vw,44px)',lineHeight:1.15,letterSpacing:'-.015em',color:'rgb(var(--ink))',marginBottom:28}}>
              Advogados, contadores, administradores e <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass))',fontWeight:400}}>sócios</em> que conduzem alterações contratuais sem apoio técnico especializado.
            </h2>
            <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:17,lineHeight:1.65,color:'rgba(13,26,43,.78)'}}>
              Alterações rotineiras — aumento de capital, entrada de sócio, mudança de administração, cessão de quotas — parecem simples. A maior parte das nulidades descobertas em due diligence, M&A e sucessão nasce justamente dessas operações cotidianas, feitas sem o rigor que exigem.
            </p>
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
