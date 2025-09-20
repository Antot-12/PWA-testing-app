'use client';

import Link from 'next/link';

export default function Home() {
  function handleClick() {
    alert("Button works! 🚀 This is a real PWA running on Next.js!");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-center">
      <h1 className="text-5xl font-bold neon-flicker mb-6">Dark Neon PWA</h1>
      <p className="text-lg text-cyan-300 mb-8">
        A Next.js + PWA app with neon cyan glow ✨
      </p>
      <button onClick={handleClick} className="neon-button mb-6">
        Click Me
      </button>
      <Link href="/about" className="underline text-cyan-400 hover:text-cyan-200">
        Learn more →
      </Link>
    </main>
  );
}
