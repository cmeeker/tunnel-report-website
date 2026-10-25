import type { MetadataRoute } from "next";

import { execSync } from "node:child_process";

import { DEAL_DATE_MODIFIED, NORD_PROTON_DEAL_DATE, blackFridayHub, nordBlackFriday, surfsharkBlackFriday } from "@/lib/content/black-friday-2026";
import { comparisonMap } from "@/lib/content/comparisons";
import { guideMap } from "@/lib/content/guides";
import { providerMap } from "@/lib/content/providers";
import { useCaseGuideMap } from "@/lib/content/use-cases";
import { getSiteRoutes } from "@/lib/seo/routes";
import { siteConfig } from "@/lib/site";

const gitDateCache = new Map<string, string | null>();

function gitLastModifiedDate(filePath: string): string | null {
  const cached = gitDateCache.get(filePath);
  if (cached !== undefined) return cached;

  try {
    const value = execSync(`git log -1 --format=%cs -- "${filePath}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    })
      .trim()
      .slice(0, 10);
    const result = value.length > 0 ? value : null;
    gitDateCache.set(filePath, result);
    return result;
  } catch {
    gitDateCache.set(filePath, null);
    return null;
  }
}

function resolveSitemapLastModified(path: string): string | undefined {
  if (path === blackFridayHub.path) return DEAL_DATE_MODIFIED;
  if (path === surfsharkBlackFriday.path) return DEAL_DATE_MODIFIED;
  if (path === nordBlackFriday.path) return NORD_PROTON_DEAL_DATE;

  if (path.startsWith("/reviews/")) {
    const slug = path.split("/")[2] ?? "";
    const provider = providerMap[slug];
    if (provider?.dateModified) return provider.dateModified;
    return gitLastModifiedDate(`app/reviews/${slug}/page.tsx`) ?? undefined;
  }

  if (path.startsWith("/alternatives/")) {
    const slug = path.split("/")[2] ?? "";
    const provider = providerMap[slug];
    if (provider?.dateModified) return provider.dateModified;
    return gitLastModifiedDate("app/alternatives/[provider]/page.tsx") ?? undefined;
  }

  if (path.startsWith("/compare/")) {
    const slug = path.split("/")[2] ?? "";
    const comparison = comparisonMap[slug];
    if (comparison?.dateModified) return comparison.dateModified;
    return gitLastModifiedDate(`app/compare/${slug}/page.tsx`) ?? undefined;
  }

  if (path === "/guides") return gitLastModifiedDate("app/guides/page.tsx") ?? undefined;

  if (path.startsWith("/guides/")) {
    const slug = path.split("/")[2] ?? "";
    const guide = guideMap[slug];
    if (guide?.dateModified) return guide.dateModified;
    return gitLastModifiedDate(`app/guides/${slug}/page.tsx`) ?? undefined;
  }

  if (path === "/vpn") return gitLastModifiedDate("app/vpn/page.tsx") ?? undefined;
  if (path.startsWith("/vpn/")) return gitLastModifiedDate("lib/content/cities.ts") ?? undefined;

  if (path.startsWith("/best-vpn-for/")) {
    const slug = path.split("/")[2] ?? "";
    const guide = useCaseGuideMap[slug as keyof typeof useCaseGuideMap];
    if (guide?.dateModified) return guide.dateModified;
    return gitLastModifiedDate("lib/content/use-cases.ts") ?? undefined;
  }

  if (path === "/") return gitLastModifiedDate("app/page.tsx") ?? undefined;

  if (path === "/compare" || path === "/alternatives" || path === "/reviews" || path === "/deals") {
    return "2026-10-25";
  }

  // Default: treat as an app route with a corresponding page component.
  const candidate = `app${path}/page.tsx`;
  return gitLastModifiedDate(candidate) ?? undefined;
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  return getSiteRoutes().map((route) => {
    const lastModified = resolveSitemapLastModified(route.path) ?? route.lastModified;
    return {
      url: route.path === "/" ? siteConfig.url : `${siteConfig.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    };
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function renderSitemapUrlSet(entries: MetadataRoute.Sitemap) {
  const urls = entries
    .map((entry) => {
      const lastModified =
        entry.lastModified instanceof Date
          ? entry.lastModified.toISOString()
          : entry.lastModified;
      const lines = ["<url>", `<loc>${escapeXml(entry.url)}</loc>`];
      if (lastModified) lines.push(`<lastmod>${escapeXml(String(lastModified))}</lastmod>`);
      if (entry.changeFrequency) lines.push(`<changefreq>${entry.changeFrequency}</changefreq>`);
      if (typeof entry.priority === "number") lines.push(`<priority>${entry.priority}</priority>`);
      lines.push("</url>");
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
