# CLAUDE.md

## Project
Next.js 16 site for Stichting Football is Life (fil.humanaize.nl).

## Tech
- Next.js 16 with Turbopack, React 19, Tailwind 4, Motion (Framer Motion)
- Payments: Mollie API
- Hosting: self-hosted Ubuntu, nginx reverse proxy → Next.js on port 3002
- Process manager: PM2 (process name: `fil`)

## Commands
- `pnpm run build` — production build
- `pnpm run dev` — dev server (do NOT run alongside PM2, causes port conflicts)
- `pm2 logs fil --lines 50 --nostream` — check server logs
- `pm2 restart fil` — restart production server
- Deploy workflow: `pm2 stop fil && pnpm run build && pm2 start fil`

## Gotchas
- Never run `next start` or `next dev` directly — always use PM2 to avoid orphaned processes blocking port 3002
- If site shows "client-side exception", check `pm2 logs fil` first — likely a crash loop, not a code bug
- MOLLIE_API_KEY in `.env.local` — must be set for donations to work
