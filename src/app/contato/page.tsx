import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { TrackedContactLink } from '@/components/TrackedContactLink';
import { ContactForm } from './ContactForm';
import { site, mapsUrl, waUrl } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Contato',
  description: `Canais oficiais do escritório. WhatsApp, e-mail e formulário qualificador. ${site.endereco.logradouro} — ${site.endereco.cidade} — ${site.endereco.uf}.`,
  openGraph: { title: `Contato — ${site.nomeCurto}`, images: ['/assets/logo-vertical.png'] },
  alternates: { canonical: '/contato' },
};

export default function ContatoPage() {
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Contato</div>
          <h1 className="fade d1">Apresente sua demanda para análise inicial.</h1>
          <p className="lede fade d2">
            O primeiro contato serve para entender o cenário. O retorno será feito pelos canais oficiais,
            após análise preliminar da mensagem enviada.
          </p>
        </div>
      </header>

      <section className="contact-main">
        <div className="wrap">
          <div className="contact-grid">
            <div className="form-wrap">
              <h2>Formulário <em>qualificador</em></h2>
              <p className="note">As informações abaixo ajudam a identificar a natureza da demanda e o melhor encaminhamento técnico.</p>
              <ContactForm origem="contato" submitLabel="Enviar demanda" />
            </div>

            <aside className="contact-aside">
              <div className="block">
                <div className="label">Canais oficiais</div>
                <div className="val">
                  <TrackedContactLink href={`mailto:${site.contato.email}`} eventName="click_email" local="contato_aside">
                    {site.contato.email}
                  </TrackedContactLink><br />
                  <TrackedContactLink href={waUrl()} eventName="click_whatsapp" local="contato_aside" target="_blank" rel="noopener">
                    WhatsApp {site.contato.whatsappFormatado}
                  </TrackedContactLink><br />
                  <a href={site.contato.linkedin} target="_blank" rel="noopener">LinkedIn — {site.autor}</a>
                </div>
              </div>
              <div className="block">
                <div className="label">Endereço</div>
                <div className="val">
                  {site.endereco.logradouro}<br />
                  {site.endereco.bairro} — <em>{site.endereco.cidade}</em> — {site.endereco.uf}<br />
                  CEP {site.endereco.cep}
                </div>
                <a href={mapsUrl()} target="_blank" rel="noopener" className="come">
                  Como chegar <span className="arr" style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic'}}>→</span>
                </a>
              </div>
              <div className="block">
                <div className="label">Atendimento</div>
                <div className="val">Segunda a sexta<br /><em>9h às 18h</em></div>
              </div>
              <div className="block">
                <div className="label">Inscrição profissional</div>
                <div className="val">
                  <em>{site.oab}</em><br />
                  <a href="https://cna.oab.org.br" target="_blank" rel="noopener">Verificar na OAB →</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="warning-sec" id="aviso-seguranca">
        <div className="wrap">
          <span className="eyebrow">Aviso de segurança</span>
          <h3>Todas as comunicações ocorrem <em>exclusivamente</em> pelos canais oficiais.</h3>
          <p>O escritório <strong>{site.nome}</strong> realiza suas comunicações, envio de documentos e tratativas exclusivamente pelos canais listados nesta página: o e-mail <strong>{site.contato.email}</strong>, o WhatsApp oficial <strong>{site.contato.whatsappFormatado}</strong>, o perfil oficial no LinkedIn e este site <strong>thiagoseixas.adv.br</strong>.</p>
          <p>Não são utilizados <em>perfis pessoais em redes sociais, aplicativos de mensagem não oficiais ou endereços de e-mail de domínios genéricos</em> para qualquer tipo de comunicação profissional.</p>
          <p>Em caso de dúvida sobre a autenticidade de qualquer contato, confirme diretamente pelo e-mail ou WhatsApp oficiais antes de prosseguir.</p>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
