import Link from "next/link";

export function DisclosureBanner() {
  return (
    <aside
      className="rounded-xl border border-[#1e293b] bg-[#111827] px-6 py-4 text-sm text-[#94a3b8]"
      aria-label="Affiliate disclosure"
    >
      <span className="mr-2 inline-block rounded bg-[#1e293b] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#64748b]">
        Disclosure
      </span>
      Tunnel Report may earn a commission through links on this page. Rankings are determined by
      {" "}
      <Link href="/methodology" className="underline decoration-[#1e293b] underline-offset-2 hover:decoration-[#00d4aa]">
        testing methodology
      </Link>
      , not affiliate payouts.
    </aside>
  );
}
