// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shadowharness.github.io',
  base: '/',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://shadowharness.github.io/en/',
    }),
  ],
});
