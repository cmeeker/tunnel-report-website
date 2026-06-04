# Tunnel Report Growth Checklist

This file covers the external work that cannot be completed from code. The site now has the technical surface area; these steps make search engines, AI crawlers, partners, and communities discover it.

## Week 1: Measurement and Indexing

1. Verify `tunnelreport.com` in Google Search Console.
   - Submit `https://tunnelreport.com/sitemap.xml`.
   - Inspect `/best-vpns`, `/reviews/nordvpn`, `/best-vpn-for/streaming`, and `/guides/wireguard-vs-openvpn`.
   - Watch: indexed pages, impressions by query, crawl errors, and pages discovered but not indexed.

2. Verify Bing Webmaster Tools.
   - Import from Google Search Console if available.
   - Submit `https://tunnelreport.com/sitemap.xml`.
   - Use IndexNow after deploy: `npm run indexnow`.

3. Configure GA4.
   - Create a property for Tunnel Report.
   - Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel.
   - Confirm `affiliate_click` events include `partner`, `link_url`, and landing page.

4. Core Web Vitals.
   - Test `/`, `/best-vpns`, `/reviews/nordvpn`, `/best-vpn-for/streaming`.
   - Target: LCP under 2.5s, CLS under 0.1, INP under 200ms.
   - Prioritize hero LCP image/animation, font loading, and any layout shift in sticky chrome.

## Weekly Content Velocity

- Publish or refresh at least 2 URLs per week.
- Priority order:
  - New comparisons.
  - Use-case pages.
  - City pages.
  - Alternatives pages.
  - Guides answering support/search questions.

Each page should include:
- One primary keyword in title/H1.
- Visible update date.
- FAQ section.
- Related links to reviews, comparisons, one city/use-case page, and `/best-vpns`.
- At least one cited external source when making statistical, policy, or pricing claims.

## LLM / GEO Workflow

- Keep `/llms.txt` and `/llms-full.txt` accessible.
- Do not block GPTBot, ClaudeBot, PerplexityBot, or Bingbot.
- Phrase FAQs as real user questions:
  - "Is NordVPN worth it in 2026?"
  - "Surfshark vs NordVPN for Netflix?"
  - "What is a no-logs VPN?"
- Publish original-ish numbers: medians, speed floors, renewal prices, audit dates, route notes.

## Distribution Cadence

Do one distribution action per week:

- Reddit: answer relevant posts in `r/VPN`, `r/privacy`, `r/cordcutters`, or city subreddits. Link only when the page directly answers the question.
- HARO/Qwoted: respond as the Tunnel Report editorial team on privacy, broadband, streaming, and online fraud topics.
- Broken-link outreach: find old VPN comparison links and offer a current Tunnel Report comparison.
- Partner outreach: once Surfshark/Express/PureVPN affiliate approvals land, ask for inclusion in partner resources or launch mentions.
- Substack/Medium: post one summary piece with canonical links back to Tunnel Report guides.

## Affiliate Program Priority

1. Surfshark.
2. ExpressVPN.
3. PureVPN.
4. Proton VPN.
5. Expand Nord offers (NordLayer, Saily, NordPass creatives).

When links arrive, update `AFFILIATE_URLS` in `lib/content/providers.ts`.

## Monthly Review

- In GSC, export top queries by impressions.
- Add FAQ answers for high-impression / low-CTR queries.
- Refresh top 5 pages with visible date updates.
- Compare `affiliate_click` events by landing page and partner.
- Add 4-8 new internal links from high-impression pages to high-converting pages.
