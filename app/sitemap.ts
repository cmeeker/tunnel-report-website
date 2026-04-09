import type { MetadataRoute } from "next";

import { citySlugs, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/best-vpns",
    "/reviews/nordvpn",
    "/compare/nordvpn-vs-purevpn",
  ];

  const cityRoutes = citySlugs.map((city) => `/vpn/${city}`);
  const allRoutes = [...staticRoutes, ...cityRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-04-08"),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
