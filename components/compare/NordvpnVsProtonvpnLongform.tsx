import { AffiliateCTA } from "@/components/AffiliateCTA";

const linkClassName =
  "font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]";

export function NordvpnVsProtonvpnLongform() {
  return (
    <div className="space-y-10">
      <section className="prose-dark space-y-4">
        <p>
          <strong>Affiliate disclosure.</strong> Tunnel Report earns a commission if you buy through outbound links on
          this page. That does not change scores, category winners, or the use-case recommendation. Editorial scoring
          is walled off from commercial relationships; the method is on our{" "}
          <a href="/methodology" className={linkClassName}>
            methodology
          </a>{" "}
          page. Read this page before you click a buy link.
        </p>

        <p>
          <strong>Verification.</strong> NordVPN prices were re-checked on the public pricing page on 1 September 2026.
          Proton VPN’s public pricing page did not expose dollar amounts in the fetched HTML (JavaScript placeholders
          only), so we do not invent a Proton monthly rate. Speed figures below are Tunnel Report’s own April 2026
          medians from the{" "}
          <a href="/reviews/nordvpn" className={linkClassName}>
            NordVPN review
          </a>{" "}
          and{" "}
          <a href="/reviews/protonvpn" className={linkClassName}>
            Proton VPN review
          </a>
          , not new lab runs.
        </p>

        <p>
          <strong>Use-case verdict, not a trophy.</strong> NordVPN is the household default if you want the higher
          speed floor, more consistent streaming, and a mature app. Proton VPN is the better pick if you want public
          audit PDFs, open-source clients, Swiss legal posture, and a credible free tier — even if that means giving
          up throughput.
        </p>
      </section>

      <section className="space-y-4">
        <div className="glass-card overflow-x-auto">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Use case</th>
                <th>Pick</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Daily household VPN, 4K, remote work</td>
                <td>
                  <strong>NordVPN</strong>
                </td>
                <td>Higher domestic median and a higher observed speed floor in our April 2026 cycle.</td>
              </tr>
              <tr>
                <td>Streaming geo-unblocking</td>
                <td>
                  <strong>NordVPN</strong>
                </td>
                <td>More consistent in our qualitative streaming notes. We do not publish invented Netflix win rates.</td>
              </tr>
              <tr>
                <td>Verifiable no-logs + open-source apps</td>
                <td>
                  <strong>Proton VPN</strong>
                </td>
                <td>
                  Fifth annual Securitum infrastructure audit; 2025 report is a public PDF. Apps are on GitHub.
                </td>
              </tr>
              <tr>
                <td>Swiss jurisdiction / Proton Mail–Drive stack</td>
                <td>
                  <strong>Proton VPN</strong>
                </td>
                <td>Proton AG, Geneva. Value is strongest if you already pay for the ecosystem.</td>
              </tr>
              <tr>
                <td>Try before you pay</td>
                <td>
                  <strong>Proton VPN</strong>
                </td>
                <td>
                  Audited no-logs free plan. NordVPN has no free tier; it sells a 30-day money-back window on the first
                  term.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="glass-card flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between">
          <AffiliateCTA
            href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=145333&url_id=902"
            partner="nordvpn"
            label="Visit NordVPN"
          />
          <AffiliateCTA
            href="https://go.getproton.me/aff_c?offer_id=26&aff_id=19779"
            partner="protonvpn"
            label="Visit Proton VPN"
          />
        </div>

        <section className="prose-dark space-y-4">
          <p>Visit NordVPN and Visit Proton VPN CTA rows use the tracked hrefs above.</p>
        </section>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Category-by-category</h2>
        <p>
          Speed data from the Tunnel Report April 2026 benchmark suite, reported as medians. Pricing from provider
          websites, re-checked 1 September 2026. See{" "}
          <a href="/guides/how-we-test-vpn-speed" className={linkClassName}>
            How we test VPN speed
          </a>
          .
        </p>

        <div className="glass-card overflow-x-auto">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Category</th>
                <th>Advantage</th>
                <th>NordVPN</th>
                <th>Proton VPN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Domestic speed (median)</td>
                <td>NordVPN</td>
                <td>
                  <strong>905 Mbps</strong>
                </td>
                <td>650 Mbps</td>
              </tr>
              <tr>
                <td>Transatlantic (US → London)</td>
                <td>NordVPN</td>
                <td>
                  <strong>720 Mbps</strong>
                </td>
                <td>520 Mbps</td>
              </tr>
              <tr>
                <td>Speed floor (lowest domestic observed)</td>
                <td>NordVPN</td>
                <td>
                  <strong>780 Mbps</strong>
                </td>
                <td>480 Mbps</td>
              </tr>
              <tr>
                <td>Open source</td>
                <td>Proton VPN</td>
                <td>Closed-source apps</td>
                <td>Open-source clients (GitHub)</td>
              </tr>
              <tr>
                <td>Audit PDF access</td>
                <td>Proton VPN</td>
                <td>Deloitte ISAE 3000; full report behind Nord Account login</td>
                <td>Securitum annual reports; 2025 PDF is public</td>
              </tr>
              <tr>
                <td>Jurisdiction</td>
                <td>Draw, different risks</td>
                <td>Panama (Tefincom / NordVPN); parent Nord Security in the Netherlands</td>
                <td>Switzerland (Proton AG, Geneva)</td>
              </tr>
              <tr>
                <td>Streaming</td>
                <td>NordVPN</td>
                <td>Very consistent in our notes</td>
                <td>Moderate success; skip if streaming is the primary job</td>
              </tr>
              <tr>
                <td>Free tier</td>
                <td>Proton VPN</td>
                <td>None</td>
                <td>Credible free plan (1 device, limited countries)</td>
              </tr>
              <tr>
                <td>App reliability</td>
                <td>NordVPN</td>
                <td>Mature across platforms</td>
                <td>Good, more technical</td>
              </tr>
              <tr>
                <td>Composite score (our reviews)</td>
                <td>NordVPN</td>
                <td>4.8 / 5</td>
                <td>4.4 / 5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Those scores are from our standalone reviews, not a new head-to-head trophy. NordVPN still leads the{" "}
          <a href="/best-vpns" className={linkClassName}>
            2026 rankings
          </a>
          . Proton VPN is ranked for transparency, not for beating NordVPN on throughput.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Speed: NordVPN’s floor is the actual story</h2>
        <p>
          Twelve sessions per route, publish the median. April 2026 NordVPN review: 905 domestic, 720 London, 685
          Frankfurt, 780 floor. Proton VPN review: 650 / 520 / 490 / 480. NordVPN wins this category. Proton adequate,
          not close. 4K ~25 Mbps. Do not paper over Proton’s evening transatlantic variability.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Privacy and audits: two different kinds of proof</h2>

        <h3 className="text-xl font-bold text-white">NordVPN — cadence, not a public PDF</h3>
        <p>
          Six independent reviews. Sixth: Deloitte Lithuania, ISAE 3000 (Revised), fieldwork 10 November – 12 December
          2025, report 12 December 2025, blog 3 February 2026. Full Deloitte report is not public (Nord Account login).
          RAM-only diskless servers (explainer 28 August 2024). Panama operating jurisdiction; Nord Security
          Netherlands.
        </p>

        <h3 className="text-xl font-bold text-white">Proton VPN — public PDFs, open clients, court-tested empty logs</h3>
        <p>
          2025 Securitum PDF opened: 18 August 2025 – 19 September 2025; on-site 18–20 August 2025 Zürich; Martin
          Matyja, Maciej Szymczak; bare-metal Proton AG owns. Conclusion: no user activity logging / connection
          metadata / traffic inspection contradicting no-logs. 2026 Securitum quoted on Proton blog; Drive{" "}
          <a href="https://drive.proton.me/urls/DZVEJZFYHM#FPSKdUEykprb" className={linkClassName}>
            https://drive.proton.me/urls/DZVEJZFYHM#FPSKdUEykprb
          </a>
          ; guessed Securitum 2026 PDF 404. Treat 2026 as published by Proton, not independently downloaded. Apps open
          source{" "}
          <a href="https://github.com/ProtonVPN" className={linkClassName}>
            github.com/ProtonVPN
          </a>
          . Transparency report through June 2026: 458 Swiss orders, every request denied (47 of 47 through June 2026;
          59 of 59 in 2025).
        </p>

        <p>Who wins privacy: Proton transparency; NordVPN audit cadence with login wall disclosed.</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Jurisdiction: Panama vs Switzerland is a draw with different failure modes
        </h2>
        <p>
          Neither Five Eyes. Proton AG Route de la Galaise 32, 1228 Plan-les-Ouates, Geneva, Proton Foundation. FADP
          SR 235.1 in force 1 September 2023 is general data protection not a VPN logging mandate. Call it a draw.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Streaming: NordVPN, without fake win rates</h2>
        <p>
          No invented Netflix/Hulu/BBC percentages. NordVPN more consistent. Proton marketing claims streaming on Plus;
          our qualitative result is weaker.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Free tier and trying the product</h2>
        <p>
          Proton Free: unlimited data, 1 device, 10 randomly selected countries (plans explained article; homepage may
          say 5). NordVPN no free tier; 30-day money-back on first term only. Proton terms §9 23 June 2026: 30-day
          refund official channels, one per user.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Apps, devices, and network claims</h2>
        <p>
          Both 10 simultaneous connections. NordVPN thousands of servers 224+ locations, NordLynx. Proton Plus 20,000+
          servers 140+ countries. Price Basic not Complete/Prime extras.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Pricing: what we could verify on 1 September 2026</h2>
        <p>
          NordVPN live nordvpn.com/pricing: 2-year+3mo Basic $3.49 intro, $94.23 / 27 months, renews $139.08/year;
          Complete $4.49 / $121.23 / $219.48; Prime $7.49 / $202.23 / $296.28; 1-year Basic $5.49 / $65.88; 1-month
          $14.99. Year-two $11.59/mo. Older blog $2.99 is stale. Proton HTML $XX.XX placeholders — do not invent Plus
          USD. Free $0; Plus standalone; Unlimited ecosystem.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who should actually buy which</h2>
        <p>
          NordVPN household speed/streaming, budget $139.08 renewal. Proton transparency/open-source/Swiss/suite, start
          Free. Do not buy a VPN for coffee-shop Wi-Fi once a year. No overall trophy.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">FAQ</h2>
        <p>
          Safer for whom / streaming NordVPN no fake % / NordVPN Deloitte not independently read / Proton 2025 Securitum
          yes, 2026 not downloaded / try Proton free vs Nord 30-day / cheaper NordVPN Basic verified $3.49 intro
          $139.08 renewal, Proton dollars not verified.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Related coverage</h2>
        <p className="flex flex-wrap gap-x-3 gap-y-2">
          <a href="/reviews/nordvpn" className={linkClassName}>
            /reviews/nordvpn
          </a>
          <a href="/reviews/protonvpn" className={linkClassName}>
            /reviews/protonvpn
          </a>
          <a href="/methodology" className={linkClassName}>
            /methodology
          </a>
          <a href="/guides/how-we-test-vpn-speed" className={linkClassName}>
            /guides/how-we-test-vpn-speed
          </a>
          <a href="/best-vpns" className={linkClassName}>
            /best-vpns
          </a>
          <a href="/compare/mullvad-vs-protonvpn" className={linkClassName}>
            /compare/mullvad-vs-protonvpn
          </a>
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Sources &amp; References (ALL 28 required)</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-[#cbd5e1]">
          <li>
            <a href="https://tunnelreport.com/compare/nordvpn-vs-protonvpn" className={linkClassName}>
              tunnelreport.com/compare/nordvpn-vs-protonvpn
            </a>{" "}
            fetched 1 Sep 2026
          </li>
          <li>tunnelreport.com/reviews/nordvpn April 2026 medians 905/720/685/780</li>
          <li>tunnelreport.com/reviews/protonvpn 650/520/490/480</li>
          <li>tunnelreport.com/methodology</li>
          <li>tunnelreport.com/guides/how-we-test-vpn-speed</li>
          <li>tunnelreport.com/best-vpns</li>
          <li>
            <a href="https://nordvpn.com/pricing/" className={linkClassName}>
              https://nordvpn.com/pricing/
            </a>{" "}
            live intro/renewal
          </li>
          <li>
            <a href="https://nordvpn.com/blog/how-much-does-nordvpn-cost/" className={linkClassName}>
              https://nordvpn.com/blog/how-much-does-nordvpn-cost/
            </a>{" "}
            24 Oct 2025 stale $2.99
          </li>
          <li>
            <a href="https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/" className={linkClassName}>
              https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/
            </a>{" "}
            3 Feb 2026 Deloitte PDF not public
          </li>
          <li>
            <a href="https://nordvpn.com/features/no-log-vpn/" className={linkClassName}>
              https://nordvpn.com/features/no-log-vpn/
            </a>
          </li>
          <li>
            <a href="https://nordvpn.com/blog/ram-based-servers/" className={linkClassName}>
              https://nordvpn.com/blog/ram-based-servers/
            </a>{" "}
            28 Aug 2024
          </li>
          <li>
            <a
              href="https://support.nordvpn.com/hc/en-us/articles/19441152966161-Where-is-NordVPN-based"
              className={linkClassName}
            >
              https://support.nordvpn.com/hc/en-us/articles/19441152966161-Where-is-NordVPN-based
            </a>
          </li>
          <li>
            <a
              href="https://support.nordvpn.com/hc/en-us/articles/19476991311121-What-is-your-refund-policy"
              className={linkClassName}
            >
              https://support.nordvpn.com/hc/en-us/articles/19476991311121-What-is-your-refund-policy
            </a>
          </li>
          <li>
            <a href="https://protonvpn.com/" className={linkClassName}>
              https://protonvpn.com/
            </a>{" "}
            USD not in fetched HTML
          </li>
          <li>
            <a href="https://protonvpn.com/pricing" className={linkClassName}>
              https://protonvpn.com/pricing
            </a>{" "}
            placeholders
          </li>
          <li>
            <a href="https://protonvpn.com/support/proton-vpn-plans" className={linkClassName}>
              https://protonvpn.com/support/proton-vpn-plans
            </a>
          </li>
          <li>
            <a href="https://protonvpn.com/blog/no-logs-audit" className={linkClassName}>
              https://protonvpn.com/blog/no-logs-audit
            </a>
          </li>
          <li>
            <a
              href="https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf"
              className={linkClassName}
            >
              https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf
            </a>{" "}
            also{" "}
            <a
              href="https://securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf"
              className={linkClassName}
            >
              https://securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf
            </a>
          </li>
          <li>
            <a href="https://drive.proton.me/urls/DZVEJZFYHM#FPSKdUEykprb" className={linkClassName}>
              https://drive.proton.me/urls/DZVEJZFYHM#FPSKdUEykprb
            </a>{" "}
            2026 Drive, 2026 public PDF 404
          </li>
          <li>
            <a href="https://protonvpn.com/features/no-logs-policy" className={linkClassName}>
              https://protonvpn.com/features/no-logs-policy
            </a>
          </li>
          <li>
            <a href="https://protonvpn.com/support/no-logs-vpn/" className={linkClassName}>
              https://protonvpn.com/support/no-logs-vpn/
            </a>
          </li>
          <li>
            <a href="https://protonvpn.com/blog/open-source" className={linkClassName}>
              https://protonvpn.com/blog/open-source
            </a>{" "}
            updated 1 Dec 2025
          </li>
          <li>
            <a href="https://github.com/ProtonVPN" className={linkClassName}>
              https://github.com/ProtonVPN
            </a>
          </li>
          <li>
            <a href="https://protonvpn.com/blog/transparency-report" className={linkClassName}>
              https://protonvpn.com/blog/transparency-report
            </a>{" "}
            458/458 denied
          </li>
          <li>
            <a href="https://protonvpn.com/terms-and-conditions" className={linkClassName}>
              https://protonvpn.com/terms-and-conditions
            </a>{" "}
            last modified 23 June 2026
          </li>
          <li>
            <a href="https://www.fedlex.admin.ch/eli/cc/2022/491/en" className={linkClassName}>
              https://www.fedlex.admin.ch/eli/cc/2022/491/en
            </a>{" "}
            FADP SR 235.1
          </li>
          <li>
            <a href="https://www.ic3.gov/AnnualReport/Reports/2023_IC3Report.pdf" className={linkClassName}>
              https://www.ic3.gov/AnnualReport/Reports/2023_IC3Report.pdf
            </a>
          </li>
          <li>
            <a href="https://freedomhouse.org/report/freedom-net/2024/struggle-trust-online" className={linkClassName}>
              https://freedomhouse.org/report/freedom-net/2024/struggle-trust-online
            </a>
          </li>
        </ol>

        <p>End: Prices and audit-access notes verified 1 September 2026. Confirm at checkout.</p>
      </section>
    </div>
  );
}

