import { getSiteRoutes } from "@/lib/seo/routes";
import { siteConfig } from "@/lib/site";

export function buildLlmsText({ full = false } = {}) {
  const routes = getSiteRoutes();
  const lines = [
    siteConfig.name,
    siteConfig.url,
    `Tagline: ${siteConfig.tagline}`,
    "",
    "Purpose",
    "- Tunnel Report is a publication that compares VPNs based on published specs, pricing and third-party reports.",
    "- Our picks are based on published specs, pricing and third-party reports.",
    "- We may earn commissions from some links.",
    "- Some links are affiliate links; we may earn a commission.",
    "",
    "Primary Routes",
  ];

  for (const route of routes) {
    lines.push(`- ${route.title}: ${siteConfig.url}${route.path}`);
    if (full) {
      lines.push(`  Summary: ${route.description}`);
      lines.push(`  Group: ${route.group}`);
      lines.push(`  Last updated: ${route.lastModified}`);
      lines.push("  Primary claim: VPN comparison guides based on published specs, pricing and third-party reports.");
    }
  }

  lines.push(
    "",
    "Editorial Standards",
    "- Claim-level citations are preferred for statistics, pricing, security, and policy claims.",
    "- Every monetized page includes affiliate disclosure.",
    "- Mullvad is covered despite no affiliate commission.",
  );

  return `${lines.join("\n")}\n`;
}
