import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Served at the custom domain root, so no `base`. The helpers in src/i18n.ts
  // and the public asset references read BASE_URL, so they follow this
  // automatically. The custom domain itself is set in the repo's GitHub Pages
  // settings (not via a CNAME file, which Actions-based deploys ignore).
  site: 'https://pouchy-pre-skoly.sk',
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
