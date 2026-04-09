"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

function DropdownPanel({ item, onClose }: { item: PrimaryNavItem; onClose: () => void }) {
  const hasFeatured = !!item.featured;
  const hasColumns = item.columns && item.columns.length > 0;
  if (!hasFeatured && !hasColumns) return null;

  return (
    <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 scale-in">
      <div
        className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0f1e]/90 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
        style={{ minWidth: "520px" }}
      >
        <div className={`grid gap-0 ${hasFeatured && hasColumns ? "grid-cols-[220px_1fr]" : "grid-cols-1"}`}>
          {/* Featured tile */}
          {hasFeatured && item.featured && (
            <Link
              href={item.featured.href}
              onClick={onClose}
              className="group flex flex-col justify-between gap-3 border-r border-white/[0.05] bg-gradient-to-b from-[#00d4aa]/5 to-transparent p-5 transition-colors hover:from-[#00d4aa]/10"
            >
              <div>
                {item.featured.badge && (
                  <span className="mb-2 inline-block rounded-full bg-[#00d4aa]/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[#00d4aa]">
                    {item.featured.badge}
                  </span>
                )}
                <p className="font-semibold leading-snug text-white transition group-hover:text-[#00d4aa]">
                  {item.featured.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  {item.featured.description}
                </p>
              </div>
              <span className="text-xs font-medium text-[#00d4aa] opacity-0 transition-opacity group-hover:opacity-100">
                Read more →
              </span>
            </Link>
          )}

          {/* Link columns */}
          {hasColumns && item.columns && (
            <div className={`p-5 ${!hasFeatured ? "w-full" : ""}`}>
              {item.columns.map((col) => (
                <div key={col.heading}>
                  {col.heading && (
                    <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#475569]">
                      {col.heading}
                    </p>
                  )}
                  <ul className={`grid gap-0.5 ${!hasFeatured ? "grid-cols-2" : "grid-cols-1"}`}>
                    {col.items.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.04]"
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
                            <span className="shrink-0 rounded-full bg-[#1e293b] px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-[#64748b]">
                              {link.badge}
                            </span>
                          ) : (
                            <span className="shrink-0 text-[#00d4aa] opacity-0 transition-opacity group-hover:opacity-100">
                              →
                            </span>
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

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenKey(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleMouseEnter = (label: string, hasDropdown: boolean) => {
    if (!hasDropdown) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenKey(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenKey(null), 120);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#060a13]/75 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="Tunnel Report home">
          <span className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#06b6d4] shadow-lg transition-shadow duration-300 ${scrolled ? "shadow-[#00d4aa]/20" : "shadow-[#00d4aa]/10"}`}>
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

        {/* Nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {primaryNav.map((item) => {
              const hasDropdown = !!(item.featured || (item.columns && item.columns.length > 0));
              const isOpen = openKey === item.label;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label, hasDropdown)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    aria-haspopup={hasDropdown ? "true" : undefined}
                    aria-expanded={isOpen ? "true" : undefined}
                    className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isOpen
                        ? "bg-white/[0.06] text-white"
                        : "text-[#94a3b8] hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {item.label}
                    {hasDropdown && <ChevronDown open={isOpen} />}
                  </Link>

                  {hasDropdown && isOpen && (
                    <DropdownPanel item={item} onClose={() => setOpenKey(null)} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
