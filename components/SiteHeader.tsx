"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import type { CSSProperties, RefObject } from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import type { PrimaryNavItem } from "@/lib/site";
import { primaryNav, siteConfig } from "@/lib/site";

/** Fixed-position glass — portaled to body so backdrop-filter blurs real page content */
const MEGA_GLASS: CSSProperties = {
  background: "rgba(6, 10, 19, 0.65)",
  backdropFilter: "blur(28px) saturate(1.65)",
  WebkitBackdropFilter: "blur(28px) saturate(1.65)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
};

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

function MegaMenuPanelContent({ item, onClose }: { item: PrimaryNavItem; onClose: () => void }) {
  const hasFeatured = !!item.featured;
  const hasColumns = !!(item.columns && item.columns.length > 0);

  return (
    <div className="overflow-hidden rounded-2xl">
      <div className={`grid gap-0 ${hasFeatured && hasColumns ? "grid-cols-[210px_1fr]" : "grid-cols-1"}`}>
        {hasFeatured && item.featured && (
          <Link
            href={item.featured.href}
            onClick={onClose}
            className="group flex flex-col justify-between gap-3 border-r border-white/[0.06] p-5 transition-colors"
            style={{ background: "linear-gradient(160deg, rgba(0,212,170,0.07) 0%, transparent 70%)" }}
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
          <div className="p-4">
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
                        className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.05]"
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
  );
}

type MegaPortalProps = {
  item: PrimaryNavItem;
  triggerEl: HTMLElement | null;
  onClose: () => void;
  menuRootRef: RefObject<HTMLDivElement | null>;
  onMenuPointerEnter: () => void;
  onMenuPointerLeave: () => void;
};

function MegaMenuPortal({
  item,
  triggerEl,
  onClose,
  menuRootRef,
  onMenuPointerEnter,
  onMenuPointerLeave,
}: MegaPortalProps) {
  const [mounted, setMounted] = useState(false);
  const [box, setBox] = useState({ top: 0, left: 0, width: 520 });

  const updatePosition = useCallback(() => {
    if (!triggerEl) return;
    const rect = triggerEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const pad = 16;
    const width = Math.min(560, vw - pad * 2);
    const left = Math.min(Math.max(pad, rect.right - width), vw - width - pad);
    const top = rect.bottom + 6;
    setBox({ top, left, width });
  }, [triggerEl]);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted || !triggerEl) return;
    updatePosition();
    const ro = new ResizeObserver(updatePosition);
    ro.observe(triggerEl);
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [mounted, triggerEl, updatePosition]);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={menuRootRef}
      className="fixed z-[200] fade-in"
      style={{
        top: box.top,
        left: box.left,
        width: box.width,
        pointerEvents: "auto",
      }}
      onMouseEnter={onMenuPointerEnter}
      onMouseLeave={onMenuPointerLeave}
    >
      <div className="rounded-2xl border border-white/[0.1]" style={MEGA_GLASS}>
        <MegaMenuPanelContent item={item} onClose={onClose} />
      </div>
    </div>,
    document.body,
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <>
      <div
        className="fixed inset-0 z-40 backdrop-blur-sm"
        style={{ background: "rgba(0,0,0,0.55)" }}
        onClick={onClose}
        aria-hidden
      />
      <div
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col"
        style={{
          background: "rgba(6, 9, 18, 0.95)",
          backdropFilter: "blur(28px) saturate(1.5)",
          WebkitBackdropFilter: "blur(28px) saturate(1.5)",
          borderLeft: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "-24px 0 80px rgba(0,0,0,0.6)",
        }}
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
                  <div
                    className="mb-2 ml-3 mt-1 overflow-hidden rounded-xl border border-white/[0.06]"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
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
  const megaMenuRootRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), 220);
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
      if (e.key === "Escape") {
        setOpenKey(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const t = e.target as Node;
      if (headerRef.current?.contains(t)) return;
      if (megaMenuRootRef.current?.contains(t)) return;
      setOpenKey(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleMouseEnter = (label: string, hasDropdown: boolean) => {
    if (!hasDropdown) return;
    cancelClose();
    setOpenKey(label);
  };

  const handleMouseLeave = () => {
    scheduleClose();
  };

  const megaOpen = openKey !== null;
  const openItem = openKey ? primaryNav.find((i) => i.label === openKey) : null;
  const hasOpenDropdown = !!(
    openItem &&
    (openItem.featured || (openItem.columns && openItem.columns.length > 0))
  );
  const triggerEl = openKey ? triggerRefs.current.get(openKey) ?? null : null;

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 transition-[background,border-color,box-shadow,backdrop-filter] duration-500 ease-out"
        style={
          scrolled
            ? {
                background: megaOpen ? "rgba(6, 10, 19, 0.94)" : "rgba(6, 10, 19, 0.75)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                backdropFilter: megaOpen ? "none" : "blur(24px) saturate(1.5)",
                WebkitBackdropFilter: megaOpen ? "none" : "blur(24px) saturate(1.5)",
              }
            : {
                background: "transparent",
                borderBottom: "1px solid transparent",
                boxShadow: "none",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              }
        }
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
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

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => {
                const hasDropdown = !!(item.featured || (item.columns && item.columns.length > 0));
                const isOpen = openKey === item.label;

                return (
                  <li
                    key={item.label}
                    ref={(el) => {
                      if (el) triggerRefs.current.set(item.label, el);
                      else triggerRefs.current.delete(item.label);
                    }}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label, hasDropdown)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Invisible bridge so pointer can reach portaled menu without closing */}
                    {hasDropdown && isOpen && (
                      <div
                        className="absolute left-1/2 top-full z-[60] h-4 w-[min(100vw,520px)] -translate-x-1/2"
                        aria-hidden
                      />
                    )}
                    <Link
                      href={item.href}
                      aria-haspopup={hasDropdown ? "true" : undefined}
                      aria-expanded={isOpen ? "true" : undefined}
                      className={`relative z-[70] flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        isOpen ? "bg-white/[0.06] text-white" : "text-[#94a3b8] hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      {item.label}
                      {hasDropdown && <ChevronDown open={isOpen} />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

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

      {hasOpenDropdown && openItem && (
        <MegaMenuPortal
          item={openItem}
          triggerEl={triggerEl}
          onClose={() => setOpenKey(null)}
          menuRootRef={megaMenuRootRef}
          onMenuPointerEnter={cancelClose}
          onMenuPointerLeave={scheduleClose}
        />
      )}

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </>
  );
}
