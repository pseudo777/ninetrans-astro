import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://pseudo777.github.io',
  base: '/ninetrans-astro',
  integrations: [mdx()],
  output: 'static',
});
