# SEO and GEO audit — tunnelreport.com — 13 October 2026

Audit only. This change adds this document. It does not change site code or any affiliate link.

Reviewed: the repository on `main`, live HTML on 13 October 2026, Google Search Console (Web, last 3 months, captured 13 October 2026; page-indexing snapshot 8 October 2026), and Bing Webmaster (captured 13 October 2026).

## How to read the numbers

Google has **0 clicks and 16 impressions** in the 3-month Web report. Bing’s performance chart for the same capture shows **0 clicks and 11 impressions**, and the chart itself only plotted 10–11 October 2026 even after a 3-month range was selected. Positions built on 1–3 impressions will move. Treat them as early signals.

The counts that are large enough to plan on:

| Source | Figure | Why it matters |
| --- | --- | --- |
| Google indexing, 8 Oct 2026 | **15 indexed, 41 not indexed** | The site is mostly known and mostly absent from the index. |
| Of the 41 | **36 discovered – currently not indexed** | Google has the URL and has not crawled it yet. |
| Of the 41 | **1 crawled – currently not indexed** | One URL was fetched and left out. This is the only confirmed quality exclusion. |
| Of the 41 | **3 page with redirect, 1 not found (404)** | Crawl waste on URLs that should not be index targets. The export does not name them. |
| Google pages with any impression | **7 URLs, 16 impressions total** | These are the only internal hubs Google is already willing to show. |
| Bing Site Explorer | **44 indexed, 0 errors, 0 warnings, 7 excluded, 51 URLs** | Bing has indexed about three times as many URLs as Google. |
| Bing AI Performance | **30 Copilot citations, average 2 cited pages** | Copilot is already quoting the site. The export names 16 of those 30 citations. |
| Bing 6-month folder stats | **8 clicks, 488 impressions, 1 backlink** | Longer-window Bing demand exists. External links do not. |

Sitemap at fetch time: **53 URLs**, one shared `lastmod` of `2026-10-07T00:09:01.200Z`.

15 indexed + 36 discovered + 1 crawled-not-indexed = 52 URLs, against a 53-URL sitemap. The 3 redirect rows account for the gap between 53 sitemap URLs and 56 URLs in the indexing report (15 + 41). One sitemap URL may still be absent from the report. The unnamed 404 is the row to open in GSC before anyone adds a redirect.

With one recorded backlink, Google has little reason to crawl deep. Internal links, sitemap priority, and page substance are the levers that exist.

## Constraint

**Ship fixes on URLs Google has already discovered before adding URLs.**

New pages join the same discovered-not-indexed queue. Bing and Copilot are the channel that can send demand while Google’s crawl catches up: answer-first openings, real comparison tables, and FAQ schema on pages that already exist.

## Snapshot of the live site

| Area | Live state on 13 Oct 2026 |
| --- | --- |
| Host | `https://tunnelreport.com`. `www` returns 301 to the apex. `http` returns 308 to `https`. |
| Indexable templates | 53 sitemap URLs. No `noindex` on those templates. |
| 404 template | `noindex`. Canonical emitted is the homepage. |
| Robots | `Allow: /` for `*`, GPTBot, ClaudeBot, PerplexityBot, Bingbot. Sitemap declared. |
| AI summaries | `/llms.txt` (68 lines) and `/llms-full.txt` (280 lines) return 200. |
| IndexNow | `/tunnelreport-indexnow-2026.txt` returns the key. |
| Titles | One H1 per sampled URL. Template appends `\| Tunnel Report`. |
| Canonicals | Self-referencing `https://tunnelreport.com…` on sampled 200s. |
| Schema on money pages | WebSite, Organization, Article or Review+Product, BreadcrumbList, FAQPage on most templates. |
| Paying programs in templates | Surfshark, Proton VPN, PureVPN, hide.me use tracked URLs with `nofollow sponsored`. NordVPN, NordPass, and Mullvad do not. ExpressVPN’s `/order` URL is marked `sponsored` and has no tracking parameters in the repo. |

## Titles, meta descriptions, H1s

Sampled from live HTML.

