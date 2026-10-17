import { getSitemapEntries, renderSitemapUrlSet } from "@/lib/seo/sitemap-xml";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderSitemapUrlSet(getSitemapEntries()), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
