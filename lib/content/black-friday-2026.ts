import { staffAuthorName } from "@/lib/editorial-personas";
import { siteConfig } from "@/lib/site";

export const DEAL_DATE_MODIFIED = "2026-10-18";
export const PRICES_AS_OF = "Oct 17, 2026";
export const PRICE_CHANGE_LINE =
  "Prices change often, so check the provider's site before you buy.";

export const blackFridayHub = {
  path: "/deals/black-friday-vpn-2026",
  title: "Black Friday VPN Deals 2026: NordVPN, Surfshark, Proton VPN, hide.me",
  description:
    "Black Friday 2026 VPN deal tracker with plan length, USD intro price and renewal for NordVPN, Surfshark, Proton VPN and hide.me.",
  h1: "Black Friday VPN Deals 2026",
} as const;

export const surfsharkBlackFriday = {
  path: "/deals/surfshark-black-friday-2026",
  title: "Surfshark Black Friday 2026 Deal: Plan, Price and Renewal",
  description:
    "Surfshark Black Friday 2026: Surfshark One 24+3 months is $67.23 for the first 27 months ($2.49/mo). Renewal: check at checkout. As of Oct 17, 2026.",
  h1: "Surfshark Black Friday 2026 Deal",
} as const;

export const paidLinks = {
  nordvpn: {
    label: "Visit NordVPN",
    href: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=158647&url_id=902",
    partner: "nordvpn",
  },
  surfshark: {
    label: "Visit Surfshark",
    href: "https://get.surfshark.net/aff_c?offer_id=926&aff_id=49525",
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
  href: "https://protonvpn.com/pricing",
} as const;

export const vendorSources = {
  nordvpn: "https://nordvpn.com/pricing/",
  surfshark: "https://surfshark.com/pricing",
  protonvpn: "https://protonvpn.com/pricing",
  hideme: "https://hide.me/en/pricing",
  nordBlackFriday: "https://nordvpn.com/black-friday/",
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
      "As of Oct 17, 2026, Surfshark labels its Surfshark One 24-month + 3-month plan a Black Friday deal: $67.23 for the first 27 months ($2.49/mo, VAT may apply); renewal is shown at checkout. NordVPN, Proton VPN and hide.me have not announced Black Friday deals yet. Prices change often, so check the provider's site before you buy.",
  },
  {
    question: "Does the Black Friday price apply when the plan renews?",
    answer:
      "Not necessarily. As of Oct 17, 2026: NordVPN Basic 2-year renews at $139.08/year; Proton VPN Plus 2-year renews at $83.88 every 12 months; hide.me Premium renews at the same price and duration; Surfshark's renewal amount is shown at checkout.",
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
      "As of Oct 17, 2026, NordVPN Basic costs $94.23 for the first 27 months (2-year plan + 3 extra months, $3.49/mo, USD), or $65.88 for the first 12 months on the 1-year plan ($5.49/mo). These are current prices, not Black Friday deals. Prices change often, so check the provider's site before you buy.",
  },
  {
    question: "What does NordVPN renew at?",
    answer:
      "NordVPN's pricing page states the Basic 2-year plan renews at $139.08/year. A renewal price for the 1-year term is not listed on the pricing page.",
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
      "As of Oct 17, 2026, Proton VPN Plus costs $83.76 for the first 24 months on the 2-year plan ($3.49/mo, USD). This is the current price, not a Black Friday deal. Prices change often, so check the provider's site before you buy.",
  },
  {
    question: "What does Proton VPN Plus renew at?",
    answer:
      "Proton's pricing page states the VPN Plus 2-year plan renews at $83.88 every 12 months.",
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
      "As of Oct 17, 2026: $69.99 every 26 months (24 + 2 months, $2.69/mo), $54.99 every 13 months (12 + 1 month, $4.23/mo), or $11.99 monthly, in USD; VAT may apply. These are current prices, not Black Friday deals. Prices change often, so check the provider's site before you buy.",
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
      "As of Oct 17, 2026, Surfshark labels Surfshark One (24 months + 3 extra months) a Black Friday deal: $67.23 for the first 27 months ($2.49/mo, USD, VAT may apply). Renewal: check at checkout. Prices change often, so check the provider's site before you buy.",
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
      "As of Oct 17, 2026, Surfshark One and Surfshark Starter both show $67.23 for the first 27 months ($2.49/mo) on the 24-month + 3-month term.",
  },
];

export const hubPageFaqs: DealFaq[] = [...hubFaqs, ...nordFaqs, ...protonFaqs, ...hidemeFaqs];

export function buildDealArticleSchema({
  headline,
  description,
  path,
}: {
  headline: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: DEAL_DATE_MODIFIED,
    dateModified: DEAL_DATE_MODIFIED,
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
