/**
 * Dados estruturados das 6 frentes de atuação.
 * Fonte única de verdade para /atuacao/[slug] e index.
 */

export type Sign = { idx: string; titulo: string; texto: string };
export type Instrumento = { tag: string; titulo: string; texto: string };
export type Faq = { pergunta: string; resposta: string };
export type Fact = { lbl: string; val: string };

export type Frente = {
  slug: string;
  titulo: string;
  emph: string;
  metaTitulo: string;
  metaDescricao: string;
  heroH1: string;
  heroLede: string;
  facts: Fact[];
  sec1Eyebrow: string;
  sec1Titulo: string;
  sec1Lede: string;
  signs: Sign[];
  sec2Eyebrow: string;
  sec2Titulo: string;
  sec2Lede: string;
  instruments: Instrumento[];
  philosophyQuote: string;
  faqs: Faq[];
  ctaTitulo: string;
  ctaTexto: string;
};

/* =========================================================
   Holding Patrimonial — mais detalhada (foi o template inicial)
   ========================================================= */
const holding: Frente = {
  slug: 'holding-patrimonial',
  titulo: 'Holding Patrimonial',
  emph: 'Patrimonial',
  metaTitulo: 'Holding Patrimonial — Thiago Seixas Advocacia Societária',
  metaDescricao:
    'Constituição e estruturação de holdings patrimoniais. Diagnóstico, arquitetura societária, integralização de bens, governança e acompanhamento.',
  heroH1: 'Holding patrimonial não é modelo pronto. É <em>arquitetura desenhada.</em>',
  heroLede:
    'Constituição e reestruturação de holdings conduzida com método: diagnóstico patrimonial antes da decisão, análise tributária e familiar antes da estrutura, documentação rigorosa na implementação — e acompanhamento <em>depois</em> da formalização.',
  facts: [
    { lbl: 'Foco', val: 'Holdings <em>patrimoniais</em> e familiares' },
    { lbl: 'Método', val: 'Diagnóstico, estruturação e <em>acompanhamento</em>' },
    { lbl: 'Formação', val: 'Aperfeiçoamento técnico em <em>holdings</em> e governança' },
    { lbl: 'Escopo', val: 'Projetos <em>consultivos</em>, por caso' },
  ],
  sec1Eyebrow: 'Antes da estrutura',
  sec1Titulo: 'Holding faz sentido em <em>alguns</em> cenários — não em todos.',
  sec1Lede:
    'A decisão de constituir holding parte de uma análise concreta do patrimônio, da família e do cenário societário. Abaixo, os três cenários típicos em que a estrutura costuma resolver.',
  signs: [
    { idx: '01', titulo: 'Sucessão patrimonial a organizar', texto: 'Patrimônio consolidado com herdeiros definidos, com benefício real em antecipar a transmissão via doação com reserva de usufruto, avaliar custos sucessórios e reduzir dependência de inventário, conforme o caso.' },
    { idx: '02', titulo: 'Participações societárias a proteger', texto: 'Empresário com participação em sociedades operacionais que precisa separar patrimônio pessoal do operacional, organizar fluxo de dividendos e construir segregação patrimonial lícita e organizada.' },
    { idx: '03', titulo: 'Gestão familiar a profissionalizar', texto: 'Família com múltiplos bens e membros, onde a holding viabiliza governança, profissionalização da gestão e critérios claros para decisões compartilhadas.' },
  ],
  sec2Eyebrow: 'Arquiteturas possíveis',
  sec2Titulo: 'Nem toda holding é <em>igual</em> — e essa diferença importa.',
  sec2Lede:
    'A definição do tipo de holding depende do patrimônio, dos objetivos e da estrutura societária preexistente. A escolha errada custa tempo, imposto e flexibilidade futura.',
  instruments: [
    { tag: 'tipo i', titulo: 'Holding <em>pura</em>', texto: 'Detém apenas participações em outras sociedades. Foco em centralização societária e planejamento sucessório.' },
    { tag: 'tipo ii', titulo: 'Holding <em>mista</em>', texto: 'Detém participações e também administra bens próprios — imóveis, ativos financeiros.' },
    { tag: 'tipo iii', titulo: 'Holding <em>patrimonial pura</em>', texto: 'Voltada exclusivamente para administração de bens, sem participações societárias.' },
    { tag: 'i.', titulo: 'Integralização de <em>imóveis</em>', texto: 'ITBI, ganho de capital e pontos críticos exigem análise caso a caso antes da conferência.' },
    { tag: 'ii.', titulo: 'Regime <em>tributário</em>', texto: 'Presumido, real ou Simples — escolha muda diretamente a carga sobre aluguéis, ganhos e dividendos.' },
    { tag: 'iii.', titulo: 'Governança e <em>acordo de sócios</em>', texto: 'Sem acordo robusto, a holding vira fachada jurídica. Governança é o que faz a estrutura funcionar no tempo.' },
    { tag: 'iv.', titulo: 'Cláusulas <em>protetivas</em>', texto: 'Incomunicabilidade, impenhorabilidade, inalienabilidade e reversão — limites legais precisos.' },
    { tag: 'v.', titulo: 'Doação com <em>reserva de usufruto</em>', texto: 'Mecanismo clássico de antecipação sucessória. Atenção a ITCMD por estado.' },
  ],
  philosophyQuote:
    'Holding não é sinônimo de <em>economia tributária</em>. É arquitetura societária que, em alguns cenários, traz economia como consequência — nunca como objetivo exclusivo.',
  faqs: [
    { pergunta: 'Qual o patrimônio mínimo que justifica uma holding?', resposta: 'Não há valor mínimo legal, mas existe um <em>ponto de equilíbrio econômico</em>. Abaixo de determinado patamar, o custo de manutenção supera o benefício tributário e sucessório. O diagnóstico responde caso a caso.' },
    { pergunta: 'Integralizar imóveis na holding paga ITBI?', resposta: 'Depende. A Constituição prevê imunidade na integralização de capital, mas o STF fixou no Tema 796 que a imunidade é condicional quando a atividade preponderante for imobiliária. <em>Análise caso a caso é obrigatória</em>.' },
    { pergunta: 'E o ganho de capital quando integralizo bens?', resposta: 'A integralização pode ser feita pelo valor histórico (sem ganho de capital) ou pelo valor de mercado (com ganho tributável). Cada opção tem impactos diferentes em IR e na base de cálculo futura de ITCMD.' },
    { pergunta: 'Holding reduz ITCMD na sucessão?', resposta: 'Pode reduzir, sim — principalmente quando combinada com doação antecipada com reserva de usufruto. A alíquota varia por estado (4% a 8%). Muitas vezes a organização sucessória pesa mais que a economia fiscal.' },
    { pergunta: 'O que é lucro presumido em holding — e quando se aplica?', resposta: 'Regime em que o lucro tributável é calculado por presunção sobre a receita bruta. Em holdings com fluxo imobiliário ou de participações, pode ser <em>mais adequado</em> que o lucro real — mas tem limites e exigências próprias.' },
    { pergunta: 'Quanto tempo leva a constituição completa?', resposta: 'De diagnóstico à operação, tipicamente entre 60 e 120 dias. Projetos com família extensa, múltiplos imóveis ou participações societárias em reorganização podem exigir prazos maiores.' },
  ],
  ctaTitulo: 'Solicitar diagnóstico <em>de viabilidade</em> da holding.',
  ctaTexto:
    'O primeiro passo é entender o cenário: patrimônio, família, sociedades, objetivos. A partir daí, é possível dizer com clareza se, como e quando faz sentido constituir. Diagnóstico sério — inclusive quando a resposta é "não faz sentido agora".',
};

