import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maheshreddy32825.github.io',
  output: 'static',
  outDir: './',        // ← output directly to repo root
  trailingSlash: 'always'
});
