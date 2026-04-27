'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  local?: string;
  children: ReactNode;
};

export function TrackedContactLink({ eventName, local, href, children, onClick, ...props }: Props) {
  return (
    <a
      href={href}
      onClick={(e) => {
        trackEvent(eventName, {
          local: local || 'site',
          href: typeof href === 'string' ? href : '',
        });
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
