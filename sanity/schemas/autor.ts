import { defineField, defineType } from 'sanity';

export const autor = defineType({
  name: 'autor',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({ name: 'nome', title: 'Nome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'nome', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'oab', title: 'Inscrição na OAB (ex: OAB/SP 249.179)', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio curta', type: 'text', rows: 4 }),
    defineField({ name: 'foto', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'linkedin', title: 'LinkedIn (URL)', type: 'url' }),
  ],
  preview: { select: { title: 'nome', subtitle: 'oab', media: 'foto' } },
});
