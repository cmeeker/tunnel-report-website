import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export type OgImageOptions = {
  title: string;
  subtitle?: string;
  badge?: string;
};

export function buildOgImage({ title, subtitle, badge }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0a0f1e 0%, #111827 50%, #0d1221 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {badge && (
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#00d4aa",
              marginBottom: 24,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {badge}
          </div>
        )}
        <div
          style={{
            fontSize: title.length > 50 ? 52 : 64,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              marginTop: 28,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            paddingTop: 48,
            gap: 16,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#00d4aa",
            }}
          />
          <div style={{ fontSize: 24, fontWeight: 700, color: "#00d4aa" }}>
            Tunnel Report
          </div>
          <div style={{ fontSize: 20, color: "#64748b" }}>Independent VPN Intelligence</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
