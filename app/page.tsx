import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { CitationLink } from "@/components/CitationLink";
import { FaqSection } from "@/components/FaqSection";
import { HeroGraphic } from "@/components/HeroGraphic";
import { JsonLd } from "@/components/JsonLd";
import { SourcesList } from "@/components/SourcesList";
import { citationSources, homepageSources } from "@/lib/content/facts";
import { homepageComparison } from "@/lib/content/vpn-metrics";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Find the VPN That Actually Protects You | Tunnel Report",
  description:
    "Tunnel Report publishes independent VPN reviews with real speed benchmarks, cited privacy audits, and editorial analysis from security professionals. No pay-to-rank. No sponsored results.",
  path: "/",
  type: "website",
});

const homepageFaqs = [
  {
    question: "How does Tunnel Report score VPN services?",
    answer:
      "We run multi-session speed benchmarks across standardized routes, evaluate privacy policy language against actual audit disclosures, assess jurisdiction risk, and track pricing transparency over time. Each factor is weighted and applied identically across every provider we test.",
  },
  {
    question: "Do affiliate commissions affect your rankings?",
    answer:
      "No. Editorial scoring is walled off from commercial relationships. We disclose affiliate links on every page where they appear, and commission potential has never changed a ranking position. Our methodology is published on the About page.",
  },
  {
    question: "How often are reviews updated?",
    answer:
      "Major reviews are refreshed quarterly. When a provider changes pricing, ownership structure, or security posture between cycles, we publish interim updates with visible changelog timestamps.",
  },
  {
    question: "Why do your speed numbers differ from what VPN companies advertise?",
    answer:
      "Marketing screenshots typically reflect single-run peaks under ideal conditions. We report median values across multiple sessions, routes, and time windows because that reflects the experience you will actually have at 9pm on a Tuesday.",
  },
  {
    question: "What should privacy-focused readers look for first?",
    answer:
      "Independent audit scope and frequency, transparent incident response history, kill switch reliability, and clear data-retention language. A low price means nothing if the provider cannot demonstrate these fundamentals.",
  },
];

