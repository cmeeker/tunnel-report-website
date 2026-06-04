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
    "- Tunnel Report is an independent publication focused on VPN testing, privacy analysis, and comparison reporting.",
    "- Rankings are based on repeatable benchmarks, privacy policy analysis, jurisdiction review, and pricing transparency.",
    "- Affiliate relationships are disclosed and do not determine scores or editorial conclusions.",
    "",
    "Primary Routes",
  ];

  for (const route of routes) {
    lines.push(`- ${route.title}: ${siteConfig.url}${route.path}`);
    if (full) {
      lines.push(`  Summary: ${route.description}`);
      lines.push(`  Group: ${route.group}`);
      lines.push(`  Last updated: ${route.lastModified}`);
      lines.push(`  Primary claim: Independent ${route.group} coverage with visible methodology and editorial disclosure.`);
    }
  }

  lines.push(
    "",
    "Editorial Standards",
    "- Claim-level citations are preferred for statistics, pricing, security, and policy claims.",
    "- Every monetized page includes affiliate disclosure.",
    "- Mullvad is covered despite no affiliate commission to demonstrate editorial independence.",
  );

  return `${lines.join("\n")}\n`;
}
