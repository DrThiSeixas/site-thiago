import type { Metadata, Viewport } from 'next';
import { Fraunces, Instrument_Sans, Instrument_Serif } from 'next/font/google';
import { SchemaOrg } from '@/components/SchemaOrg';
import { Analytics, AnalyticsNoscript } from '@/components/Analytics';
import { site } from '@/lib/site';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D1A2B',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} · ${site.oab}`,
    template: `%s · ${site.nomeCurto}`,
  },
  description: site.descricao,
  keywords: [
    'holding patrimonial',
    'governança familiar',
    'governança societária',
    'organização sucessória',
    'planejamento sucessório',
    'estruturação societária',
    'advocacia societária',
    'direito societário',
    'OAB/SP',
    'Vargem Grande do Sul',
  ],
  authors: [{ name: site.autor, url: `${site.url}/sobre` }],
  creator: site.autor,
  publisher: site.nome,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.nome,
    title: site.nome,
    description: site.descricao,
    images: [{ url: '/assets/logo-vertical.png', width: 1200, height: 630, alt: site.nome }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.nome,
    description: site.descricao,
    images: ['/assets/logo-vertical.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: {
    icon: '/favicon.ico',
    apple: '/assets/escudo.png',
  },
  verification: {
    // preencher em /.env.local ou via Google Search Console meta tag
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <SchemaOrg />
        <Analytics />
      </head>
      <body className="grain">
        <AnalyticsNoscript />
        {children}
      </body>
    </html>
  );
}
