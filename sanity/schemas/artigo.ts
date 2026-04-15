import { defineField, defineType } from 'sanity';

export const artigo = defineType({
  name: 'artigo',
  title: 'Artigo',
  type: 'document',
  groups: [
    { name: 'conteudo', title: 'Conteúdo', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (r) => r.required().max(120),
      group: 'conteudo',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: (r) => r.required(),
      group: 'conteudo',
    }),
    defineField({
      name: 'chamada',
      title: 'Chamada / Deck',
      description: 'Frase de abertura grande, aparece no topo do artigo e em cards.',
      type: 'text',
      rows: 3,
      validation: (r) => r.required().max(260),
      group: 'conteudo',
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'categoria' }],
      validation: (r) => r.required(),
      group: 'conteudo',
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'autor' }],
      validation: (r) => r.required(),
      group: 'conteudo',
    }),
    defineField({
      name: 'publicadoEm',
      title: 'Publicado em',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
      group: 'conteudo',
    }),
    defineField({
      name: 'tempoLeitura',
      title: 'Tempo estimado de leitura (minutos)',
      type: 'number',
      validation: (r) => r.min(1).max(60),
      group: 'meta',
    }),
    defineField({
      name: 'capa',
      title: 'Imagem de capa (opcional)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
      group: 'conteudo',
    }),
    defineField({
      name: 'corpo',
      title: 'Corpo do artigo',
      type: 'array',
      group: 'conteudo',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Parágrafo', value: 'normal' },
            { title: 'Título da seção', value: 'h2' },
            { title: 'Subtítulo', value: 'h3' },
            { title: 'Citação', value: 'blockquote' },
            { title: 'Lead (parágrafo destacado)', value: 'lead' },
          ],
          lists: [
            { title: 'Lista', value: 'bullet' },
            { title: 'Lista numerada', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Negrito', value: 'strong' },
              { title: 'Ênfase (itálico editorial)', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  { name: 'externo', type: 'boolean', title: 'Abrir em nova aba?' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Texto alternativo' },
            { name: 'legenda', type: 'string', title: 'Legenda' },
          ],
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Caixa de destaque',
          fields: [
            { name: 'label', type: 'string', title: 'Rótulo (ex: ATENÇÃO)' },
            { name: 'texto', type: 'text', title: 'Texto', rows: 3 },
          ],
        },
        {
          type: 'object',
          name: 'ctaArtigo',
          title: 'CTA intra-artigo',
          fields: [
            { name: 'titulo', type: 'string', title: 'Título' },
            { name: 'texto', type: 'text', title: 'Texto', rows: 2 },
            { name: 'labelBotao', type: 'string', title: 'Texto do botão', initialValue: 'Solicitar diagnóstico' },
            { name: 'href', type: 'string', title: 'Destino', initialValue: '/contato' },
          ],
        },
      ],
    }),
    defineField({
      name: 'relacionados',
      title: 'Artigos relacionados',
      description: 'Até 3 artigos que serão mostrados ao fim da leitura.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artigo' }] }],
      validation: (r) => r.max(3),
      group: 'conteudo',
    }),

    /* ============ SEO ============ */
    defineField({
      name: 'metaTitulo',
      title: 'Meta título (SEO)',
      description: 'Se vazio, usa o título principal. Ideal: até 60 caracteres.',
      type: 'string',
      validation: (r) => r.max(70),
      group: 'seo',
    }),
    defineField({
      name: 'metaDescricao',
      title: 'Meta descrição (SEO)',
      description: 'Se vazio, usa a chamada. Ideal: 150-160 caracteres.',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(175),
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagem Open Graph',
      description: 'Usada em compartilhamentos no WhatsApp, LinkedIn, etc.',
      type: 'image',
      options: { hotspot: true },
      group: 'seo',
    }),
    defineField({
      name: 'noindex',
      title: 'Ocultar dos buscadores (noindex)',
      type: 'boolean',
      initialValue: false,
      group: 'seo',
    }),
  ],
  orderings: [
    { title: 'Publicação (mais recente)', name: 'publicadoDesc', by: [{ field: 'publicadoEm', direction: 'desc' }] },
    { title: 'Publicação (mais antiga)', name: 'publicadoAsc', by: [{ field: 'publicadoEm', direction: 'asc' }] },
    { title: 'Título (A-Z)', name: 'tituloAsc', by: [{ field: 'titulo', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'titulo', cat: 'categoria.titulo', date: 'publicadoEm', media: 'capa' },
    prepare({ title, cat, date, media }) {
      const d = date ? new Date(date).toLocaleDateString('pt-BR') : '';
      return { title: title, subtitle: [cat, d].filter(Boolean).join(' · '), media };
    },
  },
});
