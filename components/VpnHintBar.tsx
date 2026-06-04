"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { VpnHintMode } from "@/lib/vpn-hint";

const STORAGE_KEY = "tunnelreport:vpn-hint-dismissed";

type HintResponse = { mode: VpnHintMode; isp?: string };

const COPY: Record<
  Exclude<VpnHintMode, "unknown">,
  { tone: "teal" | "amber"; label: string; body: string }
> = {
  likely_vpn: {
    tone: "teal",
    label: "VPN detected",
    body:
      "Your IP path looks like a commercial VPN or datacenter exit — if that's intentional, you're likely covered. This is a coarse ISP lookup, not a guarantee.",
  },
  unlikely_vpn: {
    tone: "amber",
    label: "No VPN signal",
    body:
      "We don't see obvious VPN provider branding on your current IP path. That is not a guarantee you are unprotected — only a coarse signal.",
  },
};

export function VpnHintBar() {
  const [hint, setHint] = useState<HintResponse | null>(null);
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/vpn-hint", { cache: "no-store" });
        if (!res.ok || cancelled) return;
        const data = (await res.json()) as HintResponse;
        if (!cancelled) setHint(data);
      } catch {
        if (!cancelled) setHint({ mode: "unknown" });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const mode = hint?.mode;
  const config =
    !dismissed && (mode === "likely_vpn" || mode === "unlikely_vpn") ? COPY[mode] : null;
  const activeMode = mode === "likely_vpn" || mode === "unlikely_vpn" ? mode : null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (!config || !activeMode) return null;

  const dotClass =
    config.tone === "teal"
      ? "bg-[#00d4aa]/90 shadow-[0_0_10px_rgba(0,212,170,0.35)]"
      : "bg-amber-400/90 shadow-[0_0_10px_rgba(251,191,36,0.35)]";

  const borderClass =
    config.tone === "teal" ? "border-[#00d4aa]/20" : "border-amber-400/20";

  return (
    <div
      className={`border-b ${borderClass} bg-[#0a0f1e]/95 backdrop-blur-md`}
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 text-xs text-[#94a3b8] md:px-10 lg:px-14">
        <span className={`mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} aria-hidden />
        <p className="min-w-0 flex-1 leading-snug">
          <span className="font-semibold text-[#cbd5e1]">{config.label}:</span> {config.body}{" "}
          {activeMode === "unlikely_vpn" && (
            <Link
              href="/best-vpns"
              className="ml-1 font-medium text-[#00d4aa] underline-offset-2 hover:underline"
            >
              See tested picks
            </Link>
          )}
          {activeMode === "likely_vpn" && (
            <Link
              href="/best-vpns"
              className="ml-1 font-medium text-[#00d4aa] underline-offset-2 hover:underline"
            >
              Compare providers
            </Link>
          )}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-md px-2 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-[#64748b] transition hover:bg-white/[0.06] hover:text-white"
          aria-label="Dismiss connection check"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
