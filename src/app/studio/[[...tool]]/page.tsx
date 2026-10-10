import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Editor de artigos', robots: { index: false, follow: false } };

export default function StudioPage() {
  redirect('https://studio-thiagoseixas.netlify.app');
}
