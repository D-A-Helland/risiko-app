'use client';

import DocumentViewer from '../components/DocumentViewer';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-6xl py-20 px-6 space-y-6">
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          Dokumentasjon for risiko appen
        </h1>

        {/* Scroll container */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            <div className="w-[500px] flex-shrink-0 border p-4 rounded bg-white dark:bg-black">
              <DocumentViewer file="plan.md" />
            </div>

            <div className="w-[500px] flex-shrink-0 border p-4 rounded bg-white dark:bg-black">
              <DocumentViewer file="technical-documentation.md" />
            </div>

            <div className="w-[500px] flex-shrink-0 border p-4 rounded bg-white dark:bg-black">
              <DocumentViewer file="KI-bruk.md" />
            </div>

            <div className="w-[500px] flex-shrink-0 border p-4 rounded bg-white dark:bg-black">
              <DocumentViewer file="refleksjon.md" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
