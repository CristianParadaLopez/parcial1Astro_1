import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
  markdown: {
    shikiConfig: {
      langs: ['astro', 'javascript', 'typescript', 'html', 'css'],
    },
  },
});