/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['@portabletext/react'],
  },
  async redirects() {
    const aliases = {
      '/thiagoseixas-novo-site': '/', '/analise-societaria': '/advocacia-societaria', '/artigos.html': '/artigos',
      '/artigo-acordo-de-socios-pt':'/artigos/acordo-de-socios-o-instrumento-que-previne-os-conflitos-mais-graves',
      '/artigo-holding-pt':'/artigos/holding-patrimonial-o-que-e-para-que-serve-e-quando-faz-sentido',
      '/artigo-sucessao-socio-pt':'/artigos/planejamento-sucessorio-o-custo-de-nao-organizar-a-transmissao-patrimonial',
      '/artigo-distribuicao-lucros-pt':'/acervo/distribuicao-de-lucros',
      '/artigo-divorcio-socio-pt':'/acervo/divorcio-do-socio',
      '/artigo-scp-pt':'/acervo/sociedade-em-conta-de-participacao',
    };
    return Object.entries(aliases).flatMap(([source,destination])=>[
      {source,destination,permanent:true},
      ...(source.endsWith('.html')?[]:[{source:source+'.html',destination,permanent:true}]),
    ]);
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
