import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "fbe814d4a37d3d3d7fcfeec0ab929ff6",
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
