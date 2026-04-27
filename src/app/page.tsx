import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import { sanityClient } from '@/lib/sanity';
import { artigosDestaqueQuery } from '@/lib/queries';
import './home.css';
import './internals.css';

/* ISR — revalida a cada hora. Alterações no Sanity aparecem em até 60 min. */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: `${site.nome} · ${site.oab}`,
  description: site.descricao,
  alternates: { canonical: '/' },
};

type ArtigoCard = {
  _id: string;
  titulo: string;
  slug: { current: string };
  chamada: string;
  publicadoEm: string;
  tempoLeitura?: number;
  categoria?: { titulo: string; pilar: string };
};

export default async function HomePage() {
  let artigos: ArtigoCard[] = [];
  try {
    artigos = await sanityClient.fetch<ArtigoCard[]>(artigosDestaqueQuery);
  } catch (e) {
    artigos = [];
  }

  return (
    <>
      <Nav />

      <header className="hero">
        <div className="wrap">
          <div className="hero-meta fade d1">
            <span className="eyebrow">Advocacia societária</span>
            <span className="eyebrow" style={{ color: 'rgba(239,231,212,.5)' }}>
              Empresas <span className="dot" /> patrimônio <span className="dot" /> famílias empresárias
            </span>
          </div>

          <div className="hero-grid">
            <div>
              <h1 className="headline fade d2">
                Sociedades, patrimônio e sucessão
                <br />
                exigem <em>arquitetura.</em>
              </h1>
              <p className="hero-sub fade d3">
                Atuação em direito societário, holding patrimonial, governança familiar e organização sucessória
                conduzida por método: <span className="strong">diagnóstico, planejamento, implementação e acompanhamento.</span>
              </p>
              <div className="hero-ctas fade d4">
                <Link href="/advocacia-societaria" className="btn-primary">
                  Advocacia societária <span className="arr">→</span>
                </Link>
                <Link href="/holding-patrimonial-familiar" className="btn-ghost">
                  Holding patrimonial <span className="arr">→</span>
                </Link>
              </div>
            </div>

            <aside className="hero-aside fade d5">
              <Image
                src="/assets/escudo.png"
                alt=""
                width={240}
                height={240}
                aria-hidden="true"
                className="shield-bg"
              />
              <div className="seal">Escritório Thiago Seixas · desde 2009</div>
              <h4>Princípio de trabalho</h4>
              <p>
                Não existe modelo pronto para <span className="italic">situações específicas</span>. Cada estrutura é
                desenhada para a realidade concreta do cliente.
              </p>
              <div className="divider" />
              <div className="stats">
                <div>
                  <div className="stat-num">17</div>
                  <div className="stat-lbl">Anos de<br />atuação</div>
                </div>
                <div>
                  <div className="stat-num">02</div>
                  <div className="stat-lbl">Portas de<br />entrada</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...Array(2)].flatMap((_, i) =>
            ['Advocacia societária', 'Holding patrimonial', 'Acordo de sócios', 'Empresa familiar', 'Governança', 'Sucessão'].map((f) => <span key={`${i}-${f}`}>{f}</span>),
          )}
        </div>
      </div>

      <section className="light-sec dual-entry-sec">
        <div className="wrap">
          <header className="sec-head">
            <div className="num">I. <span className="italic">entrada</span></div>
            <h2 className="title">Duas portas de entrada, uma mesma lógica: <em>estrutura</em>.</h2>
          </header>

          <div className="dual-entry-grid">
            <Link href="/advocacia-societaria" className="dual-card">
              <span className="idx">01</span>
              <h3>Advocacia societária</h3>
              <p>
                Para empresas, sócios e famílias empresárias que precisam constituir, alterar ou reorganizar sociedades,
                revisar contrato social, estruturar acordo de sócios ou prevenir conflito societário.
              </p>
              <strong>Apresentar demanda societária →</strong>
            </Link>

            <Link href="/holding-patrimonial-familiar" className="dual-card">
              <span className="idx">02</span>
              <h3>Holding patrimonial e sucessória</h3>
              <p>
                Para famílias empresárias e titulares de patrimônio relevante que precisam avaliar holding, organização
                patrimonial, doação de quotas, sucessão familiar e regras de governança.
              </p>
              <strong>Solicitar análise de viabilidade →</strong>
            </Link>
          </div>
        </div>
      </section>

      <section className="light-sec">
        <div className="wrap">
          <header className="sec-head">
            <div className="num">II. <span className="italic">audiência</span></div>
            <h2 className="title">
              Este escritório é para quem pensa o patrimônio e a empresa como <em>estrutura</em>, não como improviso.
            </h2>
          </header>
          <p className="icp-intro">
            A atuação é consultiva, técnica e preventiva. O perfil de cliente é bem definido:
          </p>
          <div className="icp-list">
            <article className="icp-card">
              <span className="idx">Perfil I</span>
              <h3>Famílias empresárias com patrimônio consolidado</h3>
              <p>Pensando em sucessão, governança e regras antes que o cenário vire conflito ou herança mal-resolvida.</p>
            </article>
            <article className="icp-card">
              <span className="idx">Perfil II</span>
              <h3>Sociedades em reorganização</h3>
              <p>Entrada ou saída de sócio, cisão, incorporação, reestruturação societária ou abertura de nova frente empresarial.</p>
            </article>
            <article className="icp-card">
              <span className="idx">Perfil III</span>
              <h3>Empresas familiares em transição</h3>
              <p>Negócios que precisam profissionalizar governança, reduzir atrito societário e preparar sucessão de gestão.</p>
            </article>
            <article className="icp-card">
              <span className="idx">Perfil IV</span>
              <h3>Empresários avaliando holding</h3>
              <p>Pessoas que entendem que holding não é produto de prateleira, mas arquitetura jurídico-societária a ser diagnosticada.</p>
            </article>
          </div>
          <div className="icp-neg">
            <strong>O escritório não trabalha</strong> com modelos prontos sem diagnóstico, promessas de resultado,
            estruturas padronizadas para todo caso ou soluções desvinculadas da realidade documental do cliente.
          </div>
        </div>
      </section>

      <section id="atuacao">
        <div className="wrap">
          <header className="sec-head">
            <div className="num">III. <span className="italic">frentes</span></div>
            <h2 className="title">Frentes técnicas dentro da mesma <em>arquitetura</em>.</h2>
          </header>
          <div className="act-list">
            {site.frentes.map((f, i) => (
              <Link key={f.slug} href={`/atuacao/${f.slug}`} className="act-row">
                <span className="act-num">{['i','ii','iii','iv','v','vi'][i]}.</span>
                <h3 className="act-title">
                  {f.titulo.replace(` ${f.emph}`, '')} <em>{f.emph}</em>
                </h3>
                <span className="act-ar">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="wrap">
          <span className="eyebrow">Posição</span>
          <p className="quote" style={{ marginTop: 28 }}>
            Patrimônio e sociedade não se resolvem por <em>modelos prontos</em>. Cada estrutura é desenhada para a realidade
            concreta do cliente — com diagnóstico antes de decisão, documento antes de promessa, e acompanhamento <em>depois</em> da entrega.
          </p>
          <div className="sig">Thiago Seixas · {site.oab}</div>
        </div>
      </section>

      {artigos.length > 0 && (
        <section id="artigos">
          <div className="wrap">
            <header className="sec-head">
              <div className="num">IV. <span className="italic">arquivo</span></div>
              <h2 className="title">Textos técnicos sobre <em>societário</em>, holding, governança e sucessão.</h2>
            </header>
            <div className="art-grid">
              {artigos.map((a, i) => (
                <Link key={a._id} href={`/artigos/${a.slug.current}`} className={`art-card ${i === 0 ? 'big' : ''}`}>
                  <div className="meta">
                    <span>{a.categoria?.titulo || 'Ensaio'}</span>
                    <span>·</span>
                    <span>{a.tempoLeitura ? `${a.tempoLeitura} min` : 'Leitura'}</span>
                  </div>
                  <h3>{a.titulo}</h3>
                  <p>{a.chamada}</p>
                  <span className="art-link">Ler <em>→</em></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="final-cta light-sec" id="contato-home">
        <div className="wrap">
          <span className="eyebrow">Primeiro contato</span>
          <h2>Apresente a demanda para <em>análise inicial</em>.</h2>
          <p>
            O trabalho começa pela compreensão do cenário. A partir dessa análise, é possível indicar se a demanda é
            societária, patrimonial, sucessória ou se exige outra condução técnica.
          </p>
          <div className="actions">
            <Link href="/contato" className="btn-ink">Enviar demanda <span className="arr">→</span></Link>
            <Link href="/metodo" className="btn-ink-ghost">Conhecer o método <span className="arr" style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic' }}>→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
