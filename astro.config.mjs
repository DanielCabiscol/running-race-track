import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  //output: 'static', // Garantiza que esté en 'static'
  vite: {
    build: {
      minify: false,
    },
  },
});