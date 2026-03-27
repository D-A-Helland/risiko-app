# Planlegging – Risikoanalyseverktøy

## Prosjektbeskrivelse

I dette prosjektet har jeg valgt å lage en nettside hvor brukeren kan fylle ut en enkel risikoanalyse. Brukeren kan skrive inn informasjon om et system, og så legge til flere risikoer med sannsynlighet, konsekvens og tiltak.

Til slutt kan brukeren generere en rapport som åpnes i nettleseren og kan lagres som PDF. Målet med løsningen er å lage et enkelt og praktisk verktøy.

---

## Plan for gjennomføring

Jeg startet med å velge en idé som passet med kompetansemålene og som jeg selv syntes var interessant, og valgte derfor å lage et verktøy for risikoanalyse.

Så satte jeg opp prosjektet (se teknisk dokumentasjon) og lagde en landingsside og en side der hovedfunksjonaliteten skulle være.

Selve risikoanalysegeneratoren var den vanskelige delen av prosjektet, alt det andre fikk jeg stort sett til selv uten KI. For å komme i gang med denne delen brukte jeg KI til å få et forslag til hvordan komponenten kunne bygges opp, sånn at jeg kunne forstå hvordan det fungerte og så prøve å lage en egen løsning basert på dette.

Når funksjonaliteten fungerte, forbedret jeg designet med Tailwind og laget en mer brukervennlig løsning. Jeg implementerte også generering av rapport ved hjelp av nettleserens print-funksjon, etter at en tidligere løsning ikke fungerte.

Til slutt testet jeg løsningen, gjorde forbedringer og sørget for at alt fungerte før innlevering

---

## Valg av teknologi

Jeg har brukt følgende teknologi:

- **Next.js (React)** for å bygge nettsiden
- **Tailwind CSS** for styling
- **Vercel** for hosting
- Nettleserens innebygde print-funksjon for å lage PDF

Dette er moderne verktøy som ofte brukes i utvikling i dag.

Se teknisk dokumentasjon for med info

---

## Struktur og løsning

Løsningen består av:

- En side hvor brukeren fyller inn informasjon
- Mulighet for å legge til flere risikoer
- En komponent som håndterer logikk og state
- En funksjon som genererer en ferdig rapport

---

---

## Oppsummering
