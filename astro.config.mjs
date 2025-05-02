// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://datonic.io",
  compressHTML: true,
  trailingSlash: "never",
  build: {
    format: "file",
  },
  experimental: {
    clientPrerender: true,
    fonts: [{
      provider: fontProviders.bunny(),
      name: "JetBrains Mono",
      cssVariable: "--font-monospace"
    }]
  },
  prefetch: {
    prefetchAll: true,
  },

  integrations: [sitemap()],
});
