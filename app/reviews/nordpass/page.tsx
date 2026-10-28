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
  type PasswordSource,
} from "@/components/password-managers";
import { RelatedLinks } from "@/components/RelatedLinks";
import { PASSWORD_MANAGER_UPDATED, PASSWORD_MANAGER_UPDATED_LABEL, prices, pricingUrls, sourceUrls } from "@/lib/content/password-manager-prices";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema, buildReviewSchema } from "@/lib/seo/schema";
import { getPageOgImageUrl } from "@/lib/seo/share-images";

const title = "NordPass Review 2026: Pricing, Security and Specs";
const description =
  "NordPass review based on published specs and pricing: XChaCha20 encryption, and who should skip it. See current pricing.";
const h1 = "NordPass Review 2026: What You Get and What It Costs";
const path = "/reviews/nordpass";

export const metadata: Metadata = {
  ...buildPageMetadata({ title, description, path }),
  title: { absolute: title },
};

const faqs = [
  {
    question: "Is NordPass worth it in 2026?",
    answer:
      "For most people who want a simple, secure manager, yes, based on published specs and pricing. Check the renewal rate at checkout.",
  },
  {
    question: "Is NordPass free?",
    answer:
      "There's a free plan. See current pricing for Premium on the 2-year intro plan.",
  },
  {
    question: "What encryption does NordPass use?",
    answer: "XChaCha20, with Argon2id for the master password and a zero-knowledge design, according to NordPass.",
  },
  {
    question: "What certifications does NordPass list?",
    answer:
      "NordPass says it lists ISO 27001 and SOC 2 Type 2 certifications.",
  },
  {
    question: "Does NordPass come with NordVPN?",
    answer: "No. They're separate apps and separate subscriptions.",
  },
];

const sources: PasswordSource[] = [
  { id: "S1", title: "NordPass pricing", publisher: "NordPass", url: sourceUrls.nordpassPricing, year: 2026 },
  { id: "S2", title: "NordPass security", publisher: "NordPass", url: sourceUrls.nordpassSecurity, year: 2026 },
  { id: "S3", title: "Bitwarden pricing", publisher: "Bitwarden", url: sourceUrls.bitwardenPricing, year: 2026 },
  { id: "S4", title: "1Password pricing", publisher: "1Password", url: sourceUrls.onePasswordPricing, year: 2026 },
  { id: "S5", title: "Proton Pass pricing", publisher: "Proton", url: sourceUrls.protonPricing, year: 2026 },
  { id: "S6", title: "Bitwarden security white paper", publisher: "Bitwarden", url: sourceUrls.bitwardenWhitePaper, year: 2026 },
  { id: "S7", title: "1Password security", publisher: "1Password", url: sourceUrls.onePasswordSecurity, year: 2026 },
  { id: "S8", title: "Proton Pass security", publisher: "Proton", url: sourceUrls.protonSecurity, year: 2026 },
  { id: "S9", title: "Bitwarden compliance", publisher: "Bitwarden", url: sourceUrls.bitwardenAudits, year: 2026 },
];

