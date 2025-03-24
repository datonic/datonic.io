// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://datonic.io",
    compressHTML: true,
    prefetch: {
        prefetchAll: true,
    },
});
