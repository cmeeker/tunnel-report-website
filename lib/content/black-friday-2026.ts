import { staffAuthorName } from "@/lib/editorial-personas";
import { AFFILIATE_URLS } from "@/lib/content/providers";
import { siteConfig } from "@/lib/site";

export const DEAL_DATE_MODIFIED = "2026-10-18";
export const PRICES_AS_OF = "Oct 17, 2026";
export const PRICE_CHANGE_LINE =
  "Prices change often, so check the provider's site before you buy.";

export const blackFridayHub = {
  path: "/deals/black-friday-vpn-2026",
  title: "Black Friday VPN Deals 2026: NordVPN, Surfshark, Proton VPN, hide.me",
  description:
    "Black Friday 2026 VPN deal tracker for NordVPN, Surfshark, Proton VPN and hide.me. See current pricing on each provider's site.",
  h1: "Black Friday VPN Deals 2026",
} as const;

export const surfsharkBlackFriday = {
  path: "/deals/surfshark-black-friday-2026",
  title: "Surfshark Black Friday 2026 Deal: Plan, Price and Renewal",
  description:
    "Surfshark Black Friday 2026: Surfshark One, 24 months + 3 extra months. See current pricing. Renewal: check at checkout. As of Oct 17, 2026.",
  h1: "Surfshark Black Friday 2026 Deal",
} as const;

export const nordBlackFriday = {
  path: "/deals/nordvpn-black-friday-2026",
  title: "NordVPN Black Friday 2026 Deal: Plans and Renewal",
  description:
    "NordVPN Black Friday 2026: what NordVPN is offering, which plans it covers, and what to check at renewal. See current pricing on NordVPN's site.",
  h1: "NordVPN Black Friday 2026 Deal",
} as const;

export const protonBlackFriday = {
  path: "/deals/proton-vpn-black-friday-2026",
  title: "Proton VPN Black Friday 2026 Deal: Plans and Renewal",
  description:
    "Proton VPN Black Friday 2026: what Proton is offering on VPN Plus, how renewal works, and where to check. See current pricing on Proton's site.",
  h1: "Proton VPN Black Friday 2026 Deal",
} as const;

export const NORD_PROTON_DEAL_DATE = "2026-10-21";
export const NORD_PROTON_CHECKED_LABEL = "Oct 21, 2026";

export const paidLinks = {
  nordvpn: {
    label: "Visit NordVPN",
    href: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=158647&url_id=902",
    partner: "nordvpn",
  },
  surfshark: {
    label: "Visit Surfshark",
    href: "https://get.surfshark.net/aff_c?offer_id=2065&aff_id=49525",
    partner: "surfshark",
  },
  hideme: {
    label: "Visit hide.me",
    href: "https://hide.me/?friend=6a89f8e9ae1ca",
    partner: "hideme",
  },
} as const;

export const protonPricingLink = {
  label: "See Proton VPN pricing",
  href: AFFILIATE_URLS.protonvpn,
  partner: "protonvpn",
} as const;

export const vendorSources = {
  nordvpn: "https://nordvpn.com/pricing/",
  surfshark: "https://surfshark.com/pricing",
  protonvpn: "https://protonvpn.com/pricing",
  hideme: "https://hide.me/en/pricing",
  nordBlackFriday: "https://nordvpn.com/black-friday/",
  nordNoLogs: "https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/",
  nordRefund: "https://support.nordvpn.com/hc/en-us/articles/19476991311121-What-is-your-refund-policy",
  protonPlans: "https://protonvpn.com/support/proton-vpn-plans",
  protonNoLogsAudit: "https://protonvpn.com/blog/no-logs-audit",
  protonNoLogsPolicy: "https://protonvpn.com/features/no-logs-policy",
} as const;

export type DealFaq = {
  question: string;
  answer: string;
};

export const hubFaqs: DealFaq[] = [
  {
    question: "When is Black Friday 2026?",
    answer: "Black Friday 2026 is Friday, November 27, 2026.",
  },
  {
    question: "Which VPNs have announced Black Friday 2026 deals so far?",
    answer:
      "As of Oct 17, 2026, Surfshark labels its Surfshark One 24-month + 3-month plan a Black Friday deal. See current pricing. Renewal is shown at checkout. NordVPN, Proton VPN and hide.me have not announced Black Friday deals yet. Prices change often, so check the provider's site before you buy.",
  },
  {
    question: "Does the Black Friday price apply when the plan renews?",
    answer:
      "Not necessarily. See current pricing. As of Oct 17, 2026, check NordVPN Basic, Proton VPN Plus, and hide.me Premium on each provider's site. hide.me's pricing page states its plans always renew with the same price and duration. Surfshark's renewal amount is shown at checkout.",
  },
  {
    question: "When will Proton VPN's Black Friday deal be available?",
    answer:
      "Proton VPN has not announced its 2026 Black Friday deal yet. Tunnel Report will check again on Oct 26, 2026 and update this page.",
  },
];

