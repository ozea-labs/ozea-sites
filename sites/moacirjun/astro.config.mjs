// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://moacirjun.dev',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    // only 2 pages (index + 404) — safe to always inline, no duplication cost
    inlineStylesheets: 'always',
  },
});
