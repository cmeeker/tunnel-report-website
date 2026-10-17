import type { MetadataRoute } from "next";

import { getSiteRoutes } from "@/lib/seo/routes";
import { siteConfig } from "@/lib/site";

export function getSitemapEntries(buildTime = new Date()): MetadataRoute.Sitemap {
  return getSiteRoutes().map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: buildTime,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
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
