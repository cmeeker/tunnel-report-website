import { siteConfig } from "@/lib/site";

export const shareImageSize = {
  width: 1200,
  height: 630,
} as const;

type ShareImage = {
  /** Site path beginning with /. */
  path: string;
  alt: string;
  type: "image/png" | "image/jpeg";
};

/** Site default social image from `app/opengraph-image.tsx` (PNG). */
const defaultShareImage: ShareImage = {
  path: "/opengraph-image",
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
  type: "image/png",
};

/**
 * Social images keyed by canonical path.
 * A static PNG or JPG is used when one exists. Otherwise the site default PNG.
 */
const shareImages: Record<string, ShareImage> = {
  "/best-vpns": defaultShareImage,
  "/reviews/nordvpn": defaultShareImage,
  "/compare/nordvpn-vs-purevpn": defaultShareImage,
  "/compare/nordvpn-vs-protonvpn": {
    path: "/og/compare-nordvpn-vs-protonvpn-og.png",
    alt: "NordVPN vs Proton VPN 2026: Features, Privacy and Pricing Compared",
    type: "image/png",
  },
  "/compare/nordvpn-vs-expressvpn": defaultShareImage,
  "/compare/surfshark-vs-nordvpn": defaultShareImage,
  "/alternatives/nordvpn": defaultShareImage,
  "/best-vpn-for/streaming": defaultShareImage,
  "/best-vpn-for/torrenting": defaultShareImage,
  "/guides/vpn-renewal-pricing-traps": defaultShareImage,
};

export type ShareImageMeta = {
  url: string;
  width: number;
  height: number;
  alt: string;
  type: ShareImage["type"];
};

export function getShareImage(path: string): ShareImageMeta | undefined {
  const image = shareImages[path];
  if (!image) return undefined;

  return {
    url: `${siteConfig.url}${image.path}`,
    width: shareImageSize.width,
    height: shareImageSize.height,
    alt: image.alt,
    type: image.type,
  };
}

export function getPageOgImageUrl(path: string) {
  return getShareImage(path)?.url ?? `${siteConfig.url}${path}/opengraph-image`;
}
