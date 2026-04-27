import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { ContactForm } from '@/app/contato/ContactForm';
import { TrackedContactLink } from '@/components/TrackedContactLink';
import { site, waUrl } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Holding Patrimonial e Familiar',
  description:
    'Holding patrimonial e organização sucessória para famílias empresárias. Estruturação jurídica de holdings, sucessão familiar, doação de quotas e governança mediante diagnóstico prévio.',
  alternates: { canonical: '/holding-patrimonial-familiar' },
  openGraph: {
    title: `Holding Patrimonial e Familiar — ${site.nomeCurto}`,
    description:
      'Estruturação jurídica de holdings, organização patrimonial, sucessão familiar, doação de quotas e governança, sempre mediante diagnóstico prévio.',
    images: ['/assets/logo-vertical.png'],
  },
};

const quandoFazSentido = [
  'Patrimônio imobiliário relevante concentrado em pessoa física.',
  'Família empresária com necessidade de organizar sucessão e regras entre herdeiros.',
  'Participações societárias que precisam ser centralizadas ou reorganizadas.',
  'Imóveis alugados, bens de uso familiar ou patrimônio rural com gestão dispersa.',
  'Intenção de doar quotas com reserva de usufruto e cláusulas adequadas ao caso.',
  'Necessidade de governança familiar para reduzir improviso decisório.',
];

const comoFunciona = [
  'Levantamento patrimonial, societário e familiar.',
  'Análise de viabilidade jurídica, societária e tributária do caso concreto.',
  'Definição da arquitetura: sociedade, quotas, administração, regras familiares e documentos necessários.',
  'Elaboração dos atos constitutivos, alterações, acordos e instrumentos complementares.',
  'Acompanhamento da implementação e organização documental da estrutura.',
];

const quandoNaoFazSentido = [
  'Patrimônio simples, sem complexidade sucessória ou societária relevante.',
  'Busca por economia tributária automática ou promessa padronizada.',
  'Tentativa de usar a estrutura para ocultação patrimonial ou fuga de obrigações.',
  'Custo de constituição e manutenção superior ao benefício esperado.',
];

const pontosAnalise = [
  'ITBI e Tema 796 do STF na integralização de imóveis.',
  'Ganho de capital na conferência de bens.',
  'ITCMD, doação de quotas e reserva de usufruto.',
  'Cláusulas de incomunicabilidade, impenhorabilidade, inalienabilidade e reversão.',
  'Administração da holding e regras de deliberação familiar.',
  'Diálogo técnico com a contabilidade indicada pelo cliente.',
];

export default function HoldingPatrimonialFamiliarPage() {
  const whatsappText = 'Olá, gostaria de apresentar uma demanda de holding patrimonial/organização sucessória para análise inicial pelo escritório.';

  return (
    <>
      <Nav />

      <header className="lp-hero">
        <div className="wrap lp-hero-grid">
          <div>
            <div className="crumb lp-crumb">
              <Link href="/">Início</Link><span className="sep">/</span>Holding Patrimonial e Familiar
            </div>
            <span className="eyebrow">Organização patrimonial e sucessória</span>
            <h1>Holding patrimonial e organização sucessória para famílias empresárias.</h1>
            <p className="lp-lede">
              Estruturação jurídica de holdings, organização patrimonial, sucessão familiar,
              doação de quotas e governança, sempre mediante diagnóstico prévio do caso concreto.
            </p>
            <div className="lp-ctas">
              <a href="#formulario" className="btn-primary">Solicitar análise de viabilidade <span className="arr">→</span></a>
              <TrackedContactLink
                href={waUrl(whatsappText)}
                eventName="click_whatsapp"
                local="hero_holding"
                target="_blank"
                rel="noopener"
                className="btn-ghost"
              >
                Falar pelo WhatsApp <span className="arr">→</span>
              </TrackedContactLink>
            </div>
          </div>

          <aside className="lp-hero-card">
            <span className="card-label">Ponto de partida</span>
            <h2>Holding não é produto de prateleira.</h2>
            <p>
              A estrutura só deve ser indicada quando há coerência entre patrimônio, família,
              custo de manutenção, efeitos tributários e objetivo sucessório.
            </p>
            <div className="lp-mini-list">
              <span>Imóveis</span>
              <span>Quotas</span>
              <span>Sucessão</span>
              <span>Governança</span>
            </div>
          </aside>
        </div>
      </header>

      <section className="lp-section light-sec">
        <div className="wrap">
          <header className="lp-section-head">
            <span className="eyebrow">Quando pode fazer sentido</span>
            <h2>Cenários em que a holding pode ser tecnicamente avaliada.</h2>
          </header>
          <div className="lp-card-grid">
            {quandoFazSentido.map((item, index) => (
              <article className="lp-card" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="wrap lp-two-col">
          <div>
            <span className="eyebrow">Como funciona</span>
            <h2>Viabilidade antes da constituição.</h2>
            <p className="lp-text">
              A análise precisa considerar imóveis, empresas, família, contabilidade, sucessão,
              tributação e governança. A constituição da holding é consequência de um diagnóstico,
              não o primeiro ato do projeto.
            </p>
          </div>
          <ol className="lp-steps">
            {comoFunciona.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>
      </section>

      <section className="lp-section lp-muted">
        <div className="wrap">
          <header className="lp-section-head narrow">
            <span className="eyebrow">Pontos críticos</span>
            <h2>A decisão precisa passar por análise jurídica, societária e tributária.</h2>
          </header>
          <div className="lp-chip-grid">
            {pontosAnalise.map((item) => <div className="lp-chip" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="lp-section light-sec">
        <div className="wrap lp-two-col">
          <div>
            <span className="eyebrow">Quando pode não fazer sentido</span>
            <h2>Nem toda família precisa de uma holding.</h2>
          </div>
          <div className="lp-negative">
            {quandoNaoFazSentido.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="lp-form-section" id="formulario">
        <div className="wrap contact-grid">
          <div className="form-wrap">
            <h2>Solicitar <em>análise de viabilidade</em>.</h2>
            <p className="note">
              Informe brevemente o cenário patrimonial e familiar. O retorno será feito pelos canais oficiais,
              após análise preliminar da demanda enviada.
            </p>
            <ContactForm
              defaultFrente="Holding patrimonial"
              origem="landing_holding_patrimonial_familiar"
              submitLabel="Solicitar análise de viabilidade"
              compacto
            />
          </div>
          <aside className="lp-contact-aside">
            <span className="eyebrow">Canais oficiais</span>
            <p>{site.contato.email}</p>
            <p>WhatsApp {site.contato.whatsappFormatado}</p>
            <p>{site.oab}</p>
            <TrackedContactLink
              href={waUrl(whatsappText)}
              eventName="click_whatsapp"
              local="form_holding"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              Falar com o escritório <span className="arr">→</span>
            </TrackedContactLink>
          </aside>
        </div>
      </section>

      <Footer />
      <Whats texto={whatsappText} local="fixo_holding" />
    </>
  );
}
