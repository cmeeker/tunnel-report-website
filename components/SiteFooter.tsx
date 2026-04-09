import Link from "next/link";

import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Reviews",
    links: [
      { href: "/best-vpns", label: "Best VPNs 2026" },
      { href: "/reviews/nordvpn", label: "NordVPN Review" },
      { href: "/compare/nordvpn-vs-purevpn", label: "NordVPN vs PureVPN" },
    ],
  },
  {
    title: "City Guides",
    links: [
      { href: "/vpn/los-angeles", label: "Los Angeles" },
      { href: "/vpn/new-york", label: "New York" },
      { href: "/vpn/chicago", label: "Chicago" },
      { href: "/vpn/houston", label: "Houston" },
      { href: "/vpn/miami", label: "Miami" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About & Methodology" },
      { href: "/about", label: "Editorial Standards" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#1e293b] bg-[#060a13]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10 lg:px-14">
        <section>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#06b6d4]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#0a0f1e]">
                <path d="M12 2L20 6V12C20 17 16.8 21.4 12 23C7.2 21.4 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
                <path d="M8 12.5L10.5 15L16 9.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-bold text-white">{siteConfig.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#94a3b8]">
            Independent VPN testing, privacy analysis, and editorial coverage built on
            evidence, not affiliate incentives.
          </p>
        </section>
        {columns.map((col) => (
          <section key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748b]">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="glow-line" />
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-[#475569] md:px-10 lg:px-14">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
