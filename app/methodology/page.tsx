import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { LastUpdated } from "@/components/LastUpdated";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Tunnel Report Methodology: How We Test and Score VPNs",
  description:
    "Tunnel Report's methodology explains how we score VPN services across speed benchmarking, audit review, jurisdiction risk, and pricing transparency — with editorial independence from affiliate commissions.",
  path: "/methodology",
});

const methodologyFaqs = [
  {
    question: "Do affiliate commissions affect Tunnel Report rankings?",
    answer:
      "No. Editorial scoring is walled off from commercial relationships. We disclose affiliate links on every page where they appear, and commission potential has never changed a ranking position.",
  },
  {
    question: "Why do you report median speeds instead of peak?",
    answer:
      "Because peak screenshots do not represent real-world performance. We run multi-session benchmarks across multiple routes and time windows, then report the median so readers understand the speed floor they can actually expect during prime time.",
  },
  {
    question: "What matters more: a privacy policy or an audit?",
    answer:
      "Both matter, but we weight verifiable disclosures higher than marketing claims. We read policy language, then cross-check it against the scope and findings of independent audits and the provider's real incident-response behavior.",
  },
];

export default function MethodologyPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: "Tunnel Report Methodology: How We Test and Score VPNs",
          description:
            "Methodology behind Tunnel Report VPN rankings, including scoring, speed benchmarking, audit review, jurisdiction analysis, and pricing transparency.",
          path: "/methodology",
          dateModified: "2026-04-08",
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Methodology", path: "/methodology" },
        ]}
      />

      <header className="space-y-5">
        <span className="badge badge-violet">Methodology</span>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          How Tunnel Report Tests and Scores VPNs
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          Tunnel Report is an independent VPN testing lab and editorial publication. Our rankings
          are built from repeatable benchmarks, audit and policy analysis, jurisdiction risk review,
          and long-term pricing transparency — applied consistently across every provider we cover.
        </p>
        <LastUpdated date={siteConfig.updatedDate} />
      </header>

      <hr className="divider-glow" />

      <section className="prose-dark space-y-6">
        <h2 className="text-2xl font-bold text-white">How Scoring Works</h2>
        <p>
          Every provider receives a composite score on a 5-point scale. The score is a weighted
          roll-up of multiple categories. We do not publish scores based on affiliate relationships,
          and we do not accept payment in exchange for review outcomes.
        </p>
        <div className="glass-card p-7">
          <h3 className="text-lg font-bold text-white">The categories we score</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#94a3b8]">
            <li>
              <strong className="text-white">Speed</strong> — median throughput and consistency across
              standardized routes and time windows.
            </li>
            <li>
              <strong className="text-white">Privacy & audits</strong> — policy language checked
              against independent audit scope and findings.
            </li>
            <li>
              <strong className="text-white">Jurisdiction</strong> — retention laws, compulsion
              mechanisms, and intelligence-sharing risk.
            </li>
            <li>
              <strong className="text-white">Pricing transparency</strong> — renewal pricing, add-on
              bundling, and refund policy enforcement.
            </li>
            <li>
              <strong className="text-white">App reliability & UX</strong> — kill switch behavior,
              reconnect stability, and configuration clarity.
            </li>
            <li>
              <strong className="text-white">Support & accountability</strong> — incident disclosure,
              documentation quality, and responsiveness when issues surface.
            </li>
          </ul>
        </div>
        <p>
          You will see these categories reflected in our head-to-head comparisons, use-case guides,
          and provider reviews. When a provider changes materially — pricing, ownership, audit posture,
          or app behavior — we update coverage and publish visible verification timestamps.
        </p>
      </section>

      <hr className="divider-glow" />

      <section className="prose-dark space-y-6">
        <h2 className="text-2xl font-bold text-white">Speed Benchmarking</h2>
        <div className="glass-card p-7">
          <p>
            We do not run a single speed test and screenshot the result. Every provider is tested
            across a minimum of 12 sessions per route spanning three daily time windows: morning (6-9am
            EST), afternoon (12-3pm EST), and evening peak (7-10pm EST). We report the median, not the
            peak, because the connection you get during prime time is the one that actually matters.
          </p>
          <p>
            Test routes include US East to US West, US East to London, US West to Frankfurt, and the
            same routes in reverse. Baseline ISP conditions are recorded before each session so we can
            isolate VPN overhead from ISP variability. We use WireGuard-based protocols where
            available, with OpenVPN as a secondary benchmark.
          </p>
        </div>
      </section>

      <hr className="divider-glow" />

      <section className="prose-dark space-y-6">
        <h2 className="text-2xl font-bold text-white">Audit Review & Privacy Verification</h2>
        <div className="glass-card p-7">
          <p>
            Privacy evaluation is evidence-driven. We compare what a provider claims in policy
            language against what independent auditors actually tested. Audit scope matters: a narrow
            engagement can still be useful, but it should not be marketed as blanket validation.
          </p>
          <p>
            We also evaluate incident-response history. Providers that disclose issues promptly, ship
            fixes, and communicate operational changes earn more trust than providers that rely on
            marketing language alone.
          </p>
        </div>
      </section>

      <hr className="divider-glow" />

      <section className="prose-dark space-y-6">
        <h2 className="text-2xl font-bold text-white">Jurisdiction Analysis</h2>
        <div className="glass-card p-7">
          <p>
            Jurisdiction is not a magic checkbox, but it does shape what governments can compel and
            what legal obligations a provider might face. We map providers to their operating entities
            and evaluate retention laws, intelligence-sharing agreements, and compulsion mechanisms as
            part of privacy scoring.
          </p>
          <p>
            When a provider&apos;s ownership structure or legal domicile changes, we treat it as a
            material update and re-review the privacy profile.
          </p>
        </div>
      </section>

      <hr className="divider-glow" />

      <section className="prose-dark space-y-6">
        <h2 className="text-2xl font-bold text-white">Pricing Transparency</h2>
        <div className="glass-card p-7">
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

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Editorial Independence & Affiliate Disclosure</h2>
        <p>
          Tunnel Report earns revenue through affiliate commissions when readers purchase VPN services
          through links on our site. This commercial model is disclosed on every page where affiliate
          links appear. Affiliate potential does not influence rankings, scores, or editorial
          conclusions.
        </p>
        <p>
          Commercial relationships do not influence editorial output. Review conclusions are drafted
          by the assigned editor and reviewed by at least one other team member before publication.
          The commercial team does not see review content before it goes live and does not participate
          in scoring discussions.
        </p>
      </section>

      <hr className="divider-glow" />

      <section className="surface-card p-6">
        <h2 className="text-lg font-bold text-white">Where to See the Methodology in Action</h2>
        <ul className="mt-3 space-y-2.5">
          <li>
            <Link href="/best-vpns" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
              Best VPNs of 2026 — Full Rankings &rarr;
            </Link>
          </li>
          <li>
            <Link href="/compare/nordvpn-vs-purevpn" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
              Category-by-category comparison example &rarr;
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
              About Tunnel Report — team, standards, and corrections policy &rarr;
            </Link>
          </li>
        </ul>
      </section>

      <FaqSection faqs={methodologyFaqs} />
    </article>
  );
}

