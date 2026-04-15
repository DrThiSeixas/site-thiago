import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Método',
  description: 'Método de trabalho em seis etapas: diagnóstico, levantamento, estruturação, implementação, governança e acompanhamento contínuo.',
  openGraph: { title: `Método — ${site.nomeCurto}`, images: ['/assets/fotos/og-institucional.jpg'] },
  alternates: { canonical: '/metodo' },
};

const etapas = [
  {
    n: '01', label: 'Etapa i · diagnóstico', titulo: 'Diagnóstico <em>inicial</em>', id: 'diagnostico', alt: false,
    paragrafos: [
      'O trabalho começa por <em>compreensão</em>. Antes de qualquer definição de estrutura, é necessário entender com profundidade a situação patrimonial, societária e familiar do cliente. Não se aplica modelo pronto — o diagnóstico determina o caminho.',
      'Nessa etapa, o escritório conduz escuta estruturada para identificar o que existe, o que funciona, o que precisa ser organizado, e quais são os objetivos e preocupações do cliente. São perguntas diretas, escuta atenta e primeiras considerações sobre viabilidade e direção.',
    ],
    entregavel: 'Relatório de diagnóstico com primeiras direções e escopo do projeto.',
    aside: ['Conversa inicial estruturada (90–120 minutos)', 'Perguntas técnicas e contextuais', 'Primeiras considerações sobre viabilidade', 'Definição de escopo e cronograma', 'Proposta técnica formalizada'],
  },
  {
    n: '02', label: 'Etapa ii · levantamento', titulo: 'Levantamento patrimonial e <em>societário</em>', id: 'levantamento', alt: true,
    paragrafos: [
      'Com o diagnóstico feito, inicia-se o mapeamento detalhado. Essa etapa envolve a identificação e documentação de todos os bens, participações societárias, contratos, obrigações, estruturas existentes e relações relevantes.',
      'O levantamento serve como base para qualquer decisão. Sem ele, há risco de construir sobre <em>premissas incompletas</em>. O escritório organiza essas informações em formato estruturado, permitindo visão clara e completa do cenário — ponto de partida necessário para todas as decisões técnicas seguintes.',
    ],
    entregavel: 'Dossiê patrimonial e societário estruturado, com pendências identificadas.',
    aside: ['Lista organizada de documentos a serem fornecidos', 'Orientação clara sobre cada item', 'Análise de consistência e regularidade', 'Identificação de pendências ou riscos', 'Base documental organizada para as etapas seguintes'],
  },
  {
    n: '03', label: 'Etapa iii · estruturação', titulo: 'Definição da estrutura <em>adequada</em>', id: 'estruturacao', alt: false,
    paragrafos: [
      'A partir do diagnóstico e do levantamento, define-se qual a arquitetura patrimonial e societária mais adequada para aquele caso específico. Essa é a etapa de planejamento técnico: escolha do tipo societário, definição de participações, estrutura de governança, instrumentos de proteção e mecanismos de sucessão.',
      'A definição considera aspectos jurídicos, tributários, familiares e práticos. <em>Não se adota solução genérica</em> — a estrutura é desenhada para funcionar na realidade concreta do cliente.',
    ],
    entregavel: 'Proposta técnica com arquitetura detalhada e justificativas de cada escolha.',
    aside: ['Apresentação técnica da proposta', 'Explicação clara de cada escolha estrutural', 'Análise tributária comparativa, quando cabível', 'Riscos e trade-offs explicitados', 'Espaço para revisão e ajustes antes da execução'],
  },
  {
    n: '04', label: 'Etapa iv · implementação', titulo: 'Implementação documental <em>e societária</em>', id: 'implementacao', alt: true,
    paragrafos: [
      'Com a estrutura definida e aprovada, inicia-se a implementação. Essa etapa envolve a elaboração de todos os documentos necessários: contratos sociais, atos constitutivos, alterações contratuais, procurações, termos, escrituras e demais instrumentos.',
      'A implementação é conduzida com <em>rigor técnico e documental</em>. Cada ato é elaborado, revisado e formalizado com atenção ao detalhe. Registros em cartório, juntas comerciais e órgãos competentes são acompanhados até a conclusão.',
    ],
    entregavel: 'Atos formalizados, registros concluídos, documentação organizada para o cliente.',
    aside: ['Condução organizada e cronograma visível', 'Revisão em cada etapa com o cliente', 'Acompanhamento de registros oficiais', 'Arquivo completo entregue ao final', 'Suporte em cada ato que exige assinatura'],
  },
  {
    n: '05', label: 'Etapa v · governança', titulo: 'Organização da <em>governança</em>', id: 'governanca', alt: false,
    paragrafos: [
      'A estrutura jurídica sozinha não sustenta uma família empresária ou uma sociedade no tempo. Governança é o conjunto de regras vivas que organiza decisões, papéis e convivência — acordos de sócios, protocolos familiares, conselhos, regras de deliberação.',
      'Nessa etapa, o escritório constrói — junto com o cliente — os instrumentos que dão <em>vida à estrutura</em>: não como burocracia, mas como previsibilidade e redução de atrito. Governança bem-feita antecipa conflitos antes que virem processos.',
    ],
    entregavel: 'Acordo de sócios, protocolos de decisão, documentos de governança formalizados.',
    aside: ['Discussão sobre regras práticas com cada parte', 'Redação de acordo de sócios ou familiar', 'Definição de quóruns, papéis e procedimentos', 'Protocolo de resolução de impasses', 'Documentos revisados e assinados'],
  },
  {
    n: '06', label: 'Etapa vi · acompanhamento', titulo: 'Acompanhamento <em>contínuo</em>', id: 'acompanhamento', alt: true,
    paragrafos: [
      'O trabalho não termina na entrega. Estruturas patrimoniais e societárias são organismos vivos — mudam quando a família muda, quando o patrimônio cresce, quando a legislação muda, quando novos sócios entram.',
      'O escritório acompanha a estrutura criada com <em>revisões periódicas</em>, ajustes documentais, orientação em decisões pontuais e suporte à operação. Essa etapa é parte do serviço — não adicional pago à parte. Porque estrutura sem manutenção vira documento morto.',
    ],
    entregavel: 'Revisão anual, ajustes pontuais, suporte consultivo conforme demanda do cliente.',
    aside: ['Revisão anual da estrutura', 'Ajustes em alterações contratuais', 'Consultoria em decisões pontuais', 'Atualização em mudanças legislativas', 'Canal direto de comunicação permanente'],
  },
];

