import { notFound } from 'next/navigation';
import Link from 'next/link';
import { acervo } from '@/lib/acervo';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import '../../internals.css';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return acervo.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:Props){const {slug}=await params;const a=acervo.find(a=>a.slug===slug);return a?{title:a.titulo,description:a.chamada,alternates:{canonical:`/acervo/${slug}`}}:{}}
export default async function ArchivePage({params}:Props){const {slug}=await params;const a=acervo.find(a=>a.slug===slug);if(!a)notFound();return <><Nav/><header className="art-head" id="conteudo"><div className="wrap"><div className="breadcrumbs"><Link href="/artigos">Artigos</Link> / Acervo revisado</div><span className="cat">{a.categoria}</span><h1>{a.titulo}</h1><p className="deck">{a.chamada}</p><div className="meta-row"><span>Thiago Seixas · OAB/SP 249.179</span><span>Publicado em julho de 2026 · Revisado em 9 de outubro de 2026</span></div></div></header><section className="art-body"><div className="wrap" style={{maxWidth:900}}><article className="prose">{a.secoes.map(([t,p])=><div key={t}><h2>{t}</h2><p>{p}</p></div>)}<h2>Fontes consultadas</h2><ul>{a.fontes.map(([t,u])=><li key={u}><a href={u} target="_blank" rel="noopener noreferrer">{t}</a></li>)}</ul><p>Conteúdo informativo. A orientação individual depende da análise dos documentos e das circunstâncias do caso.</p><Link className="btn-primary" href="/contato">Apresentar uma questão ao escritório ↗</Link></article></div></section><Footer/></>}
