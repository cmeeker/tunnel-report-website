import { blackFridayHub, nordBlackFriday, surfsharkBlackFriday } from "@/lib/content/black-friday-2026";
import { comparisonSlugs, comparisons } from "@/lib/content/comparisons";
import { cityGuideMap } from "@/lib/content/cities";
import { guideSlugs, guides } from "@/lib/content/guides";
import { providerSlugs, providers } from "@/lib/content/providers";
import { useCaseGuides, useCaseSlugs } from "@/lib/content/use-cases";
import { citySlugs, siteConfig } from "@/lib/site";

import { CONTENT_UPDATED_AT } from "./freshness";

/** Sitemap lastmod for pages whose byline or author schema changed on this date. */
export const REVISED_SITEMAP_LASTMOD = "2026-10-17";

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  lastModified: string;
  sitemapLastModified?: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
  group: "static" | "review" | "compare" | "city" | "use-case" | "alternative" | "guide" | "deal";
};

const staticRoutes: SiteRoute[] = [
  {
    path: "/",
    title: "Tunnel Report",
    description: siteConfig.description,
    lastModified: "2026-10-18",
    priority: 1,
    changeFrequency: "daily",
    group: "static",
  },
  {
    path: "/best-vpns",
    title: "Best VPNs of 2026",
    description: "Independent 2026 VPN rankings from Tunnel Report.",
    lastModified: "2026-10-18",
    priority: 0.95,
    changeFrequency: "weekly",
    group: "static",
  },
  {
    path: "/best-password-managers",
    title: "Best Password Managers 2026: Prices & Specs Compared",
    description:
      "NordPass, Bitwarden, 1Password, Proton Pass, Dashlane and Keeper compared on published pricing, encryption and audits. Plain answers, no hype.",
    lastModified: "2026-10-18",
    priority: 0.92,
    changeFrequency: "weekly",
    group: "static",
  },
  {
    path: "/methodology",
    title: "Tunnel Report Methodology",
    description: "How Tunnel Report tests and scores VPNs.",
    lastModified: CONTENT_UPDATED_AT,
    priority: 0.72,
    changeFrequency: "monthly",
    group: "static",
  },
  {
    path: "/about",
    title: "About Tunnel Report",
    description: "Team, methodology, and editorial standards.",
    lastModified: "2026-10-18",
    priority: 0.7,
    changeFrequency: "monthly",
    group: "static",
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "How Tunnel Report collects, uses, and keeps data, including Google Analytics 4 and Vercel Web Analytics.",
    lastModified: "2026-10-21",
    priority: 0.4,
    changeFrequency: "monthly",
    group: "static",
  },
  {
    path: "/terms",
    title: "Terms of Use",
    description: "Terms of Use for tunnelreport.com, operated by Strand and Stone LLC.",
    lastModified: "2026-10-21",
    priority: 0.4,
    changeFrequency: "monthly",
    group: "static",
  },
  {
    path: "/guides",
    title: "VPN Guides",
    description: "VPN protocols, privacy, pricing, and testing explained.",
    lastModified: "2026-10-17",
    priority: 0.8,
    changeFrequency: "weekly",
    group: "guide",
  },
  {
    path: "/vpn",
    title: "VPN City Guides: 10 US Cities",
    description:
      "Tunnel Report's VPN city guides for 10 US cities: local ISPs, privacy points and which VPN fits, based on published specs, pricing and third-party reports.",
    lastModified: "2026-10-17",
    priority: 0.8,
    changeFrequency: "weekly",
    group: "city",
  },
];

const sitemapLastModified: Record<string, string> = {
  "/reviews/nordvpn": "2026-10-18",
  "/reviews/protonvpn": "2026-10-18",
  "/compare/nordvpn-vs-protonvpn": "2026-10-18",
  "/guides/surfshark-renewal-price": "2026-10-17",
  "/guides/protonvpn-renewal-price": "2026-10-17",
};

function sitemapDate(path: string, contentDate: string) {
  return sitemapLastModified[path] ?? contentDate;
}

function laterIsoDate(left: string, right: string) {
  return left > right ? left : right;
}

