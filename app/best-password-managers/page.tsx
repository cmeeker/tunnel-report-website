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
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/schema";
import { getPageOgImageUrl } from "@/lib/seo/share-images";

const title = "Best Password Managers 2026: Prices & Specs Compared";
const description =
  "NordPass, Bitwarden, 1Password, Proton Pass, Dashlane and Keeper compared on published pricing, encryption and audits. Plain answers, no hype.";
const h1 = "Best Password Managers in 2026, Compared on Price and Specs";
const path = "/best-password-managers";

export const metadata: Metadata = {
  ...buildPageMetadata({ title, description, path }),
  title: { absolute: title },
};

const faqs = [
  {
    question: "What is the best password manager in 2026?",
    answer:
      "Based on published specs and pricing, Bitwarden is the best free or low-cost pick, NordPass is the best value on intro pricing, and 1Password suits families.",
  },
  {
    question: "What's the cheapest paid password manager?",
    answer:
      "Bitwarden Premium is $1.65/month, billed annually at $19.80. NordPass Premium shows $1.39/month on a 2-year intro plan. Prices change often, so check the provider's site.",
  },
  {
    question: "Is NordPass safe?",
    answer:
      "NordPass says it uses XChaCha20 encryption with a zero-knowledge design, and it lists ISO 27001 and SOC 2 Type 2 certifications plus independent audits.",
  },
  {
    question: "Is a free password manager good enough?",
    answer: "For one person on a few devices, often yes. Bitwarden, NordPass and Proton Pass all have free plans.",
  },
  {
    question: "Did Tunnel Report test these apps?",
    answer: "No. This page is based on published specs and pricing from each provider.",
  },
];

const sources: PasswordSource[] = [
  { id: "S1", title: "NordPass pricing", publisher: "NordPass", url: sourceUrls.nordpassPricing, year: 2026 },
  { id: "S2", title: "Bitwarden pricing", publisher: "Bitwarden", url: sourceUrls.bitwardenPricing, year: 2026 },
  { id: "S3", title: "1Password pricing", publisher: "1Password", url: sourceUrls.onePasswordPricing, year: 2026 },
  { id: "S4", title: "Proton Pass pricing", publisher: "Proton", url: sourceUrls.protonPricing, year: 2026 },
  { id: "S5", title: "Dashlane personal pricing", publisher: "Dashlane", url: sourceUrls.dashlanePricing, year: 2026 },
  { id: "S6", title: "Keeper personal & family pricing", publisher: "Keeper Security", url: sourceUrls.keeperPricing, year: 2026 },
  { id: "S7", title: "NordPass security", publisher: "NordPass", url: sourceUrls.nordpassSecurity, year: 2026 },
  { id: "S8", title: "Bitwarden compliance & audits", publisher: "Bitwarden", url: sourceUrls.bitwardenAudits, year: 2026 },
  { id: "S9", title: "Bitwarden security white paper", publisher: "Bitwarden", url: sourceUrls.bitwardenWhitePaper, year: 2026 },
  { id: "S10", title: "1Password security", publisher: "1Password", url: sourceUrls.onePasswordSecurity, year: 2026 },
  { id: "S11", title: "Proton Pass security", publisher: "Proton", url: sourceUrls.protonSecurity, year: 2026 },
  { id: "S12", title: "Dashlane security", publisher: "Dashlane", url: sourceUrls.dashlaneSecurity, year: 2026 },
  { id: "S13", title: "Keeper security", publisher: "Keeper Security", url: sourceUrls.keeperSecurity, year: 2026 },
];

