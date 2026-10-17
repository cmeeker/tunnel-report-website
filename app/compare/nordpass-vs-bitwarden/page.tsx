import type { Metadata } from "next";

import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import {
  AffiliateDisclosure,
  Cite,
  EditorialLink,
  NordPassPricingLink,
  PasswordManagerSources,
  PriceBarChart,
  PricingLink,
  VpnRenewalLink,
  type PasswordSource,
} from "@/components/password-managers";
import { RelatedLinks } from "@/components/RelatedLinks";
import { PASSWORD_MANAGER_UPDATED, PASSWORD_MANAGER_UPDATED_LABEL, prices, pricingUrls, sourceUrls } from "@/lib/content/password-manager-prices";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/schema";

const title = "NordPass vs Bitwarden 2026: Price, Security, Fit";
const description =
  "NordPass vs Bitwarden on published pricing, encryption, audits and free plans. Bitwarden wins on cost and open code; NordPass on polish.";
const h1 = "NordPass vs Bitwarden: Which Password Manager Fits You?";
const path = "/compare/nordpass-vs-bitwarden";

export const metadata: Metadata = {
  ...buildPageMetadata({ title, description, path }),
  title: { absolute: title },
};

const faqs = [
  {
    question: "Is NordPass better than Bitwarden?",
    answer:
      "Neither is strictly better. Bitwarden wins on price predictability and open code. NordPass wins on polish and first-term price, based on published specs and pricing.",
  },
  {
    question: "Which is cheaper, NordPass or Bitwarden?",
    answer:
      "For the first term they're close. NordPass Premium is $37.53 for the first 27 months (intro), and Bitwarden Premium is $19.80 billed annually. After the intro, Bitwarden's price is the known one.",
  },
  {
    question: "Is Bitwarden really open source?",
    answer: "Yes. Bitwarden says its code is open source and publishes third-party audits.",
  },
  {
    question: "What encryption does NordPass use vs Bitwarden?",
    answer: "NordPass uses XChaCha20. Bitwarden uses AES-CBC 256-bit.",
  },
  {
    question: "Can I move from Bitwarden to NordPass, or back?",
    answer: "Both support importing from other managers. Check each provider's help docs for current formats.",
  },
];

const sources: PasswordSource[] = [
  { id: "S1", title: "NordPass pricing", publisher: "NordPass", url: sourceUrls.nordpassPricing, year: 2026 },
  { id: "S2", title: "NordPass security", publisher: "NordPass", url: sourceUrls.nordpassSecurity, year: 2026 },
  { id: "S3", title: "Bitwarden pricing", publisher: "Bitwarden", url: sourceUrls.bitwardenPricing, year: 2026 },
  { id: "S4", title: "Bitwarden compliance & audits", publisher: "Bitwarden", url: sourceUrls.bitwardenAudits, year: 2026 },
  { id: "S5", title: "Bitwarden security white paper", publisher: "Bitwarden", url: sourceUrls.bitwardenWhitePaper, year: 2026 },
];

