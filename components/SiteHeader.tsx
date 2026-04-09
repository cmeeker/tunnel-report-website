"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import type { PrimaryNavItem } from "@/lib/site";
import { primaryNav, siteConfig } from "@/lib/site";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className={`ml-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopDropdown({ item, onClose }: { item: PrimaryNavItem; onClose: () => void }) {
  const hasFeatured = !!item.featured;
  const hasColumns = !!(item.columns && item.columns.length > 0);
  if (!hasFeatured && !hasColumns) return null;

  return (
    <div className="absolute right-0 top-full z-[100] mt-2" style={{ width: "min(560px, calc(100vw - 2rem))" }}>
      <div className="liquid-menu-glass rounded-2xl border border-white/[0.08]">
        <div className={`grid gap-0 ${hasFeatured && hasColumns ? "grid-cols-[210px_1fr]" : "grid-cols-1"}`}>
          {hasFeatured && item.featured && (
            <Link
              href={item.featured.href}
              onClick={onClose}
              className="group relative z-10 flex flex-col justify-between gap-3 border-r border-white/[0.06] p-5 transition-colors hover:bg-white/[0.03]"
            >
              <div>
                {item.featured.badge && (
                  <span className="mb-2 inline-block rounded-full bg-[#00d4aa]/10 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-[#00d4aa]">
                    {item.featured.badge}
                  </span>
                )}
                <p className="font-semibold leading-snug text-white transition group-hover:text-[#00d4aa]">
                  {item.featured.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">{item.featured.description}</p>
              </div>
              <span className="text-xs font-medium text-[#00d4aa] opacity-0 transition-opacity group-hover:opacity-100">
                Read more →
              </span>
            </Link>
          )}

          {hasColumns && item.columns && (
            <div className="relative z-10 p-4">
              {item.columns.map((col) => (
                <div key={col.heading}>
                  {col.heading && (
                    <p className="mb-2.5 px-2 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#475569]">
                      {col.heading}
                    </p>
                  )}
                  <ul className={`grid gap-0.5 ${!hasFeatured ? "grid-cols-2" : "grid-cols-1"}`}>
                    {col.items.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.06]"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-[#cbd5e1] transition group-hover:text-white">
                              {link.label}
                            </p>
                            {link.description && (
                              <p className="truncate text-xs text-[#475569]">{link.description}</p>
                            )}
                          </div>
                          {link.badge ? (
                            <span className="shrink-0 rounded-full bg-[#1e293b] px-2 py-0.5 text-[0.58rem] font-medium uppercase tracking-wide text-[#64748b]">
                              {link.badge}
                            </span>
                          ) : (
                            <span className="shrink-0 text-[#00d4aa] opacity-0 transition-opacity group-hover:opacity-100">→</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} aria-hidden />
      <div
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-white/[0.07]"
        style={{ background: "#080d1a", boxShadow: "-24px 0 80px rgba(0,0,0,0.6)" }}
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#06b6d4]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#0a0f1e]">
                <path d="M12 2L20 6V12C20 17 16.8 21.4 12 23C7.2 21.4 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
                <path d="M8 12.5L10.5 15L16 9.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-bold text-white">{siteConfig.name}</span>
          </Link>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#64748b] transition hover:bg-white/[0.06] hover:text-white"
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] transition hover:bg-white/[0.05] hover:text-white"
          >
            Home
          </Link>

          {primaryNav.map((item) => {
            const hasDropdown = !!(item.featured || (item.columns && item.columns.length > 0));
            const isOpen = openSection === item.label;

            return (
              <div key={item.label}>
                <button
                  onClick={() => setOpenSection(isOpen ? null : item.label)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] transition hover:bg-white/[0.05] hover:text-white"
                >
                  <span>{item.label}</span>
                  {hasDropdown && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                {hasDropdown && isOpen && (
                  <div className="mb-2 ml-3 mt-1 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0a0f1e]">
                    {item.featured && (
                      <Link
                        href={item.featured.href}
                        onClick={onClose}
                        className="block border-b border-white/[0.05] px-4 py-3 transition hover:bg-white/[0.04]"
                      >
                        <p className="text-sm font-semibold text-[#00d4aa]">{item.featured.label}</p>
                        <p className="mt-0.5 text-xs text-[#475569]">{item.featured.description}</p>
                      </Link>
                    )}
                    {item.columns?.map((col) => (
                      <div key={col.heading} className="px-2 py-2">
                        {col.heading && (
                          <p className="px-2 pb-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#475569]">
                            {col.heading}
                          </p>
                        )}
                        {col.items.map((link) => (
                          <Link
                            key={link.href + link.label}
                            href={link.href}
                            onClick={onClose}
                            className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-[#94a3b8] transition hover:bg-white/[0.04] hover:text-white"
                          >
                            <span>{link.label}</span>
                            {link.badge && (
                              <span className="rounded-full bg-[#1e293b] px-2 py-0.5 text-[0.58rem] font-medium uppercase tracking-wide text-[#64748b]">
                                {link.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-white/[0.06] px-5 py-4">
          <Link href="/best-vpns" onClick={onClose} className="affiliate-cta w-full justify-center">
            See 2026 VPN Rankings
          </Link>
        </div>
      </div>
    </>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenKey(null); setMobileOpen(false); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenKey(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50"
        style={
          scrolled
            ? {
                background: "rgba(6, 10, 19, 0.88)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                backdropFilter: "blur(24px) saturate(1.5)",
                WebkitBackdropFilter: "blur(24px) saturate(1.5)",
                transition: "background 0.5s, border-color 0.5s, box-shadow 0.5s",
              }
            : {
                background: "transparent",
                borderBottom: "1px solid transparent",
                boxShadow: "none",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                transition: "background 0.5s, border-color 0.5s, box-shadow 0.5s",
              }
        }
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Tunnel Report home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#06b6d4] shadow-lg shadow-[#00d4aa]/10 transition-shadow duration-300 group-hover:shadow-[#00d4aa]/25">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0a0f1e]">
                <path d="M12 2L20 6V12C20 17 16.8 21.4 12 23C7.2 21.4 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
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

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => {
                const hasDropdown = !!(item.featured || (item.columns && item.columns.length > 0));
                const isOpen = openKey === item.label;

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (hasDropdown) { cancelClose(); setOpenKey(item.label); }
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup={hasDropdown ? "true" : undefined}
                      aria-expanded={isOpen ? "true" : undefined}
                      className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        isOpen ? "bg-white/[0.06] text-white" : "text-[#94a3b8] hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      {item.label}
                      {hasDropdown && <ChevronDown open={isOpen} />}
                    </Link>
                    {hasDropdown && isOpen && (
                      <DesktopDropdown item={item} onClose={() => setOpenKey(null)} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#94a3b8] transition hover:bg-white/[0.06] hover:text-white md:hidden"
            aria-label="Open navigation"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </>
  );
}
