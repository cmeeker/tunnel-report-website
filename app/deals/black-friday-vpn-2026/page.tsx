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
        data={buildDealArticleSchema({
          headline: blackFridayHub.h1,
          description: blackFridayHub.description,
          path: blackFridayHub.path,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: blackFridayHub.h1, path: blackFridayHub.path },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {blackFridayHub.h1}
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
          As of Oct 17, 2026, Surfshark is the only one of these four providers showing an offer it
          labels &quot;Black Friday deal&quot;: Surfshark One, 24 months + 3 extra months. See current
          pricing. Renewal: check at checkout. NordVPN, Proton VPN and hide.me have not announced
          Black Friday deals yet, so we list their current plans below, labeled as current prices. We
          update this page as vendors publish their offers.
        </p>
        <p>{PRICE_CHANGE_LINE}</p>
      </section>

      <DisclosureBanner />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Black Friday VPN offers at a glance (as of Oct 17, 2026)
        </h2>
        <PriceTable
          caption="VPN Black Friday offers, as of Oct 17, 2026. See current pricing. Source: each provider's own pricing page."
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
              "Deal not announced yet, check back. Current price shown.",
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
              "Deal not announced yet, check back. Current price shown.",
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
              "Deal not announced yet, check back. Current price shown.",
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
        <h2 className="text-2xl font-bold text-white">Which providers have announced Black Friday deals?</h2>
        <p>
          As of Oct 17, 2026, Surfshark is the only provider in this set whose pricing page labels a
          plan &quot;Black Friday deal.&quot; NordVPN, Proton VPN and hide.me have not announced
          Black Friday deals yet. Black Friday 2026 is Friday, November 27, 2026, the date given on{" "}
          <PlainOutboundLink href={vendorSources.nordBlackFriday}>
            NordVPN&apos;s Black Friday page
          </PlainOutboundLink>
          .
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          NordVPN: current price, Black Friday deal not announced yet
        </h2>
        <p>
          NordVPN has not announced a Black Friday 2026 deal yet, check back. As of Oct 17, 2026, the
          current price (not a Black Friday deal) for NordVPN Basic (2-year plan + 3 extra months) is
          on NordVPN&apos;s site. See current pricing. Renewal: see current pricing.
        </p>
        <PriceTable
          headers={planHeaders}
          rows={[
            [
              "Current price, not a Black Friday deal",
              "Basic, 2-year + 3 extra months",
              "See current pricing",
              "See current pricing",
            ],
            [
              "Current price, not a Black Friday deal",
              "Basic, 1-year",
              "See current pricing",
              "Renewal not listed on the pricing page",
            ],
          ]}
        />
        <SourceLine href={vendorSources.nordvpn} label="nordvpn.com/pricing/" />
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
          As of Oct 17, 2026, Surfshark&apos;s pricing page labels Surfshark One (24 months + 3 extra
          months) a &quot;Black Friday deal.&quot; See current pricing. Renewal: check at checkout.
          Surfshark has not published an end date for this deal.
        </p>
        <p>
          Surfshark&apos;s pricing page states &quot;unlimited simultaneous device connections&quot; (
          <PlainOutboundLink href={vendorSources.surfshark}>surfshark.com/pricing</PlainOutboundLink>
          , accessed Oct 17, 2026).
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
          Proton VPN: deal not announced yet, check back (reported to start Oct 26)
        </h2>
        <p>
          Proton VPN has not announced its Black Friday 2026 deal yet, check back. As of Oct 17,
          2026, the current price (not a Black Friday deal) for Proton VPN Plus (2-year plan) is on
          Proton&apos;s site. See current pricing. Renewal: see current pricing.
        </p>
        <p>
          As of Oct 17, 2026, Proton&apos;s Black Friday page says &quot;Black Friday is over&quot; for
          a previous year&apos;s offer. This page does not use those figures. Tunnel Report will check
          again on Oct 26, 2026.
        </p>
        <PriceTable
          headers={planHeaders}
          rows={[
            [
              "Deal not announced yet, check back. Current price, not a Black Friday deal.",
              "VPN Plus, 2 years",
              "See current pricing",
              "See current pricing",
            ],
          ]}
        />
        <SourceLine href={vendorSources.protonvpn} label="protonvpn.com/pricing" />
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
          hide.me: current price, Black Friday deal not announced yet
        </h2>
        <p>
          hide.me has not announced a Black Friday 2026 deal yet, check back. As of Oct 17, 2026, the
          current price (not a Black Friday deal) for hide.me Premium (24 months + 2 months extra) is
          on hide.me&apos;s site. See current pricing. hide.me&apos;s pricing guarantee says the plan
          &quot;always renews with the same price and duration.&quot;
        </p>
        <PriceTable
          headers={planHeaders}
          rows={[
            [
              "Current price, not a Black Friday deal",
              "Premium, 24 months + 2 months extra",
              "See current pricing",
              "See current pricing",
            ],
            [
              "Current price",
              "Premium, 12 months + 1 month extra",
              "See current pricing",
              "See current pricing",
            ],
            ["Current price", "Premium, 1 month", "See current pricing", "See current pricing"],
          ]}
        />
        <SourceLine href={vendorSources.hideme} label="hide.me/en/pricing" />
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
          See current pricing for NordVPN Basic renewal. A renewal price for the 1-year term is not
          listed on the pricing page. See current pricing for the Proton VPN Plus renewal.
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
          These rows come from each provider&apos;s own pricing page, read on Oct 17, 2026. See current
          pricing for the intro amount and the renewal amount next to the plan length.
          A row is labeled &quot;Black Friday deal (per [Vendor])&quot; only when that vendor&apos;s
          page labels the offer a Black Friday deal. Otherwise the row says the deal is not announced
          yet, or it is labeled &quot;Current price, not a Black Friday deal.&quot;
        </p>
        <p>
          As of Oct 17, 2026, no vendor has published an end date. A deal ends when the vendor page no
          longer shows it, or when a published end date passes. Within one refresh cycle, this page
          will either say &quot;This Black Friday deal has ended (last seen [date])&quot; or return to
          &quot;Deal not announced yet, check back&quot; and show the current price with the
          &quot;Current price, not a Black Friday deal&quot; label.
        </p>
      </section>

      <FaqSection
        faqs={hubPageFaqs}
        renderAnswer={(answer) => {
          const lead = "Proton says";
          if (answer.startsWith(`${lead} its no-logs policy is independently audited`)) {
            return (
              <>
                <PlainOutboundLink href={vendorSources.protonNoLogsAudit}>{lead}</PlainOutboundLink>
                {answer.slice(lead.length)}
              </>
            );
          }
          return answer;
        }}
      />

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
    </article>
  );
}
