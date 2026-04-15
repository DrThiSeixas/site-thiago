import { defineField, defineType } from 'sanity';

export const categoria = defineType({
  name: 'categoria',
  title: 'Categoria',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo', maxLength: 60 }, validation: (r) => r.required() }),
    defineField({ name: 'descricao', title: 'Descrição curta', type: 'text', rows: 2 }),
    defineField({
      name: 'pilar',
      title: 'Pilar editorial',
      type: 'string',
      options: {
        list: [
          { title: 'Holding Patrimonial', value: 'holding' },
          { title: 'Governança', value: 'governanca' },
          { title: 'Sucessão', value: 'sucessao' },
          { title: 'Tributário', value: 'tributario' },
          { title: 'Societário', value: 'societario' },
          { title: 'Método', value: 'metodo' },
        ],
      },
    }),
  ],
});