| URL | Title length | H1 matches the title query? | Meta description |
| --- | --- | --- | --- |
| `/` | 55 | H1 is “VPN Reviews You Can Trust. Start Reading the Audits.” The title targets “Independent VPN Reviews”. | 187 characters. Over the usual snippet length. |
| `/best-vpns` | 73 | Yes. | 193 characters. |
| `/reviews/nordvpn` | 74 | Yes. | 177. |
| `/reviews/hideme` | 74 | Yes. | **258 characters.** Will be cut hard in snippets. |
| `/reviews/mullvad` | 68 | Yes. | 142. Fine. |
| `/compare/nordvpn-vs-protonvpn` | 78 | Yes. | **111 characters.** Thin for a head comparison. |
| `/compare/nordvpn-vs-purevpn` | (title in repo) “NordVPN vs PureVPN 2026: Head-to-Head Comparison” | Intro is a verdict, not a one-sentence answer. | Description is a sentence, not a result. |
| `/guides/surfshark-renewal-price` | 46 | H1 is the longer “what happens when the intro deal ends”. | 144. |
| `/about` | 79 | H1 is shorter (“About Tunnel Report”). | 170. |
| `/methodology` | 69 | H1 is “How Tunnel Report Tests and Scores VPNs”. | 205. |
| `/alternatives/nordvpn` | 49 | Yes. | 145. |
| 404 | Homepage title | H1 is the 404 line. | Homepage description, plus `noindex`. |

Google’s only non-brand queries in this export are `independent vpn reviews` (1 impression, position 75) and `best vpn consumer reports` (1 impression, position 76). Both landed on a site whose homepage H1 does not repeat “independent VPN reviews”, and whose rankings page opens with a testing diary instead of a named pick.

Title lengths in the mid-70s are acceptable. The homepage H1, the hideme description, and the short NordVPN-vs-Proton description are the ones worth editing on pages that already exist.

## Canonicals

Sampled canonicals are absolute and self-referencing, including `/best-vpns`, reviews, comparisons, cities, guides, alternatives, `/about`, and `/methodology`.

Homepage canonical is `https://tunnelreport.com` (no trailing slash), which matches `siteConfig.url`.

Known 301s in `vercel.json` and `middleware.ts` are absent from the current sitemap: `/best-vpn`, `/reviews/proton`, `/reviews/hide-me`, `/compare/protonvpn-vs-mullvad`, `/compare/protonvpn-vs-nordvpn`, and the `www` host rule. GSC’s **3 “Page with redirect”** rows are consistent with that set. They are reported under “not indexed”, which is the right outcome for a 301. Leave them out of the sitemap. Validate them in GSC so they stop looking like index debt.

The 404 template’s canonical is the homepage. The template is `noindex`, so this does not create a duplicate homepage. It is still worth giving 404s an empty or self canonical so a future robots change cannot consolidate error URLs into `/`.

GSC’s **1 not-found URL is not in this export.** Open that row before adding any redirect. Do not guess it.

## Robots and sitemap

`/robots.txt` allows the whole site, names the sitemap, and repeats allows for GPTBot, ClaudeBot, PerplexityBot, and Bingbot. `User-agent: *` already covers them. `Host:` is ignored by Google. It does not block anyone.

`/sitemap.xml` lists all 53 content routes from `getSiteRoutes()`: 11 comparisons, 10 cities, 8 guide URLs (index + 7 articles), 7 reviews, 7 alternatives, 6 use cases, plus `/`, `/best-vpns`, `/methodology`, and `/about`.

Every `<lastmod>` is the **build timestamp** (`2026-10-07T00:09:01.200Z` at this fetch), because `app/sitemap.ts` uses `new Date()` rather than `route.lastModified`. Editorial dates in the content are mostly `2026-04-08`. The NordVPN vs Proton VPN longform is dated 1 September 2026 in the article itself. A sitemap that stamps all 53 URLs as changed on deploy day does not tell Google which of the 36 waiting URLs to crawl first.

`/feed.xml` exists and is declared as an RSS alternate. IndexNow is implemented. Both are fine. Neither fixes a crawl queue.

## Indexability

Money-page samples return 200, carry a canonical, and have no `noindex` and no `X-Robots-Tag`.

`dynamicParams = false` on reviews, comparisons, cities, guides, use cases, and alternatives, so unknown slugs 404 instead of soft-200s.

What Google has actually indexed is a different question from what is allowed.

**URLs with Google impressions (the working set):**

| URL | Clicks | Impressions | Position |
| --- | --- | --- | --- |
| `/` | 0 | 12 | 38.3 |
| `/about` | 0 | 6 | 15.2 |
| `/compare/nordvpn-vs-purevpn` | 0 | 3 | **2.3** |
| `/best-vpn-for/privacy` | 0 | 3 | **3.7** |
| `/best-vpn-for/work` | 0 | 2 | **4.0** |
| `/vpn/chicago` | 0 | 1 | **3.0** |
| `/vpn/los-angeles` | 0 | 1 | **4.0** |