export default function MetodoPage() {
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Método</div>
          <h1 className="fade d1" dangerouslySetInnerHTML={{__html:'Um processo definido, da <em>escuta</em> ao acompanhamento contínuo.'}} />
          <p className="lede fade d2">Todo projeto é conduzido por seis etapas claras, com entregas identificáveis, documentação estruturada e prazo definido. Sem improviso, sem modelo genérico, sem sumir depois da assinatura.</p>
        </div>
      </header>

      <section className="journey">
        <div className="wrap">
          <span className="eyebrow">Visão geral do processo</span>
          <div className="line">
            {etapas.map((e) => (
              <div key={e.n} className="node">
                <span className="n">{e.n}</span>
                <h4>{e.titulo.replace(/<[^>]+>/g,'').split(' ')[0]}</h4>
                <p>{e.paragrafos[0].replace(/<[^>]+>/g,'').split('.')[0]}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {etapas.map((e) => (
        <section key={e.id} className={`etapa${e.alt ? ' alt' : ''}`} id={e.id}>
          <div className="wrap">
            <div className="etapa-grid">
              <div className="etapa-num">{e.n}</div>
              <div>
                <div className="label">{e.label}</div>
                <h2 dangerouslySetInnerHTML={{__html: e.titulo}} />
                {e.paragrafos.map((p, i) => (<p key={i} dangerouslySetInnerHTML={{__html: p}} />))}
                <div className="entreg">Entregável — {e.entregavel}</div>
              </div>
              <aside className="etapa-aside">
                <h4>O que o cliente pode esperar</h4>
                <ul>
                  {e.aside.map((a, i) => (<li key={i}>{a}</li>))}
                </ul>
              </aside>
            </div>
          </div>
        </section>
      ))}

      <section style={{padding:'120px 0'}}>
        <div className="wrap">
          <span className="eyebrow">Primeiro passo</span>
          <h2 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(40px,5vw,72px)',lineHeight:1,letterSpacing:'-.02em',color:'rgb(var(--paper))',margin:'16px 0 28px',maxWidth:900}} dangerouslySetInnerHTML={{__html:'O método começa com uma <em style="font-family:var(--font-instrument-serif);color:rgb(var(--brass-2))">conversa</em>.'}} />
          <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:18,lineHeight:1.6,color:'rgba(239,231,212,.75)',maxWidth:720,marginBottom:36}}>
            A primeira etapa — diagnóstico — é também a decisão compartilhada sobre se faz sentido avançar. Nenhum compromisso, nenhum modelo pronto.
          </p>
          <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
            <Link href="/contato" className="btn-primary">Agendar conversa estratégica <span className="arr">→</span></Link>
            <Link href="/atuacao" className="btn-ghost">Ver frentes de atuação <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
