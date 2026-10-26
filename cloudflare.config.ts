import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "datonic-io",
    compatibilityDate: "2026-10-19",
    domains: ["datonic.io"],
    workersDev: false,
    assets: {
      htmlHandling: "drop-trailing-slash",
      notFoundHandling: "404-page",
    },
  },
});
