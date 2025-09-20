// next.config.js
import type { NextConfig } from "next";

const repo = "PWA-testing-app";               
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",

  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },

  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : ""
  }
};

export default nextConfig;