export default function BestPasswordManagersPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: h1,
          description,
          path,
          dateModified: PASSWORD_MANAGER_UPDATED,
          datePublished: PASSWORD_MANAGER_UPDATED,
          image: getPageOgImageUrl(path),
          authorName: personas.sarah.name,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Best Password Managers", path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-teal">Published specs and pricing</span>
          <span className="badge badge-violet">Updated {PASSWORD_MANAGER_UPDATED_LABEL}</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">{h1}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          For most people, Bitwarden is the cheapest full-featured pick, NordPass is the best value if you want a polished app at a low intro price, and 1Password suits families who want strong sharing. This ranking is based on published specs and pricing, not hands-on testing. Prices change often, so check the provider&apos;s site.
        </p>
        <AuthorByline persona={personas.sarah} date={PASSWORD_MANAGER_UPDATED_LABEL} />
      </header>

      <AffiliateDisclosure>
        Tunnel Report may earn a commission if you buy NordPass through a link on this page. That&apos;s the only affiliate link here. Every other provider gets a plain link. Our ranking uses published specs and pricing, not payouts.
      </AffiliateDisclosure>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Quick picks</h2>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li>
            <strong>Best value overall: NordPass.</strong> Premium is {prices.nordpassPremiumTwoYearMonthly} on the 2-year plan, {prices.nordpassPremiumTwoYearTotal} for the first 27 months (intro rate) <Cite id="S1" />. <NordPassPricingLink />
          </li>
          <li>
            <strong>Best free and cheapest paid: <PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink>.</strong> There&apos;s a free plan. Premium is {prices.bitwardenPremiumMonthly}, billed annually at {prices.bitwardenPremiumAnnual} <Cite id="S2" />.
          </li>
          <li>
            <strong>Best for families who share a lot: <PricingLink href={pricingUrls.onePassword}>1Password</PricingLink>.</strong> Families is {prices.onePasswordFamiliesPromo} per month with annual billing during the current promotion. The regular price is {prices.onePasswordFamiliesRegular} <Cite id="S3" />.
          </li>
          <li>
            <strong>Best privacy-first suite: <PricingLink href={pricingUrls.protonPass}>Proton Pass</PricingLink>.</strong> Pass Plus is {prices.protonPlusMonthly}, billed at {prices.protonPlusBilled} every 12 months <Cite id="S4" />.
          </li>
          <li>
            <strong>Best bundle with a VPN: <PricingLink href={pricingUrls.dashlane}>Dashlane</PricingLink>.</strong> Premium is {prices.dashlanePremiumMonthly} per month, billed annually, and includes a VPN <Cite id="S5" />.
          </li>
          <li>
            <strong>Best for many vaults in one plan: <PricingLink href={pricingUrls.keeper}>Keeper</PricingLink>.</strong> Keeper Family is {prices.keeperFamilyMonthly} ({prices.keeperFamilyAnnual} billed annually) for 5 private vaults <Cite id="S6" />.
          </li>
        </ul>
        <p>Prices change often, so check the provider&apos;s site.</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How did we pick these?</h2>
        <p>We didn&apos;t run lab tests on password managers, and we won&apos;t pretend we did. This list is based on published specs and pricing. We read each provider&apos;s official pricing page in October 2026 and its security documentation. For each one we looked at four things:</p>
        <ol className="list-decimal space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li><strong>Price you actually pay.</strong> We note whether a number is an intro rate or a regular rate. Where a renewal price isn&apos;t published, we say so and leave it out.</li>
          <li><strong>Encryption and key handling,</strong> as the provider documents it.</li>
          <li><strong>Independent checks,</strong> such as third-party audits and certifications the provider publishes.</li>
          <li><strong>Plan fit,</strong> meaning solo, family or sharing.</li>
        </ol>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Which password manager is cheapest in 2026?</h2>
        <p>
          <PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink>. It has a free plan, and Premium is $1.65 a month, billed annually at {prices.bitwardenPremiumAnnual} <Cite id="S2" />. NordPass Premium has a lower monthly headline on the 2-year plan ({prices.nordpassPremiumTwoYearMonthly}) <Cite id="S1" />, but that&apos;s an intro rate covering the first 27 months, and NordPass doesn&apos;t publish its renewal rate on the pricing page. If the lowest predictable bill matters most, Bitwarden wins. If you want the lowest first-term cost with a more guided app, look at NordPass.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Why is NordPass our value pick?</h2>
        <p>
          NordPass covers what most people need: autosave and autofill, password health, a data breach scanner and file attachments on Premium <Cite id="S1" />. On security, NordPass says it uses XChaCha20 encryption with a zero-knowledge design and Argon2id for master password key derivation <Cite id="S7" />. It also lists ISO 27001 and SOC 2 Type 2 certifications and regular independent third-party audits <Cite id="S7" />. There&apos;s a free plan and a 30-day money-back guarantee on paid plans <Cite id="S1" />.
        </p>
        <p>
          The catch is the intro pricing. {prices.nordpassPremiumTwoYearTotal} covers 27 months. After that, check the renewal rate before you commit, since it isn&apos;t shown up front.
        </p>
        <p>
          <NordPassPricingLink />
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Is Bitwarden really free?</h2>
        <p>
          Yes, there&apos;s a free plan <Cite id="S2" />. <PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink>&apos;s code is open source, and it publishes yearly third-party security audits plus ISO 27001 and HIPAA compliance details <Cite id="S8" />. Its white paper describes end-to-end AES-CBC 256-bit encryption with PBKDF2 SHA-256 or Argon2id key derivation <Cite id="S9" />. The tradeoff is that the apps feel more utilitarian. Full side-by-side: <EditorialLink href="/compare/nordpass-vs-bitwarden">NordPass vs Bitwarden</EditorialLink>.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who should pick 1Password?</h2>
        <p>
          Families and people who share a lot. <PricingLink href={pricingUrls.onePassword}>1Password</PricingLink> pairs your account password with a 128-bit Secret Key, and it says it is SOC 2 Type 2 certified <Cite id="S10" />. The current promo is {prices.onePasswordIndividualPromo} per month for Individual and {prices.onePasswordFamiliesPromo} for Families, billed annually. Regular prices are {prices.onePasswordIndividualRegular} and {prices.onePasswordFamiliesRegular} <Cite id="S3" />. It has no free plan.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What about Proton Pass?</h2>
        <p>
          <PricingLink href={pricingUrls.protonPass}>Proton Pass</PricingLink> suits people who already use Proton Mail or want open-source apps. Proton says all Pass apps are open source, vaults use 256-bit AES-GCM, and Pass has been independently audited <Cite id="S11" />. Pass Plus is {prices.protonPlusMonthly}, billed at {prices.protonPlusBilled} every 12 months. Pass Family is {prices.protonFamilyMonthly}, billed at {prices.protonFamilyBilled} every 12 months <Cite id="S4" />. The page shows both as discounts off higher list prices, and renewal terms aren&apos;t stated.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Is Dashlane worth the higher price?</h2>
        <p>
          Only if you want a VPN in the same bill. <PricingLink href={pricingUrls.dashlane}>Dashlane</PricingLink> Premium is {prices.dashlanePremiumMonthly} per month, billed annually, and includes a VPN. Friends &amp; Family is {prices.dashlaneFamilyMonthly} per month for 10 members <Cite id="S5" />. Dashlane describes a zero-knowledge architecture with local encryption and decryption <Cite id="S12" />.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Is Keeper good for families?</h2>
        <p>
          <PricingLink href={pricingUrls.keeper}>Keeper</PricingLink> Family gives 5 private vaults and 10GB of file storage for {prices.keeperFamilyMonthly} ({prices.keeperFamilyAnnual} billed annually) <Cite id="S6" />. Keeper says it uses AES 256-bit encryption plus elliptic-curve cryptography under a zero-knowledge model <Cite id="S13" />. Add-ons cost extra.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What should you look for in a password manager?</h2>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[#94a3b8]">
          <li><strong>Zero-knowledge encryption.</strong> The provider shouldn&apos;t be able to read your vault. All six here say they work this way <Cite id="S7" /><Cite id="S9" /><Cite id="S10" /><Cite id="S11" /><Cite id="S12" /><Cite id="S13" />.</li>
          <li><strong>Published audits.</strong> Look for named third-party audits or certifications, not just &quot;military-grade&quot; claims.</li>
          <li><strong>Passkey and 2FA support.</strong> Check each provider&apos;s current feature list.</li>
          <li><strong>Renewal price.</strong> Intro deals are fine. Just know what year two costs.</li>
          <li><strong>Easy export.</strong> You should be able to leave.</li>
        </ul>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Do you need a password manager if you already use a VPN?</h2>
        <p>
          They do different jobs. A VPN protects the connection. A password manager protects the logins. Reused passwords stay a risk with or without a VPN. If you&apos;re sorting your VPN first, start with our <EditorialLink href="/best-vpns">best VPNs</EditorialLink> ranking and <EditorialLink href="/best-vpn-for/privacy">best VPN for privacy</EditorialLink> guide.
        </p>
      </section>

      <PriceBarChart
        title="Lowest published annual-equivalent monthly price, single user (USD)"
        bars={[
          { label: "Bitwarden Premium", amountLabel: prices.bitwardenPremiumMonthly, value: 1.65 },
          { label: "NordPass Premium (2-yr intro)", amountLabel: prices.nordpassPremiumTwoYearMonthly, value: 1.39 },
          { label: "1Password Individual (promo)", amountLabel: `${prices.onePasswordIndividualPromo} per month`, value: 2.99 },
          { label: "Proton Pass Plus", amountLabel: prices.protonPlusMonthly, value: 2.99 },
          { label: "Keeper Unlimited", amountLabel: `${prices.keeperUnlimitedMonthly} /month`, value: 3.58 },
          { label: "Dashlane Premium", amountLabel: `${prices.dashlanePremiumMonthly} per month`, value: 5.42 },
        ]}
        source="Source: official pricing pages of each provider, as of Oct 2026. Intro and promo rates noted. Prices change often, so check the provider's site. tunnelreport.com"
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Comparison table</h2>
        <div className="glass-card overflow-x-auto p-2">
          <table className="table-dark">
            <caption className="sr-only">Password manager prices and published encryption, as of October 2026</caption>
            <thead>
              <tr>
                <th scope="col">Provider</th>
                <th scope="col">Free plan</th>
                <th scope="col">Paid plan shown</th>
                <th scope="col">Price as shown</th>
                <th scope="col">Rate type</th>
                <th scope="col">Encryption (per provider)</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">NordPass</th>
                <td>Yes</td>
                <td>Premium, 2-year</td>
                <td>{prices.nordpassPremiumTwoYearMonthly} · {prices.nordpassPremiumTwoYearTotal} for the first 27 months</td>
                <td>Intro</td>
                <td>XChaCha20, zero-knowledge</td>
                <td><Cite id="S1" /><Cite id="S7" /></td>
              </tr>
              <tr>
                <th scope="row"><PricingLink href={pricingUrls.bitwarden}>Bitwarden</PricingLink></th>
                <td>Yes</td>
                <td>Premium, annual</td>
                <td>{prices.bitwardenPremiumMonthlyShown} · billed annually at {prices.bitwardenPremiumAnnual}</td>
                <td>Standard</td>
                <td>AES-CBC 256-bit</td>
                <td><Cite id="S2" /><Cite id="S9" /></td>
              </tr>
              <tr>
                <th scope="row"><PricingLink href={pricingUrls.onePassword}>1Password</PricingLink></th>
                <td>No</td>
                <td>Individual, annual</td>
                <td>{prices.onePasswordIndividualPromo} per month (regular {prices.onePasswordIndividualRegular})</td>
                <td>Promo</td>
                <td>Password + 128-bit Secret Key</td>
                <td><Cite id="S3" /><Cite id="S10" /></td>
              </tr>
              <tr>
                <th scope="row"><PricingLink href={pricingUrls.protonPass}>Proton Pass</PricingLink></th>
                <td>Yes</td>
                <td>Pass Plus, 12 months</td>
                <td>{prices.protonPlusMonthly} · billed at {prices.protonPlusBilled} every 12 months</td>
                <td>Discounted</td>
                <td>256-bit AES-GCM</td>
                <td><Cite id="S4" /><Cite id="S11" /></td>
              </tr>
              <tr>
                <th scope="row"><PricingLink href={pricingUrls.dashlane}>Dashlane</PricingLink></th>
                <td>—</td>
                <td>Premium, annual</td>
                <td>{prices.dashlanePremiumMonthly} Per month, billed annually</td>
                <td>Standard</td>
                <td>Zero-knowledge, local encryption</td>
                <td><Cite id="S5" /><Cite id="S12" /></td>
              </tr>
              <tr>
                <th scope="row"><PricingLink href={pricingUrls.keeper}>Keeper</PricingLink></th>
                <td>—</td>
                <td>Keeper Unlimited, annual</td>
                <td>{prices.keeperUnlimitedMonthly} /month · {prices.keeperUnlimitedAnnual} billed annually</td>
                <td>Standard</td>
                <td>AES 256-bit + ECC</td>
                <td><Cite id="S6" /><Cite id="S13" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#64748b]">Prices as of Oct 2026 from each provider&apos;s official pricing page. Prices change often, so check the provider&apos;s site.</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Verdict</h2>
        <p>Pick Bitwarden if you want free or the cheapest predictable bill. Pick NordPass for a low intro price and a polished app. Pick 1Password for family sharing. All picks are based on published specs and pricing. Prices change often, so check the provider&apos;s site.</p>
      </section>

      <RelatedLinks
        links={[
          { href: "/reviews/nordpass", label: "NordPass Review" },
          { href: "/compare/nordpass-vs-bitwarden", label: "NordPass vs Bitwarden" },
          { href: "/reviews/nordvpn", label: "NordVPN Review" },
          { href: "/best-vpns", label: "Best VPNs" },
          { href: "/best-vpn-for/privacy", label: "Best VPN for Privacy" },
          { href: "/methodology", label: "Methodology" },
        ]}
      />

      <FaqSection faqs={faqs} />
      <PasswordManagerSources sources={sources} />
    </article>
  );
}
