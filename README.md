# Hello Melon Landing

Next.js App Router landing page built with React 19, TypeScript, and Tailwind CSS 4.

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
