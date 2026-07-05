import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Marketing/legal site: fully static output so it can be deployed to any
  // static host / CDN without a Node runtime.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
