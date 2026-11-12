type PaidAffiliateCTAProps = {
  href: string;
  partner: string;
  label: string;
  className?: string;
};

export function PaidAffiliateCTA({ href, partner, label, className = "" }: PaidAffiliateCTAProps) {
  return (
    <a
      href={href}
      data-partner={partner}
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
