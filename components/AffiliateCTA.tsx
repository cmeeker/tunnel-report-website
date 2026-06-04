"use client";

type AffiliateCTAProps = {
  href: string;
  partner: string;
  label: string;
  className?: string;
};

export function AffiliateCTA({ href, partner, label, className = "" }: AffiliateCTAProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", "affiliate_click", {
        partner,
        link_url: href,
        event_category: "affiliate",
        event_label: partner,
      });
    }
  };

  return (
    <a
      href={href}
      data-partner={partner}
      onClick={handleClick}
      className={`affiliate-cta ${className}`.trim()}
      rel="sponsored noopener noreferrer"
    >
      {label}
    </a>
  );
}
