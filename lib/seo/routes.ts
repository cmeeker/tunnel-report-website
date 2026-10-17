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
  group: "static" | "review" | "compare" | "city" | "use-case" | "alternative" | "guide";
};

const staticRoutes: SiteRoute[] = [
  {
    path: "/",
    title: "Tunnel Report",
    description: siteConfig.description,
    lastModified: CONTENT_UPDATED_AT,
    priority: 1,
    changeFrequency: "daily",
    group: "static",
  },
  {
    path: "/best-vpns",
    title: "Best VPNs of 2026",
    description: "Independent 2026 VPN rankings from Tunnel Report.",
    lastModified: "2026-10-15",
    priority: 0.95,
    changeFrequency: "weekly",
    group: "static",
  },
  {
    path: "/best-password-managers",
    title: "Best Password Managers 2026: Prices & Specs Compared",
    description:
      "NordPass, Bitwarden, 1Password, Proton Pass, Dashlane and Keeper compared on published pricing, encryption and audits. Plain answers, no hype.",
    lastModified: "2026-10-17",
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
    lastModified: CONTENT_UPDATED_AT,
    priority: 0.7,
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
  "/reviews/nordvpn": "2026-10-17",
  "/reviews/protonvpn": "2026-10-17",
  "/compare/nordvpn-vs-protonvpn": "2026-10-17",
  "/guides/surfshark-renewal-price": "2026-10-17",
  "/guides/protonvpn-renewal-price": "2026-10-17",
};

function sitemapDate(path: string, contentDate: string) {
  return sitemapLastModified[path] ?? contentDate;
}

export function getSiteRoutes(): SiteRoute[] {
  return [
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
        "NordPass review based on published specs and pricing: XChaCha20 encryption, audits, plans from $1.39/month intro, and who should skip it.",
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
        lastModified: provider.dateModified,
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
        lastModified: "2026-10-17",
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
    sitemapLastModified: REVISED_SITEMAP_LASTMOD,
  }));
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export function getAbsoluteUrls() {
  return getSiteRoutes().map((route) => absoluteUrl(route.path));
}
