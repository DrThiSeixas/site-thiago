import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import { site } from '@/lib/site';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Portal do Cliente',
  description: 'Ambiente digital restrito para clientes do escritório.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/portal' },
};

export default function PortalPage() {
  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link><span className="sep">/</span>Portal do Cliente</div>
          <h1>Portal do <em style={{fontFamily:'var(--font-instrument-serif)',color:'rgb(var(--brass-2))',fontWeight:400}}>Cliente</em></h1>
        </div>
      </header>

      <section style={{padding:'80px 0 120px'}}>
        <div className="wrap" style={{maxWidth:720,textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-fraunces)',fontVariationSettings:'"opsz" 36',fontSize:20,lineHeight:1.6,color:'rgba(239,231,212,.85)',marginBottom:40}}>
            Ambiente digital restrito — acesso exclusivo para clientes ativos do escritório, com documentos, atualizações de projeto e comunicações seguras.
          </p>
          <div style={{padding:'40px',border:'1px solid rgb(var(--brass))',background:'rgb(var(--ink-2))',marginBottom:40}}>
            <p style={{fontFamily:'var(--font-instrument-serif)',fontStyle:'italic',fontSize:18,color:'rgba(239,231,212,.85)',marginBottom:20}}>
              O Portal está em fase de implementação técnica.
            </p>
            <p style={{fontSize:15,color:'rgba(239,231,212,.7)'}}>
              Enquanto isso, todas as comunicações e documentos seguem pelos canais oficiais listados em <Link href="/contato" style={{color:'rgb(var(--brass-2))',borderBottom:'1px dashed'}}>/contato</Link>.
            </p>
          </div>
          <Link href="/contato" className="btn-primary" style={{justifyContent:'center'}}>
            Falar com o escritório <span className="arr">→</span>
          </Link>
        </div>
      </section>

      <Footer />
      <Whats />
    </>
  );
}