export default function Home() {
  return (
    <div className="space-y-28">
      <JsonLd data={[buildWebsiteSchema(), buildOrganizationSchema()]} />

      {/* Hero */}
      <section className="hero-gradient -mx-6 -mt-14 flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-24 md:-mx-10 md:px-10 lg:-mx-14 lg:px-14">
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="space-y-6 fade-in-up">
            <div className="badge badge-teal mx-auto">Independent VPN Testing Lab · 47 Providers</div>

            {/* Hero graphic */}
            <div className="relative mx-auto h-44 w-full max-w-2xl sm:h-56">
              <HeroGraphic />
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
              Stop Trusting VPN Marketing.
              <span className="gradient-text"> Start Reading the Audits.</span>
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-[#64748b]">
              Independent speed benchmarks, cited privacy audits, and editorial analysis from
              security professionals. No pay-to-rank. No undisclosed sponsorships.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/best-vpns" className="affiliate-cta">
                See 2026 Rankings
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[48px] items-center rounded-xl border border-[#1e293b] px-5 text-sm font-semibold text-[#94a3b8] transition hover:border-[#00d4aa]/30 hover:text-white"
              >
                Our Methodology
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1 text-xs text-[#475569]">
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#00d4aa]" />
                47 providers tested
              </span>
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

      {/* Comparison table */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">VPN Head-to-Head Comparison</h2>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Entry pricing from provider sites at last verification
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
                <th>Speed</th>
                <th>Privacy Profile</th>
                <th>Price/mo</th>
                <th>Score</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {homepageComparison.map((vpn, i) => (
                <tr key={vpn.name}>
                  <td className="font-semibold text-white">
                    {i === 0 && <span className="badge badge-teal mr-2 text-[0.65rem]">Top Pick</span>}
                    {vpn.name}
                  </td>
                  <td>
                    <span className="font-mono text-[#00d4aa]">{vpn.speedMbps}</span> Mbps
                  </td>
                  <td className="max-w-[200px]">{vpn.privacy}</td>
                  <td className="font-semibold text-white">{vpn.pricePerMonth}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{vpn.score.toFixed(1)}</span>
                      <div className="score-bar w-16">
                        <div className="score-bar-fill" style={{ width: `${(vpn.score / 5) * 100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <AffiliateCTA href={vpn.href} partner={vpn.partner} label="Visit" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="divider-glow" />

      {/* Why trust us - Sarah's voice */}
      <section className="grid gap-10 lg:grid-cols-[2fr_1fr] fade-in-up delay-100">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Why Tunnel Report Exists</h2>
          <div className="prose-dark space-y-4">
            <p>
              I spent four years covering broadband policy at a national outlet, and the thing that
              kept gnawing at me was the VPN review ecosystem. Most of the top-ranking pages on
              Google are funded by the companies they claim to evaluate. Readers deserve better.
            </p>
            <p>
              The numbers make the case on their own. The FBI&apos;s IC3 division reported that
              Americans lost <strong>$12.5 billion</strong> to internet-enabled crime in 2023 alone,
              a 22% jump over the year before<CitationLink source={citationSources.S1} />. The
              Identity Theft Resource Center tracked <strong>3,205 data compromises</strong> in that
              same period — a 72% increase over the previous record<CitationLink source={citationSources.S2} />.
            </p>
            <p>
              Globally, Freedom House marked a <strong>14th consecutive year</strong> of declining
              internet freedom<CitationLink source={citationSources.S3} />. When privacy tools are
              this important, the publications reviewing them need to operate at a higher standard
              than affiliate-optimized listicles.
            </p>
            <p>
              That is why Tunnel Report exists. We wall off commercial relationships from editorial
              decisions. We cite our sources at claim level. And we build reviews that a procurement
              team or a security engineer could actually trust.
            </p>
          </div>
          <AuthorByline persona={personas.sarah} showBio />
        </div>
        <aside className="space-y-4 lg:pt-12">
          <div className="glass-card p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b]">
              Editorial Standards
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#94a3b8]">
              <li className="flex gap-2">
                <span className="mt-0.5 text-[#00d4aa]">&#10003;</span>
                Claim-level source citations
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-[#00d4aa]">&#10003;</span>
                Published methodology
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-[#00d4aa]">&#10003;</span>
                Affiliate disclosure on every page
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-[#00d4aa]">&#10003;</span>
                Quarterly review refresh cycle
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-[#00d4aa]">&#10003;</span>
                Timestamped corrections policy
              </li>
            </ul>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs text-[#64748b]">FCC broadband labeling is now required
              at point of sale<CitationLink source={citationSources.S4} />, giving readers
              better baseline ISP data to compare against VPN claims.</p>
          </div>
        </aside>
      </section>

      <hr className="divider-glow" />

      {/* Latest articles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Latest VPN Analysis</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "VPN Privacy Audits: What Actually Matters in 2026",
              excerpt:
                "Not all audits test the same controls. I walked through scope documents from four major providers and found the gap between marketing claims and actual test coverage is often wider than vendors let on.",
              href: "/reviews/nordvpn",
              image: "/images/article-privacy.svg",
              badge: "Analysis",
              persona: personas.marcus,
            },
            {
              title: "Why Median Speed Beats Peak Speed in VPN Testing",
              excerpt:
                "Screenshot-based speed claims are the most misleading metric in this industry. Here is how we design our test methodology to reflect the connection you will actually get during prime time.",
              href: "/compare/nordvpn-vs-purevpn",
              image: "/images/article-speed.svg",
              badge: "Methodology",
              persona: personas.sarah,
            },
            {
              title: "How Local ISP Conditions Change Your VPN Experience",
              excerpt:
                "New FCC labeling requirements finally give consumers standardized latency and fee data. We used that data to map how VPN performance varies by metro area and provider pairing.",
              href: "/vpn/los-angeles",
              image: "/images/article-city.svg",
              badge: "Field Report",
              persona: personas.daniel,
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
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#00d4aa] to-[#06b6d4] text-[0.6rem] font-bold text-[#0a0f1e]">
                      {article.persona.avatar}
                    </div>
                    <span className="text-xs text-[#64748b]">{article.persona.name}</span>
                  </div>
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

      <SourcesList sources={homepageSources} />
    </div>
  );
}
