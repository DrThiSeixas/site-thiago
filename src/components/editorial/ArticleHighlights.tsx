import Link from 'next/link';
import { sanityClient } from '@/lib/sanity';
import { artigosQuery } from '@/lib/queries';
type Card={_id:string;titulo:string;slug:{current:string};chamada:string;area:string;categoria?:{titulo?:string}};
export async function ArticleHighlights({area}:{area?:'societario'|'tributario'}){
 let articles:Card[]=[];let unavailable=false;
 try {articles=await sanityClient.fetch<Card[]>(artigosQuery,{}, {next:{revalidate:600}})}catch{unavailable=true;console.error('Não foi possível carregar os artigos publicados do Sanity.');}
 const visible=articles.filter(a=>!area||a.area===area).slice(0,3);
 return <section className="reading section"><div className="reading-top"><div><p className="eyebrow dark">PARA CONTINUAR A REFLEXÃO</p><h2>{area==='tributario'?'Cobranças e escolhas.':'Decisões de hoje.'}<br/>{area==='tributario'?'Informação para avaliar.':'Continuidade amanhã.'}</h2></div><Link className="inline-link" href={area?`/artigos?area=${area}`:'/artigos'}>Explore os artigos ↗</Link></div>{visible.length?<div className="article-grid">{visible.map(a=><Link key={a._id} href={`/artigos/${a.slug.current}`}><small>{a.area==='tributario'?'TRIBUTÁRIO':'SOCIETÁRIO'}</small><h3>{a.titulo}</h3><p>{a.chamada}</p><span>Ler artigo <b>↗</b></span></Link>)}</div>:<p className="empty-reading">{unavailable?'Os artigos estão temporariamente indisponíveis. Tente novamente mais tarde.':area==='tributario'?'Os artigos desta frente serão disponibilizados após revisão editorial.':'Novos artigos serão disponibilizados após revisão editorial.'}</p>}</section>
}
