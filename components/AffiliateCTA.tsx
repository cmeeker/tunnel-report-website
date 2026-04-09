type AffiliateCTAProps = {
  href: string;
  partner: string;
  label: string;
  className?: string;
};

export function AffiliateCTA({ href, partner, label, className = "" }: AffiliateCTAProps) {
  return (
    <a
      href={href}
      data-partner={partner}
      className={`affiliate-cta ${className}`.trim()}
      rel="sponsored noopener noreferrer"
    >
      {label}
    </a>
  );
}
