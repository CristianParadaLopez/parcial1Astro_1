import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Esto activa Tailwind en todo el proyecto
  integrations: [tailwind()],
});