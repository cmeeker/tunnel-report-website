import type { ReactNode } from "react";
import type { Metadata } from "next";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AFFILIATE_URLS } from "@/lib/content/providers";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/schema";

const pageTitle = "Privacy Policy";
const pageDescription =
  "How Tunnel Report collects, uses, and keeps data, including Google Analytics 4 and Vercel Web Analytics.";
const effectiveDate = "October 21, 2026";

const linkClassName =
  "font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/privacy",
  type: "website",
});

function MailLink({ address }: { address: string }) {
  return (
    <a href={`mailto:${address}`} className={linkClassName}>
      {address}
    </a>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: pageTitle,
          description: pageDescription,
          path: "/privacy",
          datePublished: "2026-10-21",
          dateModified: "2026-10-21",
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-lg font-semibold text-white">Effective date: {effectiveDate}</p>
      </header>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who we are</h2>
        <p>
          Tunnel Report (tunnelreport.com) reviews VPNs and password managers. The site is run by
          Strand and Stone LLC, a New Mexico limited liability company (&quot;we,&quot; &quot;us&quot;).
          If you have questions about this policy, email <MailLink address="robert@strandandstonellc.com" />.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What we collect</h2>
        <p>
          The site has no accounts, no forms and no email signup, so we don&apos;t ask you for your
          name, email or other contact details.
        </p>
        <p>We do collect some data automatically when you visit:</p>
        <ul className="list-disc space-y-2 pl-5 text-[#94a3b8]">
          <li>
            <strong>Google Analytics 4 (GA4).</strong> GA4 records the pages you view, the links you
            click (including clicks on partner links, which we log as an &quot;affiliate_click&quot;
            event), your approximate location, browser, device type, operating system, referring site
            and when you visited. GA4 processes your IP address to estimate your location. It does not
            log or store IP addresses.
          </li>
          <li>
            <strong>Vercel.</strong> Our host, Vercel, keeps standard server logs, which include your
            IP address, the requested URL, the time of the request, your browser&apos;s user agent and
            the referrer. Vercel uses these logs to run and secure the site. We also use Vercel Web
            Analytics, which counts page views and collects basic device and referrer data without
            using cookies.
          </li>
        </ul>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Cookies</h2>
        <p>
          GA4 sets first-party cookies, such as <code>_ga</code> and <code>{"_ga_<ID>"}</code>, to
          tell repeat visits apart and measure how the site is used. We don&apos;t use any other
          advertising cookies.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Affiliate links and partner cookies</h2>
        <p>
          Some links on the site are tracked affiliate or referral links. They go to NordVPN
          (go.nordvpn.net), NordPass (go.nordpass.io), Proton (go.getproton.me), Surfshark
          (get.surfshark.net), PureVPN (billing.purevpn.com) and hide.me. If you click one and buy
          something, we may earn a commission. After you click, the partner or its tracking network
          may set its own cookies and collect data under its own privacy policy. We don&apos;t control
          that data, so please read the partner&apos;s policy.
        </p>
        <div>
          <AffiliateCTA href={AFFILIATE_URLS.nordvpn} partner="nordvpn" label="Visit NordVPN" />
        </div>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How we use the data</h2>
        <p>We use this data to:</p>
        <ul className="list-disc space-y-2 pl-5 text-[#94a3b8]">
          <li>see which pages and reviews people read and which partner links they click</li>
          <li>keep the site running, fix problems and protect it from abuse</li>
          <li>get credit for affiliate commissions</li>
        </ul>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          No sale of personal information and no targeted ads
        </h2>
        <p>
          We don&apos;t sell your personal information, and we don&apos;t share it for cross-context
          behavioral (targeted) advertising. The site shows no ads. GA4&apos;s Google signals and ads
          personalization features are turned off.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Your choices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[#94a3b8]">
          <li>
            <strong>Google Analytics opt-out:</strong> install Google&apos;s opt-out browser add-on (
            <ExternalLink href="https://tools.google.com/dlpage/gaoptout">
              https://tools.google.com/dlpage/gaoptout
            </ExternalLink>
            ).
          </li>
          <li>
            <strong>Block cookies:</strong> you can block or delete cookies in your browser settings.
            The site still works without them.
          </li>
          <li>
            <strong>Global Privacy Control (GPC):</strong> we treat a GPC signal as a request to opt
            out of the sale or sharing of personal information. Since we don&apos;t sell or share it
            anyway, nothing changes in how we handle your data.
          </li>
        </ul>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How long we keep data</h2>
        <p>
          GA4 data is kept for 14 months and then deleted. Vercel keeps server logs for its standard
          retention period.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Your US state privacy rights</h2>
        <p>
          Depending on the state you live in, you may have the right to ask what personal information
          we have about you, to correct it, to delete it, or to opt out of its sale or sharing. To
          make a request, email <MailLink address="robert@strandandstonellc.com" />. We&apos;ll
          respond within 45 days. We may need some information from you to verify your request.
          Because we don&apos;t collect names or emails, we may not be able to link analytics data to
          you. We won&apos;t treat you differently for using these rights.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Children</h2>
        <p>
          The site is meant for a US audience and is not directed at children under 13. We don&apos;t
          knowingly collect personal information from children under 13. If you think a child has
          given us personal information, email us and we&apos;ll delete it.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Security</h2>
        <p>
          We use the security that comes with our hosting provider, including HTTPS on every page. No
          method of sending or storing data online is completely secure.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Changes to this policy</h2>
        <p>
          If we change this policy, we&apos;ll post the new version on this page and update the
          effective date.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <p>
          Strand and Stone LLC, <MailLink address="robert@strandandstonellc.com" />
        </p>
      </section>
    </article>
  );
}
