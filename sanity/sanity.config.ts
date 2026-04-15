import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'thiago-seixas',
  title: 'Thiago Seixas — Editorial',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Editorial')
          .items([
            S.listItem().title('Artigos').child(S.documentTypeList('artigo').title('Artigos')),
            S.divider(),
            S.listItem().title('Categorias').child(S.documentTypeList('categoria').title('Categorias')),
            S.listItem().title('Autores').child(S.documentTypeList('autor').title('Autores')),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
