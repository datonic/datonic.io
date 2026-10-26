# datonic.io

Website for Datonic. Static [Astro](https://astro.build) site served by a Cloudflare Worker with static assets, deployed with the [`cf` CLI](https://developers.cloudflare.com/cf/).

## 🛠️ Development

```bash
npm run dev
```

## 📦 Build

```bash
npm run build
```

Runs `astro build` and writes Cloudflare Build Output to `.cloudflare/output/`.

## 🚀 Deploy

Pushes to `main` deploy through GitHub Actions (needs the `CLOUDFLARE_API_TOKEN` secret). To deploy by hand:

```bash
npx cf auth login
npm run deploy
```

Worker settings, including the `datonic.io` custom domain, live in `cloudflare.config.ts`.

## 📚 License

[MIT](LICENSE)
