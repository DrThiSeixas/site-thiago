# Thiago Seixas — Site

Site institucional do escritório **Thiago Seixas Advocacia Societária** — `thiagoseixas.adv.br`.

**Stack:** Next.js 15 (App Router) · Sanity CMS embedado · Tailwind CSS · TypeScript · Netlify (deploy).

**Visual:** Sistema B — azul-tinta (`#0D1A2B`) + creme (`#EFE7D4`) + latão editorial (`#A68A4D`), com escudo institucional azul claro como acento secundário. Tipografia: Fraunces (display serif) + Instrument Serif (itálico editorial) + Instrument Sans (corpo).

---

## Primeiros passos (ambiente local)

### 1. Instalar dependências

```bash
npm install
```

> Se o Node der aviso de peer-deps, use `npm install --legacy-peer-deps`.

### 2. Configurar variáveis de ambiente

Copie o template e preencha:

```bash
cp .env.example .env.local
```

Edite `.env.local`:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` → obtido em [sanity.io/manage](https://www.sanity.io/manage) após criar o projeto
- `NEXT_PUBLIC_GTM_ID` → opcional; só necessário em produção
- demais campos já vêm com padrões razoáveis

### 3. Criar projeto no Sanity (uma única vez)

No Sanity você hospeda o conteúdo editorial (artigos, autores, categorias). O Studio — interface de edição — fica em `/studio` do próprio site (ex.: `thiagoseixas.adv.br/studio`).

```bash
npx sanity@latest init --bare
```

- escolha **Create new project**
- nome do projeto: `thiago-seixas`
- dataset: `production` (público; ou `private` se preferir)
- output path: quando perguntar, cancele — já temos os schemas em `./sanity/`

Pegue o **Project ID** que o CLI imprimir e cole em `.env.local` (`NEXT_PUBLIC_SANITY_PROJECT_ID`).

### 4. Rodar em desenvolvimento

```bash
npm run dev
```

- Site: http://localhost:3000
- Studio editorial: http://localhost:3000/studio

Entre no Studio, faça login com sua conta Sanity, e comece a criar artigos. Cada publicação aparece no site após a próxima revalidação (até 60 min) ou imediatamente em deploy novo.

---

## Estrutura

```
├── public/
│   ├── assets/            # logos, escudo, imagens estáticas
│   └── favicon.ico
├── sanity/
│   ├── sanity.config.ts   # configuração do Studio
│   └── schemas/           # modelos de conteúdo (Artigo, Autor, Categoria)
├── src/
│   ├── app/               # rotas (App Router)
│   │   ├── layout.tsx     # layout raiz com fonts, SEO base, Schema.org, GA4
│   │   ├── page.tsx       # Home
│   │   ├── globals.css    # sistema visual completo
│   │   ├── home.css       # estilos específicos da Home
│   │   ├── sitemap.ts     # sitemap dinâmico (institucional + Sanity)
│   │   ├── robots.ts      # robots.txt
│   │   └── studio/        # /studio — interface Sanity embedada
│   ├── components/
│   │   ├── Nav.tsx        # cabeçalho com logo e navegação
│   │   ├── Footer.tsx     # rodapé com endereço, canais, institucional
│   │   ├── Whats.tsx      # botão flutuante WhatsApp
│   │   ├── SchemaOrg.tsx  # JSON-LD (LegalService + Person + Article)
│   │   └── Analytics.tsx  # GTM/GA4 (só em produção)
│   └── lib/
│       ├── sanity.ts      # client + image builder
│       ├── queries.ts     # GROQ queries centralizadas
│       └── site.ts        # constantes (OAB, endereço, nav, frentes)
├── .env.example
├── netlify.toml           # config de deploy
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Deploy no Netlify

### Primeira vez

1. **Subir o código para o GitHub**

```bash
git init
git add .
git commit -m "chore: setup inicial do site em Next.js"
git branch -M main
git remote add origin https://github.com/DrThiSeixas/site-thiago.git
git push -u origin main
```

2. **Conectar Netlify ao repositório**

- Em `app.netlify.com` → abra o site atual `thiagoseixas.adv.br`
- `Site configuration → Build & deploy → Continuous deployment → Link repository`
- Escolha GitHub → `DrThiSeixas/site-thiago`
- Branch: `main`
- Build command: `npm run build`
- Publish directory: `.next`

3. **Configurar variáveis de ambiente no Netlify**

Em `Site configuration → Environment variables`, adicione as mesmas variáveis que estão em `.env.local`:

| Variável | Valor |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://thiagoseixas.adv.br` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | seu project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2025-01-01` |
| `NEXT_PUBLIC_GTM_ID` | seu GTM ID (opcional) |
| `NEXT_PUBLIC_EMAIL` | `contato@thiagoseixas.adv.br` |
| `NEXT_PUBLIC_WHATSAPP` | `5519999302552` |

4. **Deploy**

Faça um push para `main` — o Netlify detecta e publica em 2-3 minutos.

### A partir daí

Qualquer mudança no código → push para `main` → Netlify publica automaticamente.

Mudanças de conteúdo (novo artigo, edição) → feitas no Studio em `/studio` → aparecem no site em até 60 minutos (ISR), ou imediatamente em deploy novo.

---

## Checklist pós-deploy

- [ ] `https://thiagoseixas.adv.br/sitemap.xml` acessível e contendo artigos
- [ ] `https://thiagoseixas.adv.br/robots.txt` acessível
- [ ] `https://thiagoseixas.adv.br/studio` carrega o Sanity (após login)
- [ ] Google Search Console configurado com o novo sitemap
- [ ] GA4/GTM configurado e disparando eventos
- [ ] Testes em mobile (Lighthouse ≥ 90 em Performance, Accessibility, SEO)
- [ ] Open Graph testado no LinkedIn e WhatsApp (preview com título + descrição + imagem)

---

## Conformidade com Provimento 205/2021 da OAB

O site foi desenhado para operar dentro do Provimento 205/2021 do CFOAB:

- Sem palavras-chave mercantilistas ("o melhor advogado", "ganhe sua causa")
- Sem promessas de resultado
- Sem valores ou honorários expostos
- Sem cases identificáveis com nome de clientes
- Conteúdo estritamente informativo e educacional

Ao ativar Google Ads, respeitar as mesmas diretrizes.

---

## Comandos úteis

```bash
npm run dev          # ambiente de desenvolvimento
npm run build        # build de produção
npm run start        # serve o build
npm run lint         # eslint
npm run type-check   # tsc sem emitir
```

---

## Autor

**Thiago Seixas** — OAB/SP 249.179
Rua Coronel Lúcio, 1053 — Centro — Vargem Grande do Sul — SP — CEP 13.880-041
contato@thiagoseixas.adv.br · WhatsApp (19) 99930-2552
