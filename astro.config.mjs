import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // GitHub Pages project site: Pouchy (root brand) lives at <base>/, and the
  // Pauči sub-brand at <base>/pauci/. The helpers in src/i18n.ts and the public
  // asset references read BASE_URL, so both follow this automatically.
  // Moving to a bare domain later means dropping `base` and updating `site`.
  site: 'https://garajluc.github.io',
  base: '/pouchy',
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en'],
    routing: {
      // Slovenčina je na koreni (/), angličtina pod /en/ — bez presmerovania
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind()],
});
