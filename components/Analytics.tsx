import Script from "next/script";

/** GA4 measurement IDs are G- plus letters and digits. Reject anything else so the inline script cannot be injected. */
const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

function gtagBootstrap(gaId: string) {
  return `(function () {
    if (typeof navigator !== "undefined" && navigator.globalPrivacyControl === true) return;
    var gaId = ${JSON.stringify(gaId)};
    var loader = document.createElement("script");
    loader.async = true;
    loader.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(gaId);
    document.head.appendChild(loader);
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", gaId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    document.addEventListener("click", function (event) {
      var node = event.target;
      if (!node) return;
      if (node.nodeType === 3) node = node.parentElement;
      if (!node || typeof node.closest !== "function") return;
      var el = node.closest("[data-partner]");
      if (!el) return;
      var partner = el.getAttribute("data-partner");
      if (!partner) return;
      var anchor = el.closest("a");
      gtag("event", "affiliate_click", {
        partner: partner,
        link_url: anchor && anchor.href ? anchor.href : "",
        page_path: window.location.pathname
      });
    });
  })();`;
}

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
  if (!GA_ID_PATTERN.test(gaId)) return null;

  return (
    <Script id="google-analytics" strategy="afterInteractive">
      {gtagBootstrap(gaId)}
    </Script>
  );
}
