// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

const repo = "PWA-testing-app"; // 👈 change if your repo name differs
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

export const metadata: Metadata = {
    title: "Dark Neon PWA",
    description: "A Next.js + PWA app with neon cyan glow ✨",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head suppressHydrationWarning>
            {/* Prefix static assets with basePath so GH Pages finds them */}
            <link rel="manifest" href={`${basePath}/manifest.json`} />
            <link rel="icon" href={`${basePath}/favicon.ico`} />
            <meta name="theme-color" content="#00ffff" />
            {/* Register service worker for PWA */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
(function(){
  if ('serviceWorker' in navigator) {
    var base = '${basePath}';
    var swUrl = base + '/service-worker.js';
    var scope = base + '/';
    window.addEventListener('load', function(){
      navigator.serviceWorker.register(swUrl, { scope: scope })
        .then(function(){ console.log('[PWA] Service worker registered:', swUrl); })
        .catch(function(e){ console.warn('[PWA] SW registration failed:', e); });
    });
  }
})();`,
                }}
            />
        </head>
        <body>{children}</body>
        </html>
    );
}