/* =========================================================
   Governança Familiar
   ========================================================= */
const govFamiliar: Frente = {
  slug: 'governanca-familiar',
  titulo: 'Governança Familiar',
  emph: 'Familiar',
  metaTitulo: 'Governança Familiar — Thiago Seixas Advocacia Societária',
  metaDescricao: 'Governança familiar para patrimônios compartilhados. Acordo familiar, protocolos, conselho, sucessão de gestão.',
  heroH1: 'Patrimônio em família se organiza por <em>regras vivas</em> — não por improviso.',
  heroLede: 'Governança familiar é o conjunto de instrumentos que organiza a relação entre pessoas e patrimônio. Quando bem-feita, transforma decisões compartilhadas em processo <em>previsível e calmo</em>, em vez de atrito permanente.',
  facts: [
    { lbl: 'Foco', val: 'Famílias com <em>patrimônio</em> compartilhado' },
    { lbl: 'Abordagem', val: 'Preventiva e <em>documentada</em>' },
    { lbl: 'Entregáveis', val: 'Acordo familiar, <em>protocolos</em> e conselho' },
    { lbl: 'Integração', val: 'Conecta com <em>holding</em> e governança societária' },
  ],
  sec1Eyebrow: 'Quando faz sentido',
  sec1Titulo: 'Sinais de que a família <em>precisa</em> de governança formal.',
  sec1Lede: 'Nem toda família precisa de protocolo. Mas quando algum dos sinais abaixo aparece, a ausência de governança começa a custar mais do que sua construção.',
  signs: [
    { idx: 'sinal i.', titulo: 'Decisões patrimoniais <em>emperram</em>', texto: 'Vender um imóvel, alugar uma sala, investir o caixa — qualquer decisão envolvendo vários membros vira discussão longa, sem regras claras para desempate.' },
    { idx: 'sinal ii.', titulo: 'Gestão concentrada em <em>uma pessoa</em>', texto: 'Um dos membros concentra toda a gestão. Quando essa pessoa se afastar ou falecer, não há sucessão de gestão preparada.' },
    { idx: 'sinal iii.', titulo: 'Entrada da <em>próxima geração</em>', texto: 'Filhos e netos começam a participar ou herdar. Sem regras claras sobre papéis, remuneração e capacidade de decisão, o conflito é questão de tempo.' },
    { idx: 'sinal iv.', titulo: 'Conflitos em <em>sucessões</em> passadas', texto: 'Heranças anteriores da família viraram processo, brigas ou distanciamento. Sinal claro de que o padrão precisa mudar.' },
    { idx: 'sinal v.', titulo: 'Entrada e saída de <em>cônjuges</em>', texto: 'Casamentos, divórcios e novos relacionamentos criam dúvidas sobre o que pertence à família original e o que se mistura.' },
    { idx: 'sinal vi.', titulo: 'Empresa familiar em <em>transição</em>', texto: 'A empresa passa da mão do fundador para os herdeiros. Governança familiar é o que separa a empresa do jantar de família.' },
  ],
  sec2Eyebrow: 'Instrumentos',
  sec2Titulo: 'Ferramentas que compõem a <em>governança</em> familiar.',
  sec2Lede: 'Cada instrumento resolve uma camada do problema. O desenho da arquitetura é sempre caso a caso.',
  instruments: [
    { tag: 'i.', titulo: 'Acordo <em>familiar</em>', texto: 'Documento principal: princípios, valores, critérios de participação, regras de decisão. Constituição da família empresária.' },
    { tag: 'ii.', titulo: 'Protocolo de <em>conduta</em>', texto: 'Regras de convivência, uso de bens comuns, circulação de informação, expectativas profissionais.' },
    { tag: 'iii.', titulo: 'Conselho de <em>família</em>', texto: 'Fórum formal de deliberação. Quem participa, com que frequência, sobre o que decide e como registra.' },
    { tag: 'iv.', titulo: 'Plano de <em>sucessão</em>', texto: 'Como e quando a próxima geração assume papéis. Critérios de preparação, avaliação e transição.' },
    { tag: 'v.', titulo: 'Regras para <em>terceira geração</em>', texto: 'Como netos entram no patrimônio, que educação recebem, em que condições acessam recursos.' },
    { tag: 'vi.', titulo: 'Cláusulas <em>protetivas</em>', texto: 'Incomunicabilidade, impenhorabilidade, inalienabilidade — protegem o patrimônio de eventos pessoais.' },
    { tag: 'vii.', titulo: 'Interface com <em>holding</em>', texto: 'Governança familiar e holding patrimonial são camadas complementares. Acordo familiar orienta; acordo de sócios executa.' },
    { tag: 'viii.', titulo: 'Mediação <em>preventiva</em>', texto: 'Protocolos para lidar com impasses antes que virem conflito. Mediação agendada, terceiro neutro.' },
  ],
  philosophyQuote: 'Governança familiar não é <em>burocracia</em>. É previsibilidade — para que decisões compartilhadas não consumam a relação entre quem precisa decidir.',
  faqs: [
    { pergunta: 'Governança familiar é só para famílias muito ricas?', resposta: 'Não. Governança faz sentido sempre que existe patrimônio compartilhado entre três ou mais pessoas e decisões que precisam ser tomadas em conjunto. O <em>tamanho</em> do patrimônio define a complexidade dos instrumentos — não a necessidade.' },
    { pergunta: 'Acordo familiar tem força legal?', resposta: 'Acordo familiar em si tem eficácia entre as partes signatárias, como contrato privado. Os <em>reflexos</em> no patrimônio (cláusulas em contratos sociais, testamentos, acordos de sócios) têm eficácia jurídica plena quando formalizados.' },
    { pergunta: 'Quanto tempo leva para estruturar?', resposta: 'Projeto típico: 4 a 8 meses. Não é processo de pressa — o valor está na <em>construção compartilhada</em> das regras.' },
    { pergunta: 'A família precisa estar em conflito para começar?', resposta: 'Ao contrário — o momento ideal é na harmonia. Governança em harmonia é construção; em conflito aberto é mediação. Ambas possíveis, mas a primeira é mais adequado.' },
    { pergunta: 'Governança familiar substitui testamento e holding?', resposta: 'Não. São camadas distintas e complementares. Governança organiza as <em>relações</em>; testamento organiza a <em>transmissão</em>; holding organiza a <em>estrutura societária</em>. Projetos robustos combinam as três.' },
  ],
  ctaTitulo: 'Construir governança começa por <em>ouvir</em> a família.',
  ctaTexto: 'O diagnóstico inicial serve para entender a família, o patrimônio, os objetivos e as tensões — antes de propor qualquer instrumento. A direção técnica só faz sentido depois desse entendimento.',
};