`/best-vpns`, every review, every alternatives URL, 8 of 10 cities, and 10 of 11 comparisons have **zero impressions** in this Google export. Some of those may sit in the other 8 indexed URLs (15 indexed minus these 7). The export does not name them. Plan as if they are in the 36 until URL Inspection says otherwise.

**Bing pages with impressions in the short chart:**

| URL | Impressions | Position | Matching query in the export |
| --- | --- | --- | --- |
| `/reviews/nordvpn` | 2 | 9.5 | “is nordvpn a good product for seniors”; a long NordVPN-review query |
| `/vpn/chicago` | 1 | 9.0 | “vpn chincago” |
| `/guides/surfshark-renewal-price` | 1 | 4.0 | (query not named on the page row) |
| `/reviews/hideme` | 1 | 2.0 | “hide.me malaysia jurisdiction no logs ram-only servers 2026 audit” |
| `/best-vpn-for/gaming` | 1 | 9.0 | “game tunnel vpn” |
| `/methodology` | 1 | 2.0 | (brand / trust) |
| brand query “tunnel report” | 2 | 1.5 | navigational |

Chicago is the only URL in both the Google impression list and the Bing page list.

## Internal linking

Sitewide chrome links a lot of URLs. Google still only shows seven. Footer and nav links are weak crawl hints next to in-content links from a URL that already has impressions.

**Equity is currently concentrated on two URLs, and those two are in the impression table.**

- Every comparison breadcrumb uses `/compare/nordvpn-vs-purevpn` as the parent (`app/compare/[matchup]/page.tsx`). That URL is the best Google position in the dataset (2.3).
- Every city breadcrumb uses `/vpn/los-angeles` as the “City Guides” parent. Los Angeles is one of two cities with a Google impression.

That pattern explains the impression list. It also starves sibling comparisons and the other eight cities, which is where the 36 waiting URLs live.

**Hub-to-orphan gaps on pages that already earn impressions or Bing citations:**

| Hub that already has a signal | In-content gap |
| --- | --- |
| `/` (12 Google impressions) | Body links four comparisons, `/best-vpns`, NordVPN, Surfshark, and Los Angeles. It does not link hide.me, the Surfshark renewal guide, Proton renewal, gaming, or `/compare/nordvpn-vs-purevpn` (the best Google position). |
| `/about` (6 impressions, position 15.2) | Best Google position outside the tiny head-term tests. Usable as an editorial hub. Body should point at `/best-vpns`, `/methodology`, NordVPN review, privacy, and NordVPN vs PureVPN. |
| `/compare/nordvpn-vs-purevpn` (position 2.3) | Should link to both full reviews, `/best-vpns`, `/best-vpn-for/budget`, and the other comparisons. Related-link helper does some of this; the breadcrumb parent trick should become a real “all comparisons” block on this page. |
| `/best-vpn-for/privacy` and `/work` | Positions 3.7 and 4.0. Cross-link each other, gaming, streaming, and the reviews for their picks. |
| `/vpn/chicago` and `/vpn/los-angeles` | Only cities Google or Bing has shown. `getCityRelatedLinks` includes a link to the current city and only two other cities. Dallas, Atlanta, and Denver are missing from the footer entirely. |
| Bing-cited `/reviews/hideme` | Not in the header review menu and not in the footer. |
| Bing position 4 `/guides/surfshark-renewal-price` | Footer links the generic renewal-traps guide and omits this URL and `/guides/protonvpn-renewal-price`. Guides are absent from the header. |
| `/reviews/nordvpn` (Bing, 2 impressions) | In the header and footer, so sitewide links exist. It still needs body links from `/`, from NordVPN vs PureVPN, and from `/best-vpns`. |

`getReviewRelatedLinks` sorts PureVPN ahead of other reviews. That is an editorial bias in the link graph, and PureVPN is a paying program. Keep the link where the copy supports it. Stop inserting it on every review by default.

There is no `/compare` index and no `/vpn` index. Add those only after the 36 move. Until then, link siblings from the seven impression URLs.

## Schema

Present and valid enough to parse on the samples:

