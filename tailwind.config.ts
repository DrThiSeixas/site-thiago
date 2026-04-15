import type { Config } from 'tailwindcss';

/**
 * Sistema visual B — azul-tinta + creme + latão editorial.
 * Mantém as CSS variables definidas em globals.css, e expõe tokens
 * para uso fluido dentro de classes Tailwind.
 */
const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          2: 'rgb(var(--ink-2) / <alpha-value>)',
          3: 'rgb(var(--ink-3) / <alpha-value>)',
        },
        paper: {
          DEFAULT: 'rgb(var(--paper) / <alpha-value>)',
          2: 'rgb(var(--paper-2) / <alpha-value>)',
          3: 'rgb(var(--paper-3) / <alpha-value>)',
        },
        parchment: 'rgb(var(--parchment) / <alpha-value>)',
        brass: {
          DEFAULT: 'rgb(var(--brass) / <alpha-value>)',
          2: 'rgb(var(--brass-2) / <alpha-value>)',
        },
        burgundy: 'rgb(var(--burgundy) / <alpha-value>)',
        institutional: {
          DEFAULT: 'rgb(var(--institutional) / <alpha-value>)',
          2: 'rgb(var(--institutional-2) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        'serif-it': ['var(--font-instrument-serif)', 'serif'],
        sans: ['var(--font-instrument-sans)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1360px',
      },
    },
  },
  plugins: [],
};

export default config;
