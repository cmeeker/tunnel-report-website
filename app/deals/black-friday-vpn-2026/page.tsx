import type { Metadata } from "next";
import Link from "next/link";

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
  PRICE_CHANGE_LINE,
  blackFridayHub,
  buildDealArticleSchema,
  hidemeFaqs,
  hubPageFaqs,
  nordFaqs,
  paidLinks,
  protonFaqs,
  nordBlackFriday,
  protonPricingLink,
  surfsharkBlackFriday,
  vendorSources,
} from "@/lib/content/black-friday-2026";
import { staffAuthorName } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { relatedHubCard } from "@/lib/seo/related-cards";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: blackFridayHub.title,
    description: blackFridayHub.description,
    path: blackFridayHub.path,
  }),
  robots: "index,follow",
};

const planHeaders = ["Status", "Plan", "Price", "Renewal"];

export default function BlackFridayVpnHubPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={{
          ...buildDealArticleSchema({
            headline: blackFridayHub.h1,
            description: blackFridayHub.description,
            path: blackFridayHub.path,
          }),
          dateModified: BLACK_FRIDAY_PAGES_UPDATED,
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Deals", path: "/deals" },
          { name: blackFridayHub.h1, path: blackFridayHub.path },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {blackFridayHub.h1}
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
          Surfshark&apos;s pricing page labels Surfshark One (24 months + 3 extra months) a
          &quot;Black Friday deal.&quot; Check Surfshark&apos;s page for current pricing. Renewal:
          check at checkout. Check each provider&apos;s page for current pricing.
        </p>
        <p>{PRICE_CHANGE_LINE}</p>
      </section>

      <DisclosureBanner />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Black Friday VPN offers at a glance
        </h2>
        <PriceTable
          caption="VPN Black Friday offers. Check each provider's page for current pricing. Source: each provider's own pricing page."
          headers={["Provider", "Status", "Plan and length", "Price", "Renewal", "Source", "Link"]}
          rows={[
            [
              "Surfshark",
              "Black Friday deal (per Surfshark)",
              "Surfshark One, 24 mo + 3 mo",
              "See current pricing",
              "Check at checkout",
              <PlainOutboundLink key="ss-src" href={vendorSources.surfshark}>
                surfshark.com/pricing
              </PlainOutboundLink>,
              <PaidVisitLink key="ss-cta" {...paidLinks.surfshark} />,
            ],
            [
              "NordVPN",
              "Black Friday deal (per NordVPN)",
              "Basic, 2-year + 3 mo",
              "See current pricing",
              "See current pricing",
              <PlainOutboundLink key="nord-src" href={vendorSources.nordvpn}>
                nordvpn.com/pricing/
              </PlainOutboundLink>,
              <PaidVisitLink key="nord-cta" {...paidLinks.nordvpn} />,
            ],
            [
              "Proton VPN",
              "Check Proton VPN's page for current pricing.",
              "VPN Plus, 2 years",
              "See current pricing",
              "See current pricing",
              <PlainOutboundLink key="proton-src" href={vendorSources.protonvpn}>
                protonvpn.com/pricing
              </PlainOutboundLink>,
              <PaidVisitLink
                key="proton-cta"
                href={protonPricingLink.href}
                partner={protonPricingLink.partner}
                label={protonPricingLink.label}
              />,
            ],
            [
              "hide.me",
              "Check hide.me's page for current pricing.",
              "Premium, 24 mo + 2 mo",
              "See current pricing",
              "See current pricing",
              <PlainOutboundLink key="hide-src" href={vendorSources.hideme}>
                hide.me/en/pricing
              </PlainOutboundLink>,
              <PaidVisitLink key="hide-cta" {...paidLinks.hideme} />,
            ],
          ]}
        />
      </section>

      <section className="surface-card p-8">
        <h2 className="text-lg font-bold text-white">Provider Black Friday pages</h2>
        <ul className="mt-3 space-y-2.5 text-sm">
          <li>
            <Link href={nordBlackFriday.path} className={textLinkClassName}>
              NordVPN Black Friday 2026 deal
            </Link>
          </li>
          <li>
            <Link href={surfsharkBlackFriday.path} className={textLinkClassName}>
              Surfshark Black Friday 2026 deal
            </Link>
          </li>
        </ul>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Where to check each provider&apos;s Black Friday offer</h2>
        <p>
          Surfshark&apos;s pricing page labels Surfshark One (24 months + 3 extra months) a
          &quot;Black Friday deal.&quot; Check each provider&apos;s page for current pricing.
          Black Friday 2026 is Friday, November 27, 2026, the date given on{" "}
          <PlainOutboundLink href={vendorSources.nordBlackFriday}>
            NordVPN&apos;s Black Friday page
          </PlainOutboundLink>
          .
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Check NordVPN&apos;s page for current pricing.
        </h2>
        <p>
          Check NordVPN&apos;s page for current pricing.
        </p>
        <PriceTable
          headers={planHeaders}
          rows={[
            [
              "Check NordVPN's page for current pricing.",
              "Basic, 2-year + 3 extra months",
              "See current pricing",
              "See current pricing",
            ],
            [
              "Check NordVPN's page for current pricing.",
              "Basic, 1-year",
              "See current pricing",
              "NordVPN's pricing page lists the renewal price under each plan, separate from the intro price.",
            ],
          ]}
        />
        <SourceLine href={vendorSources.nordvpn} label="nordvpn.com/pricing/" accessed="" />
        <p>
          NordVPN&apos;s pricing page lists 10 devices secured at once and a 30-day money-back
          guarantee on all plans.
        </p>
        <p>{nordFaqs[2].answer}</p>
        <p>
          <Link href="/reviews/nordvpn" className={textLinkClassName}>
            NordVPN review
          </Link>
          <span className="mx-2 text-[#475569]">·</span>
          <Link href={nordBlackFriday.path} className={textLinkClassName}>
            NordVPN Black Friday 2026 deal
          </Link>
        </p>
        <PaidVisitLink {...paidLinks.nordvpn} />
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Surfshark: Black Friday deal (per Surfshark)</h2>
        <p>
          Surfshark&apos;s pricing page labels Surfshark One (24 months + 3 extra months) a
          &quot;Black Friday deal.&quot; Check Surfshark&apos;s page for current pricing.
          Renewal: check at checkout.
        </p>
        <p>
          Surfshark&apos;s pricing page states &quot;unlimited simultaneous device connections&quot; (
          <PlainOutboundLink href={vendorSources.surfshark}>surfshark.com/pricing</PlainOutboundLink>
          ).
        </p>
        <p>
          One vs Starter pricing, renewal, and what the plan lists are on the{" "}
          <Link href={surfsharkBlackFriday.path} className={textLinkClassName}>
            Surfshark Black Friday 2026 deal
          </Link>{" "}
          page.
        </p>
        <PaidVisitLink {...paidLinks.surfshark} />
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Check Proton VPN&apos;s page for current pricing.
        </h2>
        <p>
          Check Proton VPN&apos;s page for current pricing.
        </p>
        <p>
          Proton&apos;s Black Friday page says &quot;Black Friday is over&quot; for a previous
          year&apos;s offer. This page does not use those figures.
        </p>
        <PriceTable
          headers={planHeaders}
          rows={[
            [
              "Check Proton VPN's page for current pricing.",
              "VPN Plus, 2 years",
              "See current pricing",
              "See current pricing",
            ],
          ]}
        />
        <SourceLine href={vendorSources.protonvpn} label="protonvpn.com/pricing" accessed="" />
        <p>
          Proton&apos;s pricing page lists &quot;Secure 10 devices at a time&quot; and a 30-day
          money-back guarantee.
        </p>
        <p>{protonFaqs[2].answer}</p>
        <p>
          <Link href="/reviews/protonvpn" className={textLinkClassName}>
            Proton VPN review
          </Link>
        </p>
        <p>
          <PaidVisitLink
            href={protonPricingLink.href}
            partner={protonPricingLink.partner}
            label={protonPricingLink.label}
          />
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Check hide.me&apos;s page for current pricing.
        </h2>
        <p>
          Check hide.me&apos;s page for current pricing. hide.me&apos;s pricing guarantee says the plan
          &quot;always renews with the same price and duration.&quot;
        </p>
        <PriceTable
          headers={planHeaders}
          rows={[
            [
              "Check hide.me's page for current pricing.",
              "Premium, 24 months + 2 months extra",
              "See current pricing",
              "See current pricing",
            ],
            [
              "Check hide.me's page for current pricing.",
              "Premium, 12 months + 1 month extra",
              "See current pricing",
              "See current pricing",
            ],
            [
              "Check hide.me's page for current pricing.",
              "Premium, 1 month",
              "See current pricing",
              "See current pricing",
            ],
          ]}
        />
        <SourceLine href={vendorSources.hideme} label="hide.me/en/pricing" accessed="" />
        <p>
          hide.me&apos;s pricing page lists 10 simultaneous connections, 92 locations / 2600 servers,
          and a 30-day money-back guarantee.
        </p>
        <p>{hidemeFaqs[2].answer}</p>
        <p>
          <Link href="/reviews/hideme" className={textLinkClassName}>
            hide.me review
          </Link>
        </p>
        <PaidVisitLink {...paidLinks.hideme} />
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Intro price vs renewal price: what to check before you buy
        </h2>
        <p>
          The intro price is the amount due for the first term. The renewal price is what the
          provider charges after that term. Read both numbers in the same row. Then read{" "}
          <Link href="/guides/vpn-renewal-pricing-traps" className={textLinkClassName}>
            how VPN renewal pricing works
          </Link>
          .
        </p>
        <p>
          Check NordVPN&apos;s page for current pricing. NordVPN&apos;s pricing page lists the renewal
          price under each plan, separate from the intro price. Check Proton VPN&apos;s page for
          current pricing.
          hide.me&apos;s pricing page states its plans always renew with the same price and duration.
          Surfshark does not
          list a renewal amount on the pricing page, so check the renewal price at checkout. See the{" "}
          <Link href="/guides/surfshark-renewal-price" className={textLinkClassName}>
            Surfshark renewal price
          </Link>{" "}
          and{" "}
          <Link href="/guides/protonvpn-renewal-price" className={textLinkClassName}>
            Proton VPN renewal price
          </Link>{" "}
          guides.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How we track these deals</h2>
        <p>
          These rows come from each provider&apos;s own pricing page. Check each
          provider&apos;s page for current pricing for the intro amount and the renewal amount next
          to the plan length. A row is labeled &quot;Black Friday deal (per [Vendor])&quot; only when
          that vendor&apos;s page labels the offer a Black Friday deal.
        </p>
        <p>
          A deal ends when the vendor page no longer shows it, or when a published end date passes.
          Check each provider&apos;s page for current pricing and any end date. Offers change, and a
          deal can end without notice.
        </p>
      </section>

      <FaqSection faqs={hubPageFaqs} />

      <section className="surface-card p-8">
        <h2 className="text-lg font-bold text-white">Related reading</h2>
        <ul className="mt-3 space-y-2.5 text-sm">
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
            <Link href="/reviews/nordvpn" className={textLinkClassName}>
              NordVPN review
            </Link>
          </li>
          <li>
            <Link href="/reviews/surfshark" className={textLinkClassName}>
              Surfshark review
            </Link>
          </li>
          <li>
            <Link href="/reviews/protonvpn" className={textLinkClassName}>
              Proton VPN review
            </Link>
          </li>
          <li>
            <Link href="/reviews/hideme" className={textLinkClassName}>
              hide.me review
            </Link>
          </li>
          <li>
            <Link href="/alternatives/nordvpn" className={textLinkClassName}>
              NordVPN alternatives
            </Link>
          </li>
          <li>
            <Link href="/alternatives/surfshark" className={textLinkClassName}>
              Surfshark alternatives
            </Link>
          </li>
          <li>
            <Link href="/alternatives/protonvpn" className={textLinkClassName}>
              Proton VPN alternatives
            </Link>
          </li>
          <li>
            <Link href="/alternatives/hideme" className={textLinkClassName}>
              hide.me alternatives
            </Link>
          </li>
          <li>
            <Link href="/compare/surfshark-vs-nordvpn" className={textLinkClassName}>
              Surfshark vs NordVPN
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
            <Link href="/compare/nordvpn-vs-expressvpn" className={textLinkClassName}>
              NordVPN vs ExpressVPN
            </Link>
          </li>
          <li>
            <Link href="/compare/surfshark-vs-expressvpn" className={textLinkClassName}>
              Surfshark vs ExpressVPN
            </Link>
          </li>
          <li>
            <Link href="/compare/mullvad-vs-protonvpn" className={textLinkClassName}>
              Mullvad vs Proton VPN
            </Link>
          </li>
          <li>
            <Link href="/compare/expressvpn-vs-protonvpn" className={textLinkClassName}>
              ExpressVPN vs Proton VPN
            </Link>
          </li>
          <li>
            <Link href="/guides/surfshark-renewal-price" className={textLinkClassName}>
              Surfshark renewal price
            </Link>
          </li>
          <li>
            <Link href="/guides/protonvpn-renewal-price" className={textLinkClassName}>
              Proton VPN renewal price
            </Link>
          </li>
          <li>
            <Link href="/guides/vpn-renewal-pricing-traps" className={textLinkClassName}>
              how VPN renewal pricing works
            </Link>
          </li>
          <li>
            <Link href="/best-vpn-for/budget" className={textLinkClassName}>
              Budget VPN guide
            </Link>
          </li>
          <li>
            <Link href="/methodology" className={textLinkClassName}>
              Methodology
            </Link>
          </li>
        </ul>
      </section>

      <RelatedCards cards={[relatedHubCard("/deals")]} />
    </article>
  );
}
