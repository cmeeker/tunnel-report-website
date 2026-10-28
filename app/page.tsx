import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { CitationLink } from "@/components/CitationLink";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { PaidPick } from "@/components/PaidPick";
import { HeroGraphic } from "@/components/HeroGraphic";
import { PlainInternalLinkList } from "@/components/PlainInternalLinkList";
import { SourcesList } from "@/components/SourcesList";
import { comparisonMap } from "@/lib/content/comparisons";
import { providerMap } from "@/lib/content/providers";
import { latestPriceChecks } from "@/lib/content/latest-price-checks";
import { citationSources } from "@/lib/content/facts";
import { homepageComparison } from "@/lib/content/vpn-metrics";
import { PICK_LABELS } from "@/app/best-vpns/page";
import { staffAuthorName } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { affiliateDisclosureAnswer } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "VPN Comparison Guides & 2026 Picks | Tunnel Report",
  description:
    "Tunnel Report publishes VPN comparison guides based on published specs, pricing and third-party reports. We may earn a commission from some links.",
  path: "/",
  type: "website",
});

const homepageFaqs = [
  {
    question: "How does Tunnel Report choose its VPN picks?",
    answer:
      "Our picks are based on published specs, pricing and third-party reports. We did not run our own speed or unblocking tests. We may earn a commission if you sign up through some links on this site.",
  },
  {
    question: "Do you earn money from VPN links?",
    answer: affiliateDisclosureAnswer,
  },
  {
    question: "How often are reviews updated?",
    answer:
      "Major reviews are refreshed quarterly. When a provider changes pricing, ownership structure, or security posture between cycles, we publish interim updates with visible changelog timestamps.",
  },
  {
    question: "What should privacy-focused readers look for first?",
    answer:
      "Kill switch behavior and clear data-retention language. A low price means nothing if the provider cannot demonstrate these fundamentals.",
  },
];

const FEATURED_COMPARE_SLUGS = [
  "nordvpn-vs-purevpn",
  "nordvpn-vs-expressvpn",
  "surfshark-vs-nordvpn",
  "nordvpn-vs-protonvpn",
] as const;

