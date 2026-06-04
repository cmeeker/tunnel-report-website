/**
 * Best-effort VPN signal from ISP/org strings (IP intelligence).
 * Not reliable for all VPNs — many exits use generic hosting with no provider name.
 */

export type VpnHintMode = "likely_vpn" | "unlikely_vpn" | "unknown";

const VPN_PROVIDER = new RegExp(
  [
    "nordvpn",
    "nord vpn",
    "nordlayer",
    "mullvad",
    "expressvpn",
    "surfshark",
    "proton[- ]?vpn",
    "cyberghost",
    "private internet access",
    "\\bpia\\b",
    "ipvanish",
    "windscribe",
    "tunnelbear",
    "purevpn",
    "strong technology",
    "zenmate",
    "hidemyass",
    "atlasvpn",
    "atlas vpn",
    "torguard",
    "vpn\\.ac",
    "le vpn",
    "fastestvpn",
    "privatevpn",
    "vyprvpn",
    "hotspot shield",
    "hma vpn",
    "ivpn",
    "perfect privacy",
    "airvpn",
    "ovpn",
    "azirevpn",
    "wevpn",
    "privadovpn",
  ].join("|"),
  "i",
);

/** Datacenter / VPN-adjacent networks — weaker signal than named providers */
const HOSTING_VPN_ADJACENT = new RegExp(
  [
    "m247",
    "datacamp",
    "data camp",
    "choopa",
    "vultr",
    "quadranet",
    "psychz",
    "tzulo",
    "netprotect",
    "cdnext",
    "hosting",
    "data center",
    "datacenter",
    "colo",
    "cloudflare warp",
    "\\bwarp\\b",
  ].join("|"),
  "i",
);

const RESIDENTIAL_ISP = new RegExp(
  [
    "comcast",
    "xfinity",
    "charter",
    "spectrum",
    "verizon",
    "at&t",
    "att ",
    "frontier",
    "centurylink",
    "lumen",
    "cox",
    "optimum",
    "altice",
    "mediacom",
    "wow!",
    "rcn",
    "astound",
    "google fiber",
    "sonic",
    "ziply",
    "sparklight",
    "breezeline",
    "suddenlink",
    "cablevision",
    "time warner",
    "brighthouse",
    "windstream",
    "hughesnet",
    "starlink",
    "t-mobile",
    "tmobile",
  ].join("|"),
  "i",
);

export function inferVpnHintMode(isp: string, org: string): VpnHintMode {
  const blob = `${isp} ${org}`.trim();
  if (!blob) return "unknown";

  if (VPN_PROVIDER.test(blob)) return "likely_vpn";
  if (RESIDENTIAL_ISP.test(blob)) return "unlikely_vpn";
  if (HOSTING_VPN_ADJACENT.test(blob)) return "likely_vpn";

  return "unknown";
}
