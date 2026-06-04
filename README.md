# Tunnel Report

Independent VPN review site at [tunnelreport.com](https://tunnelreport.com). Editorial rankings, provider reviews, head-to-head comparisons, and US city guides — monetized via affiliate links with on-page disclosure.

## Mission

Publish verifiable VPN guidance: cited sources, named editors, repeatable benchmarks, and rankings that are not pay-to-rank.

## Local development

```bash
npm install
cp example.env .env.local   # then fill in values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NORD_AFFILIATE_NETWORK_ID` | For CLI only | TUNE network ID (default: `nordvpn`) |
| `NORD_AFFILIATE_API_KEY` | For CLI only | Nord affiliate API — **server-side only** |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 measurement ID |
| `INDEXNOW_SUBMIT_SECRET` | Optional | Bearer token for `POST /api/indexnow` |

See [example.env](example.env) and [GROWTH.md](GROWTH.md) for post-deploy indexing steps.

## Affiliate links

Tracking URLs live in [`lib/content/providers.ts`](lib/content/providers.ts) (`AFFILIATE_URLS`).

- **NordVPN / NordPass** — real TUNE tracking links (`aff_id=145333`)
- **Surfshark, ExpressVPN, Proton, PureVPN** — direct pricing URLs until you add program tracking params

Refresh Nord links via:

```bash
npm run nord-affiliate -- track <offer_id> [url_id]
```

## Content architecture

| Path | Source |
|------|--------|
| `/reviews/[provider]` | `lib/content/providers.ts` |
| `/compare/[matchup]` | `lib/content/comparisons.ts` |
| `/vpn/[city]` | `lib/content/cities.ts` |
| `/best-vpns` | Rankings + use-case sections from `vpn-metrics.ts` |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build (static generation for all content routes)
- `npm run lint` — ESLint
- `npm run nord-affiliate -- <command>` — Nord TUNE affiliate API CLI

## SEO

- Dynamic PNG Open Graph images per route (`opengraph-image.tsx`)
- JSON-LD: WebSite, Organization, Article, Review, FAQ, BreadcrumbList, ItemList
- `app/sitemap.ts` — all reviews, compares, cities, and core pages
- `/llms.txt` and `/llms-full.txt` — generated LLM crawler summaries
- `/feed.xml` — RSS for reviews, comparisons, and guides
- IndexNow key at `/tunnelreport-indexnow-2026.txt`; `npm run indexnow` after deploy

## Deploy

Optimized for [Vercel](https://vercel.com). Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the Vercel project env for analytics.
