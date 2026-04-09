import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center fade-in-up">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00d4aa]/10 to-[#06b6d4]/10 border border-[#00d4aa]/20">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2L20 6V12C20 17 16.8 21.4 12 23C7.2 21.4 4 17 4 12V6L12 2Z"
            stroke="#00d4aa"
            strokeWidth="1.5"
            fill="rgba(0,212,170,0.08)"
          />
          <path d="M12 8v4" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="15.5" r="0.75" fill="#00d4aa" />
        </svg>
      </div>

      <p className="badge badge-teal mb-5">404 — Page Not Found</p>

      <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        This tunnel leads nowhere.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#64748b]">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Head back to our
        independent VPN rankings.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="affiliate-cta">
          Back to Home
        </Link>
        <Link
          href="/best-vpns"
          className="inline-flex min-h-[52px] items-center rounded-xl border border-[#1e293b] px-6 text-sm font-semibold text-[#94a3b8] transition hover:border-[#00d4aa]/30 hover:text-white"
        >
          See Best VPNs
        </Link>
      </div>
    </div>
  );
}
