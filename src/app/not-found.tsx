import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
export default function NotFound(){return <><Nav/><main id="conteudo" className="wrap" style={{paddingTop:100,paddingBottom:100}}><p className="eyebrow">PÁGINA INDISPONÍVEL</p><h1 style={{fontSize:48,margin:'24px 0'}}>Este conteúdo não está disponível.</h1><p style={{marginBottom:30}}>Você pode consultar as áreas de atuação e os artigos atuais ou falar com o escritório.</p><Link className="btn-primary" href="/">Voltar à página inicial ↗</Link></main><Footer/></>}
