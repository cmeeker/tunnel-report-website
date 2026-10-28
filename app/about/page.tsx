import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { LastUpdated } from "@/components/LastUpdated";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/schema";
import { affiliateDisclosureAnswer } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About Tunnel Report: Methodology and Editorial Standards",
  description:
    "Methodology, editorial standards, and corrections policy for Tunnel Report VPN coverage.",
  path: "/about",
});

const aboutFaqs = [
  {
    question: "How is Tunnel Report funded?",
    answer:
      "Tunnel Report earns revenue through affiliate commissions when readers purchase VPN services through links on our site. This commercial model is disclosed on pages where affiliate links appear. We may earn a commission if you sign up through some links on this site.",
  },
  {
    question: "Do you earn money from VPN links?",
    answer: affiliateDisclosureAnswer,
  },
  {
    question: "How do I report an error in your coverage?",
    answer:
      "Contact our editorial team with the specific claim, the page URL, and a source link if available. We investigate corrections promptly, update the page with visible changelog timestamps, and credit the reporter when appropriate.",
  },
];

export default function AboutPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: "About Tunnel Report: Methodology and Editorial Standards",
          description:
            "Methodology, editorial standards, and corrections policy for Tunnel Report VPN coverage.",
          path: "/about",
          datePublished: "2026-04-08",
          dateModified: "2026-10-18",
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <header className="space-y-5">
        <span className="badge badge-violet">About</span>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          About Tunnel Report
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          Tunnel Report is a VPN comparison and privacy publication based on published specs, pricing and third-party reports. We exist because
          the overlap between affiliate-funded content and useful security guidance is
          smaller than it should be, and readers who care about measurable protection deserve a
          publication.
        </p>
        <LastUpdated date="October 18, 2026" />
      </header>

      <hr className="divider-glow" />

      {/* Methodology deep-dive */}
      <section id="methodology" className="prose-dark space-y-6 scroll-mt-28">
        <h2 className="text-2xl font-bold text-white">Methodology</h2>

        <div className="glass-card p-7">
          <h3 className="text-lg font-bold text-white">Privacy & Security Analysis</h3>
          <p>
            Privacy evaluation covers three dimensions: <strong>policy language</strong> (what the provider
            commits to in writing), <strong>jurisdiction risk</strong> (data
            retention laws, intelligence-sharing agreements, and compulsion mechanisms), and
            <strong> incident response history</strong> (how the provider handled past security events).
          </p>
        </div>

        <div className="glass-card p-7">
          <h3 className="text-lg font-bold text-white">How we use pricing information</h3>
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
      <section id="editorial" className="prose-dark space-y-4 scroll-mt-28">
        <p>
          If a page includes an affiliate link, the disclosure is visible on-page. We use a
          banner format so readers always know when commercial links are present.
        </p>
        <p id="disclosure" className="scroll-mt-28">
          We may earn a commission if you sign up through some links on this site.
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
        <h2 className="text-2xl font-bold text-white">Architecture</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Claim-Level Citations",
              description: "Every factual claim links to its primary source with publisher, date, and retrieval timestamp.",
            },
            {
              title: "Visible Timestamps",
              description: "Pages show a last-updated date.",
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
              description:
                "Articles are published under the Tunnel Report Staff byline and are based on published specs, pricing and third-party reports.",
            },
            {
              title: "Open Methodology",
              description: "How we compare VPNs is published in full. Readers can evaluate our process, not just our conclusions.",
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
              Best VPNs of 2026 — Full comparison &rarr;
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
