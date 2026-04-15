import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de Uso do site Thiago Seixas Advocacia Societária.',
  alternates: { canonical: '/termos' },
};

export default function TermosPage() {
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Termos de Uso</div>
          <h1>Termos de <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass-2))',fontWeight:400}}>uso</em></h1>
        </div>
      </header>

      <section style={{padding:'60px 0 100px'}}>
        <div className="wrap" style={{maxWidth:860}}>
          <article className="prose">
            <p className="lead">Ao acessar e utilizar o site <strong>{site.url}</strong>, você concorda com os termos descritos abaixo. Caso não concorde, recomendamos não utilizar o site.</p>

            <h2>1. Natureza do conteúdo</h2>
            <p>Este site tem caráter <strong>exclusivamente informativo</strong>. O conteúdo publicado — artigos, páginas institucionais, materiais — não constitui consulta, parecer ou aconselhamento jurídico individual.</p>
            <p>A relação profissional só se estabelece mediante contratação formal, com proposta técnica assinada e contrato de prestação de serviços.</p>

            <h2>2. Propriedade intelectual</h2>
            <p>Todo o conteúdo do site — textos, identidade visual, artigos, materiais ricos — é de propriedade intelectual de <strong>{site.nome}</strong>, protegido pelas leis de direito autoral. É permitido compartilhamento pontual com citação da fonte; é vedada a reprodução comercial, adaptação ou republicação sem autorização expressa.</p>

            <h2>3. Conduta do usuário</h2>
            <p>Ao utilizar o site, você concorda em não: (i) violar direitos de terceiros ou da legislação brasileira; (ii) enviar conteúdo difamatório, ilegal ou ofensivo via formulário de contato; (iii) tentar acesso não autorizado a sistemas ou dados; (iv) utilizar o site para fins contrários à ética da advocacia.</p>

            <h2>4. Limitação de responsabilidade</h2>
            <p>O escritório envida esforços razoáveis para manter informações atualizadas, mas não se responsabiliza por decisões tomadas com base em conteúdo do site sem consulta profissional prévia. Links para sites externos são fornecidos por conveniência; o escritório não endossa nem responde pelo conteúdo de terceiros.</p>

            <h2>5. Comunicações</h2>
            <p>Todas as comunicações oficiais ocorrem pelos canais listados em <Link href="/contato">/contato</Link>. O escritório não reconhece como válidas comunicações feitas por canais não oficiais.</p>

            <h2>6. Foro</h2>
            <p>Fica eleito o foro da Comarca de {site.endereco.cidade}/{site.endereco.uf} para dirimir quaisquer questões relativas a estes Termos.</p>

            <p style={{marginTop:40,fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',color:'rgba(239,231,212,.6)'}}>Última atualização: {new Date().toLocaleDateString('pt-BR')}.</p>
          </article>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
