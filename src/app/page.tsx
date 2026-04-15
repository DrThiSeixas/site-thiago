import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site, waUrl } from '@/lib/site';
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
  // Silenciosamente ignora se Sanity não estiver configurado ainda
  try {
    artigos = await sanityClient.fetch<ArtigoCard[]>(artigosDestaqueQuery);
  } catch (e) {
    artigos = [];
  }

  return (
    <>
      <Nav />

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-meta fade d1">
            <span className="eyebrow">Arquivo 001</span>
            <span className="eyebrow" style={{ color: 'rgba(239,231,212,.5)' }}>
              Estruturação patrimonial <span className="dot" /> societária <span className="dot" /> sucessória
            </span>
          </div>

          <div className="hero-grid">
            <div>
              <h1 className="headline fade d2">
                Patrimônio <span className="amp">&amp;</span> sociedade
                <br />
                exigem <em>arquitetura.</em>
              </h1>
              <p className="hero-sub fade d3">
                Holding patrimonial, governança familiar e organização sucessória conduzidas por método:{' '}
                <span className="strong">diagnóstico, planejamento, implementação e acompanhamento.</span> Advocacia
                societária com visão preventiva, para famílias empresárias e sociedades que não aceitam soluções
                genéricas.
              </p>
              <div className="hero-ctas fade d4">
                <Link href="/contato" className="btn-primary">
                  Agendar conversa estratégica <span className="arr">→</span>
                </Link>
                <Link href="/metodo" className="btn-ghost">
                  Conhecer o método <span className="arr">→</span>
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
                  <div className="stat-lbl">
                    Anos de
                    <br />
                    atuação
                  </div>
                </div>
                <div>
                  <div className="stat-num">06</div>
                  <div className="stat-lbl">
                    Etapas
                    <br />
                    do método
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...Array(2)].flatMap((_, i) =>
            site.frentes.map((f) => <span key={`${i}-${f.slug}`}>{f.titulo}</span>),
          )}
        </div>
      </div>

      {/* ICP */}
      <section className="light-sec">
        <div className="wrap">
          <header className="sec-head">
            <div className="num">
              I. <span className="italic">audiência</span>
            </div>
            <h2 className="title">
              Este escritório é para quem pensa o patrimônio como <em>estrutura</em>, não como inventário.
            </h2>
          </header>
          <p className="icp-intro">
            A advocacia aqui praticada é consultiva, técnica e continuada. Não atende demandas pontuais nem trabalha com{' '}
            <em>soluções genéricas</em>. O perfil de cliente é bem definido:
          </p>
          <div className="icp-list">
            <article className="icp-card">
              <span className="idx">Perfil I</span>
              <h3>Famílias empresárias com patrimônio consolidado</h3>
              <p>Pensando em sucessão, proteção e governança antes que o cenário vire conflito, imposto ou herança mal-resolvida.</p>
            </article>
            <article className="icp-card">
              <span className="idx">Perfil II</span>
              <h3>Sucessores em transição geracional</h3>
              <p>Assumindo a gestão da empresa familiar e buscando profissionalizar governança, reduzir atrito societário e preparar a próxima fase.</p>
            </article>
            <article className="icp-card">
              <span className="idx">Perfil III</span>
              <h3>Sociedades em reorganização</h3>
              <p>Entrada ou saída de sócio, cisão, incorporação, reestruturação societária, preparação para M&amp;A ou abertura de nova frente.</p>
            </article>
            <article className="icp-card">
              <span className="idx">Perfil IV</span>
              <h3>Empresários constituindo holding</h3>
              <p>Pessoas que entendem que a holding não é produto de prateleira — é arquitetura jurídico-tributária-familiar que precisa ser desenhada.</p>
            </article>
          </div>
          <div className="icp-neg">
            <strong>O escritório não atende</strong> demandas pontuais sem contexto estruturante, casos de varejo jurídico, litígios de
            consumo ou trabalho, nem trabalha por honorários de ticket baixo. Cada projeto é conduzido com dedicação técnica e
            acompanhamento real — e isso exige escala de atendimento controlada.
          </div>
        </div>
      </section>

      {/* ATUAÇÃO — index */}
      <section id="atuacao">
        <div className="wrap">
          <header className="sec-head">
            <div className="num">
              II. <span className="italic">frentes</span>
            </div>
            <h2 className="title">
              Seis frentes, uma <em>mesma</em> arquitetura.
            </h2>
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

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="wrap">
          <span className="eyebrow">Posição</span>
          <p className="quote" style={{ marginTop: 28 }}>
            Patrimônio e sociedade não se resolvem por <em>modelos prontos</em>. Cada estrutura é desenhada para a realidade
            concreta do cliente — com diagnóstico antes de decisão, documento antes de promessa, e acompanhamento{' '}
            <em>depois</em> da entrega.
          </p>
          <div className="sig">Thiago Seixas · {site.oab}</div>
        </div>
      </section>

      {/* ARTIGOS EM DESTAQUE (Sanity) */}
      {artigos.length > 0 && (
        <section id="artigos">
          <div className="wrap">
            <header className="sec-head">
              <div className="num">
                III. <span className="italic">arquivo</span>
              </div>
              <h2 className="title">
                Textos técnicos sobre <em>holding</em>, governança e sucessão.
              </h2>
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
                  <span className="art-link">
                    Ler <em>→</em>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="final-cta light-sec" id="contato-home">
        <div className="wrap">
          <span className="eyebrow">Conversa estratégica</span>
          <h2>
            Uma primeira conversa <em>não compromete</em> — estrutura.
          </h2>
          <p>
            Agendamos uma conversa inicial para entender o cenário, ouvir os objetivos e apontar primeiras direções. Sem
            modelos prontos, sem promessas de resultado, sem pressa. O trabalho começa pela compreensão — e só faz
            sentido avançar quando a direção está clara para ambos os lados.
          </p>
          <div className="actions">
            <Link href="/contato" className="btn-ink">
              Solicitar diagnóstico <span className="arr">→</span>
            </Link>
            <a href={`mailto:${site.contato.email}`} className="btn-ink-ghost">
              Enviar mensagem por e-mail <span className="arr" style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic' }}>→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