/* =========================================================
   Governança Societária
   ========================================================= */
const govSocietaria: Frente = {
  slug: 'governanca-societaria',
  titulo: 'Governança Societária',
  emph: 'Societária',
  metaTitulo: 'Governança Societária — Thiago Seixas Advocacia Societária',
  metaDescricao: 'Acordo de sócios, pactos parassociais, cláusulas de proteção, regras de entrada e saída.',
  heroH1: 'Sociedade sem regras claras é sociedade <em>em conflito latente</em>.',
  heroLede: 'Governança societária é o conjunto de regras que definem como a empresa funciona por dentro. Quando está <em>mal construída</em> — ou inexistente — é a origem dos conflitos societários mais caros.',
  facts: [
    { lbl: 'Foco', val: 'Sociedades com <em>múltiplos</em> sócios' },
    { lbl: 'Abordagem', val: 'Prevenção <em>documentada</em>' },
    { lbl: 'Entregáveis', val: 'Acordo de sócios e <em>protocolos</em>' },
    { lbl: 'Integração', val: 'Conecta com <em>holding</em> e governança familiar' },
  ],
  sec1Eyebrow: 'Sinais de alerta',
  sec1Titulo: 'Sinais de que a sociedade precisa de <em>governança formal</em>.',
  sec1Lede: 'Nem toda sociedade precisa de acordo robusto. Mas quando algum desses sinais aparece, a ausência de regras formais começa a custar caro.',
  signs: [
    { idx: 'sinal i.', titulo: 'Decisões <em>emperradas</em> por impasse', texto: 'Votações que não saem do lugar, sócios que vetam sem critério claro, deliberações que voltam a cada reunião.' },
    { idx: 'sinal ii.', titulo: 'Entrada ou saída de <em>sócio</em> chegando', texto: 'Novo investidor, sucessão, divórcio, falecimento. Sem regras prévias, cada entrada/saída vira negociação do zero.' },
    { idx: 'sinal iii.', titulo: 'Divergência sobre <em>distribuição</em>', texto: 'Discussões recorrentes sobre pró-labore, dividendos, reinvestimento — sem critério técnico definido.' },
    { idx: 'sinal iv.', titulo: 'Dependência de uma <em>pessoa</em>', texto: 'Um sócio concentra gestão, conhecimento ou clientes. Se ele sair, a empresa fica exposta — sem plano escrito.' },
    { idx: 'sinal v.', titulo: 'Conflito por <em>concorrência</em>', texto: 'Sócios atuando em atividades paralelas ou concorrentes, sem cláusula clara do que é permitido.' },
    { idx: 'sinal vi.', titulo: 'Valuation <em>contestado</em>', texto: 'Qualquer discussão sobre entrada ou saída trava na avaliação das quotas — sem método acordado previamente.' },
  ],
  sec2Eyebrow: 'Instrumentos',
  sec2Titulo: 'Ferramentas que compõem a <em>governança</em> societária.',
  sec2Lede: 'Cada instrumento resolve uma camada. Arquitetura sempre caso a caso — acordo genérico copiado não protege.',
  instruments: [
    { tag: 'i.', titulo: 'Acordo de <em>sócios</em>', texto: 'Documento central: regras de decisão, quóruns, entrada e saída, avaliação, distribuição.' },
    { tag: 'ii.', titulo: 'Cláusula <em>tag along</em>', texto: 'Direito de venda conjunta. Protege minoritários contra diluição quando majoritário vende.' },
    { tag: 'iii.', titulo: 'Cláusula <em>drag along</em>', texto: 'Obrigação de venda conjunta. Útil em M&A para garantir saída total.' },
    { tag: 'iv.', titulo: '<em>Buy-sell</em> e haveres', texto: 'Fórmula pré-acordada de apuração do valor das quotas em caso de saída.' },
    { tag: 'v.', titulo: '<em>Não-concorrência</em>', texto: 'Define o que sócios podem fazer em paralelo. Protege contra concorrência interna.' },
    { tag: 'vi.', titulo: '<em>Lock-up</em> e preferência', texto: 'Bloqueio temporário e direito de preferência protegem a composição societária.' },
    { tag: 'vii.', titulo: 'Resolução de <em>impasses</em>', texto: 'Protocolos para deadlocks e decisões críticas. Mediação, arbitragem, buy-sell forçado.' },
    { tag: 'viii.', titulo: 'Pacto <em>parassocial</em>', texto: 'Acordo entre alguns sócios sobre matérias específicas. Útil em estruturas complexas.' },
  ],
  philosophyQuote: 'Sociedade não se constrói no <em>otimismo</em>. Se constrói na premissa de que, em algum momento, algum sócio vai querer coisa diferente — e o acordo escrito impede que isso vire processo.',
  faqs: [
    { pergunta: 'Contrato social não já basta?', resposta: 'Não. O contrato social contém o <em>mínimo legal</em>. O acordo de sócios regula o que o contrato não alcança: regras de convivência, proteções, fórmulas de saída.' },
    { pergunta: 'O acordo de sócios vale contra terceiros?', resposta: 'Em regra, vincula apenas os signatários. Para algumas cláusulas valerem contra terceiros, é necessário <em>averbação no registro competente</em>.' },
    { pergunta: 'Quando revisar o acordo existente?', resposta: 'Sempre que há mudança relevante: entrada ou saída, alteração no porte, novos investimentos. Boa prática: <em>revisão formal a cada 3-5 anos</em>.' },
    { pergunta: 'O que acontece se não houver acordo?', resposta: 'Aplica-se a regra geral do Código Civil e contrato social — raramente cobre pontos sensíveis. <em>Ausência de acordo é ausência de proteção</em>.' },
    { pergunta: 'Cláusulas podem ser executadas judicialmente?', resposta: 'Sim. Cláusulas bem-redigidas são executáveis — muitas com jurisprudência consolidada. A qualidade da <em>redação técnica</em> define se a cláusula funciona.' },
    { pergunta: 'Quanto tempo leva construir um acordo?', resposta: 'De 2 a 4 meses, dependendo da complexidade. O valor está na <em>discussão estruturada</em> entre os sócios antes da redação.' },
  ],
  ctaTitulo: 'Prevenir custa <em>menos</em> que remediar.',
  ctaTexto: 'O diagnóstico inicial serve para entender a sociedade, os sócios, o estágio do negócio e os pontos de tensão — e apontar quais instrumentos fazem sentido construir.',
};

