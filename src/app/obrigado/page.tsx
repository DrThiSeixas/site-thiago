import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Whats } from '@/components/Whats';
import '../internals.css';

export const metadata: Metadata = {
  title: 'Mensagem recebida',
  description: 'Confirmação de recebimento de mensagem enviada ao escritório.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/obrigado' },
};

export default function ObrigadoPage() {
  return (
    <>
      <Nav />
      <main className="thanks-page">
        <div className="wrap thanks-wrap">
          <span className="eyebrow">Contato recebido</span>
          <h1>Mensagem recebida.</h1>
          <p>
            As informações foram encaminhadas ao escritório. O retorno será feito pelos canais oficiais,
            após análise preliminar da demanda apresentada.
          </p>
          <div className="thanks-actions">
            <Link href="/" className="btn-primary">Voltar ao site <span className="arr">→</span></Link>
            <Link href="/artigos" className="btn-ghost">Ler artigos técnicos <span className="arr">→</span></Link>
          </div>
        </div>
      </main>
      <Footer />
      <Whats />
    </>
  );
}
