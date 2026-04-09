import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0f1e",
          borderRadius: "40px",
        }}
      >
        {/* Outer glow ring */}
        <div
          style={{
            position: "absolute",
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)",
          }}
        />
        {/* Shield */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 8L85 22V48C85 70 69.5 88 50 95C30.5 88 15 70 15 48V22L50 8Z"
            fill="#00d4aa"
            fillOpacity="0.15"
            stroke="#00d4aa"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M34 51L45 62L67 40"
            stroke="#00d4aa"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
