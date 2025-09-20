import type { NextConfig } from "next";

const repoName = "PWA-testing-app";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Export as static HTML for GitHub Pages
  output: "export",

  // Use correct basePath/assetPrefix on GitHub Pages, but none locally
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  // Disable Next.js image optimization (works better with static hosting)
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
