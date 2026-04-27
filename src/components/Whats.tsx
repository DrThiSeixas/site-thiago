'use client';

import { waUrl } from '@/lib/site';
import { trackEvent } from '@/lib/analytics';

export function Whats({ texto, local = 'botao_fixo' }: { texto?: string; local?: string }) {
  return (
    <a
      href={waUrl(texto)}
      className="whats"
      target="_blank"
      rel="noopener"
      onClick={() => trackEvent('click_whatsapp', { local })}
    >
      Falar com o escritório
    </a>
  );
}
