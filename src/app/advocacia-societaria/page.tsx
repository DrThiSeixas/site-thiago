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
  title: 'Advocacia Societária',
  description:
    'Advocacia societária para empresas, sócios e famílias empresárias. Constituição, alteração, reorganização societária, acordo de sócios e governança empresarial.',
  alternates: { canonical: '/advocacia-societaria' },
  openGraph: {
    title: `Advocacia Societária — ${site.nomeCurto}`,
    description:
      'Atuação consultiva em constituição, alteração e reorganização de sociedades, acordo de sócios, governança empresarial e estruturação societária preventiva.',
    images: ['/assets/logo-vertical.png'],
  },
};

const quandoProcurar = [
  'Constituição de sociedade limitada com cláusulas ajustadas à realidade dos sócios.',
  'Alteração contratual, entrada ou saída de sócio.',
  'Acordo de sócios ou acordo de quotistas para prevenir conflito futuro.',
  'Reorganização societária, cisão, incorporação ou transformação.',
  'Empresa familiar sem regras claras de sucessão e governança.',
  'Contrato social genérico que já não acompanha a operação da empresa.',
];

const comoFunciona = [
  'Análise inicial da demanda e identificação do risco societário central.',
  'Levantamento de contrato social, alterações, atas, documentos contábeis e contexto dos sócios.',
  'Diagnóstico societário com definição do caminho técnico adequado.',
  'Elaboração ou revisão dos atos societários necessários.',
  'Acompanhamento da assinatura, registro e implementação documental.',
];

const pontosAnalise = [
  'Poderes de administração e assinatura.',
  'Regras para entrada, saída e exclusão de sócios.',
  'Quóruns, deliberações e distribuição de resultados.',
  'Sucessão por morte, incapacidade ou retirada.',
  'Regras de avaliação de quotas e apuração de haveres.',
  'Compatibilidade entre contrato social, acordo de sócios e realidade operacional.',
];

export default function AdvocaciaSocietariaPage() {
  const whatsappText = 'Olá, gostaria de apresentar uma demanda societária para análise inicial pelo escritório.';

  return (
    <>
      <Nav />

      <header className="lp-hero">
        <div className="wrap lp-hero-grid">
          <div>
            <div className="crumb lp-crumb">
              <Link href="/">Início</Link><span className="sep">/</span>Advocacia Societária
            </div>
            <span className="eyebrow">Direito societário empresarial</span>
            <h1>Advocacia societária para empresas, sócios e famílias empresárias.</h1>
            <p className="lp-lede">
              Atuação em constituição, alteração e reorganização de sociedades, acordo de sócios,
              governança empresarial e estruturação societária preventiva.
            </p>
            <div className="lp-ctas">
              <a href="#formulario" className="btn-primary">Apresentar demanda societária <span className="arr">→</span></a>
              <TrackedContactLink
                href={waUrl(whatsappText)}
                eventName="click_whatsapp"
                local="hero_advocacia_societaria"
                target="_blank"
                rel="noopener"
                className="btn-ghost"
              >
                Falar pelo WhatsApp <span className="arr">→</span>
              </TrackedContactLink>
            </div>
          </div>

          <aside className="lp-hero-card">
            <span className="card-label">Ponto de entrada</span>
            <h2>Societário antes da crise.</h2>
            <p>
              O trabalho não começa pela minuta. Começa pela leitura da empresa, dos sócios,
              das regras existentes e do que precisa ser prevenido documentalmente.
            </p>
            <div className="lp-mini-list">
              <span>Contrato social</span>
              <span>Acordo de sócios</span>
              <span>Reorganização</span>
              <span>Empresa familiar</span>
            </div>
          </aside>
        </div>
      </header>

      <section className="lp-section light-sec">
        <div className="wrap">
          <header className="lp-section-head">
            <span className="eyebrow">Quando procurar</span>
            <h2>Sinais de que a estrutura societária precisa ser revista.</h2>
          </header>
          <div className="lp-card-grid">
            {quandoProcurar.map((item, index) => (
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
            <h2>Diagnóstico primeiro. Documento depois.</h2>
            <p className="lp-text">
              A atuação societária exige coerência entre contrato social, documentos paralelos,
              operação real da empresa e objetivos dos sócios. Por isso, a solução técnica é definida
              depois do levantamento mínimo do caso.
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
            <span className="eyebrow">Pontos de análise</span>
            <h2>O contrato social precisa sustentar a empresa que existe, não apenas a empresa que foi aberta.</h2>
          </header>
          <div className="lp-chip-grid">
            {pontosAnalise.map((item) => <div className="lp-chip" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="lp-section light-sec">
        <div className="wrap lp-two-col">
          <div>
            <span className="eyebrow">Limites do trabalho</span>
            <h2>O que não é oferecido.</h2>
          </div>
          <div className="lp-negative">
            <p>Não são utilizados modelos prontos sem diagnóstico.</p>
            <p>Não há promessa de resultado, eliminação de conflito ou vantagem econômica automática.</p>
            <p>Não se trata de atendimento de varejo jurídico ou de elaboração isolada sem contexto societário mínimo.</p>
          </div>
        </div>
      </section>

      <section className="lp-form-section" id="formulario">
        <div className="wrap contact-grid">
          <div className="form-wrap">
            <h2>Apresentar <em>demanda societária</em>.</h2>
            <p className="note">
              Informe brevemente o cenário. O retorno será feito pelos canais oficiais, após análise preliminar da demanda enviada.
            </p>
            <ContactForm
              defaultFrente="Advocacia societária"
              origem="landing_advocacia_societaria"
              submitLabel="Apresentar demanda societária"
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
              local="form_advocacia_societaria"
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
      <Whats texto={whatsappText} local="fixo_advocacia_societaria" />
    </>
  );
}