- **WebSite** on every page via the root layout, plus a second copy on the homepage.
- **Organization** on every page. `sameAs` is only `https://tunnelreport.com`. There is no logo, no external profile, and no founder URL.
- **BreadcrumbList** on inner pages. Several parents are the wrong URL (see internal linking).
- **FAQPage** on homepage, reviews, use cases, alternatives, guides, cities, about, methodology, and standard comparisons.
- **Review + Product** on review templates. **Article** on comparisons, use cases, alternatives, about, methodology, guides.
- **ItemList** on `/best-vpns`, alternatives, use cases, and `/guides`.

Problems that affect rich results and Copilot extraction:

1. **FAQ schema is missing on `/compare/nordvpn-vs-protonvpn`.** The longform prints an FAQ heading and a source list, and `FaqSection` is skipped when `isLongform` is true. That is the comparison with a real table and cited 1 September 2026 prices. It is the best Copilot source in the repo, and it is the one comparison without FAQ schema.
2. **Review `itemReviewed.url` is the review URL**, not the provider. Product schema repeats that URL, has no `offers`, no `image`, and no `aggregateRating`. Review `author` is the organization, while the visible byline is a named persona. A separate Product node is not tied to the Review with `@id`.
3. **WebSite `SearchAction` targets `/best-vpns?q={search_term_string}`.** The rankings page has no search handler. Remove the action until a search URL exists.
4. **City `Article.spatialCoverage` is good.** City breadcrumbs claiming Los Angeles as the parent are not.
5. **Standard comparisons use score bars, not an HTML table.** `/compare/nordvpn-vs-purevpn` (Google position 2.3) is in that group. Copilot and Bing extract tables more reliably than CSS bars.
6. **ItemList on `/best-vpns` points at on-page anchors**, not review URLs. Use-case ItemLists correctly point at `/reviews/…`.

Google has limited FAQ rich results for most commercial sites. FAQ schema still matters here because Copilot already cites the property (30 citations).

Personas (Marcus Chen, Sarah Voss, Daniel Okafor) have bios and no profile URLs, no `sameAs`, and no author archive. Organization is the only entity an AI crawler can resolve, and it resolves to the homepage. That is thin for a YMYL review site. Author pages are new URLs, so they wait until index coverage moves. Person schema on the existing about page does not require a new URL.

## Core Web Vitals risks

No CrUX or PageSpeed run in this audit. Risks from the templates:

| Risk | Where | Why it moves a metric |
| --- | --- | --- |
| LCP | Homepage hero | The H1 sits inside `.fade-in-up`, which starts at `opacity: 0` and `translateY(22px)` for 0.55s. LCP text is invisible at first paint. |
| CLS | `VpnHintBar` | The bar renders nothing, then inserts a row above the header after `/api/vpn-hint` returns. That shifts the whole page. |
| INP / main thread | Hero SVG | `HeroGraphic` uses several Gaussian blur filters in a full-viewport hero. |
| CLS / font | `next/font` | Plus Jakarta Sans and DM Sans are self-hosted with `display: "swap"`. Swap is the right choice; the fade-in is the larger LCP issue. |
| Lab noise | GA4 | Loaded `afterInteractive` only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set. |

These are real, and they are smaller than the indexing problem. Fix the hero animation and the hint-bar slot while touching the homepage for the link pass. Do not start a performance project ahead of crawl priority.

## Images, alt text, Open Graph

Content images are rare. The homepage has three `next/image` SVGs with alt text equal to the card title. The hero SVG is `aria-hidden`. Review, comparison, city, and guide templates have no content images.

Open Graph images are generated per route (1200×630). Live NordVPN review HTML includes `og:image`, `og:image:width` 1200, `twitter:card` = `summary_large_image`, and `twitter:image`.

`og:image:alt` on that review is the generic string **“VPN Review”**. The same pattern is hardcoded in the route files: “VPN Comparison”, “City VPN Guide”, “Best VPN by use case”, “VPN alternatives”, “Tunnel Report VPN Guide”. The pixels inside the image use the real title. The alt attribute does not. Social and image search see the generic string.

## Affiliate `rel` attributes

No link target was changed for this audit. Observed behavior:

