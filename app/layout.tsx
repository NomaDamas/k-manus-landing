import type { Metadata, Viewport } from "next";
// Pretendard Variable is bundled locally via the `pretendard` package (no
// runtime CDN fetch) -- mirrors apps/desktop/src/main.tsx in the main
// dolshoi repo so the two surfaces stay visually identical.
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Dolshoi",
    "AI 에이전트",
    "데스크톱 AI",
    "브라우저 자동화",
    "k-skill",
    "NomaDamas",
  ],
  authors: [{ name: "NomaDamas" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1d24" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-link">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
