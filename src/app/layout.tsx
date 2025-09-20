// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Dark Neon PWA",
  description: "A Next.js + PWA app with neon cyan glow ✨"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Prefix static assets with basePath so GH Pages finds them */}
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <meta name="theme-color" content="#00ffff" />
        {/* Register SW on the client (below) */}
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
        .catch(function(e){ console.warn('SW register failed:', e); });
    });
  }
})();
`
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
