import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * El sitio se genera estático: cada ruta produce su propio archivo HTML con
 * los metadatos ya escritos dentro. Eso es lo que permite que Google y el
 * bot de WhatsApp lean la página sin ejecutar JavaScript.
 */
export default defineConfig({
  site: 'https://www.axiaodontologia.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: undefined,
      filter: (pagina) => !pagina.includes('/404'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