const blackFridayDealRoutes: SiteRoute[] = [
  {
    path: blackFridayHub.path,
    title: blackFridayHub.title,
    description: blackFridayHub.description,
    lastModified: "2026-10-18",
    sitemapLastModified: "2026-10-18",
    priority: 0.88,
    changeFrequency: "daily",
    group: "deal",
  },
  {
    path: surfsharkBlackFriday.path,
    title: surfsharkBlackFriday.title,
    description: surfsharkBlackFriday.description,
    lastModified: "2026-10-18",
    sitemapLastModified: "2026-10-18",
    priority: 0.82,
    changeFrequency: "weekly",
    group: "deal",
  },
  {
    path: nordBlackFriday.path,
    title: nordBlackFriday.title,
    description: nordBlackFriday.description,
    lastModified: "2026-10-21",
    sitemapLastModified: "2026-10-21",
    priority: 0.82,
    changeFrequency: "weekly",
    group: "deal",
  },
  // protonBlackFriday is intentionally absent. The page is noindex and unlinked.
  // To publish: set its robots metadata to "index,follow", add a route object here
  // (same shape as nordBlackFriday), then link it from the Black Friday hub
  // (Provider Black Friday pages, the Proton section, and Related reading) and
  // from the Nord deal page Related reading.
];

export function getSiteRoutes(): SiteRoute[] {
  return [
    ...[
    ...staticRoutes,
    ...providerSlugs.map((slug) => {
      const provider = providers.find((item) => item.slug === slug)!;
      return {
        path: `/reviews/${slug}`,
        title: provider.reviewTitle,
        description: provider.reviewDescription,
        lastModified: sitemapDate(`/reviews/${slug}`, provider.dateModified),
        priority: 0.9,
        changeFrequency: "weekly" as const,
        group: "review" as const,
      };
    }),
    {
      path: "/reviews/nordpass",
      title: "NordPass Review 2026: Pricing, Security and Specs",
      description:
        "NordPass review based on published specs and pricing: XChaCha20 encryption, audits, and who should skip it. See current pricing.",
      lastModified: "2026-10-17",
      priority: 0.9,
      changeFrequency: "weekly" as const,
      group: "review" as const,
    },
    ...providerSlugs.map((slug) => {
      const provider = providers.find((item) => item.slug === slug)!;
      return {
        path: `/alternatives/${slug}`,
        title: `Best ${provider.name} Alternatives in 2026`,
        description: `Independent alternatives to ${provider.name}.`,
        lastModified: "2026-10-18",
        priority: 0.78,
        changeFrequency: "weekly" as const,
        group: "alternative" as const,
      };
    }),
    ...comparisonSlugs.map((slug) => {
      const comparison = comparisons.find((item) => item.slug === slug)!;
      return {
        path: `/compare/${slug}`,
        title: comparison.title,
        description: comparison.description,
        lastModified: sitemapDate(`/compare/${slug}`, comparison.dateModified),
        priority: 0.85,
        changeFrequency: "weekly" as const,
        group: "compare" as const,
      };
    }),
    {
      path: "/compare/nordpass-vs-bitwarden",
      title: "NordPass vs Bitwarden 2026: Price, Security, Fit",
      description:
        "NordPass vs Bitwarden on published pricing, encryption, audits and free plans. Bitwarden wins on cost and open code; NordPass on polish.",
      lastModified: "2026-10-17",
      priority: 0.85,
      changeFrequency: "weekly" as const,
      group: "compare" as const,
    },
    ...citySlugs.map((slug) => {
      const city = cityGuideMap[slug];
      return {
        path: `/vpn/${slug}`,
        title: `Best VPN for ${city.city} in 2026`,
        description: `Localized VPN recommendations for ${city.city}, ${city.region}.`,
        lastModified: slug === "austin" || slug === "new-york" ? "2026-10-18" : "2026-10-17",
        priority: 0.8,
        changeFrequency: "weekly" as const,
        group: "city" as const,
      };
    }),
    ...useCaseSlugs.map((slug) => {
      const guide = useCaseGuides.find((item) => item.slug === slug)!;
      return {
        path: `/best-vpn-for/${slug}`,
        title: guide.title,
        description: guide.description,
        lastModified: guide.dateModified,
        priority: 0.86,
        changeFrequency: "weekly" as const,
        group: "use-case" as const,
      };
    }),
    ...guideSlugs.map((slug) => {
      const guide = guides.find((item) => item.slug === slug)!;
      return {
        path: `/guides/${slug}`,
        title: guide.title,
        description: guide.description,
        lastModified: sitemapDate(`/guides/${slug}`, guide.dateModified),
        priority: 0.75,
        changeFrequency: "weekly" as const,
        group: "guide" as const,
      };
    }),
  ].map((route) => ({
    ...route,
    sitemapLastModified: laterIsoDate(route.lastModified, REVISED_SITEMAP_LASTMOD),
  })),
    ...blackFridayDealRoutes,
  ];
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export function getAbsoluteUrls() {
  return getSiteRoutes().map((route) => absoluteUrl(route.path));
}