export default function NordPassVsBitwardenPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: h1,
          description,
          path,
          dateModified: PASSWORD_MANAGER_UPDATED,
          datePublished: PASSWORD_MANAGER_UPDATED,
          authorName: personas.sarah.name,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare/nordvpn-vs-protonvpn" },
          { name: "NordPass vs Bitwarden", path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-cyan">Comparison</span>
          <span className="badge badge-violet">Updated {PASSWORD_MANAGER_UPDATED_LABEL}</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">{h1}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          Pick Bitwarden if you want open-source code and the lowest predictable bill: Premium is {prices.bitwardenPremiumMonthlyShown}, billed annually at {prices.bitwardenPremiumAnnual}. Pick NordPass if you want a more polished app and a low intro price, {prices.nordpassPremiumTwoYearMonthly} on a 2-year plan. Both have free plans. This comparison is based on published specs and pricing.
        </p>
        <AuthorByline persona={personas.sarah} date={PASSWORD_MANAGER_UPDATED_LABEL} />
      </header>

      <AffiliateDisclosure>
        Tunnel Report may earn a commission if you buy NordPass through our link. Bitwarden links are plain links with no commission. This comparison is based on published specs and pricing.
      </AffiliateDisclosure>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Quick verdict</h2>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li><strong>Cheapest over time: <PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink>.</strong> It has a standard annual price with no intro jump to plan around <Cite id="S3" />.</li>
          <li><strong>Lowest first-term cost: NordPass.</strong> It&apos;s {prices.nordpassPremiumTwoYearTotal} for the first 27 months of Premium (intro) <Cite id="S1" />.</li>
          <li><strong>Open-source code: Bitwarden</strong> <Cite id="S4" />.</li>
          <li><strong>More hand-holding: NordPass.</strong> It&apos;s a simpler, guided product.</li>
        </ul>
        <p>Prices change often, so check the provider&apos;s site.</p>
        <p>
          <NordPassPricingLink />
          {" · "}
          <PricingLink href={pricingUrls.bitwarden}>Bitwarden pricing</PricingLink>
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How much do NordPass and Bitwarden cost?</h2>
        <p>Prices are as shown on each official pricing page, in USD, as of Oct 2026.</p>
        <h3 className="text-xl font-bold text-white">NordPass <Cite id="S1" /></h3>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li>Premium, 2-year: {prices.nordpassPremiumTwoYearMonthly} + 3 extra months, {prices.nordpassPremiumTwoYearTotal} for the first 27 months (intro)</li>
          <li>Premium, 1-year: {prices.nordpassPremiumOneYearMonthly}, {prices.nordpassPremiumOneYearTotal} for the first 12 months (intro)</li>
          <li>Family (6 users), 2-year: {prices.nordpassFamilyTwoYearMonthly}, {prices.nordpassFamilyTwoYearTotal} for the first 27 months (intro)</li>
          <li>Family (6 users), 1-year: {prices.nordpassFamilyOneYearMonthly}, {prices.nordpassFamilyOneYearTotal} for the first 12 months (intro)</li>
          <li>Free plan available</li>
        </ul>
        <h3 className="text-xl font-bold text-white"><PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink> <Cite id="S3" /></h3>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li>Premium (1 account): {prices.bitwardenPremiumMonthlyShown}, billed annually at {prices.bitwardenPremiumAnnual}</li>
          <li>Families (6 accounts): {prices.bitwardenFamilyMonthly}, billed annually at {prices.bitwardenFamilyAnnual}</li>
          <li>Free plan available</li>
          <li>Bitwarden notes: &quot;Pricing shown in USD and based on an annual subscription. Taxes not included.&quot;</li>
        </ul>
        <p>
          <strong>What this means:</strong> over the first two years, NordPass Premium ({prices.nordpassPremiumTwoYearTotal} for 27 months) costs about the same as Bitwarden Premium ({prices.bitwardenPremiumAnnual} × 2 = {prices.bitwardenPremiumTwoYearTotal} for 24 months), based on these published prices. After that, Bitwarden&apos;s price is known. NordPass&apos;s renewal rate isn&apos;t published on its pricing page, so check it at checkout. For the VPN version of that gap, see <VpnRenewalLink />.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Which is more secure?</h2>
        <p>Both use zero-knowledge, end-to-end encryption, meaning your vault is encrypted on your device before it syncs. They differ in the details.</p>
        <p>
          <strong>NordPass</strong> says it uses XChaCha20 for vault encryption, XChaCha20-Poly1305-IETF to protect your private key locally, and Argon2id for your master password. It lists ISO 27001 and SOC 2 Type 2 certifications, regular independent third-party audits and a bug bounty <Cite id="S2" />.
        </p>
        <p>
          <strong>Bitwarden</strong> documents end-to-end AES-CBC 256-bit encryption with HMAC authentication. It uses PBKDF2 SHA-256 by default and lets you switch to Argon2id <Cite id="S5" />. Bitwarden publishes yearly third-party security audits, is ISO 27001 certified, and says its code is open source <Cite id="S4" />.
        </p>
        <p>
          <strong>Our take, based on published specs:</strong> both are strong. Bitwarden&apos;s edge is transparency, because anyone can read the code and the audit reports are public. NordPass&apos;s edge is a modern cipher and Argon2id by default. Neither choice is a mistake on security.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What do they have in common?</h2>
        <p>More than you&apos;d think. Based on what each provider publishes:</p>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li><strong>Zero-knowledge, end-to-end encryption.</strong> Neither company says it can read your vault <Cite id="S2" /><Cite id="S5" />.</li>
          <li><strong>Argon2id support.</strong> It&apos;s the default on NordPass and optional on Bitwarden <Cite id="S2" /><Cite id="S5" />.</li>
          <li><strong>ISO 27001 certification and third-party audits</strong> <Cite id="S2" /><Cite id="S4" />.</li>
          <li><strong>Free plans plus paid Premium and six-person family tiers</strong> <Cite id="S1" /><Cite id="S3" />.</li>
          <li><strong>Team and business plans</strong> <Cite id="S1" /><Cite id="S3" />.</li>
        </ul>
        <p>So the choice mostly comes down to three things: how you feel about open code, how much you care about a predictable long-term price, and which app you&apos;d rather open every day. If you can&apos;t decide, start on either free plan. Moving later is possible, so this isn&apos;t a forever decision.</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Which has the better free plan?</h2>
        <p>
          Both have one <Cite id="S1" /><Cite id="S3" />. NordPass says its Free plan includes a 30-day Premium trial <Cite id="S1" />. Bitwarden&apos;s free plan is a long-running, well-known option for people who just want a no-cost vault. If you want to stay free for good, Bitwarden is the safer bet. If you want to try premium features first, NordPass&apos;s trial helps.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Which is easier to use?</h2>
        <p>
          We didn&apos;t test the apps hands-on, so we won&apos;t score usability. Going by how each one presents itself: NordPass leans toward a simple, consumer-friendly setup, and pairs naturally with NordVPN if you already use it. Bitwarden offers more knobs, such as letting you change the key derivation function <Cite id="S5" />. Power users like that. Some beginners find it busier.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Which is better for families?</h2>
        <p>
          On published prices, <PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink> Families is {prices.bitwardenFamilyMonthly}, billed annually at {prices.bitwardenFamilyAnnual} for 6 accounts <Cite id="S3" />. NordPass Family is {prices.nordpassFamilyTwoYearMonthly} on the 2-year intro ({prices.nordpassFamilyTwoYearTotal} for 27 months) or {prices.nordpassFamilyOneYearMonthly} on 1 year ({prices.nordpassFamilyOneYearTotal} for 12 months), also for 6 accounts <Cite id="S1" />. For year one, they&apos;re close. For the long run, Bitwarden&apos;s price is the one you can plan around.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Which is better for business?</h2>
        <p>
          Both sell team plans. NordPass lists Teams, Business and Enterprise tiers on its pricing page <Cite id="S1" />. Bitwarden lists Teams and Enterprise <Cite id="S3" />. Business pricing changes often and depends on seats, so we don&apos;t quote it here. Prices change often, so check the provider&apos;s site.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who should choose which?</h2>
        <p><strong>Choose NordPass if</strong> you want a clean app, a low first-term price, and you&apos;re fine paying 1 or 2 years upfront.</p>
        <p><NordPassPricingLink /></p>
        <p><strong>Choose Bitwarden if</strong> you want open-source code, a free plan you can keep, or a stable yearly price.</p>
        <p><PricingLink href={pricingUrls.bitwarden}>Bitwarden pricing</PricingLink></p>
        <p>
          Still deciding? See the full <EditorialLink href="/best-password-managers">best password managers</EditorialLink> list or our <EditorialLink href="/reviews/nordpass">NordPass review</EditorialLink>.
        </p>
      </section>

      <PriceBarChart
        title="Published cost for the first two years, single user (USD)"
        bars={[
          { label: "Bitwarden Premium (2 × annual, 24 months)", amountLabel: prices.bitwardenPremiumTwoYearTotal, value: 39.6 },
          { label: "NordPass Premium (intro, covers 27 months)", amountLabel: prices.nordpassPremiumTwoYearTotal, value: 37.53, tone: "accent" },
        ]}
        source="Source: nordpass.com/pricing and bitwarden.com/pricing, as of Oct 2026. NordPass price is an intro rate. Prices change often, so check the provider's site. tunnelreport.com"
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Comparison table</h2>
        <div className="glass-card overflow-x-auto p-2">
          <table className="table-dark">
            <caption className="sr-only">NordPass and Bitwarden on published price and security details</caption>
            <thead>
              <tr>
                <th scope="col">Detail</th>
                <th scope="col">NordPass</th>
                <th scope="col"><PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Free plan</th>
                <td>Yes, includes 30-day Premium trial <Cite id="S1" /></td>
                <td>Yes <Cite id="S3" /></td>
              </tr>
              <tr>
                <th scope="row">Premium price as shown</th>
                <td>{prices.nordpassPremiumTwoYearMonthly}, {prices.nordpassPremiumTwoYearTotal} for the first 27 months (2-yr, intro); {prices.nordpassPremiumOneYearMonthly}, {prices.nordpassPremiumOneYearTotal} for the first 12 months (1-yr, intro) <Cite id="S1" /></td>
                <td>{prices.bitwardenPremiumMonthlyShown}, billed annually at {prices.bitwardenPremiumAnnual} (standard) <Cite id="S3" /></td>
              </tr>
              <tr>
                <th scope="row">Family price as shown</th>
                <td>{prices.nordpassFamilyTwoYearMonthly} 2-yr / {prices.nordpassFamilyOneYearMonthly} 1-yr, 6 users (intro) <Cite id="S1" /></td>
                <td>{prices.bitwardenFamilyMonthly}, billed annually at {prices.bitwardenFamilyAnnual}, 6 accounts <Cite id="S3" /></td>
              </tr>
              <tr>
                <th scope="row">Vault encryption</th>
                <td>XChaCha20 <Cite id="S2" /></td>
                <td>AES-CBC 256-bit + HMAC <Cite id="S5" /></td>
              </tr>
              <tr>
                <th scope="row">Master password KDF</th>
                <td>Argon2id <Cite id="S2" /></td>
                <td>PBKDF2 SHA-256 default; Argon2id optional <Cite id="S5" /></td>
              </tr>
              <tr>
                <th scope="row">Open source</th>
                <td>—</td>
                <td>Yes <Cite id="S4" /></td>
              </tr>
              <tr>
                <th scope="row">Certifications/audits</th>
                <td>ISO 27001, SOC 2 Type 2, third-party audits <Cite id="S2" /></td>
                <td>Annual third-party audits, ISO 27001 <Cite id="S4" /></td>
              </tr>
              <tr>
                <th scope="row">Money-back</th>
                <td>30-day guarantee <Cite id="S1" /></td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#64748b]">Based on published specs and pricing. Prices change often, so check the provider&apos;s site.</p>
      </section>

      <RelatedLinks
        links={[
          { href: "/reviews/nordpass", label: "NordPass Review" },
          { href: "/best-password-managers", label: "Best Password Managers" },
          { href: "/compare/nordvpn-vs-protonvpn", label: "NordVPN vs Proton VPN" },
          { href: "/reviews/nordvpn", label: "NordVPN Review" },
          { href: "/best-vpn-for/privacy", label: "Best VPN for Privacy" },
          { href: "/methodology", label: "Methodology" },
        ]}
      />

      <FaqSection faqs={faqs} />
      <PasswordManagerSources sources={sources} />
    </article>
  );
}