export default function Home() {
  const homepageSourcesNoPricingLeaks = [
    citationSources.S1,
    citationSources.S2,
    citationSources.S3,
    citationSources.S4,
    citationSources.S5,
    citationSources.S6,
    citationSources.S7,
    citationSources.S8,
  ];

  return (
    <div className="space-y-28">
      {/* Hero */}
      <section
        className="hero-gradient -mt-20 flex min-h-[calc(100svh-4rem)] flex-col items-center justify-start px-6 pb-14 pt-24 md:px-10 md:pt-[6.5rem] lg:px-14"
        style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw" }}
      >
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="space-y-5 fade-in-up">
            <div className="badge badge-teal mx-auto">VPN Comparison Guides</div>

            {/* Hero graphic */}
            <div className="relative mx-auto h-36 w-full max-w-2xl sm:h-44 md:h-48">
              <HeroGraphic />
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
              VPN Reviews<br />
              <span className="gradient-text"> Start Reading.</span>
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-[#64748b]">
              VPN coverage based on published specs, pricing and third-party reports, with
              claim-level citations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/best-vpns" className="affiliate-cta">
                See 2026 picks
              </Link>
              <Link
                href="/methodology"
                className="inline-flex min-h-[48px] items-center rounded-xl border border-[#1e293b] px-5 text-sm font-semibold text-[#94a3b8] transition hover:border-[#00d4aa]/30 hover:text-white"
              >
                How We Pick
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1 text-xs text-[#475569]">
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#06b6d4]" />
                Claim-level citations
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#8b5cf6]" />
                Updated April 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      <DisclosureBanner />

      {/* Trust stats */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            value: "$12.5B",
            label: "lost to internet crime in 2023",
            source: citationSources.S1,
          },
          {
            value: "3,205",
            label: "data breaches recorded in 2023",
            source: citationSources.S2,
          },
          {
            value: "14 yrs",
            label: "consecutive decline in internet freedom",
            source: citationSources.S3,
          },
        ].map((stat) => (
          <div key={stat.value} className="glass-card glass-card-hover p-8 text-center fade-in-up delay-100">
            <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
            <p className="mt-2 text-sm text-[#94a3b8]">
              {stat.label}
              <CitationLink source={stat.source} />
            </p>
          </div>
        ))}
      </section>

      <hr className="divider-glow" />

      {/* Featured comparisons */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Popular VPN Comparisons</h2>
          <p className="mt-1 text-sm text-[#94a3b8]">
            Head-to-head breakdowns across privacy, pricing, UX, jurisdiction, and support.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {FEATURED_COMPARE_SLUGS.map((slug) => {
            const comparison = comparisonMap[slug];
            if (!comparison) return null;
            const label = comparison.title.replace(/ 2026:.*/, "");
            return (
              <Link
                key={slug}
                href={`/compare/${slug}`}
                className="glass-card glass-card-hover group p-7 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-lg font-bold text-white transition group-hover:text-[#00d4aa]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
                      {`Comparison of ${providerMap[comparison.leftSlug]?.name ?? "VPN"} and ${providerMap[comparison.rightSlug]?.name ?? "VPN"} based on published specs, pricing and third-party reports.`}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-[#00d4aa] opacity-80 transition group-hover:opacity-100">
                    Read →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <hr className="divider-glow" />

      {/* Comparison table */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">VPN Head-to-Head Comparison</h2>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Entry pricing from each provider&apos;s pricing page, checked October 15, 2026.
              <CitationLink source={citationSources.S5} />
              <CitationLink source={citationSources.S6} />
              <CitationLink source={citationSources.S7} />
              <CitationLink source={citationSources.S8} />
            </p>
          </div>
        </div>
        <div className="glass-card overflow-x-auto p-2">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Privacy Profile</th>
                <th>Price (intro vs renewal)</th>
                <th>Best for</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {homepageComparison.map((vpn, i) => (
                <tr key={vpn.name}>
                  <td className="font-semibold text-white">
                    {i === 0 && <span className="badge badge-teal mr-2 text-[0.65rem]">Our default pick</span>}
                    <Link
                      href={`/reviews/${vpn.slug}`}
                      className="text-white transition hover:text-[#00d4aa]"
                    >
                      {vpn.name}
                    </Link>
                  </td>
                  <td className="max-w-[200px]">{vpn.privacy}</td>
                  <td className="font-semibold text-white">{vpn.pricePerMonth}</td>
                  <td>{PICK_LABELS[vpn.slug] ?? "Alternative pick"}</td>
                  <td>
                    {vpn.isAffiliate ? (
                      <AffiliateCTA href={vpn.href} partner={vpn.partner} label={vpn.ctaLabel ?? "Visit"} />
                    ) : (
                      <Link href={vpn.href} className="affiliate-cta">
                        {vpn.ctaLabel ?? "Read review"}
                      </Link>
                    )}
                    {vpn.paidPick ? <PaidPick pick={vpn.paidPick} className="max-w-[14rem]" /> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#94a3b8]">Prices change often, so check the provider&apos;s site.</p>
      </section>

      <hr className="divider-glow" />

      <PlainInternalLinkList title="Latest price checks" links={latestPriceChecks} />

      <hr className="divider-glow" />

      {/* Latest articles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Latest VPN Analysis</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "VPN Privacy: What Actually Matters in 2026",
              excerpt:
                "Providers publish scope documents; read each provider's own report for what it covered.",
              href: "/reviews/nordvpn",
              image: "/images/article-privacy.svg",
              badge: "Analysis",
            },
            {
              title: "Surfshark Review 2026: Best Budget VPN for Families?",
              excerpt:
                "Unlimited devices and aggressive pricing.",
              href: "/reviews/surfshark",
              image: "/images/article-speed.svg",
              badge: "Review",
            },
            {
              title: "How Local ISP Conditions Change Your VPN Experience",
              excerpt:
                "New FCC labeling requirements give consumers standardized fee data. This guide explains what the labels show for each metro area.",
              href: "/vpn/los-angeles",
              image: "/images/article-city.svg",
              badge: "Field Report",
            },
          ].map((article, i) => (
          <div key={article.title} className={`glass-card glass-card-hover overflow-hidden fade-in-up delay-${(i + 1) * 100 + 100}`}>
              <Image
                src={article.image}
                alt={article.title}
                width={640}
                height={360}
                loading="lazy"
                className="h-auto w-full border-b border-[#1e293b]"
              />
              <div className="space-y-4 p-7">
                <span className="badge badge-cyan text-[0.65rem]">{article.badge}</span>
                <h3 className="text-lg font-bold leading-snug text-white">{article.title}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-[#64748b]">{staffAuthorName}</span>
                  <Link href={article.href} className="text-sm font-semibold text-[#00d4aa] transition hover:text-[#00eabb]">
                    Read &rarr;
                  </Link>
                </div>
            </div>
          </div>
          ))}
        </div>
      </section>

      <hr className="divider-glow" />

      <FaqSection faqs={homepageFaqs} />

      <SourcesList sources={homepageSourcesNoPricingLeaks} />
    </div>
  );
}
