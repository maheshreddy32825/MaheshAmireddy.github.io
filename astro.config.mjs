import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://maheshreddy32825.vercel.app',
  output: 'static',
  integrations: [react()],
  vite: {
    ssr: {
      external: ['three']
    }
  }
});
