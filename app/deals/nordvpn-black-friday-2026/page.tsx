import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedCards } from "@/components/RelatedCards";
import {
  PaidVisitLink,
  PlainOutboundLink,
  PriceTable,
  SourceLine,
  textLinkClassName,
} from "@/components/deals/DealPriceTable";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import {
  BLACK_FRIDAY_PAGES_UPDATED,
  NORD_PROTON_DEAL_DATE,
  PRICE_CHANGE_LINE,
  blackFridayHub,
  buildDealArticleSchema,
  nordBlackFriday,
  nordDealFaqs,
  paidLinks,
  surfsharkBlackFriday,
  vendorSources,
} from "@/lib/content/black-friday-2026";
import { staffAuthorName } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { relatedHubCard } from "@/lib/seo/related-cards";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: nordBlackFriday.title,
    description: nordBlackFriday.description,
    path: nordBlackFriday.path,
  }),
  robots: "index,follow",
};

const plans = ["Basic", "Complete", "Prime"] as const;

function renderNordDealAnswer(answer: string): ReactNode {
  const refundUrl = vendorSources.nordRefund;
  if (!answer.includes(refundUrl)) return answer;
  const [before, after] = answer.split(refundUrl);
  return (
    <>
      {before}
      <PlainOutboundLink href={refundUrl}>{refundUrl}</PlainOutboundLink>
      {after}
    </>
  );
}

export default function NordvpnBlackFridayPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={{
          ...buildDealArticleSchema({
            headline: nordBlackFriday.h1,
            description: nordBlackFriday.description,
            path: nordBlackFriday.path,
            date: NORD_PROTON_DEAL_DATE,
          }),
          dateModified: BLACK_FRIDAY_PAGES_UPDATED,
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Deals", path: "/deals" },
          { name: nordBlackFriday.h1, path: nordBlackFriday.path },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {nordBlackFriday.h1}
        </h1>
        <p className="text-sm font-semibold text-[#e8ecf4]">
          {staffAuthorName}
        </p>
        <p className="text-sm text-[#94a3b8]">
          Last updated: <time dateTime={BLACK_FRIDAY_PAGES_UPDATED}>{BLACK_FRIDAY_PAGES_UPDATED}</time>
        </p>
      </header>

      <section className="prose-dark space-y-4">
        <p>
          NordVPN&apos;s Black Friday 2026 offer is listed on NordVPN&apos;s own Black Friday and
          pricing pages. Check NordVPN&apos;s page for current pricing. {PRICE_CHANGE_LINE}
        </p>
      </section>

      <DisclosureBanner />

      <section className="space-y-4">
        <PriceTable
          headers={["Status", "Plan", "Price", "Renewal"]}
          rows={plans.map((plan) => [
            "Black Friday deal (per NordVPN)",
            plan,
            "See current pricing",
            "See current pricing",
          ])}
        />
        <SourceLine
          href={vendorSources.nordvpn}
          label="nordvpn.com/pricing/"
          accessed=""
        />
        <PaidVisitLink {...paidLinks.nordvpn} />
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">NordVPN&apos;s Black Friday 2026 deal at a glance</h2>
        <p>
          Plans covered: Basic, Complete, and Prime. NordVPN publishes Black Friday information on{" "}
          <PlainOutboundLink href={vendorSources.nordBlackFriday}>nordvpn.com/black-friday/</PlainOutboundLink>
          . Check NordVPN&apos;s page for current pricing.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Is NordVPN&apos;s no-logs policy audited?</h2>
        <p>{nordDealFaqs[4].answer}</p>
        <p>
          Source:{" "}
          <PlainOutboundLink href={vendorSources.nordNoLogs}>
            nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/
          </PlainOutboundLink>
        </p>
        <p>
          <Link href="/reviews/nordvpn" className={textLinkClassName}>
            NordVPN review
          </Link>
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What NordVPN renews at</h2>
        <p>
          Renewal is different from the intro price. Check NordVPN&apos;s page for current pricing
          on{" "}
          <PlainOutboundLink href={vendorSources.nordvpn}>nordvpn.com/pricing/</PlainOutboundLink>.
        </p>
        <p>{nordDealFaqs[2].answer}</p>
        <p>
          <Link href="/guides/vpn-renewal-pricing-traps" className={textLinkClassName}>
            how VPN renewal pricing works
          </Link>
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">When does the NordVPN deal end?</h2>
        <p>{nordDealFaqs[5].answer}</p>
      </section>

      <FaqSection faqs={nordDealFaqs} renderAnswer={renderNordDealAnswer} />

      <section className="surface-card p-8">
        <h2 className="text-lg font-bold text-white">Related reading</h2>
        <ul className="mt-3 space-y-2.5 text-sm">
          <li>
            <Link href={blackFridayHub.path} className={textLinkClassName}>
              Black Friday VPN Deals 2026
            </Link>
          </li>
          <li>
            <Link href={surfsharkBlackFriday.path} className={textLinkClassName}>
              Surfshark Black Friday 2026 deal
            </Link>
          </li>
          <li>
            <Link href="/best-vpns" className={textLinkClassName}>
              Best VPNs
            </Link>
          </li>
          <li>
            <Link href="/reviews/nordvpn" className={textLinkClassName}>
              NordVPN review
            </Link>
          </li>
          <li>
            <Link href="/alternatives/nordvpn" className={textLinkClassName}>
              NordVPN alternatives
            </Link>
          </li>
          <li>
            <Link href="/compare/nordvpn-vs-protonvpn" className={textLinkClassName}>
              NordVPN vs Proton VPN
            </Link>
          </li>
          <li>
            <Link href="/compare/surfshark-vs-nordvpn" className={textLinkClassName}>
              Surfshark vs NordVPN
            </Link>
          </li>
          <li>
            <Link href="/compare/nordvpn-vs-expressvpn" className={textLinkClassName}>
              NordVPN vs ExpressVPN
            </Link>
          </li>
          <li>
            <Link href="/guides/vpn-renewal-pricing-traps" className={textLinkClassName}>
              how VPN renewal pricing works
            </Link>
          </li>
        </ul>
      </section>

      <RelatedCards cards={[relatedHubCard("/deals")]} />
    </article>
  );
}
