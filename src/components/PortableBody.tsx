import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

/**
 * Render customizado do corpo do artigo (PortableText do Sanity).
 * Suporta: parágrafos, h2, h3, blockquote, lead, listas, imagem, callout, CTA intra-artigo.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children, value }) => {
      const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote><p>{children}</p></blockquote>,
    lead: ({ children }) => <p className="lead">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const externo = value?.externo;
      const href = value?.href || '#';
      if (externo) return <a href={href} target="_blank" rel="noopener">{children}</a>;
      return <Link href={href}>{children}</Link>;
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlFor(value).width(1200).fit('max').url();
      return (
        <figure style={{ margin: '36px 0' }}>
          <Image src={url} alt={value.alt || ''} width={1200} height={800} style={{ width: '100%', height: 'auto' }} />
          {value.legenda && (
            <figcaption style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic', fontSize: 14, color: 'rgba(239,231,212,.6)', marginTop: 10 }}>
              {value.legenda}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => (
      <div className="callout">
        {value.label && <strong>{value.label}</strong>}
        <span>{value.texto}</span>
      </div>
    ),
    ctaArtigo: ({ value }) => (
      <div className="mid-cta">
        <h4 dangerouslySetInnerHTML={{ __html: value.titulo || '' }} />
        {value.texto && <p>{value.texto}</p>}
        <Link href={value.href || '/contato'}>
          {value.labelBotao || 'Solicitar diagnóstico'} <span style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic' }}>→</span>
        </Link>
      </div>
    ),
  },
};

export function PortableBody({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}