export const nordFaqs: DealFaq[] = [
  {
    question: "Does NordVPN have a Black Friday deal in 2026?",
    answer:
      "Not yet. As of Oct 17, 2026, NordVPN has not announced a Black Friday 2026 deal. Check back; this page is updated as NordVPN publishes its offer.",
  },
  {
    question: "How much does NordVPN cost right now?",
    answer:
      "See current pricing. As of Oct 17, 2026, NordVPN Basic (2-year plan + 3 extra months) and the 1-year plan are current prices, not Black Friday deals. Prices change often, so check the provider's site before you buy.",
  },
  {
    question: "What does NordVPN renew at?",
    answer:
      "See current pricing. NordVPN's pricing page lists the Basic 2-year renewal separately from the intro price. A renewal price for the 1-year term is not listed on the pricing page.",
  },
  {
    question: "Does NordVPN offer a money-back guarantee?",
    answer: "NordVPN's pricing page lists a 30-day money-back guarantee on all plans.",
  },
];

export const protonFaqs: DealFaq[] = [
  {
    question: "Does Proton VPN have a Black Friday deal in 2026?",
    answer:
      "Not yet. As of Oct 17, 2026, Proton VPN has not announced its Black Friday 2026 deal. Tunnel Report will check again on Oct 26, 2026.",
  },
  {
    question: "How much does Proton VPN Plus cost right now?",
    answer:
      "See current pricing. As of Oct 17, 2026, Proton VPN Plus on the 2-year plan is the current price, not a Black Friday deal. Prices change often, so check the provider's site before you buy.",
  },
  {
    question: "What does Proton VPN Plus renew at?",
    answer:
      "See current pricing. Proton's pricing page lists the VPN Plus 2-year renewal separately from the intro price.",
  },
];

export const hidemeFaqs: DealFaq[] = [
  {
    question: "Does hide.me have a Black Friday deal in 2026?",
    answer:
      "Not yet. As of Oct 17, 2026, hide.me has not announced a Black Friday 2026 deal. Check back.",
  },
  {
    question: "How much does hide.me Premium cost?",
    answer:
      "See current pricing for hide.me Premium (26 months, 13 months, and monthly). VAT may apply. As of Oct 17, 2026, these are current prices, not Black Friday deals. Prices change often, so check the provider's site before you buy.",
  },
  {
    question: "Does hide.me's price go up at renewal?",
    answer:
      "hide.me's pricing page states its plans always renew with the same price and duration.",
  },
];

export const surfsharkFaqs: DealFaq[] = [
  {
    question: "What is Surfshark's Black Friday 2026 deal?",
    answer:
      "As of Oct 17, 2026, Surfshark labels Surfshark One (24 months + 3 extra months) a Black Friday deal. See current pricing. Renewal: check at checkout. Prices change often, so check the provider's site before you buy.",
  },
  {
    question: "How much does Surfshark cost after the first term?",
    answer:
      "Surfshark's pricing page says the 2-year plan is billed annually after it expires, but does not list the renewal amount. Check the renewal price at checkout.",
  },
  {
    question: "When does Surfshark's Black Friday deal end?",
    answer:
      "As of Oct 17, 2026, Surfshark has not published an end date. This page will say when the deal has ended.",
  },
  {
    question: "Is Surfshark One priced differently from Starter right now?",
    answer:
      "As of Oct 17, 2026, Surfshark One and Surfshark Starter show the same intro amount on the 24-month + 3-month term. See current pricing.",
  },
];

export const nordDealFaqs: DealFaq[] = [
  {
    question: "Does NordVPN have a Black Friday deal in 2026?",
    answer: "Current price, not a Black Friday deal. See current pricing on NordVPN's site.",
  },
  {
    question: "Which NordVPN plans are included?",
    answer: "NordVPN lists Basic, Plus, and Complete.",
  },
  {
    question: "What does NordVPN renew at?",
    answer: "Renewal differs from intro; see current pricing at nordvpn.com/pricing/.",
  },
  {
    question: "Does NordVPN offer a money-back guarantee?",
    answer: `NordVPN states its money-back terms on its refund policy page: ${vendorSources.nordRefund}.`,
  },
  {
    question: "Is NordVPN's no-logs policy audited?",
    answer:
      "NordVPN says its no-logs policy has passed six independent assurance engagements, most recently by Deloitte Lithuania in late 2025.",
  },
];

export const protonDealFaqs: DealFaq[] = [
  {
    question: "Does Proton VPN have a Black Friday deal in 2026?",
    answer: "Current price, not a Black Friday deal. See current pricing on Proton's site.",
  },
  {
    question: "Which plans are included?",
    answer: "Proton lists VPN Plus and Proton Unlimited.",
  },
  {
    question: "What does Proton VPN Plus renew at?",
    answer: "See current pricing. Renewal differs from the intro price.",
  },
  {
    question: "Is Proton VPN's no-logs policy audited?",
    answer: "Proton says its no-logs policy is independently audited.",
  },
];

export const hubPageFaqs: DealFaq[] = [...hubFaqs, ...nordFaqs, ...protonFaqs, ...hidemeFaqs];

export function buildDealArticleSchema({
  headline,
  description,
  path,
  date = DEAL_DATE_MODIFIED,
}: {
  headline: string;
  description: string;
  path: string;
  date?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: staffAuthorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}${path}`,
  };
}
