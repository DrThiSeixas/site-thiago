import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { ContactForm } from './ContactForm';
import { site, mapsUrl, waUrl } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Contato',
  description: `Canais oficiais do escritório. WhatsApp, e-mail e formulário qualificador. ${site.endereco.logradouro} — ${site.endereco.cidade} — ${site.endereco.uf}.`,
  openGraph: { title: `Contato — ${site.nomeCurto}`, images: ['/assets/fotos/og-sorriso.jpg'] },
  alternates: { canonical: '/contato' },
};

export default function ContatoPage() {
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Contato</div>
          <h1 className="fade d1" dangerouslySetInnerHTML={{__html:'Uma primeira conversa <em>não compromete</em> — estrutura.'}} />
          <p className="lede fade d2">O primeiro contato serve para entender o cenário. Conte brevemente sua situação, e retorno em até 24 horas úteis com a direção mais adequada para seguirmos.</p>
        </div>
      </header>

      <section className="contact-main">
        <div className="wrap">
          <div className="contact-grid">
            <div className="form-wrap">
              <h2 dangerouslySetInnerHTML={{__html:'Formulário <em>qualificador</em>'}} />
              <p className="note">As informações abaixo me ajudam a entender o contexto e dar um retorno mais preciso. Quanto mais específico, melhor — mas sem formalidade obrigatória.</p>
              <ContactForm />
            </div>

            <aside className="contact-aside">
              <div className="block">
                <div className="label">Canais oficiais</div>
                <div className="val">
                  <a href={`mailto:${site.contato.email}`}>{site.contato.email}</a><br />
                  <a href={waUrl()}>WhatsApp {site.contato.whatsappFormatado}</a><br />
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
          <h3 dangerouslySetInnerHTML={{__html:'Todas as comunicações ocorrem <em>exclusivamente</em> pelos canais oficiais.'}} />
          <p>O escritório <strong>{site.nome}</strong> realiza todas as suas comunicações, envio de documentos e tratativas exclusivamente pelos canais listados nesta página: o e-mail <strong>{site.contato.email}</strong>, o WhatsApp oficial <strong>{site.contato.whatsappFormatado}</strong>, o perfil oficial no LinkedIn e este site <strong>thiagoseixas.adv.br</strong>.</p>
          <p>Não são utilizados <em>perfis pessoais em redes sociais, aplicativos de mensagem não oficiais ou endereços de e-mail de domínios genéricos</em> para qualquer tipo de comunicação profissional. Em caso de dúvida sobre a autenticidade de qualquer contato, confirme diretamente pelo e-mail ou WhatsApp oficiais antes de prosseguir com qualquer tratativa.</p>
          <p>O escritório nunca solicita transferências, pagamentos ou dados sensíveis por meios não oficiais. Desconfie de qualquer contato que se apresente como representante do escritório fora dos canais listados.</p>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
