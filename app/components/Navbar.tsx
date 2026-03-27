'use client';

import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">

      <a // Denne stylingen fikk jeg hjelp av KI på
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
        href="https://github.com/D-A-Helland/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="text-xl" />
        Min GitHub
      </a>

      <a // Denne stylingen fikk jeg også hjelp av KI på
        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        href={isHome ? '/risikoanalyse' : '/'}
      >
        {isHome ? 'Risikoanalyse' : 'Hjem'}
      </a>

      <a // Denne stylingen også
        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] fixed top-4 right-4"
        href="/documents"
        target="_blank"
        rel="noopener noreferrer"
      >Dokumentasjon</a>
    </div>
  );
}
