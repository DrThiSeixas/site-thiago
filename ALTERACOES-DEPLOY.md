# Alterações para deploy — Google Ads / Landing Pages

## Rotas criadas

- `/advocacia-societaria`
- `/holding-patrimonial-familiar`
- `/obrigado`

## Conversões preparadas

Eventos enviados para `window.dataLayer`:

- `form_submit_attempt`
- `generate_lead`
- `click_whatsapp`
- `click_email`

A conversão principal recomendada no Google Ads é o acesso à página `/obrigado`.

## Variáveis necessárias no Netlify

Configure em **Site configuration > Environment variables**:

```txt
NEXT_PUBLIC_SITE_URL=https://thiagoseixas.adv.br
NEXT_PUBLIC_SANITY_PROJECT_ID=SEU_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=SE_NECESSARIO
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FORM_ENDPOINT=SEU_ENDPOINT_DE_FORMULARIO
NEXT_PUBLIC_WHATSAPP=5519999302552
NEXT_PUBLIC_EMAIL=contato@thiagoseixas.adv.br
```

## Atenção ao formulário

Sem `NEXT_PUBLIC_FORM_ENDPOINT`, o formulário abre o e-mail como fallback. Nesse caso, a conversão por `/obrigado` não dispara. Para rastreamento limpo de leads, configure um endpoint real.

## Google Tag Manager

Crie no GTM:

1. **Conversion Linker** em todas as páginas.
2. Conversão principal por Page View quando URL contém `/obrigado`.
3. Eventos secundários por Custom Event:
   - `click_whatsapp`
   - `click_email`
   - `generate_lead`

## Google Ads

Use as novas páginas como destino:

- Campanha Societário → `/advocacia-societaria`
- Campanha Holding → `/holding-patrimonial-familiar`

