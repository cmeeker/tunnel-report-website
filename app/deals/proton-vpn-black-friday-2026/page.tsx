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
  NORD_PROTON_CHECKED_LABEL,
  NORD_PROTON_DEAL_DATE,
  PRICE_CHANGE_LINE,
  blackFridayHub,
  buildDealArticleSchema,
  nordBlackFriday,
  protonBlackFriday,
  protonDealFaqs,
  protonPricingLink,
  surfsharkBlackFriday,
  vendorSources,
} from "@/lib/content/black-friday-2026";
import { staffAuthorName } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: protonBlackFriday.title,
    description: protonBlackFriday.description,
    path: protonBlackFriday.path,
  }),
  robots: {
    index: false,
    follow: false,
  },
};

const plans = ["VPN Plus", "Proton Unlimited"] as const;

export default function ProtonVpnBlackFridayPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildDealArticleSchema({
          headline: protonBlackFriday.h1,
          description: protonBlackFriday.description,
          path: protonBlackFriday.path,
          date: NORD_PROTON_DEAL_DATE,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: blackFridayHub.h1, path: blackFridayHub.path },
          { name: protonBlackFriday.h1, path: protonBlackFriday.path },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {protonBlackFriday.h1}
        </h1>
        <p className="text-sm font-semibold text-[#e8ecf4]">
          {staffAuthorName} · Checked {NORD_PROTON_CHECKED_LABEL}
        </p>
        <p className="text-sm text-[#94a3b8]">
          Last updated: <time dateTime={NORD_PROTON_DEAL_DATE}>{NORD_PROTON_DEAL_DATE}</time>
        </p>
      </header>

      <section className="prose-dark space-y-4">
        <p>
          Proton VPN&apos;s Black Friday 2026 offer is shown on Proton&apos;s pricing page; see
          current pricing there, and check the renewal line before you buy. If Proton hasn&apos;t
          published its Black Friday offer yet, this page says so and shows the current plan.{" "}
          {PRICE_CHANGE_LINE}
        </p>
      </section>

      <DisclosureBanner />

      <section className="space-y-4">
        <PriceTable
          headers={["Status", "Plan", "Price", "Renewal"]}
          rows={plans.map((plan) => [
            "Current price, not a Black Friday deal",
            plan,
            "See current pricing",
            "See current pricing",
          ])}
        />
        <SourceLine
          href={vendorSources.protonvpn}
          label="protonvpn.com/pricing"
          accessed={NORD_PROTON_CHECKED_LABEL}
        />
        <PaidVisitLink {...protonPricingLink} />
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Proton VPN&apos;s Black Friday 2026 deal at a glance</h2>
        <p>
          Plans covered: VPN Plus and Proton Unlimited. Status: Current price, not a Black Friday
          deal. Proton explains the plans on{" "}
          <PlainOutboundLink href={vendorSources.protonPlans}>
            protonvpn.com/support/proton-vpn-plans
          </PlainOutboundLink>
          . See current pricing.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Is Proton VPN&apos;s no-logs policy audited?</h2>
        <p>{protonDealFaqs[3].answer}</p>
        <p>
          <PlainOutboundLink href={vendorSources.protonNoLogsAudit}>
            protonvpn.com/blog/no-logs-audit
          </PlainOutboundLink>{" "}
          <PlainOutboundLink href={vendorSources.protonNoLogsPolicy}>
            protonvpn.com/features/no-logs-policy
          </PlainOutboundLink>
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What Proton VPN renews at</h2>
        <p>Renewal is different from the intro price; see current pricing.</p>
        <p>{protonDealFaqs[2].answer}</p>
        <p>
          <Link href="/guides/protonvpn-renewal-price" className={textLinkClassName}>
            Proton VPN renewal price
          </Link>{" "}
          <Link href="/guides/vpn-renewal-pricing-traps" className={textLinkClassName}>
            how VPN renewal pricing works
          </Link>
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">When does the Proton VPN deal end?</h2>
        <p>
          Proton has not published an end date. If Proton has not published a Black Friday offer yet,
          the table shows the current plan labeled &quot;Current price, not a Black Friday deal.&quot;
          A deal ends when the vendor page no longer shows it, or when a published end date passes.
          This page will then say &quot;This Black Friday deal has ended (last seen [date])&quot; or
          show the current price labeled &quot;Current price, not a Black Friday deal.&quot;
        </p>
      </section>

      <FaqSection faqs={protonDealFaqs} />

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
            <Link href={nordBlackFriday.path} className={textLinkClassName}>
              NordVPN Black Friday 2026 deal
            </Link>
          </li>
          <li>
            <Link href="/best-vpns" className={textLinkClassName}>
              Best VPNs
            </Link>
          </li>
          <li>
            <Link href="/reviews/protonvpn" className={textLinkClassName}>
              Proton VPN review
            </Link>
          </li>
          <li>
            <Link href="/alternatives/protonvpn" className={textLinkClassName}>
              Proton VPN alternatives
            </Link>
          </li>
          <li>
            <Link href="/compare/nordvpn-vs-protonvpn" className={textLinkClassName}>
              NordVPN vs Proton VPN
            </Link>
          </li>
          <li>
            <Link href="/compare/surfshark-vs-protonvpn" className={textLinkClassName}>
              Surfshark vs Proton VPN
            </Link>
          </li>
          <li>
            <Link href="/compare/expressvpn-vs-protonvpn" className={textLinkClassName}>
              ExpressVPN vs Proton VPN
            </Link>
          </li>
          <li>
            <Link href="/compare/mullvad-vs-protonvpn" className={textLinkClassName}>
              Mullvad vs Proton VPN
            </Link>
          </li>
          <li>
            <Link href="/guides/protonvpn-renewal-price" className={textLinkClassName}>
              Proton VPN renewal price
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
