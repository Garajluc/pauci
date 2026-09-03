import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // GitHub Pages project site: Pouchy pre školy lives at <base>/ (SK) and
  // <base>/en/. The helpers in src/i18n.ts and the public asset references
  // read BASE_URL, so they follow this automatically.
  //
  // Moving to the custom domain pouchy-pre-skoly.sk later:
  //   1. site: 'https://pouchy-pre-skoly.sk', remove `base`
  //   2. add public/CNAME containing `pouchy-pre-skoly.sk`
  //   3. set the custom domain in the repo's Pages settings and point DNS
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
