import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

const TITLE = "VPN City Guides: 10 US Cities | Tunnel Report";
const DESCRIPTION =
  "Tunnel Report's VPN city guides for 10 US cities: local ISPs, privacy points and which VPN fits, based on published specs, pricing and third-party reports.";
const SHIP_DATE = "2026-10-17";

const CITY_CARDS = [
  {
    name: "Atlanta",
    href: "/vpn/atlanta",
    description: "Atlanta VPN guide: local ISPs, privacy considerations and VPN picks for Georgia residents.",
  },
  {
    name: "Austin",
    href: "/vpn/austin",
    description: "Austin VPN guide: local ISPs, privacy considerations and VPN picks for Texas residents.",
  },
  {
    name: "Chicago",
    href: "/vpn/chicago",
    description: "Chicago VPN guide: local ISPs, privacy considerations and VPN picks for Illinois residents.",
  },
  {
    name: "Dallas",
    href: "/vpn/dallas",
    description: "Dallas VPN guide: local ISPs, privacy considerations and VPN picks for Texas residents.",
  },
  {
    name: "Denver",
    href: "/vpn/denver",
    description: "Denver VPN guide: local ISPs, privacy considerations and VPN picks for Colorado residents.",
  },
  {
    name: "Houston",
    href: "/vpn/houston",
    description: "Houston VPN guide: local ISPs, privacy considerations and VPN picks for Texas residents.",
  },
  {
    name: "Los Angeles",
    href: "/vpn/los-angeles",
    description: "Los Angeles VPN guide: local ISPs, privacy considerations and VPN picks for California residents.",
  },
  {
    name: "Miami",
    href: "/vpn/miami",
    description: "Miami VPN guide: local ISPs, privacy considerations and VPN picks for Florida residents.",
  },
  {
    name: "New York",
    href: "/vpn/new-york",
    description: "New York VPN guide: local ISPs, privacy considerations and VPN picks for New York residents.",
  },
  {
    name: "Seattle",
    href: "/vpn/seattle",
    description: "Seattle VPN guide: local ISPs, privacy considerations and VPN picks for Washington residents.",
  },
] as const;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/vpn",
    type: "website",
  }),
  title: { absolute: TITLE },
  robots: { index: true, follow: true },
};

export default function VpnCityGuidesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/vpn`,
    url: `${siteConfig.url}/vpn`,
    name: "VPN City Guides",
    description: DESCRIPTION,
    dateModified: SHIP_DATE,
    author: {
      "@type": "Organization",
      name: "Tunnel Report Staff",
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Tunnel Report",
      url: `${siteConfig.url}/`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: 10,
      itemListElement: CITY_CARDS.map((city, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: city.name,
        url: `${siteConfig.url}${city.href}`,
      })),
    },
  };

  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd data={collectionSchema} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "City Guides", path: "/vpn" },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          VPN City Guides
        </h1>
        <p className="text-sm text-[#94a3b8]">By Tunnel Report Staff · Updated October 17, 2026</p>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          Pick your city to see which internet providers serve it, what local privacy questions come up, and which
          VPN fits. Each guide is based on published specs, pricing and third-party reports, not our own speed tests.
          Prices change often, so check the provider&apos;s site before you buy.
        </p>
      </header>

      <DisclosureBanner />

      <section className="grid gap-5 md:grid-cols-2">
        {CITY_CARDS.map((city) => (
          <article key={city.href} className="glass-card p-7">
            <h2 className="text-xl font-bold text-white">
              <Link href={city.href} className="transition hover:text-[#00d4aa]">
                {city.name}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">{city.description}</p>
          </article>
        ))}
      </section>
    </article>
  );
}
