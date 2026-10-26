// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://datonic.io",
  compressHTML: true,
  trailingSlash: "never",
  build: {
    format: "file",
  },
  fonts: [
    {
      provider: fontProviders.bunny(),
      name: "JetBrains Mono",
      cssVariable: "--font-monospace",
    },
  ],
  prefetch: {
    prefetchAll: true,
  },
  adapter: cloudflare({ imageService: "passthrough" }),
  session: false,
  integrations: [sitemap()],
});
