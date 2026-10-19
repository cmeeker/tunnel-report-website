import { siteConfig } from "@/lib/site";

export const shareImageSize = {
  width: 1200,
  height: 630,
} as const;

type ShareImage = {
  file: string;
  alt: string;
};

/**
 * Cleared share images, keyed by the page path used for canonicals.
 * Filenames match `<path-with-dashes>-og.webp`.
 */
const shareImages: Record<string, ShareImage> = {
  "/best-vpns": {
    file: "best-vpns-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "Best VPNs of 2026: Ranked on Published Specs, Pricing and Third-Party Reports", and tunnelreport.com in teal.',
  },
  "/reviews/nordvpn": {
    file: "reviews-nordvpn-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "NordVPN Review 2026: Speed, Privacy, and Pricing Breakdown", and tunnelreport.com in teal.',
  },
  "/compare/nordvpn-vs-purevpn": {
    file: "compare-nordvpn-vs-purevpn-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "NordVPN vs PureVPN 2026: Head-to-Head Comparison", and tunnelreport.com in teal.',
  },
  "/compare/nordvpn-vs-protonvpn": {
    file: "compare-nordvpn-vs-protonvpn-og.webp",
    alt: "NordVPN vs Proton VPN 2026: Features, Privacy and Pricing Compared",
  },
  "/compare/nordvpn-vs-expressvpn": {
    file: "compare-nordvpn-vs-expressvpn-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "NordVPN vs ExpressVPN 2026: Which Premium VPN Wins?", and tunnelreport.com in teal.',
  },
  "/compare/surfshark-vs-nordvpn": {
    file: "compare-surfshark-vs-nordvpn-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "Surfshark vs NordVPN 2026: Value vs Performance", and tunnelreport.com in teal.',
  },
  "/alternatives/nordvpn": {
    file: "alternatives-nordvpn-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "Best NordVPN Alternatives in 2026", and tunnelreport.com in teal.',
  },
  "/best-vpn-for/streaming": {
    file: "best-vpn-for-streaming-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "Best VPN for Streaming in 2026", and tunnelreport.com in teal.',
  },
  "/best-vpn-for/torrenting": {
    file: "best-vpn-for-torrenting-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "Best VPN for Torrenting in 2026", and tunnelreport.com in teal.',
  },
  "/guides/vpn-renewal-pricing-traps": {
    file: "guides-vpn-renewal-pricing-traps-og.webp",
    alt: 'Tunnel Report share image on a dark navy background with the teal shield icon and wordmark, headline "VPN Renewal Prices 2026: Intro vs Renewal Costs Compared", and tunnelreport.com in teal.',
  },
};

export type ShareImageMeta = {
  url: string;
  width: number;
  height: number;
  alt: string;
  type: "image/webp";
};

export function getShareImage(path: string): ShareImageMeta | undefined {
  const image = shareImages[path];
  if (!image) return undefined;

  return {
    url: `${siteConfig.url}/og/${image.file}`,
    width: shareImageSize.width,
    height: shareImageSize.height,
    alt: image.alt,
    type: "image/webp",
  };
}

export function getPageOgImageUrl(path: string) {
  return getShareImage(path)?.url ?? `${siteConfig.url}${path}/opengraph-image`;
}
