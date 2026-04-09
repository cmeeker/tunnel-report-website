import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "7px",
        }}
      >
        {/* Shield outline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1.5L17 4.5V9.5C17 13.5 13.9 17 10 18.5C6.1 17 3 13.5 3 9.5V4.5L10 1.5Z"
              fill="#00d4aa"
              fillOpacity="0.2"
              stroke="#00d4aa"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M7 10.5L9.2 12.7L13 8.5"
              stroke="#00d4aa"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
    { ...size },
  );
}
