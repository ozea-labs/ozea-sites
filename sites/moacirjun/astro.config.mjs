// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://moacirjun.dev',
  integrations: [sitemap()],
  compressHTML: true,
});
