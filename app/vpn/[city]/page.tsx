import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CitationLink } from "@/components/CitationLink";
import { CitedText } from "@/components/CitedText";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { SourcesList } from "@/components/SourcesList";
import { RelatedCards } from "@/components/RelatedCards";
import { getCitySiblingCards } from "@/lib/seo/related-cards";
import { cityGuideMap } from "@/lib/content/cities";
import { citationSources, citySources } from "@/lib/content/facts";
import { AFFILIATE_URLS } from "@/lib/content/vpn-metrics";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildGeoArticleSchema } from "@/lib/seo/schema";
import { citySlugs } from "@/lib/site";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const guide = cityGuideMap[city as keyof typeof cityGuideMap];

  if (!guide) {
    return buildPageMetadata({
      title: "Best VPN for City Residents in 2026",
      description: "Localized VPN guidance from Tunnel Report.",
      path: `/vpn/${city}`,
    });
  }

  return buildPageMetadata({
    title: `Best VPN for ${guide.city} in 2026: Local ISP Data & Privacy Analysis`,
    description: `Tunnel Report's ${guide.city} VPN guide covers local ISPs, privacy considerations and the best VPN providers for ${guide.region} residents in 2026.`,
    path: `/vpn/${guide.slug}`,
  });
}

export default async function CityVpnPage({ params }: CityPageProps) {
  const { city } = await params;
  const guide = cityGuideMap[city as keyof typeof cityGuideMap];

  if (!guide) notFound();

  const cityFaqs = [
    {
      question: `What is the best VPN for ${guide.city} residents?`,
      answer: `NordVPN is our top pick for ${guide.city} based on its published specs, including its WireGuard-based NordLynx protocol and US servers. [NordVPN says](https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/) its no-logs policy has passed six independent assurance engagements, most recently by Deloitte Lithuania in late 2025. Surfshark is our budget pick, with unlimited devices on every plan [surfshark.com/pricing](https://surfshark.com/pricing), accessed Oct 17, 2026. ${guide.recommendation}`,
    },
    {
      question: `Does VPN performance vary by neighborhood in ${guide.city}?`,
      answer: guide.neighborhoodNote,
    },
    {
      question: `Which ${guide.city} ISP works best with a VPN?`,
      answer: `Every VPN adds some overhead, so a faster plan leaves more headroom. Run a speed test with the VPN on and off at the times you usually go online.`,
    },
  ];

  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildGeoArticleSchema({
          headline: `Best VPN for ${guide.city} in 2026`,
          description: `Localized VPN analysis for ${guide.city} users.`,
          path: `/vpn/${guide.slug}`,
          city: guide.city,
          region: guide.region,
          datePublished: "2026-04-08",
          dateModified: guide.slug === "austin" || guide.slug === "new-york" ? "2026-10-18" : "2026-04-08",
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "City Guides", path: "/vpn" },
          { name: guide.city, path: `/vpn/${guide.slug}` },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-cyan">City Guide</span>
          <span className="badge badge-violet">{guide.region}</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          Best VPN for {guide.city} in 2026
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          {guide.populationContext} This guide maps local ISP conditions, neighborhood-level
          connectivity differences, and privacy considerations specific to {guide.city} residents
          against our provider test data.
        </p>
        <AuthorByline
          date={guide.slug === "austin" || guide.slug === "new-york" ? "October 18, 2026" : "October 17, 2026"}
        />
      </header>

      <DisclosureBanner />

      {/* ISP speed table */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Local ISP Baseline Speeds in {guide.city}</h2>
        <p className="text-sm text-[#94a3b8]">
          Your ISP plan sets the ceiling, and a VPN can only lower it, so start with your plan&apos;s
          advertised speed. FCC broadband labeling now requires standardized speed
          disclosures<CitationLink source={citationSources.S4} />.
        </p>
        <div className="glass-card overflow-x-auto p-2">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Advertised Speed</th>
              </tr>
            </thead>
            <tbody>
              {guide.ispSpeeds.map((isp) => (
                <tr key={isp.name}>
                  <td className="font-semibold text-white">{isp.name}</td>
                  <td>{isp.advertised}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="divider-glow" />

      {/* Privacy concerns */}
      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Privacy Landscape in {guide.city}
        </h2>
        <p>{guide.privacyConcern}</p>
        <p>
          The regulatory context amplifies these concerns. The FBI IC3&apos;s 2023 report documents
          $12.5 billion in internet-enabled crime losses nationally<CitationLink source={citationSources.S1} />,
          and Freedom House has tracked 14 consecutive years of declining internet
          freedom globally<CitationLink source={citationSources.S3} />. For {guide.city} residents,
          this means the tools you use for everyday browsing carry more security weight than most people
          assume.
        </p>
      </section>

      <hr className="divider-glow" />

      {/* Streaming & local needs */}
      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Streaming, Media, and Local Use Cases
        </h2>
        <p><CitedText text={guide.streamingNeeds} /></p>
      </section>

      <hr className="divider-glow" />

      {/* Neighborhood-level analysis */}
      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Neighborhood-Level Connectivity in {guide.city}
        </h2>
        <p><CitedText text={guide.neighborhoodNote} /></p>
      </section>

      {guide.localColor ? (
        <>
          <hr className="divider-glow" />
          <section className="glass-card p-8">
            <h2 className="text-lg font-bold text-white">Field Notes</h2>
            <p className="mt-2 italic leading-relaxed text-[#94a3b8]">
              &ldquo;{guide.localColor}&rdquo;
            </p>
            <div className="mt-4">
              <AuthorByline />
            </div>
          </section>
        </>
      ) : null}

      <hr className="divider-glow" />

      {/* Recommendation */}
      <section className="overflow-hidden rounded-2xl border border-[#00d4aa]/20 bg-gradient-to-br from-[#0d1221] to-[#111827]">
        <div className="border-b border-[#1e293b] px-6 py-4">
          <span className="badge badge-teal">Recommendation for {guide.city}</span>
        </div>
        <div className="space-y-5 p-8">
          <p className="leading-relaxed text-[#cbd5e1]"><CitedText text={guide.recommendation} /></p>
          <AffiliateCTA href={AFFILIATE_URLS.nordvpn} partner="nordvpn" label="Visit NordVPN" />
        </div>
      </section>

      <AuthorByline />

      <RelatedCards cards={getCitySiblingCards(guide.slug)} />

      <FaqSection faqs={cityFaqs} renderAnswer={(answer) => <CitedText text={answer} />} />

      <SourcesList sources={citySources} />
    </article>
  );
}
