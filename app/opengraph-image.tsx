import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Vivek Kothapalli | AI & Machine Learning Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
          background:
            "linear-gradient(135deg, #050816 0%, #0f172a 55%, #172554 100%)",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#38bdf8",
            letterSpacing: "0.2em",
            marginBottom: 30,
          }}
        >
          AI • MACHINE LEARNING • DATA SCIENCE
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          Vivek Kothapalli
        </div>

        <div
          style={{
            fontSize: 38,
            marginTop: 28,
            color: "#cbd5e1",
          }}
        >
          Building practical AI and machine learning solutions.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 55,
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          Python • Machine Learning • NLP • Data Science
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}