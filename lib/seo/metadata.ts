import type { Metadata } from "next";

import { getShareImage } from "@/lib/seo/share-images";
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
  const shareImage = getShareImage(path);

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
      ...(shareImage ? { images: [shareImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(shareImage ? { images: [shareImage] } : {}),
    },
  };
}
