/**
 * Signed hub copy (tunnel-hub-intros v2, 2026-10-25).
 * Titles, meta descriptions, and intros are verbatim. Do not edit them here.
 */

export const affiliateDisclosure =
  "This page contains affiliate links, and we may earn a commission if you buy through them.";

export const compareHub = {
  path: "/compare",
  title: "VPN Comparisons: Side-by-Side Specs | Tunnel Report",
  description:
    "Side-by-side VPN comparisons based on published specs, pricing and third-party reports. Check each provider's site for current terms.",
  intro:
    "Each comparison here puts two providers side by side, using their published specs, pricing and third-party reports. There are 12 comparisons now: NordVPN vs ExpressVPN, PureVPN, Proton VPN and Mullvad; Surfshark vs NordVPN, ExpressVPN, PureVPN and Proton VPN; ExpressVPN vs Proton VPN and PureVPN; Mullvad vs Proton VPN; and NordPass vs Bitwarden for password managers. Where a provider has published an independent audit, we link to it. Proton reports an external no-logs audit by Securitum, and Surfshark reports that Deloitte verified its no-logs policy. We link the reports but do not vouch for them. This is general information. Plans and prices change, so check the provider's own page before you decide.",
} as const;

export const alternativesHub = {
  path: "/alternatives",
  title: "VPN Alternatives by Provider | Tunnel Report",
  description:
    "Looking past one VPN? Alternatives to NordVPN, Surfshark, ExpressVPN, Proton VPN and more, based on published specs, pricing and third-party reports.",
  intro:
    "If one provider's price, features or company location doesn't suit you, these pages list other options based on published specs, pricing and third-party reports. We cover alternatives to NordVPN, Surfshark, ExpressVPN, Proton VPN, PureVPN, Mullvad and hide.me. Each page explains what is different about the other providers. For example, it notes where a provider publishes its own pricing page or links to an outside audit, and it links to those primary sources so you can read them yourself. This is general information, not advice. Check each provider's current terms before you sign up.",
} as const;

export const reviewsHub = {
  path: "/reviews",
  title: "VPN & Password Manager Reviews | Tunnel Report",
  description:
    "Reviews of NordVPN, Surfshark, ExpressVPN, Proton VPN, PureVPN, Mullvad, hide.me and NordPass, based on published specs, pricing and third-party reports.",
  intro:
    "Our reviews summarize what providers publish about themselves and what independent reports say about them. There are seven VPN reviews (NordVPN, Surfshark, ExpressVPN, Proton VPN, PureVPN, Mullvad and hide.me) and one password manager review (NordPass). Each review links to the provider's own plan and pricing pages and to any audit the provider has made public, such as the Securitum no-logs audit Proton reports, and the Deloitte verification Surfshark reports. We link those reports but do not vouch for them. We did not run our own tests. The reviews are general information drawn from published specs, pricing and third-party reports.",
} as const;

export const dealsHub = {
  path: "/deals",
  title: "VPN Black Friday 2026 Offers: Status and Current Plans",
  description:
    "Black Friday 2026 VPN offer pages for NordVPN and Surfshark, plus a roundup. We note when an offer isn't live yet. Always check the provider's site.",
  intro:
    'This hub collects our Black Friday 2026 pages: a roundup of VPN deals, plus pages for Surfshark and NordVPN. Each one shows what the provider lists on its own pricing page, including the renewal terms. If a provider hasn\'t announced a Black Friday offer yet, the page says so and labels the plan "Current price, not a Black Friday deal." We don\'t type prices into our copy because they change often, so always confirm on the provider\'s site before you buy.',
} as const;

export const tunnelHubs = [compareHub, alternativesHub, reviewsHub, dealsHub] as const;