| Partner | How the CTA is marked | Note |
| --- | --- | --- |
| Surfshark, Proton VPN, PureVPN, hide.me | `rel="nofollow sponsored noopener noreferrer"` on `AffiliateCTA` and on `PaidPick` | Matches tracked URLs. Citation lists use the same `rel` when the citation URL is one of those tracked targets. |
| NordVPN, NordPass | `rel="noopener noreferrer"` only | `AffiliateCTA` treats both as non-affiliate. The NordPass module copy still says “Separate affiliate link — Tunnel Report may earn a commission.” The `rel` and the sentence disagree. |
| ExpressVPN | `sponsored` on `https://www.expressvpn.com/order` | The repo documents this URL as a direct pricing URL until tracking parameters exist. `sponsored` is ahead of the URL. |
| Mullvad | `noopener noreferrer` to `https://mullvad.net` on Mullvad’s own review | Correct. |
| NordVPN vs Mullvad comparison | The right-hand button is labeled **“Visit Proton VPN”** and uses the Proton tracked URL | `getProviderCtaHref` is null for Mullvad, and the fallback branch always renders the Proton program. The card is Mullvad. This is a live misdirected paid link on an existing comparison. |

City guides render a NordVPN `AffiliateCTA` and do not render `DisclosureBanner`. Reviews, comparisons, use cases, alternatives, guides, `/best-vpns`, and the homepage do.

## GEO readiness

What already helps Copilot and other answer engines:

- AI crawlers are allowed.
- `/llms.txt` and `/llms-full.txt` return 200 and list every route.
- Most templates have a visible FAQ and FAQ schema.
- Homepage stats cite FBI IC3, ITRC, and Freedom House with source rows.
- hide.me and the NordVPN vs Proton longform cite provider documents. Bing already ranks the hide.me review at position 2 for a long jurisdiction-and-audit query.
- The longform states which prices were re-checked on 1 September 2026 and which Proton dollar figures were not verified.

What keeps answer engines on generic wording:

- `/llms.txt` is a route directory. `/llms-full.txt` repeats “Primary claim: Independent {group} coverage…” under every URL instead of the verdict, the price, the date, and the source.
- Homepage H1 is a slogan. `/best-vpns` opens with a first-person testing diary. Copilot’s citations are already the answer-shaped queries **“which vpn is the best”** (6 citations, 15.38% share) and **“the best vpn for speed and security”** (6 citations, **46.15% share**). Those sentences should be the first 40 words of `/best-vpns` and the NordVPN review.
- “Independent vpn” has 4 citations and 19.05% share. The homepage title contains that phrase and the H1 does not. Google’s only matching query (`independent vpn reviews`, position 75) is the same gap.
- Standard comparisons, including the one Google has at position 2.3, have no HTML comparison table and no answer sentence before the intro.
- City pages share one national crime statistic and a flat 12% “VPN impact” formula (`typical * 0.88`). Rendered text is about 980 words for Los Angeles and 800 for Denver, **including header and footer**. That is a thin template. Google has shown only Chicago and Los Angeles.
- Alternatives pages render at roughly 640–840 words including chrome. `/best-vpn-for/streaming` is about 720. `/guides` index is about 410. These are the shape of URLs that move from “discovered” to “crawled – currently not indexed” once Google fetches them.
- The site claims “47 providers tested” on the homepage and on `/best-vpns`. Seven providers have reviews. Nothing public lists the other forty. That claim needs a method note or it needs to be narrowed to the providers with pages.
- Speed medians (for example NordVPN 905 Mbps domestic) and city ISP “typical” speeds are not tied to a downloadable test log. The methodology page exists (Bing position 2) and does not publish the sessions.
- Editorial dates say April 2026 on most pages. The sitemap says 7 October 2026 for all of them. Answer engines that trust `lastmod` will quote stale prices as fresh.

Entity clarity: the brand query “tunnel report” is position 1.5 on Bing (2 impressions). Google’s `/about` position of 15.2 is the closest entity foothold in GSC. Organization schema does not point at any external profile. Personas are not entities a model can confirm.

## Content plan

Ranked for this dataset, not for generic VPN keyword volume. Demand from outside this property is marked as an estimate. The only volume figure pulled from a public third-party snapshot during the audit is Semrush’s August 2026 view of nordvpn.com: “nordvpn” about 301,000 US searches a month and “nord vpn” about 49,500, both navigational. Those head terms are not a plan while the NordVPN review has zero Google impressions.

Paying programs today: **Surfshark, Proton VPN, PureVPN, hide.me.** NordVPN and NordPass CTAs are non-tracked. ExpressVPN’s order URL has no tracking parameters. Mullvad pays nothing. Monetization below uses the paying programs already in the templates.

Anything with a price, a speed, a server count, or an audit date is marked **Needs sources**.

### Do these on URLs that already exist