/* =========================================================
   Organização Patrimonial
   ========================================================= */
const orgPatrimonial: Frente = {
  slug: 'organizacao-patrimonial',
  titulo: 'Organização Patrimonial',
  emph: 'Patrimonial',
  metaTitulo: 'Organização Patrimonial — Thiago Seixas Advocacia Societária',
  metaDescricao: 'Mapeamento, documentação e racionalização de bens, participações, contratos e ativos. Base para holding, governança ou sucessão.',
  heroH1: 'Não se organiza o que não se <em>enxerga</em>. Começa pelo mapeamento.',
  heroLede: 'Organização patrimonial é o trabalho de mapear, documentar e racionalizar o conjunto de bens, participações, contratos e ativos. É <em>ponto de partida</em> obrigatório — qualquer decisão sobre holding, governança ou sucessão tomada sem esse mapeamento se faz sobre premissas incompletas.',
  facts: [
    { lbl: 'Foco', val: '<em>Diagnóstico</em> e mapeamento' },
    { lbl: 'Método', val: 'Documentação <em>estruturada</em>' },
    { lbl: 'Entregáveis', val: 'Dossiê patrimonial e <em>plano</em>' },
    { lbl: 'Função', val: 'Base para <em>todas</em> as outras frentes' },
  ],
  sec1Eyebrow: 'Quando faz sentido',
  sec1Titulo: 'Sinais de que o patrimônio precisa de <em>organização</em>.',
  sec1Lede: 'Patrimônio cresce de forma desorganizada. Em algum ponto, o volume exige parar e organizar. Esses são os sinais típicos.',
  signs: [
    { idx: 'sinal i.', titulo: 'Ninguém sabe <em>exatamente</em> o que existe', texto: 'Nem o titular nem a família consegue listar todos os bens, participações e contratos sem consulta demorada a contador ou arquivos dispersos.' },
    { idx: 'sinal ii.', titulo: 'Patrimônio em <em>múltiplas</em> jurisdições', texto: 'Bens em vários estados, participações em várias sociedades, contas em diferentes instituições — sem consolidação.' },
    { idx: 'sinal iii.', titulo: 'Documentos <em>dispersos</em> e inconsistentes', texto: 'Escrituras, contratos sociais, alterações em diferentes lugares. Alguns com pendências registrais não resolvidas.' },
    { idx: 'sinal iv.', titulo: 'Planejamento <em>sucessório</em> impossível', texto: 'Qualquer tentativa de planejar a sucessão esbarra na falta de mapeamento completo.' },
    { idx: 'sinal v.', titulo: 'Decisões baseadas em <em>intuição</em>', texto: 'Decisões relevantes tomadas sem visão consolidada dos impactos sobre o resto do patrimônio.' },
    { idx: 'sinal vi.', titulo: 'Preparação para <em>holding</em> ou M&amp;A', texto: 'Qualquer operação estrutural relevante exige levantamento prévio — e a falta dele é o que mais atrasa projetos.' },
  ],
  sec2Eyebrow: 'O que envolve',
  sec2Titulo: 'Camadas do trabalho de <em>organização</em> patrimonial.',
  sec2Lede: 'Organizar não é só listar. É mapear, validar, documentar, identificar pendências e propor racionalização.',
  instruments: [
    { tag: 'i.', titulo: 'Mapeamento de <em>imóveis</em>', texto: 'Escrituras, matrículas atualizadas, IPTUs, ITRs, regularidade fiscal e registral.' },
    { tag: 'ii.', titulo: 'Mapeamento de <em>participações</em>', texto: 'Contratos sociais consolidados, histórico de alterações, certidões.' },
    { tag: 'iii.', titulo: 'Mapeamento de <em>contratos</em>', texto: 'Locação, comodato, serviços, financiamentos — com prazos e pendências identificadas.' },
    { tag: 'iv.', titulo: 'Mapeamento <em>financeiro</em>', texto: 'Contas, investimentos, dívidas, fluxos — consolidado por titular.' },
    { tag: 'v.', titulo: 'Identificação de <em>pendências</em>', texto: 'Registros faltantes, averbações não feitas, regularizações pendentes — com plano de resolução.' },
    { tag: 'vi.', titulo: 'Análise de <em>riscos</em>', texto: 'Exposições indevidas, garantias, avais esquecidos — tudo que pode ser surpresa depois.' },
    { tag: 'vii.', titulo: '<em>Racionalização</em>', texto: 'Proposta de simplificação: consolidar participações, vender ativos não estratégicos.' },
    { tag: 'viii.', titulo: '<em>Dossiê</em> consolidado', texto: 'Entregável final: documento único com visão completa, pronto para orientar decisões.' },
  ],
  philosophyQuote: 'Holding <em>mal-fundamentada</em> vira custo, não solução. E fundamento é mapeamento completo — não intuição sobre o que existe.',
  faqs: [
    { pergunta: 'Posso fazer holding sem organização prévia?', resposta: 'Pode, mas é a origem da maior parte dos problemas em holdings mal-feitas. Integralizar bens sem saber exatamente o que são é <em>receita para retrabalho</em>.' },
    { pergunta: 'Quanto tempo leva?', resposta: '45 a 90 dias, dependendo da quantidade de bens e dispersão documental. Patrimônios muito fragmentados podem levar <em>mais de 6 meses</em>.' },
    { pergunta: 'Preciso envolver o contador?', resposta: 'Sim, o contador é peça central — especialmente em participações e fluxos. Trabalhamos em <em>coordenação direta</em> com a contabilidade existente.' },
    { pergunta: 'E se encontrarmos pendências graves?', resposta: 'É o cenário mais comum. O diagnóstico entrega o <em>plano de regularização</em> — decidir o que e quando regularizar é do cliente, com orientação técnica.' },
    { pergunta: 'O dossiê fica com quem?', resposta: 'Com o cliente. O <em>dossiê consolidado é entregue ao titular</em> em formato estruturado, organizado por categoria.' },
    { pergunta: 'Tem custo recorrente?', resposta: 'O trabalho inicial é pontual. Recorrente é a <em>manutenção</em> — atualizar o dossiê conforme o patrimônio muda.' },
  ],
  ctaTitulo: 'Antes de qualquer <em>decisão estrutural</em> — o mapa.',
  ctaTexto: 'O diagnóstico inicial começa com o levantamento do que já existe. Quase todos os projetos começam por esse passo, porque sem ele as decisões seguintes são adivinhações.',
};

