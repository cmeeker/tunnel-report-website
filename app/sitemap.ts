import type { MetadataRoute } from "next";

import { getSiteRoutes } from "@/lib/seo/routes";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSiteRoutes().map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