| Rank | Page | Target query | Intent | Page type | Internal-link plan | Paying program | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `/best-vpns` | which vpn is the best; the best vpn for speed and security | Commercial investigation | Rankings (existing) | Link from `/` (12 impressions) and `/about` (6). Outbound links to NordVPN review, Surfshark review, privacy, work, and NordVPN vs PureVPN. | Surfshark and Proton as the paid alternatives when the editorial pick is Nord. PureVPN on the budget row. | **Needs sources** for any price or Mbps in the new opening. Copilot: 6 citations and 46.15% share on the speed-and-security wording; 6 citations on “which vpn is the best”. Zero Google impressions, so treat it as still in the discovered queue until Inspection says otherwise. |
| 2 | `/compare/nordvpn-vs-purevpn` | nordvpn vs purevpn | Comparison | Comparison (existing) | This is the hub. Add body links to both reviews, `/best-vpns`, budget, and every other comparison. | PureVPN (tracked). Nord CTA stays non-tracked. | **Needs sources.** Entry prices in the repo are `$3.99/mo` and `$2.14/mo` with an April 2026 date. Google position **2.3** on 3 impressions. Protect the URL; add a real HTML table and a one-sentence verdict. |
| 3 | `/` | independent vpn reviews; independent vpn | Mixed, brand plus commercial | Homepage (existing) | Add body links to rank 1, rank 2, hide.me, Surfshark renewal, gaming, and Chicago. | Same as the picks it names. | Google query `independent vpn reviews`, 1 impression, position 75. Copilot “independent vpn”, 4 citations, 19.05% share. Rewrite H1 and the first sentence. Keep the cited FBI / ITRC / Freedom House stats. |
| 4 | `/reviews/nordvpn` | nordvpn review; is nordvpn a good product for seniors | Commercial review | Review (existing) | Links from `/`, from rank 2, and from `/best-vpns`. | No Nord commission today. Paid pick on the page should stay Surfshark or Proton, already the pattern elsewhere. | **Needs sources** for renewal price and the 905 / 720 / 780 Mbps figures. Bing: 2 impressions, position 9.5, including the seniors query. Answer seniors in an FAQ on this URL. Do not create a seniors URL. |
| 5 | `/best-vpn-for/privacy` | best vpn for privacy | Commercial investigation | Use case (existing) | Cross-link work, Mullvad review, Proton review, and `/best-vpns`. | Proton (tracked). Mullvad stays non-paid. | Google position **3.7**, 3 impressions. Lead with the pick and the reason. |
| 6 | `/best-vpn-for/work` | best vpn for remote work | Commercial investigation | Use case (existing) | Cross-link privacy, gaming, NordVPN review, Express review. | PureVPN for the dedicated-IP paid line already in the template. | Google position **4.0**, 2 impressions. |
| 7 | `/vpn/chicago` | best vpn for chicago; vpn chicago | Local commercial | City guide (existing) | From homepage and from Los Angeles. Out to streaming, NordVPN review, and the other cities. | Nord is the current CTA and is non-tracked. Paid line: Surfshark or PureVPN. | **Needs sources** for ISP typical speeds. Google position 3 (1 impression) and Bing position 9 for “vpn chincago”. |
| 8 | `/vpn/los-angeles` | best vpn for los angeles | Local commercial | City guide (existing) | Pair with Chicago. Stop using this URL as the breadcrumb parent of every other city unless the page lists them all in the body. | Same as Chicago. | **Needs sources.** Google position 4, 1 impression. |
| 9 | `/guides/surfshark-renewal-price` | surfshark renewal price | Commercial, pricing | Pricing guide (existing) | Footer and the renewal-traps guide. Link from Surfshark review and from `/best-vpns`. | Surfshark. | **Needs sources** on every dollar amount and the date retrieved. Bing position **4**, 1 impression. This is the template that is already working. |
| 10 | `/reviews/hideme` | hide.me review; hide.me no logs malaysia | Commercial review | Review (existing) | Add to header and footer. Link from privacy and from Proton review. | hide.me. | Shorten the 258-character meta description. Keep the cited jurisdiction and audit lines. Bing position **2** on the long audit query. |
| 11 | `/best-vpn-for/gaming` | best vpn for gaming | Commercial investigation | Use case (existing) | From homepage, work, and NordVPN review. | PureVPN on the port-forward paid line already in the template. | Bing impression at position 9, query “game tunnel vpn” (brand confusion with the site name). First sentence should be “The best VPN for gaming in our 2026 tests is …”. |
| 12 | `/compare/nordvpn-vs-protonvpn` | nordvpn vs protonvpn | Comparison | Comparison (existing) | From `/best-vpns`, privacy, and NordVPN review. | Proton. | **Needs sources**, and the page already flags unverified Proton USD amounts. Add FAQ schema around the existing FAQ. Strongest answer-engine page in the repo. Zero Google impressions in this export. |
| 13 | `/best-vpn-for/streaming` | best vpn for streaming; best vpn for netflix | Commercial investigation | Use case (existing) | From Chicago, Los Angeles, and `/best-vpns`. | Surfshark (unlimited devices) and Express only if that program is actually tracked. | **Needs sources** for any unblocking claim. About 720 words including chrome. Zero impressions in both exports. Thicken this URL. Do not launch a separate Netflix URL. |
| 14 | Remaining city guides (8) | best vpn for {city} | Local commercial | City guides (existing) | One paragraph each from Chicago or Los Angeles, plus footer links for Dallas, Atlanta, Denver. | Same as Chicago. | **Needs sources** per city. These are the doorway risk inside the 36. Unique ISP notes and a cited speed, or they will become the next “crawled – currently not indexed” row. No new cities. |
| 15 | Alternatives templates (7), starting with `/alternatives/nordvpn` | {provider} alternatives | Commercial investigation | Alternatives (existing) | From the matching review and from NordVPN vs PureVPN. | Whichever tracked partner the alternative list actually recommends (Surfshark, Proton, PureVPN, hide.me). | **Needs sources** if a price is added. 640–840 words including chrome. Expand the NordVPN alternatives page first because the best Google comparison is Nord vs Pure. |
| 16 | `/guides/protonvpn-renewal-price` | proton vpn renewal price | Commercial, pricing | Pricing guide (existing) | From the Surfshark renewal guide and the Proton review. | Proton. | **Needs sources.** Same Bing pattern as rank 9, not yet in the Bing page list. |
| 17 | `/methodology` and `/about` | tunnel report methodology; tunnel report | Navigational / trust | Editorial (existing) | From every page already in the impression set. | None. | Bing methodology position 2. About is the best Google entity URL (position 15.2, 6 impressions). Publish who tested what. Narrow or source the “47 providers” line. |
| 18 | `/reviews/expressvpn` | expressvpn review 2026 | Commercial review | Review (existing) | From work, streaming, and `/best-vpns`. | A tracked partner in the paid-pick slot (Surfshark is already used on this review). | **Needs sources.** Bing query “expressvpn 2026 latest stability evaluation…” at position 7. Answer stability in the first paragraph. |
| 19 | `/compare/surfshark-vs-nordvpn` and the other zero-impression comparisons | provider vs provider | Comparison | Comparisons (existing) | One link each from NordVPN vs PureVPN. | The tracked side of the pair (Surfshark, Proton, PureVPN, hide.me). | **Needs sources** for prices. HTML table plus a 40-word verdict. No new matchups until these leave the discovered queue. |

