# datonic.io

Website for Datonic. A static [Astro](https://astro.build) site deployed to Cloudflare Workers with the [`cf` CLI](https://developers.cloudflare.com/cf/).

Needs Node 24 (see `.nvmrc`).

## 🛠️ Development

```bash
npm run dev
```

## 📦 Build and deploy

```bash
npm run build   # astro check && cf build
npm run deploy  # cf deploy
```

Pushes to `main` deploy through GitHub Actions. Worker settings, including the `datonic.io` domain, live in `cloudflare.config.ts`.

## 📚 License

[MIT](LICENSE)
