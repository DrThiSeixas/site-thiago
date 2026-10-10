import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade do site Thiago Seixas Advocacia Empresarial — informações sobre dados de contato e navegação.',
  alternates: { canonical: '/privacidade' },
};

export default function PrivacidadePage() {
  return (
    <>
      <Nav />
      <header id="conteudo" className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Política de Privacidade</div>
          <h1>Política de <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass-2))',fontWeight:400}}>privacidade</em></h1>
        </div>
      </header>

      <section style={{padding:'60px 0 100px'}}>
        <div className="wrap" style={{maxWidth:860}}>
          <article className="prose">
            <p className="lead">Esta política descreve como o escritório <strong>{site.nome}</strong> trata os dados pessoais recebidos pelos canais de contato e durante a navegação no site <strong>{site.url}</strong>. As solicitações relativas a esses dados são analisadas nos termos da Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).</p>

            <h2>1. Dados coletados</h2>
            <p>Ao entrar em contato, você pode fornecer nome, e-mail, telefone e uma descrição da demanda. O formulário atual apenas prepara uma mensagem no aplicativo de e-mail: o envio depende de sua ação nesse aplicativo. A hospedagem pode registrar dados técnicos, como endereço IP, páginas acessadas e informações do navegador, para operação e segurança. Ferramentas de medição, quando ativas, também podem tratar identificadores e eventos de navegação.</p>

            <h2>2. Finalidades do tratamento</h2>
            <p>Os dados coletados são utilizados exclusivamente para: (i) responder às mensagens enviadas; (ii) agendar conversas iniciais; (iii) conduzir projetos jurídicos contratados; (iv) atender obrigações legais e regulatórias; (v) manter a segurança e avaliar o funcionamento dos canais digitais.</p>

            <h2>3. Compartilhamento</h2>
            <p>O funcionamento dos canais envolve prestadores de hospedagem (Netlify), conteúdo (Sanity) e e-mail (Google). Ao usar links para WhatsApp, LinkedIn ou outros serviços externos, você também estará sujeito às políticas desses serviços. Conforme a demanda, dados podem ser tratados por prestadores necessários ao atendimento, órgãos públicos, cartórios e Juntas Comerciais, ou divulgados para cumprimento de obrigação legal. Não envie documentos sigilosos antes de combinar o canal adequado com o escritório.</p>

            <h2>4. Direitos do titular</h2>
            <p>Você pode a qualquer momento, mediante solicitação ao e-mail <a href={`mailto:${site.contato.email}`}>{site.contato.email}</a>: (i) confirmar a existência de tratamento; (ii) acessar, corrigir ou atualizar dados; (iii) solicitar anonimização ou eliminação; (iv) revogar consentimento.</p>

            <h2>5. Retenção</h2>
            <p>Os dados são mantidos pelo prazo necessário ao cumprimento das finalidades acima ou pelo prazo legal aplicável — o que for maior.</p>

            <h2>6. Segurança</h2>
            <p>O site utiliza conexão HTTPS. As contas administrativas e os serviços de hospedagem, conteúdo e e-mail possuem controles próprios de acesso. Em caso de suspeita de incidente envolvendo seus dados, utilize o contato indicado nesta página.</p>

            <h2>7. Cookies</h2>
            <p>Cookies e identificadores podem ser utilizados pelos serviços integrados ao site, inclusive ferramentas Google de medição quando configuradas. Você pode gerenciar cookies e armazenamento nas configurações do navegador. Restrições podem afetar recursos de serviços externos. Os dados de navegação não devem ser considerados anônimos apenas por serem apresentados em relatórios agregados.</p>

            <h2>8. Atualizações</h2>
            <p>Esta política pode ser atualizada periodicamente. A versão vigente sempre estará disponível nesta URL.</p>

            <h2>9. Contato sobre dados pessoais</h2>
            <p>Para assuntos relacionados à proteção de dados, o contato é <a href={`mailto:${site.contato.email}`}>{site.contato.email}</a>.</p>

            <p style={{marginTop:40,fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',color:'rgba(239,231,212,.6)'}}>Última atualização: 09/10/2026.</p>
          </article>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
