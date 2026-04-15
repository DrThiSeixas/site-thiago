/**
 * Layout mínimo para o Studio Sanity — bypassa o globals.css e o Nav/Footer.
 */
export const metadata = { title: 'Editorial · Thiago Seixas', robots: 'noindex, nofollow' };

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
