# Hello Melon Landing

Next.js App Router landing page built with React 19, TypeScript, and Tailwind CSS 4.

## Runtime

This project is pinned to:

- Node.js `25.8.1`
- npm `11.11.1`

Project-only setup options:

If you already use Volta, entering this repo will use the pinned versions from `package.json`.

```bash
# If you use nvm/fnm, this repo exposes .nvmrc for Node
nvm use

# Exact npm version for this repo only
npx npm@11.11.1 install
npx npm@11.11.1 run dev
```

`package.json` declares exact `engines`, `packageManager`, and `volta` pins, and `.npmrc` enables `engine-strict`, so npm will reject the wrong Node/npm version inside this repository.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run check
```

## Architecture Notes

- `app/page.tsx` is statically cacheable (`revalidate = 3600`)
- Hero is rendered via one responsive component (`components/home/HeroSection.tsx`)
- Client-side animation logic is isolated in focused hooks under `components/home/hooks`
- Route-level resiliency states are implemented in `app/loading.tsx` and `app/error.tsx`

## Assets

Static assets and local fonts live in `public/assets` and `public/fonts`.
