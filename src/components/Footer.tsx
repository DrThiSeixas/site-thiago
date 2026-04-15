import Link from 'next/link';
import Image from 'next/image';
import { site, waUrl } from '@/lib/site';

export function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <Image src="/assets/escudo.png" alt={site.nome} width={120} height={120} style={{ height: 56, width: 'auto' }} />
            </div>
            <p className="foot-desc">
              Advocacia societária com foco em holding patrimonial, governança e organização sucessória. {site.oab}.
            </p>
            <p
              className="foot-desc"
              style={{
                marginTop: 14,
                fontStyle: 'italic',
                fontFamily: 'var(--font-instrument-serif)',
                color: 'rgba(239,231,212,.7)',
              }}
            >
              {site.endereco.logradouro} — {site.endereco.bairro}
              <br />
              {site.endereco.cidade} — {site.endereco.uf} · CEP {site.endereco.cep}
            </p>
          </div>

          <div className="foot-col">
            <div className="foot-h">Navegar</div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/atuacao">Atuação</Link></li>
              <li><Link href="/metodo">Método</Link></li>
              <li><Link href="/artigos">Artigos</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <div className="foot-h">Canais oficiais</div>
            <ul>
              <li><a href={`mailto:${site.contato.email}`}>{site.contato.email}</a></li>
              <li><a href={waUrl()} target="_blank" rel="noopener">WhatsApp {site.contato.whatsappFormatado}</a></li>
              <li><a href={site.contato.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
              <li><Link href="/portal">Portal do Cliente</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <div className="foot-h">Institucional</div>
            <ul>
              <li><Link href="/privacidade">Política de privacidade</Link></li>
              <li><Link href="/termos">Termos de uso</Link></li>
              <li><Link href="/contato#aviso-seguranca">Aviso de segurança</Link></li>
              <li><a href="https://cna.oab.org.br" target="_blank" rel="noopener">Verificar OAB/SP →</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-base">
          <div>© {anoAtual} {site.nome}</div>
          <div>
            <em>Este site tem caráter exclusivamente informativo e não constitui consulta, parecer ou aconselhamento jurídico.</em>
          </div>
        </div>
      </div>
    </footer>
  );
}
