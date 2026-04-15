import { waUrl } from '@/lib/site';

export function Whats({ texto }: { texto?: string }) {
  return (
    <a href={waUrl(texto)} className="whats" target="_blank" rel="noopener">
      WhatsApp →
    </a>
  );
}
