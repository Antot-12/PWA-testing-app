// next.config.js
const repo = "PWA-testing-app"; // your GitHub repo name
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export for GitHub Pages
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  images: { unoptimized: true },

  // Do not run ESLint during build
  eslint: { ignoreDuringBuilds: true },

  // keep empty unless you add SWC plugins
  experimental: { swcPlugins: [] },
};

module.exports = nextConfig;
