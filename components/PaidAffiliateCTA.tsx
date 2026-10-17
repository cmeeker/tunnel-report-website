"use client";

type PaidAffiliateCTAProps = {
  href: string;
  partner: string;
  label: string;
  className?: string;
};

export function PaidAffiliateCTA({ href, partner, label, className = "" }: PaidAffiliateCTAProps) {
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
      target="_blank"
      rel={
        partner === "hideme"
          ? "sponsored nofollow noopener noreferrer"
          : "nofollow sponsored noopener noreferrer"
      }
    >
      {label}
    </a>
  );
}
