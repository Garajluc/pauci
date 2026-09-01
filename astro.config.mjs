import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Served from the domain root. If this ever moves back under a sub-path
  // (e.g. GitHub Pages project sites), set `base` and the helpers in
  // src/i18n.ts will pick it up from BASE_URL automatically.
  site: 'https://pouchy.com',
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
