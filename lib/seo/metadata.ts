import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "article",
}: BuildMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: "/images/og-default.svg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-default.svg"],
    },
  };
}