`best vpn consumer reports` (1 Google impression, position 76) is comparison-shopping intent. Fold it into `/best-vpns`. Do not publish a page framed as Consumer Reports.

### New URLs, only after a recrawl moves the 36

Add a URL only when a hub that already has impressions links to it in the body. Each of these extends a page Bing or Google has already touched.

| Rank | New page | Target query | Intent | Page type | Internal-link plan | Paying program | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | NordVPN renewal price | nordvpn renewal price | Commercial, pricing | Pricing guide | From `/reviews/nordvpn` and from the Surfshark renewal guide (Bing position 4). | Surfshark or Proton as the “if the renewal is too high” pick. Nord stays non-tracked. | **Needs sources.** First new URL, because the sibling guide is the only pricing URL Bing has shown. |
| 21 | ExpressVPN renewal price | expressvpn renewal price | Commercial, pricing | Pricing guide | From Express review and from rank 20. | Surfshark. | **Needs sources.** Second, because Express already has a Bing long-tail impression on the review. |
| 22 | Dedicated IP VPN | best vpn with a dedicated ip | Commercial investigation | Use case | From `/best-vpn-for/work` (Google position 4). | PureVPN, which the work page already sells as the dedicated-IP add-on. | **Needs sources** for the add-on price. |

Parked until those three are indexed: Fire TV, Linux, routers, school/hotel obfuscation, “cancel NordVPN”, more countries, more cities. No impression and no citation in this export supports them, and each one would enter the discovered-not-indexed queue.

