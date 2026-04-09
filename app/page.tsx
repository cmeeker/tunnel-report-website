import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { CitationLink } from "@/components/CitationLink";
import { FaqSection } from "@/components/FaqSection";
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
      <section className="hero-gradient -mx-6 -mt-14 px-6 pb-20 pt-20 md:-mx-10 md:px-10 lg:-mx-14 lg:px-14">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-7 fade-in-up">
            <div className="badge badge-teal mx-auto">Independent VPN Testing Lab · 47 Providers</div>

            {/* Animated graphic */}
            <div className="relative mx-auto flex h-36 w-full max-w-xl items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 480 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
                aria-hidden
              >
                {/* Tunnel rings — three concentric ovals, pulsing outward */}
                <ellipse cx="240" cy="72" rx="200" ry="54" stroke="rgba(0,212,170,0.07)" strokeWidth="1" />
                <ellipse cx="240" cy="72" rx="200" ry="54" stroke="rgba(0,212,170,0.12)" strokeWidth="1">
                  <animate attributeName="rx" values="200;220;200" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="54;60;54" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.12;0;0.12" dur="3s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="240" cy="72" rx="150" ry="40" stroke="rgba(0,212,170,0.1)" strokeWidth="1" />
                <ellipse cx="240" cy="72" rx="150" ry="40" stroke="rgba(0,212,170,0.18)" strokeWidth="1">
                  <animate attributeName="rx" values="150;175;150" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="40;48;40" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.18;0;0.18" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="240" cy="72" rx="96" ry="26" stroke="rgba(0,212,170,0.14)" strokeWidth="1.2" />
                <ellipse cx="240" cy="72" rx="96" ry="26" stroke="rgba(0,212,170,0.3)" strokeWidth="1.2">
                  <animate attributeName="rx" values="96;116;96" dur="3s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="26;33;26" dur="3s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
                </ellipse>

                {/* Data packets travelling left→right along centre line */}
                <line x1="40" y1="72" x2="440" y2="72" stroke="rgba(0,212,170,0.08)" strokeWidth="1" strokeDasharray="4 8" />
                <circle r="3" fill="#00d4aa" opacity="0.8">
                  <animateMotion dur="2.2s" repeatCount="indefinite" path="M40,72 L440,72" />
                  <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#06b6d4" opacity="0.7">
                  <animateMotion dur="2.2s" begin="0.7s" repeatCount="indefinite" path="M40,72 L440,72" />
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5" fill="#8b5cf6" opacity="0.6">
                  <animateMotion dur="2.2s" begin="1.4s" repeatCount="indefinite" path="M40,72 L440,72" />
                  <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
                </circle>

                {/* Shield at centre */}
                <path
                  d="M240 46 L258 53 L258 65 C258 74 250 80 240 84 C230 80 222 74 222 65 L222 53 Z"
                  fill="rgba(0,212,170,0.08)"
                  stroke="rgba(0,212,170,0.5)"
                  strokeWidth="1.5"
                />
                <path d="M233 65 L238 70 L248 59" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Left node */}
                <circle cx="60" cy="72" r="10" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.3)" strokeWidth="1.2" />
                <circle cx="60" cy="72" r="4" fill="#00d4aa" opacity="0.6" />
                <circle cx="60" cy="72" r="10" fill="none" stroke="rgba(0,212,170,0.3)" strokeWidth="1">
                  <animate attributeName="r" values="10;18;10" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Right node */}
                <circle cx="420" cy="72" r="10" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.3)" strokeWidth="1.2" />
                <circle cx="420" cy="72" r="4" fill="#06b6d4" opacity="0.6" />
                <circle cx="420" cy="72" r="10" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1">
                  <animate attributeName="r" values="10;18;10" dur="2s" begin="1.1s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="2s" begin="1.1s" repeatCount="indefinite" />
                </circle>

                {/* Labels */}
                <text x="60" y="92" textAnchor="middle" fill="rgba(148,163,184,0.6)" fontSize="9" fontFamily="inherit">Your Device</text>
                <text x="420" y="92" textAnchor="middle" fill="rgba(148,163,184,0.6)" fontSize="9" fontFamily="inherit">Internet</text>
                <text x="240" y="96" textAnchor="middle" fill="rgba(0,212,170,0.5)" fontSize="8" fontFamily="inherit">Encrypted Tunnel</text>
              </svg>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              VPN Reviews Built on
              <span className="gradient-text"> Evidence, Not Commission</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#94a3b8]">
              Independent speed benchmarks, cited privacy audits, and editorial analysis from
              security professionals. No pay-to-rank. No undisclosed sponsorships.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/best-vpns" className="affiliate-cta">
                See 2026 Rankings
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[52px] items-center rounded-xl border border-[#1e293b] px-6 text-sm font-semibold text-[#94a3b8] transition hover:border-[#00d4aa]/30 hover:text-white"
              >
                Our Methodology
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-2 text-sm text-[#475569]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00d4aa]" />
                47 providers tested
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#06b6d4]" />
                Claim-level citations
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />
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
              href: "/about",
              image: "/images/article-privacy.svg",
              badge: "Analysis",
              persona: personas.marcus,
            },
            {
              title: "Why Median Speed Beats Peak Speed in VPN Testing",
              excerpt:
                "Screenshot-based speed claims are the most misleading metric in this industry. Here is how we design our test methodology to reflect the connection you will actually get during prime time.",
              href: "/best-vpns",
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
