import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Materiais',
  description: 'Guias técnicos densos sobre holding, governança, sucessão e reorganização societária. Material editorial gratuito.',
  openGraph: { title: `Materiais — ${site.nomeCurto}`, images: ['/assets/fotos/og-institucional.jpg'] },
  alternates: { canonical: '/materiais' },
};

const materiais = [
  {
    slug: 'guia-holding-familiar',
    tag: 'Guia I',
    categoria: 'Holding',
    titulo: 'Guia da Holding Familiar — 30 decisões técnicas antes de assinar o primeiro ato',
    chamada: 'Um guia de 28 páginas denso e técnico sobre as decisões que separam holdings bem-feitas de holdings que viram problema. Estrutura (pura, mista, operacional), integralização de imóveis (ITBI, ganho de capital), cláusulas protetivas, regime tributário, interface com governança familiar, ITCMD por estado.',
    paginas: 28,
    disponivel: true,
  },
  {
    slug: 'checklist-alteracao-contratual-ltda',
    tag: 'Guia II',
    categoria: 'Societário',
    titulo: 'Alteração Contratual de LTDA sem retrabalho — checklist técnico',
    chamada: 'Checklist prático dos pontos que mais geram nulidade, autuação ou retrabalho em alterações contratuais: quóruns, prazos, averbações, documentos, ordem das operações.',
    paginas: 13,
    disponivel: true,
  },
];

export default function MateriaisPage() {
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Materiais</div>
          <h1 className="fade d1" dangerouslySetInnerHTML={{__html:'Guias técnicos densos sobre <em>holding</em>, governança e sucessão.'}} />
          <p className="lede fade d2">
            Materiais editoriais desenvolvidos a partir dos casos reais que aparecem em consulta. Sem receita pronta, sem superficialidade — cada guia aborda decisões concretas que separam estruturas bem-feitas de estruturas mal-feitas. Download gratuito mediante e-mail.
          </p>
        </div>
      </header>

      <section style={{padding:'80px 0 120px'}}>
        <div className="wrap">
          <div style={{display:'grid',gap:40}}>
            {materiais.map((m) => (
              <article key={m.slug} style={{display:'grid',gridTemplateColumns:'200px 1fr',gap:60,padding:'50px 0',borderTop:'1px solid var(--hair)'}}>
                <div>
                  <span style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',color:'rgb(var(--brass-2))',fontSize:16,display:'block',marginBottom:14}}>
                    {m.tag}
                  </span>
                  <span style={{fontFamily:'var(--font-instrument-sans)',fontSize:11,letterSpacing:'.22em',textTransform:'uppercase',color:'rgb(var(--brass-2))',fontWeight:500}}>
                    {m.categoria} · {m.paginas} páginas
                  </span>
                </div>
                <div>
                  <h3 style={{fontFamily:'var(--font-fraunces)',fontWeight:300,fontVariationSettings:'"opsz" 144',fontSize:'clamp(28px,3.2vw,44px)',lineHeight:1.1,letterSpacing:'-.02em',color:'rgb(var(--paper))',marginBottom:18}}>
                    {m.titulo}
                  </h3>
                  <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:17,lineHeight:1.65,color:'rgba(239,231,212,.82)',marginBottom:24,maxWidth:720}}>
                    {m.chamada}
                  </p>
                  {m.disponivel ? (
                    <Link href={`/materiais/${m.slug}`} className="btn-primary">
                      Receber material <span className="arr">→</span>
                    </Link>
                  ) : (
                    <span style={{display:'inline-flex',gap:12,alignItems:'center',padding:'14px 24px',border:'1px solid var(--hair-light)',color:'rgba(239,231,212,.55)',fontFamily:'var(--font-instrument-sans)',fontSize:12,letterSpacing:'.14em',textTransform:'uppercase',fontStyle:'italic'}}>
                      Em produção — previsão: próximas semanas
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
