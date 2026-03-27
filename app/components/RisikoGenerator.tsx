// Noe av styling er lik som når jeg fikk et løsningsforslag av KI og ikke min.
'use client';

import { useState } from 'react';

type Level = 'Lav' | 'Medium' | 'Høy';

type Risk = {
  risiko: string;
  sannsynlighet: Level;
  konsekvens: Level;
  tiltak: string;
};

export default function RisikoGenerator() {
  const [system, setSystem] = useState('');
  const [risks, setRisks] = useState<Risk[]>([
    { risiko: '', sannsynlighet: 'Lav', konsekvens: 'Lav', tiltak: '' },
  ]);

  const addRisk = () => {
    setRisks([
      ...risks,
      { risiko: '', sannsynlighet: 'Lav', konsekvens: 'Lav', tiltak: '' },
    ]);
  };

  const updateRisk = (index: number, field: keyof Risk, value: string) => {
    const newRisks = [...risks];

    if (field === 'sannsynlighet' || field === 'konsekvens') {
      newRisks[index][field] = value as Level;
    } else {
      newRisks[index][field] = value;
    }

    setRisks(newRisks);
  };

  const generatePDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const dato = new Date().toLocaleDateString();

    let content = `
      <html>
      <head>
        <title>Risikoanalyse</title>
        <style>
          body { font-family: Arial; padding: 40px; max-width: 800px; margin: auto; }
          h1 { text-align: center; margin-bottom: 30px; }
          .risk { border: 1px solid #ccc; padding: 15px; margin-bottom: 15px; border-radius: 8px; }
        </style>
      </head>
      <body>
        <h1>RISIKOANALYSE</h1>
        <p><strong>System:</strong> ${system}</p>
        <p><strong>Dato:</strong> ${dato}</p>
    `;

    risks.forEach((risk, i) => {
      content += `
        <div class="risk">
          <h3>Risiko ${i + 1}</h3>
          <p><strong>Risiko:</strong> ${risk.risiko}</p>
          <p><strong>Sannsynlighet:</strong> ${risk.sannsynlighet}</p>
          <p><strong>Konsekvens:</strong> ${risk.konsekvens}</p>
          <p><strong>Tiltak:</strong> ${risk.tiltak}</p>
        </div>
      `;
    });

    content += `</body></html>`;

    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="w-full space-y-6">
      <input
        placeholder="System"
        value={system}
        onChange={(e) => setSystem(e.target.value)}
        className="h-12 w-full rounded-full border border-black/[.08] px-5 bg-transparent dark:border-white/[.145]"
      />

      <div className="overflow-x-auto">
        <div className="flex gap-4 min-w-max pb-2">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="w-72 flex-shrink-0 flex flex-col gap-2 rounded-2xl border border-black/[.08] p-4 bg-white dark:bg-black dark:border-white/[.145]"
            >
              <h3 className="font-semibold">Risiko {i + 1}</h3>

              <input
                placeholder="Risiko"
                value={risk.risiko}
                onChange={(e) => updateRisk(i, 'risiko', e.target.value)}
                className="h-10 rounded-full border px-4 bg-transparent"
              />

              <select
                value={risk.sannsynlighet}
                onChange={(e) => updateRisk(i, 'sannsynlighet', e.target.value)}
                className="h-10 rounded-full border px-4 bg-transparent"
              >
                <option>Lav</option>
                <option>Medium</option>
                <option>Høy</option>
              </select>

              <select
                value={risk.konsekvens}
                onChange={(e) => updateRisk(i, 'konsekvens', e.target.value)}
                className="h-10 rounded-full border px-4 bg-transparent"
              >
                <option>Lav</option>
                <option>Medium</option>
                <option>Høy</option>
              </select>

              <input
                placeholder="Tiltak"
                value={risk.tiltak}
                onChange={(e) => updateRisk(i, 'tiltak', e.target.value)}
                className="h-10 rounded-full border px-4 bg-transparent"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={addRisk}
        className="w-full h-12 rounded-full border border-dashed border-black/[.2] hover:bg-black/[.04] dark:hover:bg-[#1a1a1a]"
      >
        + Ny risiko
      </button>

      <button
        onClick={generatePDF}
        className="w-full h-12 rounded-full bg-foreground text-background hover:opacity-90"
      >
        Generer PDF
      </button>
    </div>
  );
}
