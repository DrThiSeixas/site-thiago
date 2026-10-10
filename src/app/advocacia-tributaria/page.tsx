import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/editorial/Contact';
import { ArticleHighlights } from '@/components/editorial/ArticleHighlights';
import '@/components/editorial/approved.css';

export const revalidate = 600;
export const metadata = {
  title: 'Dívidas tributárias da empresa: clareza para decidir',
  description: 'Entenda notificações, pendências fiscais e condições de negociação. Análise jurídica tributária considerando a situação e a capacidade de cumprimento da empresa.',
  alternates: { canonical: '/advocacia-tributaria' },
};
const situations = [
  ['Meu contador enviou uma notificação.', 'O que ela está comunicando?', 'Identificar o órgão, o assunto e as providências indicadas, inclusive em comunicações sobre o Simples Nacional.'],
  ['Apareceu um serviço e a certidão não saiu.', 'Qual pendência está impedindo a emissão?', 'Conferir o documento solicitado e as informações fiscais antes de escolher uma medida.'],
  ['A prestação parece caber. E o restante?', 'Que compromisso a empresa vai assumir?', 'Examinar entrada, parcelas, demais condições e obrigações que continuarão vencendo.'],
  ['Não sei quanto devo nem para quem.', 'Por onde começar a organizar a situação?', 'Reunir os registros disponíveis para compreender a composição e o estágio das pendências.'],
];
const services = [
  ['Compreender o que está sendo cobrado', 'Conferência dos documentos, da origem e composição dos débitos, dos órgãos envolvidos e da situação da cobrança.'],
  ['Examinar o impedimento ou a comunicação', 'Análise jurídica de pendências relacionadas à certidão e de comunicações fiscais, com identificação das questões e providências que exigem avaliação.'],
  ['Comparar condições antes de assumir compromissos', 'Exame dos requisitos e efeitos de parcelamento ou transação, quando aplicáveis, considerando as informações financeiras da empresa e sua capacidade de cumprimento.'],
  ['Avaliar medidas em processos e bloqueios', 'Leitura do processo, das intimações e de eventuais restrições sobre valores ou bens para examinar as medidas juridicamente cabíveis.'],
];
const steps = [
  ['Conte o que aconteceu', 'Apresente a situação em linhas gerais. Informe se recebeu uma comunicação com prazo, se há processo ou se encontrou um impedimento.'],
  ['Combine o trabalho antes de contratar', 'Alinhamos o objeto da análise, os documentos necessários, as entregas, as etapas e os honorários. Você compreende o que está incluído e o que dependerá de contratação ou decisão posterior.'],
  ['Entenda a situação e as alternativas', 'No escopo contratado, examinamos as questões jurídicas e explicamos condições, efeitos e limites dos caminhos aplicáveis. Seu contador pode contribuir com os registros fiscais e financeiros.'],
  ['Decida com os compromissos à vista', 'Antes de adotar uma medida, esclarecemos o que ela exige da empresa. Protocolos, defesa ou acompanhamento dependem do escopo acordado; respostas de órgãos e decisões judiciais não são controladas pelo escritório.'],
];
const questions = [
  ['Não tenho dinheiro para quitar tudo agora. Por onde começar?', 'Compreender a situação, contratar uma análise e pagar a dívida são decisões distintas, com custos próprios. O primeiro contato permite alinhar o atendimento e os honorários. As alternativas só podem ser avaliadas com as informações do caso; não é possível presumir que haverá uma condição acessível.'],
  ['Meu contador já está cuidando. Qual é o papel do advogado?', 'O contador contribui com declarações, pagamentos e registros fiscais. O advogado examina questões como os efeitos de uma adesão, as exigências de uma comunicação e as medidas cabíveis em um processo. A necessidade e o escopo do trabalho jurídico são avaliados em diálogo com a contabilidade.'],
  ['Como saber se um parcelamento faz sentido para a empresa?', 'Além do valor da parcela, é necessário examinar os débitos incluídos, a entrada, a duração, as condições de manutenção e os efeitos de eventual descumprimento. As obrigações correntes e a capacidade de cumprir o compromisso precisam entrar na análise, com informações da empresa e da contabilidade.'],
  ['Vale esperar uma condição melhor?', 'Essa decisão precisa considerar a situação atual das pendências e o que as comunicações recebidas exigem. Uma expectativa sobre benefícios futuros não permite concluir que esperar seja adequado ao caso.'],
  ['O que vou receber do trabalho contratado?', 'As entregas são definidas na proposta: por exemplo, a análise dos documentos e das questões identificadas, a explicação dos caminhos cabíveis e de seus efeitos. Atuação em processo, protocolos e acompanhamento devem estar expressamente delimitados, assim como etapas e honorários.'],
  ['Preciso ter todos os documentos antes de entrar em contato?', 'Não é necessário organizar tudo para apresentar a dúvida inicial. Conte o que aconteceu e quais informações já possui; alinharemos o que será necessário. Se houver prazo indicado em uma comunicação, informe desde o início. A mensagem pelo site não suspende prazos nem constitui contratação.'],
];
export default function Tributario() {
  return <><Nav /><main id="conteudo" className="approved">
    <section className="hero" id="inicio">
      <div className="hero-copy"><p className="eyebrow">TRIBUTÁRIO EMPRESARIAL</p>
        <h1>A dívida preocupa.<br />O compromisso precisa<br /><em>ser compreendido.</em></h1>
        <p className="lead">Uma notificação, uma certidão que não sai ou uma proposta de parcelamento: antes de decidir, entenda o que está em jogo e o que cada caminho exige da sua empresa.</p>
        <div className="hero-actions"><a className="button light" href="#contato">Conversar sobre minha situação ↗</a><a className="text-link" href="#como-comeca">Entender como funciona ↓</a></div>
        <div className="hero-foot">THIAGO SEIXAS · OAB/SP 249.179</div>
      </div>
      <aside className="tax-steps" aria-label="Perguntas que orientam a análise">
        <article><small>01 / SITUAÇÃO</small><h3>O que isso significa para a empresa?</h3><p>Separar o que o documento informa do que ainda precisa ser examinado.</p></article>
        <article><small>02 / COMPROMISSO</small><h3>O que vou precisar comprometer?</h3><p>Compreender valores, condições e obrigações envolvidos em cada alternativa.</p></article>
        <article><small>03 / CUMPRIMENTO</small><h3>A empresa consegue cumprir?</h3><p>Considerar a realidade financeira e as obrigações da operação antes da decisão.</p></article>
      </aside>
    </section>
    <div className="intro-strip"><p>A dívida faz parte do cenário.<br /><strong>A empresa continua funcionando.</strong></p><p>Em um período de aperto, folha e fornecedores podem ter recebido prioridade, enquanto os tributos ficaram para depois. Entender as pendências agora exige olhar para os documentos e para a realidade da empresa, com respeito à sua trajetória.</p></div>
    <section className="section" id="situacoes"><div className="section-heading"><p className="eyebrow dark">O QUE TROUXE VOCÊ ATÉ AQUI?</p><h2>Uma situação concreta.<br />Uma dúvida a esclarecer.</h2></div><div className="tax-services">{situations.map(([scene, question, copy]) => <article key={scene}><small>{scene}</small><h3>{question}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section process" id="atuacao"><div className="section-heading"><p className="eyebrow dark">O TRABALHO JURÍDICO</p><h2>O que precisa ser examinado<br />antes de escolher um caminho.</h2><p>A análise parte das informações do caso. Os serviços e as entregas são delimitados na contratação.</p></div><div className="tax-services">{services.map(([title, copy], i) => <article key={title}><small>0{i + 1}</small><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section" id="como-comeca"><div className="section-heading"><p className="eyebrow dark">COMO COMEÇA</p><h2>Você entende o trabalho.<br />Depois, decide sobre a contratação.</h2></div><div className="steps">{steps.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section questions"><div><p className="eyebrow dark">DÚVIDAS ANTES DO PRIMEIRO CONTATO</p><h2>Dinheiro, documentos<br /><em>e próximos passos.</em></h2></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <ArticleHighlights area="tributario" /><Contact tax />
  </main><Footer /></>;
}
