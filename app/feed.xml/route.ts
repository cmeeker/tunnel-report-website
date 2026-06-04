import { getSiteRoutes } from "@/lib/seo/routes";
import { siteConfig } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = getSiteRoutes()
    .filter((route) => route.group !== "static")
    .slice(0, 50)
    .map((route) => {
      const url = `${siteConfig.url}${route.path}`;
      return `
        <item>
          <title>${escapeXml(route.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(route.description)}</description>
          <pubDate>${new Date(route.lastModified).toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(siteConfig.name)}</title>
        <link>${siteConfig.url}</link>
        <description>${escapeXml(siteConfig.description)}</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
