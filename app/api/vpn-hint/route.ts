import { inferVpnHintMode, type VpnHintMode } from "@/lib/vpn-hint";

export const dynamic = "force-dynamic";

type IpWhoConnection = { isp?: string; org?: string };
type IpWhoResponse = {
  success?: boolean;
  connection?: IpWhoConnection;
};

function clientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const cf = request.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return null;
}

export async function GET(request: Request) {
  const ip = clientIp(request);
  if (!ip || ip === "127.0.0.1" || ip === "::1") {
    return Response.json({ mode: "unknown" as const });
  }

  try {
    const res = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) {
      return Response.json({ mode: "unknown" as const });
    }
    const data = (await res.json()) as IpWhoResponse;
    if (!data.success) {
      return Response.json({ mode: "unknown" as const });
    }
    const isp = data.connection?.isp ?? "";
    const org = data.connection?.org ?? "";
    const mode: VpnHintMode = inferVpnHintMode(isp, org);
    return Response.json({
      mode,
      isp: isp || undefined,
    });
  } catch {
    return Response.json({ mode: "unknown" as const });
  }
}