/* =========================================================
   Organização Sucessória
   ========================================================= */
const orgSucessoria: Frente = {
  slug: 'organizacao-sucessoria',
  titulo: 'Organização Sucessória',
  emph: 'Sucessória',
  metaTitulo: 'Organização Sucessória — Thiago Seixas Advocacia Societária',
  metaDescricao: 'Planejamento sucessório: ITCMD, doação com reserva de usufruto, testamento, cláusulas protetivas e interface com holding.',
  heroH1: 'Sucessão bem <em>planejada</em> evita que a herança vire conflito.',
  heroLede: 'Organização sucessória é a construção, ainda em vida, da transmissão patrimonial que ocorrerá depois. Quando bem-feita, <em>reduz impostos, evita conflitos entre herdeiros, respeita a vontade do titular</em> e garante continuidade.',
  facts: [
    { lbl: 'Foco', val: '<em>Transmissão</em> patrimonial planejada' },
    { lbl: 'Instrumentos', val: 'Doação, <em>usufruto</em>, testamento, holding' },
    { lbl: 'Atenção', val: '<em>ITCMD</em> e cláusulas protetivas' },
    { lbl: 'Momento', val: 'Melhor <em>em vida</em>, com tranquilidade' },
  ],
  sec1Eyebrow: 'Momento certo',
  sec1Titulo: 'Sinais de que o <em>planejamento sucessório</em> não pode mais esperar.',
  sec1Lede: 'Sucessão é um daqueles temas que quase todo mundo adia. Mas há sinais em que o custo de adiar fica maior que o de enfrentar.',
  signs: [
    { idx: 'sinal i.', titulo: 'Patrimônio <em>consolidado</em>', texto: 'O cenário já é estável. Não há mais grandes mudanças previstas. Momento ideal para planejar com calma.' },
    { idx: 'sinal ii.', titulo: 'Conflitos em <em>sucessões</em> anteriores', texto: 'Heranças de pais, avós ou tios viraram processo, brigas ou distanciamento. Sinal de que o padrão precisa ser quebrado.' },
    { idx: 'sinal iii.', titulo: '<em>Cônjuge</em> em segundo casamento', texto: 'Complexidades sucessórias relevantes: filhos de primeiro casamento, meação do cônjuge atual, regimes conflitantes.' },
    { idx: 'sinal iv.', titulo: 'Mudança iminente de <em>ITCMD</em>', texto: 'Estados têm sinalizado aumento de alíquotas e redução de benefícios. Planejar antes captura a regra mais favorável.' },
    { idx: 'sinal v.', titulo: 'Herdeiros <em>sem capacidade</em> plena', texto: 'Menores, pessoas com deficiência, herdeiros vulneráveis. Exigem estrutura específica.' },
    { idx: 'sinal vi.', titulo: 'Patrimônio em <em>múltiplos</em> estados', texto: 'ITCMD varia por estado, e inventário em múltiplas comarcas é pesadelo logístico. Planejamento resolve.' },
  ],
  sec2Eyebrow: 'Instrumentos',
  sec2Titulo: 'Ferramentas do <em>planejamento sucessório</em>.',
  sec2Lede: 'Cada ferramenta resolve uma camada. Boa arquitetura combina múltiplas — não existe solução única que cubra todos os objetivos.',
  instruments: [
    { tag: 'i.', titulo: 'Doação com <em>usufruto</em>', texto: 'Transmite a nua-propriedade aos herdeiros, mantém gestão e rendimentos com o titular. Clássico do planejamento.' },
    { tag: 'ii.', titulo: 'Cláusulas <em>protetivas</em>', texto: 'Incomunicabilidade, impenhorabilidade, inalienabilidade, reversão — protegem de divórcios e dívidas.' },
    { tag: 'iii.', titulo: '<em>Testamento</em>', texto: 'Central quando há parte disponível a destinar fora da legítima. Crítico em cenários complexos.' },
    { tag: 'iv.', titulo: '<em>Holding patrimonial</em>', texto: 'Estrutura que permite doar quotas em vez de bens, com benefícios tributários e sucessórios.' },
    { tag: 'v.', titulo: 'Análise de <em>ITCMD</em>', texto: 'Alíquotas 4% a 8%, bases variam por estado. Planejamento considera geografia tributária.' },
    { tag: 'vi.', titulo: '<em>Seguro</em> de vida patrimonial', texto: 'Instrumento de liquidez para herdeiros cobrirem ITCMD e custos do inventário.' },
    { tag: 'vii.', titulo: '<em>Previdência</em> privada', texto: 'VGBL e PGBL têm regime sucessório próprio — não entram em inventário.' },
    { tag: 'viii.', titulo: 'Coordenação com <em>governança</em>', texto: 'Sucessão do patrimônio e sucessão da gestão são problemas diferentes, em camadas coordenadas.' },
  ],
  philosophyQuote: 'Sucessão não é tema para depois. Planejada em <em>vida e em paz</em>, vira continuidade. Adiada até o evento, vira <em>processo</em> e conflito.',
  faqs: [
    { pergunta: 'Doação em vida reduz ITCMD?', resposta: 'Pode reduzir, especialmente em estados com alíquota menor ou antes de mudança legislativa. Mas <em>a doação em si paga ITCMD</em>. O ganho está na diferença entre pagar agora ou depois.' },
    { pergunta: 'Testamento substitui doação?', resposta: 'São instrumentos complementares, não substitutos. <em>Planos robustos usam os dois</em>.' },
    { pergunta: 'Reserva de usufruto mantém o controle?', resposta: 'Sim — mantém o <em>direito de uso, gestão e percepção de rendimentos</em>. Donatários são nus-proprietários.' },
    { pergunta: 'ITCMD muda ao longo do tempo?', resposta: 'Muda. O movimento predominante tem sido <em>aumento de alíquotas e redução de benefícios</em> — planejar antes da mudança costuma ser vantajoso.' },
    { pergunta: 'Cláusulas protetivas podem ser afastadas?', resposta: 'Em regra, não — enquanto o usufrutuário viver. A boa redação antecipa hipóteses excepcionais e regula cenários de exceção.' },
    { pergunta: 'Quanto tempo dura um projeto?', resposta: 'De 3 a 8 meses, dependendo da complexidade. Famílias extensas exigem projetos mais longos, com <em>múltiplas camadas coordenadas</em>.' },
  ],
  ctaTitulo: 'O melhor momento é <em>agora</em>, com calma.',
  ctaTexto: 'Planejamento sucessório feito em vida, sem pressa, com diagnóstico prévio, é qualitativamente superior a qualquer decisão sob pressão de evento.',
};

