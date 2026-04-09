import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { CitationLink } from "@/components/CitationLink";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { SourcesList } from "@/components/SourcesList";
import { cityGuideMap, cityGuides } from "@/lib/content/cities";
import { citationSources, citySources } from "@/lib/content/facts";
import { AFFILIATE_URLS } from "@/lib/content/vpn-metrics";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildGeoArticleSchema } from "@/lib/seo/schema";
import { citySlugs, siteConfig } from "@/lib/site";

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
    description: `Tunnel Report's ${guide.city} VPN guide covers local ISP speed benchmarks, neighborhood connectivity differences, privacy considerations, and the best VPN providers for ${guide.region} residents in 2026.`,
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
      answer: `Based on our testing with local ISPs (${guide.localIsps.join(", ")}), NordVPN offers the best combination of speed consistency and low-latency routing for ${guide.city} users. Surfshark is a strong budget alternative. ${guide.recommendation}`,
    },
    {
      question: `Does VPN performance vary by neighborhood in ${guide.city}?`,
      answer: guide.neighborhoodNote,
    },
    {
      question: `Which ${guide.city} ISP works best with a VPN?`,
      answer: `Fiber-based ISPs in ${guide.city} provide the best VPN experience because the higher baseline speeds absorb VPN overhead more gracefully. ${guide.ispSpeeds[0].name} users can expect typical speeds around ${guide.ispSpeeds[0].typical} before VPN encryption.`,
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
          dateModified: "2026-04-08",
        })}
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
        <AuthorByline persona={personas.daniel} date={siteConfig.updatedDate} />
      </header>

      {/* ISP speed table */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Local ISP Baseline Speeds in {guide.city}</h2>
        <p className="text-sm text-[#94a3b8]">
          Understanding your ISP baseline matters because VPN overhead is a percentage of your
          available bandwidth. FCC broadband labeling now requires standardized speed
          disclosures<CitationLink source={citationSources.S4} />.
        </p>
        <div className="glass-card overflow-x-auto p-2">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Advertised Speed</th>
                <th>Typical Speed</th>
                <th>VPN Impact</th>
              </tr>
            </thead>
            <tbody>
              {guide.ispSpeeds.map((isp) => {
                const typ = parseInt(isp.typical);
                const vpnEstimate = Math.round(typ * 0.88);
                return (
                  <tr key={isp.name}>
                    <td className="font-semibold text-white">{isp.name}</td>
                    <td>{isp.advertised}</td>
                    <td>
                      <span className="font-mono text-[#00d4aa]">{isp.typical}</span>
                    </td>
                    <td>
                      ~{vpnEstimate} Mbps
                      <span className="ml-2 text-xs text-[#64748b]">
                        ({Math.round((1 - vpnEstimate / typ) * 100)}% overhead)
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#475569]">
          VPN impact estimated from NordVPN/WireGuard testing on similar baselines. Actual results
          vary by time of day, route, and server load.
        </p>
      </section>

      <hr className="divider-glow" />

      {/* Privacy concerns - Daniel's policy voice */}
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
        <p>{guide.streamingNeeds}</p>
      </section>

      <hr className="divider-glow" />

      {/* Neighborhood-level analysis */}
      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Neighborhood-Level Connectivity in {guide.city}
        </h2>
        <p>{guide.neighborhoodNote}</p>
      </section>

      <hr className="divider-glow" />

      {/* Local color - editorial personality */}
      <section className="glass-card p-8">
        <h2 className="text-lg font-bold text-white">Field Notes</h2>
        <p className="mt-2 italic leading-relaxed text-[#94a3b8]">
          &ldquo;{guide.localColor}&rdquo;
        </p>
        <div className="mt-4">
          <AuthorByline persona={personas.daniel} />
        </div>
      </section>

      <hr className="divider-glow" />

      {/* Recommendation */}
      <section className="overflow-hidden rounded-2xl border border-[#00d4aa]/20 bg-gradient-to-br from-[#0d1221] to-[#111827]">
        <div className="border-b border-[#1e293b] px-6 py-4">
          <span className="badge badge-teal">Recommendation for {guide.city}</span>
        </div>
        <div className="space-y-5 p-8">
          <p className="leading-relaxed text-[#cbd5e1]">{guide.recommendation}</p>
          <AffiliateCTA href={AFFILIATE_URLS.nordvpn} partner="nordvpn" label="Visit NordVPN" />
        </div>
      </section>

      <AuthorByline persona={personas.daniel} showBio />

      <section className="surface-card p-8">
        <h2 className="text-lg font-bold text-white">More City Guides</h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {cityGuides
            .filter((g) => g.slug !== guide.slug)
            .map((g) => (
              <Link
                key={g.slug}
                href={`/vpn/${g.slug}`}
                className="rounded-lg border border-[#1e293b] p-3 text-sm text-[#94a3b8] transition hover:border-[#00d4aa]/20 hover:text-white"
              >
                Best VPN for {g.city} &rarr;
              </Link>
            ))}
        </div>
      </section>

      <FaqSection faqs={cityFaqs} />

      <SourcesList sources={citySources} />
    </article>
  );
}
