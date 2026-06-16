import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mg-diego.github.io',
  base: '/dmg-photography',
  integrations: [tailwind()],
});
