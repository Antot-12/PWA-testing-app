export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-cyan-300 p-6">
      <h1 className="text-4xl font-bold neon-text mb-6">About Dark Neon PWA</h1>
      <div className="max-w-2xl text-left">
        <p>
          This is a demo Progressive Web App built with <b>Next.js 15</b>,
          styled with <b>TailwindCSS</b>, and a manual <b>Service Worker</b> for offline support.
        </p>
        <p className="mt-4">✨ Features:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Dark neon design</li>
          <li>Installable as a native-like app</li>
          <li>Offline support</li>
          <li>Fast & modern web technologies</li>
        </ul>
      </div>
    </main>
  );
}
