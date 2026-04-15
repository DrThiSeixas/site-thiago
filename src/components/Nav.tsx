'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

export function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href) ?? false;
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo-link" aria-label={site.nome}>
          <Image
            src="/assets/logo-horizontal-dark.png"
            alt={site.nome}
            width={280}
            height={88}
            priority
            style={{ height: 44, width: 'auto' }}
          />
        </Link>

        <div className="nav-links">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? 'active' : undefined}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/contato" className="nav-cta">
          Agendar conversa <span className="arr">→</span>
        </Link>
      </div>
    </nav>
  );
}
