import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Sobre',
  description: `${site.autor} — ${site.oab}. Advogado com atuação concentrada em direito societário, estruturação patrimonial e governança.`,
  openGraph: { title: `Sobre — ${site.nomeCurto}`, images: ['/assets/fotos/og-institucional.jpg'] },
  alternates: { canonical: '/sobre' },
};

const trajetoria = [
  { ano: '2005', label: 'Graduação', titulo: 'Direito', inst: 'UNIFEOB — Centro Universitário da Fundação de Ensino Octávio Bastos' },
  { ano: '2009', label: 'Pós-Graduação', titulo: 'Direito Empresarial', inst: 'PUC Minas — Pontifícia Universidade Católica de Minas Gerais' },
  { ano: '2018', label: 'Formação técnica', titulo: 'Holdings patrimoniais', inst: 'Formação técnica específica em estruturação de holdings familiares e empresariais' },
  { ano: '2025', label: 'Atualização', titulo: 'Holding Masters', inst: 'Atualização e aprofundamento técnico em estruturação patrimonial e sucessória' },
  { ano: 'Atual', label: 'Escritório', titulo: site.nome, inst: 'Atuação consultiva concentrada em estruturação societária e patrimonial' },
];

export default function SobrePage() {
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb">Sobre · {site.autor} · {site.oab}</div>
          <h1 className="fade d1" dangerouslySetInnerHTML={{__html:'Advocacia societária conduzida por método e <em>visão preventiva.</em>'}} />
          <p className="lede fade d2">
            Atuação concentrada em direito societário aplicado à organização patrimonial, estruturação de holdings, governança familiar e governança societária — com processo definido, documentação estruturada e acompanhamento contínuo.
          </p>
        </div>
      </header>

      <section className="bio-sec">
        <div className="wrap">
          <div className="bio-grid">
            <div className="portrait fade d1">
              <div className="photo-wrap">
                <Image
                  src="/assets/fotos/retrato-institucional-lg.jpg"
                  alt={`${site.autor} — retrato profissional`}
                  width={1200}
                  height={1500}
                  priority
                  sizes="(max-width: 1000px) 100vw, 420px"
                />
                <div className="caption">
                  <span>{site.autor}</span>
                  <span className="id">{site.oab}</span>
                </div>
              </div>
            </div>
            <div className="bio-text fade d2">
              <h2 dangerouslySetInnerHTML={{__html:'Formação técnica e atuação <em>concentrada.</em>'}} />
              <p>
                <span className="strong">Advogado com atuação concentrada em direito societário.</span> Conduz projetos de estruturação patrimonial, holding, organização sucessória e governança — familiar e societária — por meio de método próprio, orientado por visão preventiva: antecipar cenários, organizar estruturas e reduzir riscos antes que se tornem problemas.
              </p>
              <p>
                A linha de trabalho parte de um princípio direto — patrimônio e sociedade exigem <span style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic'}}>arquitetura</span>, não improvisação. Cada projeto é conduzido com processo definido, documentação estruturada e acompanhamento real. Não há solução genérica para situações específicas: o diagnóstico determina o caminho, não o modelo pronto.
              </p>
              <p>Atuação formalmente referenciada na Ordem dos Advogados do Brasil, Seccional São Paulo, com inscrição pública verificável.</p>
              <a href="https://cna.oab.org.br" target="_blank" rel="noopener" className="verify">
                Verificar inscrição na OAB <span style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic'}}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="tl-sec">
        <div className="wrap">
          <header className="sec-head">
            <div className="num">I. <span style={{fontStyle:'italic'}}>trajetória</span></div>
            <h2 className="title" dangerouslySetInnerHTML={{__html:'Formação e <em>especialização</em> contínua.'}} />
          </header>
          <div className="tl">
            {trajetoria.map((t) => (
              <div key={t.ano} className="tl-row">
                <div className="tl-year">{t.ano}</div>
                <div className="tl-title"><span className="label">{t.label}</span>{t.titulo}</div>
                <div className="tl-inst">{t.inst}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-sec">
        <div className="wrap">
          <header className="sec-head">
            <div className="num">II. <span style={{fontStyle:'italic'}}>postura</span></div>
            <h2 className="title" dangerouslySetInnerHTML={{__html:'Como o escritório <em>trabalha</em> e o que espera do cliente.'}} />
          </header>
          <div className="postura-text">
            <p>
              Holding patrimonial e governança não são produtos de prateleira. São estruturas que precisam ser <em>desenhadas</em> para a realidade de cada família, cada patrimônio, cada sociedade. Isso exige tempo de diagnóstico, documentação rigorosa e uma relação consultiva contínua — não uma relação de produto entregue e fatura paga.
            </p>
            <p>
              Por isso, o trabalho deste escritório começa sempre por um diagnóstico real. Passa por planejamento técnico. É implementado com rigor documental. E não termina na entrega: o acompanhamento é parte do serviço, não um adicional. Cada etapa tem entregável identificável, prazo e responsabilidade definida.
            </p>
          </div>
          <div className="postura-quote">
            Não existe <em>solução genérica</em> para situações específicas. Cada projeto começa por um diagnóstico real, passa por planejamento técnico, é implementado com rigor documental — e continua vivo depois da entrega.
            <div className="sig">Princípio de trabalho</div>
          </div>
        </div>
      </section>

      <section style={{padding:'120px 0',borderTop:'1px solid var(--hair)'}}>
        <div className="wrap">
          <span className="eyebrow">Conversa estratégica</span>
          <h2 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(40px,5vw,72px)',lineHeight:1,letterSpacing:'-.02em',color:'rgb(var(--paper))',margin:'24px 0 32px',maxWidth:900}} dangerouslySetInnerHTML={{__html:'Entender o cenário é <em style="font-family:var(--font-instrument-serif);color:rgb(var(--brass-2))">o primeiro passo</em>.'}} />
          <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:18,lineHeight:1.6,color:'rgba(239,231,212,.75)',maxWidth:680,marginBottom:36}}>
            A conversa inicial serve para compreender a situação patrimonial, societária e familiar. Sem compromisso, sem fórmula pronta. Depois dela, você recebe uma direção clara sobre o que faz sentido — ou não faz — no seu caso concreto.
          </p>
          <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
            <Link href="/contato" className="btn-primary">Agendar conversa <span className="arr">→</span></Link>
            <Link href="/atuacao" className="btn-ghost">Ver frentes de atuação <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
