import type { Metadata } from "next";
import Link from "next/link";

import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About Tunnel Report: Team, Methodology, and Editorial Standards",
  description:
    "Meet the editorial team behind Tunnel Report, understand our VPN testing methodology, and learn how we maintain independence from the products we review.",
  path: "/about",
});

const aboutFaqs = [
  {
    question: "How is Tunnel Report funded?",
    answer:
      "Tunnel Report earns revenue through affiliate commissions when readers purchase VPN services through links on our site. This commercial model is disclosed on every page where affiliate links appear. Affiliate potential does not influence rankings, scores, or editorial conclusions.",
  },
  {
    question: "Can VPN companies pay for better reviews?",
    answer:
      "No. We do not accept payment for review outcomes. Our methodology is applied consistently across all providers regardless of commercial relationship status.",
  },
  {
    question: "How do I report an error in your coverage?",
    answer:
      "Contact our editorial team with the specific claim, the page URL, and a source link if available. We investigate corrections promptly, update the page with visible changelog timestamps, and credit the reporter when appropriate.",
  },
];

const teamMembers = Object.values(personas);

export default function AboutPage() {
  return (
    <article className="space-y-14">
      <JsonLd
        data={buildArticleSchema({
          headline: "About Tunnel Report: Team, Methodology, and Editorial Standards",
          description:
            "Methodology, editorial standards, and corrections policy for Tunnel Report VPN coverage.",
          path: "/about",
          dateModified: "2026-04-08",
        })}
      />

      <header className="space-y-5">
        <span className="badge badge-violet">About</span>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          About Tunnel Report
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          Tunnel Report is an independent VPN review and privacy publication. We exist because
          the overlap between affiliate-funded content and genuinely useful security guidance is
          smaller than it should be, and readers who care about measurable protection deserve a
          publication that operates at a higher standard.
        </p>
        <LastUpdated date={siteConfig.updatedDate} />
      </header>

      <hr className="divider-glow" />

      {/* Team bios */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">The Editorial Team</h2>
        <p className="text-[#94a3b8]">
          Three editors with distinct expertise and editorial voices. Every major piece of coverage
          is assigned to the team member whose background best matches the subject matter.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {teamMembers.map((person) => (
            <div key={person.id} className="glass-card glass-card-hover p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00d4aa] to-[#06b6d4] text-sm font-bold text-[#0a0f1e]">
                  {person.avatar}
                </div>
                <div>
                  <p className="font-bold text-white">{person.name}</p>
                  <p className="text-sm text-[#00d4aa]">{person.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#94a3b8]">{person.shortBio}</p>
              <p className="mt-3 rounded-lg border border-[#1e293b] bg-[#0d1221] px-3 py-2 text-xs italic text-[#64748b]">
                Voice: {person.voiceDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider-glow" />

      {/* Methodology deep-dive */}
      <section className="prose-dark space-y-6">
        <h2 className="text-2xl font-bold text-white">Testing Methodology</h2>

        <div className="glass-card p-7">
          <h3 className="text-lg font-bold text-white">Speed Benchmarking</h3>
          <p>
            We do not run a single speed test and screenshot the result. Every provider is tested across
            a minimum of 12 sessions per route spanning three daily time windows: morning (6-9am EST),
            afternoon (12-3pm EST), and evening peak (7-10pm EST). We report the median, not the peak,
            because the connection you get during prime time is the one that actually matters.
          </p>
          <p>
            Test routes include US East to US West, US East to London, US West to Frankfurt, and the
            same routes in reverse. Baseline ISP conditions are recorded before each session so we can
            isolate VPN overhead from ISP variability. We use WireGuard-based protocols where available,
            with OpenVPN as a secondary benchmark.
          </p>
        </div>

        <div className="glass-card p-7">
          <h3 className="text-lg font-bold text-white">Privacy & Security Analysis</h3>
          <p>
            Privacy evaluation covers four dimensions: <strong>policy language</strong> (what the provider
            commits to in writing), <strong>audit scope</strong> (what independent auditors actually
            tested, not just whether an audit happened), <strong>jurisdiction risk</strong> (data
            retention laws, intelligence-sharing agreements, and compulsion mechanisms), and
            <strong> incident response history</strong> (how the provider handled past security events).
          </p>
          <p>
            We assign higher weight to verifiable actions than marketing claims. A provider that
            completed a narrow-scope audit but responded transparently to a real incident scores higher
            than one that trumpets a broad audit without demonstrable operational security improvement.
          </p>
        </div>

        <div className="glass-card p-7">
          <h3 className="text-lg font-bold text-white">Pricing Transparency</h3>
          <p>
            VPN pricing analysis in most reviews stops at the introductory rate. We track four
            dimensions: <strong>initial promotional price</strong>, <strong>renewal rate</strong> after
            the first term expires, <strong>add-on bundling</strong> (whether essential features require
            paid upgrades), and <strong>refund policy enforcement</strong> (how easy it is to actually
            get your money back within the guarantee window).
          </p>
          <p>
            This approach reveals that several providers with attractive entry pricing become materially
            more expensive in year two. We surface this information explicitly because many readers make
            multi-year commitments without checking the renewal terms.
          </p>
        </div>
      </section>

      <hr className="divider-glow" />

      {/* Editorial independence */}
      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How Editorial Independence Works</h2>
        <p>
          Commercial relationships do not influence editorial output. This is not a platitude — it is
          an operational structure. Review conclusions are drafted by the assigned editor and reviewed
          by at least one other team member before publication. The commercial team does not see review
          content before it goes live, does not have edit access to published pages, and does not
          participate in scoring discussions.
        </p>
        <p>
          If a page includes an affiliate link, the disclosure is visible on-page. We use a consistent
          banner format so readers always know when commercial links are present. Affiliate potential
          does not guarantee positive coverage — and in several cases, providers with high commission
          rates receive lower scores than providers with modest or no affiliate programs.
        </p>
      </section>

      <hr className="divider-glow" />

      {/* Corrections policy */}
      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Corrections Policy</h2>
        <p>
          Accuracy is the foundation of editorial credibility. When we publish inaccurate pricing,
          technical claims, or outdated policy details, we update the page and refresh the timestamp.
          Material corrections include a visible changelog note in the relevant section so readers can
          see what changed, when, and why.
        </p>
        <p>
          We track correction frequency as an internal quality metric. A high correction rate on a
          particular topic signals that our sourcing or verification process for that area needs
          improvement, and we address it systematically rather than treating each correction as an
          isolated event.
        </p>
      </section>

      <hr className="divider-glow" />

      {/* Trust architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Trust Architecture</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Claim-Level Citations",
              description: "Every factual claim links to its primary source with publisher, date, and retrieval timestamp.",
            },
            {
              title: "Visible Timestamps",
              description: "Every page shows its last verification date. Stale content is flagged for review in our editorial queue.",
            },
            {
              title: "Structured Data",
              description: "JSON-LD schema markup on every page enables search engines and LLMs to parse our content accurately.",
            },
            {
              title: "LLM-Accessible Format",
              description: "We publish llms.txt and maintain structured, citation-rich content optimized for AI retrieval systems.",
            },
            {
              title: "Author Attribution",
              description: "Every article is attributed to a specific team member with published credentials and editorial voice.",
            },
            {
              title: "Open Methodology",
              description: "Our testing framework is published in full. Readers can evaluate our process, not just our conclusions.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-7">
              <h3 className="font-bold text-[#00d4aa]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#94a3b8]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider-glow" />

      <section className="surface-card p-6">
        <h2 className="text-lg font-bold text-white">Read Our Latest Analysis</h2>
        <ul className="mt-3 space-y-2.5">
          <li>
            <Link href="/best-vpns" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
              Best VPNs of 2026 — Full Rankings &rarr;
            </Link>
          </li>
          <li>
            <Link href="/reviews/nordvpn" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
              NordVPN Full Review &rarr;
            </Link>
          </li>
          <li>
            <Link href="/vpn/new-york" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
              New York City VPN Guide &rarr;
            </Link>
          </li>
        </ul>
      </section>

      <FaqSection faqs={aboutFaqs} />
    </article>
  );
}