## Prioritized fixes

### P0 — get the discovered URLs crawled and worth indexing

| # | Fix | Effort |
| --- | --- | --- |
| P0-1 | In-content links from the seven Google impression URLs (`/`, `/about`, NordVPN vs PureVPN, privacy, work, Chicago, Los Angeles) to zero-impression money pages: `/best-vpns`, `/reviews/nordvpn`, `/reviews/hideme`, `/guides/surfshark-renewal-price`, gaming, streaming, and the other comparisons. Put hide.me and both renewal guides into the footer. Put guides into the header. | S |
| P0-2 | Stop stamping every sitemap URL with the build clock. Emit each route’s real `lastModified`. Confirm the three redirect sources stay out of the sitemap. Open the unnamed 404 and the single crawled-not-indexed URL in GSC before writing a redirect. | S |
| P0-3 | Replace the comparison breadcrumb parent (always NordVPN vs PureVPN) and the city breadcrumb parent (always Los Angeles) with a parent that lists siblings, and add those sibling links in the body of the two URLs Google already shows. | S |
| P0-4 | Make the thin discovered templates substantive, in this order: NordVPN vs PureVPN (table + sourced prices), `/best-vpns` (answer-first), Chicago, Los Angeles, privacy, work, streaming, NordVPN review, then the other eight cities and the alternatives templates. | L |
| P0-5 | On NordVPN vs Mullvad, the Mullvad button currently goes to the Proton program. Point that control at Mullvad’s direct URL. Do not retarget any other affiliate href. | S |

### P1 — Bing and Copilot, on pages already indexed there

| # | Fix | Effort |
| --- | --- | --- |
| P1-1 | Answer-first first paragraph on `/best-vpns`, `/`, NordVPN review, privacy, work, gaming, and NordVPN vs PureVPN. Name the pick, the reason, and the date. | M |
| P1-2 | HTML comparison tables on NordVPN vs PureVPN and the other bar-chart comparisons. FAQ schema on the NordVPN vs Proton longform, which already has the questions in prose. | M |
| P1-3 | Rewrite `/llms-full.txt` so each URL carries the verdict, a dated price if one is published, and the source id. Keep `/llms.txt` as the short index. | M |
| P1-4 | Homepage H1 aligned with “independent VPN reviews”. Shorten the hide.me meta description. Expand the NordVPN vs Proton meta description. | S |
| P1-5 | Review schema: Product `@id` separate from the review URL, `offers` only when a price has a source and a retrieved date, author as the persona. Drop the WebSite `SearchAction` until search exists. | M |
| P1-6 | Align disclosure copy with `rel`. NordPass text says affiliate while `rel` omits `sponsored`. ExpressVPN is `sponsored` on an untracked `/order` URL. Add `DisclosureBanner` on city guides. Do not change hrefs. | S |
| P1-7 | Reserve height for the VPN hint bar and remove the opacity-0 fade from the homepage H1. | S |
| P1-8 | Narrow or source “47 providers tested”. Link the claim from `/methodology`. | S |

### P2 — after the queue moves

| # | Fix | Effort |
| --- | --- | --- |
| P2-1 | Per-route Open Graph alt text instead of “VPN Review” / “VPN Comparison” / “City VPN Guide”. | S |
| P2-2 | Organization `logo` and a real `sameAs` profile. Person schema for the three editors on `/about`. | S |
| P2-3 | Remove the duplicate WebSite and Organization nodes on the homepage. | S |
| P2-4 | 404 canonical should not be the homepage. | S |
| P2-5 | Trim titles that run past ~70 characters once the answer-first rewrites land (about, NordVPN vs Proton, best VPNs, NordVPN review, hide.me). | S |
| P2-6 | Empty `ads.txt` placeholder. Leave it until an ad seller exists. | S |
| P2-7 | First new URLs: NordVPN renewal guide, then ExpressVPN renewal guide, then dedicated IP, each linked from a hub in the impression set. | M each |

## Method and limits

- Live fetches used a normal GET on 13 October 2026 for robots, sitemap, llms files, ads.txt, IndexNow key, www and http redirects, and about twenty HTML templates.
- Word counts are full rendered text, header and footer included, so article bodies are shorter than the figures above.
- No PageSpeed, CrUX, or log-file crawl.
- GSC query and page rows are the entire export (2 queries, 7 pages). Bing’s chart caveat is quoted at the top.
- Affiliate hrefs were read to classify `rel`. They were not modified.