/* =========================================================
   Estruturação Societária Preventiva
   ========================================================= */
const estPreventiva: Frente = {
  slug: 'estruturacao-preventiva',
  titulo: 'Estruturação Societária Preventiva',
  emph: 'Preventiva',
  metaTitulo: 'Estruturação Societária Preventiva — Thiago Seixas',
  metaDescricao: 'Constituição, alteração e reorganização de sociedades. LTDA, S.A., cisão, incorporação, fusão, M&A, abertura de filiais.',
  heroH1: 'A maioria dos conflitos societários nasce <em>na ausência</em> — de clareza, regras, diagnóstico.',
  heroLede: 'Estruturação societária preventiva é a construção — ou reconstrução — de estruturas societárias conduzida com foco em prevenção. Cada ato é pensado como <em>parte de uma arquitetura coerente</em>.',
  facts: [
    { lbl: 'Foco', val: '<em>Prevenção</em> e clareza contratual' },
    { lbl: 'Abrangência', val: 'LTDA, S.A., <em>reorganizações</em>' },
    { lbl: 'Interfaces', val: 'Holding, governança, <em>M&amp;A</em>' },
    { lbl: 'Abordagem', val: 'Arquitetura <em>coerente</em> por caso' },
  ],
  sec1Eyebrow: 'Situações típicas',
  sec1Titulo: 'Quando a <em>estruturação preventiva</em> entra em cena.',
  sec1Lede: 'Empresas passam por momentos societários críticos ao longo do ciclo. Em cada um deles, a decisão de estruturar corretamente define os próximos anos.',
  signs: [
    { idx: 'momento i.', titulo: '<em>Constituição</em> de nova sociedade', texto: 'Tipo societário, participações, governança, regime tributário — definidos no início evitam retrabalho caro.' },
    { idx: 'momento ii.', titulo: 'Entrada de <em>novo sócio</em>', texto: 'Via aumento de capital, cessão de quotas ou estrutura nova. Crítico para calibrar direitos e proteções.' },
    { idx: 'momento iii.', titulo: '<em>Reorganização</em> societária', texto: 'Cisão, incorporação, fusão, transformação. Cada uma com efeitos tributários distintos — escolha técnica.' },
    { idx: 'momento iv.', titulo: 'Preparação para <em>M&amp;A</em>', texto: 'Venda parcial ou total, entrada de investidor. Exige limpeza societária e documentação impecável.' },
    { idx: 'momento v.', titulo: 'Abertura de <em>filial</em>', texto: 'Decidir se é filial, subsidiária, nova sociedade ou JV. Impacta tributação e limitação de risco.' },
    { idx: 'momento vi.', titulo: '<em>Adequação</em> de estrutura existente', texto: 'Estrutura antiga que não cabe mais no negócio atual. Tipo societário inadequado, cláusulas defasadas.' },
  ],
  sec2Eyebrow: 'Operações',
  sec2Titulo: 'Atos e operações <em>tipicamente</em> conduzidos.',
  sec2Lede: 'Cada operação tem protocolos próprios — prazos, quóruns, registros, certidões. A qualidade está na condução rigorosa de cada etapa formal.',
  instruments: [
    { tag: 'i.', titulo: 'Constituição de <em>LTDA</em>', texto: 'Sociedade limitada — tipo mais comum, ainda com muitas decisões técnicas: unipessoal ou pluripessoal, capital, administração.' },
    { tag: 'ii.', titulo: 'Constituição de <em>S.A.</em>', texto: 'Sociedade anônima — estrutura mais sofisticada, útil para captação, governança e sucessão.' },
    { tag: 'iii.', titulo: 'Alteração <em>contratual</em>', texto: 'Mudança de sócios, capital, administração, objeto, sede. Quóruns e registros corretos evitam nulidade.' },
    { tag: 'iv.', titulo: '<em>Cessão de quotas</em>', texto: 'Saída ou entrada de sócio via transferência de quotas. Documento + averbação + atualização.' },
    { tag: 'v.', titulo: '<em>Cisão</em> societária', texto: 'Separar parte da sociedade em nova estrutura — útil em reorganizações e alienações parciais.' },
    { tag: 'vi.', titulo: '<em>Incorporação</em> e fusão', texto: 'Unir sociedades (incorporação) ou criar sociedade nova (fusão). Efeitos tributários específicos.' },
    { tag: 'vii.', titulo: '<em>Transformação</em>', texto: 'Converter LTDA em S.A., ou vice-versa. Cada transformação tem requisitos e impactos próprios.' },
    { tag: 'viii.', titulo: 'Abertura de <em>filial</em>', texto: 'Registro em outro estado ou município, com impactos tributários, trabalhistas e de compliance.' },
  ],
  philosophyQuote: 'Estrutura societária bem-feita <em>não aparece</em> — funciona em silêncio. Estrutura mal-feita aparece todo dia, em cada decisão que vira discussão.',
  faqs: [
    { pergunta: 'Diferença entre cisão, incorporação e fusão?', resposta: 'Cisão separa: uma sociedade vira duas. Incorporação absorve: uma incorpora a outra. Fusão combina: duas formam uma nova. Cada operação tem <em>efeitos tributários e contratuais distintos</em>.' },
    { pergunta: 'LTDA unipessoal substitui a EIRELI?', resposta: 'Funcionalmente, sim — a LTDA unipessoal (2019) assumiu o papel da EIRELI (extinta em 2021). Há diferenças operacionais relevantes. A escolha depende do <em>uso pretendido</em>.' },
    { pergunta: 'Posso transformar LTDA em S.A. a qualquer momento?', resposta: 'Sim, desde que cumpridos os requisitos. A transformação não gera descontinuidade jurídica, mas exige <em>protocolo rigoroso</em>.' },
    { pergunta: 'Alteração contratual paga imposto?', resposta: 'Depende. Alterações simples não geram imposto direto. Com capital (integralização em imóveis) podem gerar ITBI e ganho. Com cessão podem gerar IR. <em>Análise prévia obrigatória</em>.' },
    { pergunta: 'Quanto tempo leva uma reorganização?', resposta: 'Simples: 30 a 60 dias. Complexas (cisão, incorporação, fusão, M&amp;A): 3 a 9 meses. <em>Diagnóstico e saneamento inicial</em> costumam consumir boa parte do prazo.' },
    { pergunta: 'Devo envolver contador e auditor?', resposta: 'Sempre. Reorganizações têm camadas jurídica, contábil, tributária, societária. Coordenamos <em>o trabalho</em> com demais profissionais.' },
  ],
  ctaTitulo: 'Estruturar <em>antes</em> é sempre melhor que reestruturar depois.',
  ctaTexto: 'Se há mudança societária chegando — nova sociedade, novo sócio, reorganização, M&A — o diagnóstico inicial orienta qual arquitetura faz mais sentido, antes da decisão.',
};

export const frentes: Record<string, Frente> = {
  'holding-patrimonial': holding,
  'governanca-familiar': govFamiliar,
  'governanca-societaria': govSocietaria,
  'organizacao-patrimonial': orgPatrimonial,
  'organizacao-sucessoria': orgSucessoria,
  'estruturacao-preventiva': estPreventiva,
};

export const frenteSlugs = Object.keys(frentes);
