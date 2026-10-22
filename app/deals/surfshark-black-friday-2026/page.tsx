import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
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
  DEAL_DATE_MODIFIED,
  PRICE_CHANGE_LINE,
  blackFridayHub,
  buildDealArticleSchema,
  paidLinks,
  surfsharkBlackFriday,
  surfsharkFaqs,
  vendorSources,
} from "@/lib/content/black-friday-2026";
import { staffAuthorName } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: surfsharkBlackFriday.title,
    description: surfsharkBlackFriday.description,
    path: surfsharkBlackFriday.path,
  }),
  robots: "index,follow",
};

export default function SurfsharkBlackFridayPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildDealArticleSchema({
          headline: surfsharkBlackFriday.h1,
          description: surfsharkBlackFriday.description,
          path: surfsharkBlackFriday.path,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: blackFridayHub.h1, path: blackFridayHub.path },
          { name: surfsharkBlackFriday.h1, path: surfsharkBlackFriday.path },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {surfsharkBlackFriday.h1}
        </h1>
        <p className="text-sm font-semibold text-[#e8ecf4]">
          {staffAuthorName} · Prices as of Oct 17, 2026
        </p>
        <p className="text-sm text-[#94a3b8]">
          Last updated: <time dateTime={DEAL_DATE_MODIFIED}>{DEAL_DATE_MODIFIED}</time>
        </p>
      </header>

      <section className="prose-dark space-y-4">
        <p>
          As of Oct 17, 2026, Surfshark&apos;s pricing page labels Surfshark One (24 months + 3 extra
          months) a &quot;Black Friday deal.&quot; See current pricing. Surfshark does not list the
          renewal amount on that page, so check the renewal price at checkout. Surfshark has not
          published an end date for this deal. {PRICE_CHANGE_LINE}
        </p>
      </section>

      <DisclosureBanner />

      <section className="space-y-4">
        <PriceTable
          headers={["Status", "Plan", "Price", "Renewal"]}
          rows={[
            [
              "Black Friday deal (per Surfshark)",
              "Surfshark One, 24 months + 3 extra months",
              "See current pricing",
              "Check at checkout",
            ],
            [
              "Current price, not a Black Friday deal",
              "Surfshark Starter, 24 months + 3 extra months",
              "See current pricing",
              "Check at checkout",
            ],
          ]}
        />
        <SourceLine href={vendorSources.surfshark} label="surfshark.com/pricing" />
        <PaidVisitLink {...paidLinks.surfshark} />
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Surfshark&apos;s Black Friday 2026 deal at a glance</h2>
        <p>
          The labeled offer is Surfshark One for 24 months + 3 extra months. See current pricing. The
          status label is &quot;Black Friday deal (per Surfshark).&quot; Renewal: check at checkout.
          Surfshark Starter on the same term is listed as a current price, not a Black Friday deal.
          See current pricing.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Surfshark One vs Starter: what the deal includes</h2>
        <p>
          Surfshark&apos;s pricing page lists these components on Surfshark One: VPN, Alternative ID,
          Antivirus, Alert, identity theft coverage, and data removal by Incogni. The pricing page
          also lists a 30-day money-back guarantee.
        </p>
        <p>Identity theft coverage: US residents only, not New York.</p>
        <p>
          Surfshark&apos;s pricing page states &quot;unlimited simultaneous device connections&quot; (
          <PlainOutboundLink href={vendorSources.surfshark}>surfshark.com/pricing</PlainOutboundLink>
          , accessed Oct 17, 2026).
        </p>
        <p>{surfsharkFaqs[3].answer}</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What Surfshark renews at</h2>
        <p>
          {surfsharkFaqs[1].answer} Read the{" "}
          <Link href="/guides/surfshark-renewal-price" className={textLinkClassName}>
            Surfshark renewal price
          </Link>{" "}
          guide and{" "}
          <Link href="/guides/vpn-renewal-pricing-traps" className={textLinkClassName}>
            how VPN renewal pricing works
          </Link>
          .
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">When does the Surfshark deal end?</h2>
        <p>
          Surfshark has not published an end date. {surfsharkFaqs[2].answer} A deal ends when the
          vendor page no longer shows it, or when a published end date passes. This page will then
          say &quot;This Black Friday deal has ended (last seen [date])&quot; or show the current
          price labeled &quot;Current price, not a Black Friday deal.&quot;
        </p>
      </section>

      <FaqSection faqs={surfsharkFaqs} />

      <section className="surface-card p-8">
        <h2 className="text-lg font-bold text-white">Related reading</h2>
        <ul className="mt-3 space-y-2.5 text-sm">
          <li>
            <Link href={blackFridayHub.path} className={textLinkClassName}>
              Black Friday VPN Deals 2026
            </Link>
          </li>
          <li>
            <Link href="/reviews/surfshark" className={textLinkClassName}>
              Surfshark review
            </Link>
          </li>
          <li>
            <Link href="/alternatives/surfshark" className={textLinkClassName}>
              Surfshark alternatives
            </Link>
          </li>
          <li>
            <Link href="/compare/surfshark-vs-nordvpn" className={textLinkClassName}>
              Surfshark vs NordVPN
            </Link>
          </li>
          <li>
            <Link href="/compare/surfshark-vs-protonvpn" className={textLinkClassName}>
              Surfshark vs Proton VPN
            </Link>
          </li>
          <li>
            <Link href="/compare/surfshark-vs-expressvpn" className={textLinkClassName}>
              Surfshark vs ExpressVPN
            </Link>
          </li>
          <li>
            <Link href="/guides/surfshark-renewal-price" className={textLinkClassName}>
              Surfshark renewal price
            </Link>
          </li>
          <li>
            <Link href="/guides/vpn-renewal-pricing-traps" className={textLinkClassName}>
              how VPN renewal pricing works
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
