import { PAID_PARTNER_LABEL, type PaidPickSpec } from "@/lib/content/paid-picks";
import { AFFILIATE_URLS } from "@/lib/content/providers";

type PaidPickProps = {
  pick: PaidPickSpec;
  className?: string;
};

export function PaidPick({ pick, className = "" }: PaidPickProps) {
  const plain = pick.partner === "protonvpn";
  return (
    <p className={`paid-pick mt-2 text-sm text-[#94a3b8] ${className}`.trim()}>
      Or try a paid pick:{" "}
      <a
        href={AFFILIATE_URLS[pick.partner]}
        target="_blank"
        rel={
          plain
            ? "noopener noreferrer"
            : pick.partner === "hideme"
              ? "sponsored nofollow noopener noreferrer"
              : "nofollow sponsored noopener noreferrer"
        }
        {...(plain ? {} : { "data-partner": pick.partner })}
      >
        {PAID_PARTNER_LABEL[pick.partner]}
      </a>
      {pick.after}
    </p>
  );
}