export default function NordPassReviewPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={[
          buildArticleSchema({
            headline: h1,
            description,
            path,
            dateModified: PASSWORD_MANAGER_UPDATED,
            datePublished: PASSWORD_MANAGER_UPDATED,
            image: getPageOgImageUrl(path),
          }),
          buildReviewSchema({
            itemName: "NordPass",
            summary: description,
            path,
            dateModified: PASSWORD_MANAGER_UPDATED,
          }),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews/nordvpn" },
          { name: "NordPass", path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-teal">Full Review</span>
          <span className="badge badge-violet">Updated {PASSWORD_MANAGER_UPDATED_LABEL}</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">{h1}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          NordPass is a solid, easy password manager with modern encryption and a usable free plan. Premium starts at {prices.nordpassPremiumTwoYearMonthly} on a 2-year intro deal. The main thing to watch is the renewal price, which isn&apos;t listed up front. This review is based on published specs and pricing, not hands-on testing.
        </p>
        <AuthorByline date={PASSWORD_MANAGER_UPDATED_LABEL} />
      </header>

      <AffiliateDisclosure>
        Picks are based on published specs, pricing and third-party reports. We may earn a commission from some links.
      </AffiliateDisclosure>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What is NordPass?</h2>
        <p>
          NordPass is a password manager from Nord Security, the company behind NordVPN. It keeps your logins in an encrypted vault, autosaves and autofills them, and flags weak or reused passwords through its Password Health tool <Cite id="S1" />. There are Free, Premium and Family plans for individuals, plus business tiers <Cite id="S1" />.
        </p>
        <p>
          <NordPassPricingLink />
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How much does NordPass cost?</h2>
        <p>These prices are as shown on the official pricing page, in USD, as of Oct 2026 <Cite id="S1" />:</p>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li><strong>Premium, 2-year plan:</strong> {prices.nordpassPremiumTwoYearMonthly} + 3 extra months, {prices.nordpassPremiumTwoYearTotal} for the first 27 months. Intro rate.</li>
          <li><strong>Premium, 1-year plan:</strong> {prices.nordpassPremiumOneYearMonthly}, {prices.nordpassPremiumOneYearTotal} for the first 12 months. Intro rate.</li>
          <li><strong>Family (6 users), 2-year plan:</strong> {prices.nordpassFamilyTwoYearMonthly} + 3 extra months, {prices.nordpassFamilyTwoYearTotal} for the first 27 months. Intro rate.</li>
          <li><strong>Family (6 users), 1-year plan:</strong> {prices.nordpassFamilyOneYearMonthly}, {prices.nordpassFamilyOneYearTotal} for the first 12 months. Intro rate.</li>
          <li><strong>Free:</strong> The page lists a free plan and says it includes a 30-day Premium trial.</li>
        </ul>
        <p>
          Paid plans come with a 30-day money-back guarantee <Cite id="S1" />. The words &quot;for the first 12/27 months&quot; mean these are intro prices. NordPass doesn&apos;t publish the renewal rate on that page, so we don&apos;t list one. Before you buy, check what year two costs on the checkout screen. Prices change often, so check the provider&apos;s site.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Is NordPass safe?</h2>
        <p>Based on what NordPass publishes, the security setup is strong <Cite id="S2" />:</p>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li><strong>Encryption:</strong> vault data is encrypted with XChaCha20. Your private key is encrypted locally using XChaCha20-Poly1305-IETF.</li>
          <li><strong>Key derivation:</strong> your master password goes through Argon2id.</li>
          <li><strong>Zero-knowledge:</strong> NordPass says no one at the company can see what&apos;s in your vault, because data is encrypted on your device.</li>
          <li><strong>Outside checks:</strong> NordPass says it lists ISO 27001 and SOC 2 Type 2 certifications, regular independent third-party audits, and a bug bounty program <Cite id="S2" />.</li>
        </ul>
        <p>
          What we can&apos;t tell you: NordPass&apos;s code isn&apos;t open source the way <PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink>&apos;s or <PricingLink href={pricingUrls.protonPass}>Proton Pass</PricingLink>&apos;s is. If open code matters to you, that&apos;s a real reason to look elsewhere. See <EditorialLink href="/compare/nordpass-vs-bitwarden">NordPass vs Bitwarden</EditorialLink>.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What features do you get?</h2>
        <p>
          Per the pricing page, Premium includes autosave and autofill, secure storage, multi-device use, Password Health, a Data Breach Scanner and File Attachments <Cite id="S1" />. The Free plan covers the basics on a smaller scale. Family gives six separate Premium accounts, so each person has their own private vault. NordPass Authenticator shows as &quot;not included&quot; on personal plans in the pricing table <Cite id="S1" />, so check that if you want built-in 2FA codes.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Is the free plan any good?</h2>
        <p>
          For one person getting started, it&apos;s worth a try. NordPass lists a Free plan and says it comes with a 30-day Premium trial <Cite id="S1" />. Check the pricing page for which features stay on Free after the trial. It&apos;s a fine way to see whether you like the app before paying. If you need breach scanning or attachments, that&apos;s Premium.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How does NordPass compare to rivals?</h2>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li><PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink> has a free plan and is cheaper at full price. Premium is {prices.bitwardenPremiumMonthlyShown}, billed annually at {prices.bitwardenPremiumAnnual} <Cite id="S3" />. It&apos;s also open source. NordPass feels more polished and has a lower intro headline.</li>
          <li><PricingLink href={pricingUrls.onePassword}>1Password</PricingLink> costs more. It&apos;s {prices.onePasswordIndividualPromo} with annual billing on the current promo, {prices.onePasswordIndividualRegular} regular <Cite id="S4" />. It&apos;s strong for families who share a lot. There&apos;s no free plan.</li>
          <li><PricingLink href={pricingUrls.protonPass}>Proton Pass</PricingLink> has open-source apps. Pass Plus is {prices.protonPlusMonthly}, billed at {prices.protonPlusBilled} every 12 months <Cite id="S5" />.</li>
        </ul>
        <p>Full comparison: <EditorialLink href="/best-password-managers">Best password managers</EditorialLink>.</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who should buy NordPass, and who shouldn&apos;t?</h2>
        <p><strong>Buy NordPass if</strong> you want a clean, simple password manager with modern encryption and a low first-term price. It also makes sense if you already use NordVPN and like one vendor for both.</p>
        <p><strong>Consider alternatives if</strong> you want open-source code (Bitwarden, Proton Pass), the lowest predictable long-term bill (Bitwarden) or deep family sharing (1Password).</p>
        <p><strong>Skip it if</strong> you hate long prepaid terms. The best NordPass rates need a 1- or 2-year upfront payment.</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Does NordPass work with NordVPN?</h2>
        <p>
          They&apos;re separate apps and separate subscriptions. Our <EditorialLink href="/reviews/nordvpn">NordVPN review</EditorialLink> covers the VPN side. A VPN protects your connection. A password manager protects your logins. Most people benefit from a password manager first.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What should you check before you buy?</h2>
        <p>A few quick things, so there are no surprises:</p>
        <ol className="list-decimal space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li><strong>The renewal line at checkout.</strong> The pricing page shows intro totals only.</li>
          <li><strong>The term length.</strong> The 2-year deal covers 27 months because of the 3 extra months. That&apos;s a good rate, but it&apos;s a long commitment.</li>
          <li><strong>Whether you need Family.</strong> Family covers six accounts. If two or more people would pay for Premium, Family usually costs less per person, based on the published prices.</li>
          <li><strong>The refund window.</strong> NordPass lists a 30-day money-back guarantee <Cite id="S1" />. Set a reminder if you&apos;re unsure.</li>
          <li><strong>Export.</strong> Whatever manager you choose, make sure you can export your vault if you switch later.</li>
        </ol>
      </section>

      <PriceBarChart
        title="See current pricing"
        note="Intro rates. Renewal not published on pricing page."
        bars={[
          { label: "Premium, 1-year (12 months)", amountLabel: prices.nordpassPremiumOneYearTotal, value: 1 },
          { label: "Premium, 2-year (27 months)", amountLabel: prices.nordpassPremiumTwoYearTotal, value: 1 },
          { label: "Family, 1-year (12 months)", amountLabel: prices.nordpassFamilyOneYearTotal, value: 1 },
          { label: "Family, 2-year (27 months)", amountLabel: prices.nordpassFamilyTwoYearTotal, value: 1 },
        ]}
        source="Source: nordpass.com/pricing, as of Oct 2026. Prices change often, so check the provider's site. tunnelreport.com"
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">How the published prices compare</h2>
        <div className="glass-card overflow-x-auto p-2">
          <table className="table-dark">
            <caption className="sr-only">NordPass, Bitwarden, 1Password, and Proton Pass on published price and security details</caption>
            <thead>
              <tr>
                <th scope="col">Detail</th>
                <th scope="col">NordPass</th>
                <th scope="col"><PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink></th>
                <th scope="col"><PricingLink href={pricingUrls.onePassword}>1Password</PricingLink></th>
                <th scope="col"><PricingLink href={pricingUrls.protonPass}>Proton Pass</PricingLink></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Free plan</th>
                <td>Yes <Cite id="S1" /></td>
                <td>Yes <Cite id="S3" /></td>
                <td>No <Cite id="S4" /></td>
                <td>Yes <Cite id="S5" /></td>
              </tr>
              <tr>
                <th scope="row">Lowest single-user price shown</th>
                <td>{prices.nordpassPremiumTwoYearMonthly}, 2-yr, {prices.nordpassPremiumTwoYearTotal} first 27 months (intro) <Cite id="S1" /></td>
                <td>{prices.bitwardenPremiumMonthlyShown}, billed annually at {prices.bitwardenPremiumAnnual} <Cite id="S3" /></td>
                <td>{prices.onePasswordIndividualPromo}, annual (promo; regular {prices.onePasswordIndividualRegular}) <Cite id="S4" /></td>
                <td>{prices.protonPlusMonthly}, billed at {prices.protonPlusBilled} every 12 months <Cite id="S5" /></td>
              </tr>
              <tr>
                <th scope="row">Family plan</th>
                <td>6 users, {prices.nordpassFamilyTwoYearMonthly} 2-yr intro <Cite id="S1" /></td>
                <td>6 accounts, {prices.bitwardenFamilyMonthly}, billed annually at {prices.bitwardenFamilyAnnual} <Cite id="S3" /></td>
                <td>5 members, {prices.onePasswordFamiliesPromo} promo / {prices.onePasswordFamiliesRegular} regular <Cite id="S4" /></td>
                <td>6 users, {prices.protonFamilyMonthly}, billed at {prices.protonFamilyBilled} every 12 months <Cite id="S5" /></td>
              </tr>
              <tr>
                <th scope="row">Encryption (per provider)</th>
                <td>XChaCha20 <Cite id="S2" /></td>
                <td>AES-CBC 256-bit <Cite id="S6" /></td>
                <td>Password + 128-bit Secret Key <Cite id="S7" /></td>
                <td>256-bit AES-GCM <Cite id="S8" /></td>
              </tr>
              <tr>
                <th scope="row">Open source</th>
                <td>—</td>
                <td>Yes <Cite id="S9" /></td>
                <td>—</td>
                <td>Yes <Cite id="S8" /></td>
              </tr>
              <tr>
                <th scope="row">Published certifications</th>
                <td>NordPass says: ISO 27001, SOC 2 Type 2, third-party audits <Cite id="S2" /></td>
                <td>Bitwarden says: annual third-party audits, ISO 27001 <Cite id="S9" /></td>
                <td>SOC 2 Type 2 <Cite id="S7" /></td>
                <td>Proton says: independent audits <Cite id="S8" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#64748b]">Prices change often, so check the provider&apos;s site.</p>
      </section>

      <section className="overflow-hidden rounded-2xl border border-[#00d4aa]/20 bg-gradient-to-br from-[#0d1221] to-[#111827]">
        <div className="border-b border-[#1e293b] px-6 py-4">
          <span className="badge badge-teal">Verdict</span>
        </div>
        <div className="space-y-6 p-8">
          <p className="text-lg leading-relaxed text-[#cbd5e1]">
            NordPass is an easy recommendation for people who want something simple and secure, based on published specs and pricing. The XChaCha20 encryption, zero-knowledge design and published certifications check the important boxes. Just budget for the renewal, which you&apos;ll see at checkout, not on the pricing page. Prices change often, so check the provider&apos;s site.
          </p>
          <NordPassPricingLink presentation="button" />
        </div>
      </section>

      <AuthorByline date={PASSWORD_MANAGER_UPDATED_LABEL} />

      <RelatedLinks
        links={[
          { href: "/best-password-managers", label: "Best Password Managers" },
          { href: "/compare/nordpass-vs-bitwarden", label: "NordPass vs Bitwarden" },
          { href: "/reviews/nordvpn", label: "NordVPN Review" },
          { href: "/best-vpns", label: "Best VPNs" },
          { href: "/best-vpn-for/privacy", label: "Best VPN for Privacy" },
          { href: "/methodology", label: "How We Pick" },
        ]}
      />

      <FaqSection faqs={faqs} />
      <PasswordManagerSources sources={sources} />
    </article>
  );
}
