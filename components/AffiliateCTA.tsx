import { PaidAffiliateCTA } from "@/components/PaidAffiliateCTA";

type AffiliateCTAProps = {
  href: string;
  partner: string;
  label: string;
  className?: string;
};

/** Tracked paid partners. ExpressVPN is unpaid and must not be serialized as a partner prop. */
const PAID_PARTNERS = new Set(["nordvpn", "nordpass", "surfshark", "purevpn", "hideme"]);

export function AffiliateCTA({ href, partner, label, className = "" }: AffiliateCTAProps) {
  if (PAID_PARTNERS.has(partner)) {
    return <PaidAffiliateCTA href={href} partner={partner} label={label} className={className} />;
  }

  return (
    <a
      href={href}
      className={`affiliate-cta ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
