import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            color: "#f59e0b",
            fontWeight: 700,
          }}
        >
          NIT DURGAPUR — DEPT. OF MECHANICAL ENGG.
        </div>
        <div style={{ fontSize: 120, fontWeight: 900, marginTop: 16 }}>
          MESA
        </div>
        <div style={{ fontSize: 34, color: "#d4d4d8", marginTop: 8 }}>
          Mechanical Engineering Students&apos; Association
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 24 }}>
          Where steel meets ideas — workshops · builds · robotics
        </div>
      </div>
    ),
    { ...size }
  );
}
