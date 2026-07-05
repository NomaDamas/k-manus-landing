import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const alt = siteConfig.name;
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
          background: "linear-gradient(160deg, #dfe5ee 0%, #c9d3e1 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#3554D1",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#191F28" }}>
            K-manus
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 56,
            fontWeight: 800,
            color: "#191F28",
            lineHeight: 1.3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>당신의 컴퓨터에서,</span>
          <span>당신을 대신해 일하는 AI 에이전트</span>
        </div>

        <div style={{ marginTop: 28, fontSize: 26, color: "#4E5968" }}>
          한국어 우선 데스크톱 AI 에이전트 슈퍼앱 · k-skill 통합 · 승인 게이트
          보안
        </div>
      </div>
    ),
    { ...size },
  );
}
