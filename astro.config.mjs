import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://garajluc.github.io',
  base: '/pauci',
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en'],
  },
  integrations: [tailwind()],
});
