import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dark Neon PWA',
  description: 'A Next.js + PWA app with neon cyan glow ✨',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00ffff" />
      </head>
      <body>{children}</body>
    </html>
  )
}
