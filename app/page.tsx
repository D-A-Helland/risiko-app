'use client';

import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Analyser Dine Risikoer!
        </h1>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Velkommen til Risiko Appen
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Her kan du generere risikoanalyse PDF filer enkelt ved bruke{' '}
            <a
              href="/risikoanalyse"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Risikoanalyse
            </a>{' '}
            Generatoren.
          </p>
        </div>
        <Navbar />
      </main>
    </div>
  );
}
