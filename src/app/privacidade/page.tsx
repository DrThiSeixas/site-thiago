import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade do site Thiago Seixas Advocacia Societária — coleta, uso e proteção de dados pessoais em conformidade com a LGPD.',
  alternates: { canonical: '/privacidade' },
};

export default function PrivacidadePage() {
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Política de Privacidade</div>
          <h1>Política de <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass-2))',fontWeight:400}}>privacidade</em></h1>
        </div>
      </header>

      <section style={{padding:'60px 0 100px'}}>
        <div className="wrap" style={{maxWidth:860}}>
          <article className="prose">
            <p className="lead">Esta política descreve como o escritório <strong>{site.nome}</strong> coleta, utiliza e protege dados pessoais de visitantes e clientes do site <strong>{site.url}</strong>, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).</p>

            <h2>1. Dados coletados</h2>
            <p>O site pode coletar: (i) dados de identificação voluntariamente fornecidos via formulário de contato — nome, e-mail, telefone e descrição do cenário; (ii) dados técnicos de navegação via cookies estritamente necessários e analíticos agregados (Google Analytics), sem identificação pessoal direta.</p>

            <h2>2. Finalidades do tratamento</h2>
            <p>Os dados coletados são utilizados exclusivamente para: (i) responder às mensagens enviadas; (ii) agendar conversas iniciais; (iii) conduzir projetos jurídicos contratados; (iv) atender obrigações legais e regulatórias.</p>

            <h2>3. Compartilhamento</h2>
            <p>Dados pessoais não são compartilhados com terceiros, exceto quando: (i) necessário à condução do trabalho contratado (órgãos públicos, cartórios, Juntas Comerciais); (ii) exigido por ordem judicial ou obrigação legal.</p>

            <h2>4. Direitos do titular</h2>
            <p>Você pode a qualquer momento, mediante solicitação ao e-mail <a href={`mailto:${site.contato.email}`}>{site.contato.email}</a>: (i) confirmar a existência de tratamento; (ii) acessar, corrigir ou atualizar dados; (iii) solicitar anonimização ou eliminação; (iv) revogar consentimento.</p>

            <h2>5. Retenção</h2>
            <p>Os dados são mantidos pelo prazo necessário ao cumprimento das finalidades acima ou pelo prazo legal aplicável — o que for maior.</p>

            <h2>6. Segurança</h2>
            <p>O escritório adota medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perda, alteração ou destruição.</p>

            <h2>7. Cookies</h2>
            <p>O site usa cookies estritamente necessários ao funcionamento e, opcionalmente, analíticos agregados. Você pode desativar cookies a qualquer momento nas configurações do seu navegador.</p>

            <h2>8. Atualizações</h2>
            <p>Esta política pode ser atualizada periodicamente. A versão vigente sempre estará disponível nesta URL.</p>

            <h2>9. Encarregado (DPO)</h2>
            <p>Para assuntos relacionados à proteção de dados, o contato é <a href={`mailto:${site.contato.email}`}>{site.contato.email}</a>.</p>

            <p style={{marginTop:40,fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',color:'rgba(239,231,212,.6)'}}>Última atualização: {new Date().toLocaleDateString('pt-BR')}.</p>
          </article>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
