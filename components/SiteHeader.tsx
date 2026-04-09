import Link from "next/link";

import { primaryNav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1e293b] bg-[#060a13]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        <Link href="/" className="group flex items-center gap-3" aria-label="Tunnel Report home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#06b6d4] shadow-lg shadow-[#00d4aa]/10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0a0f1e]">
              <path
                d="M12 2L20 6V12C20 17 16.8 21.4 12 23C7.2 21.4 4 17 4 12V6L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path d="M8 12.5L10.5 15L16 9.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white transition group-hover:text-[#00d4aa]">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[#94a3b8] sm:block">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-1 md:flex">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#94a3b8] transition hover:bg-[#111827] hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
