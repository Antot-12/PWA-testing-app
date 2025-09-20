export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-cyan-300 p-6">
      <h1 className="text-4xl font-bold neon-text mb-6">About Dark Neon PWA</h1>
      <p className="max-w-2xl">
        This is a demo Progressive Web App built with <b>Next.js 15</b>,
        styled with <b>TailwindCSS</b>, and powered by <b>next-pwa</b>.
        <br/><br/>
        ✨ Features:
        <ul className="list-disc list-inside text-left mt-4">
          <li>Dark neon design</li>
          <li>Installable as a native-like app</li>
          <li>Offline support</li>
          <li>Fast & modern web technologies</li>
        </ul>
      </p>
    </main>
  );
}
