import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  markdown: {
    syntaxHighlight: 'prism', // Cambiar shiki por prism evita ese error específico
  },
});
