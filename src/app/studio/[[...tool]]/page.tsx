/**
 * Studio Sanity embedado na rota /studio.
 * Edição de conteúdo direto no domínio thiagoseixas.adv.br/studio.
 */
'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity/sanity.config';

export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
