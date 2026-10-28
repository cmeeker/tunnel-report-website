export function DisclosureBanner() {
  return (
    <aside
      className="rounded-xl border border-[#1e293b] bg-[#111827] px-6 py-4 text-sm text-[#94a3b8]"
      aria-label="Affiliate disclosure"
    >
      <span className="mr-2 inline-block rounded bg-[#1e293b] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#64748b]">
        Disclosure
      </span>
      Our picks are based on published specs, pricing and third-party reports. We may earn a commission from some links.
    </aside>
  );
}
