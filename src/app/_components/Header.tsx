'use client';

import Link from "next/link";
import { useScrollDirection } from "../_hooks/useScrollDirection";

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px] flex flex-col px-6 lg:px-8 py-3 sm:py-4 gap-3 md:gap-0 items-center font-open md:flex-row justify-between bg-white/40 backdrop-blur-lg border border-gray-200/30 rounded-lg shadow-lg transition-transform duration-300 ${
      scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <Link href="/" className="text-3xl text-gray-900 font-semibold font-open tracking-tight">
        Ana Zabala
      </Link>
      <nav className="w-full md:w-auto">
        <ul className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 text-gray-700 font-medium leading-snug">
          <li className="px-3 py-2 bg-gray-100/70 md:bg-transparent md:text-[1.125rem] rounded-sm hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100/70">
            <Link href="#projetos">Projetos</Link>
          </li>
          <li className="px-3 py-2 bg-gray-100/70 md:bg-transparent md:text-[1.125rem] rounded-sm hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100/70">
            <Link href="#skills">Habilidades</Link>
          </li>
          <li className="px-3 py-2 bg-gray-100/70 md:bg-transparent md:text-[1.125rem] rounded-sm hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100/70">
            <Link href="#formacao">Formação</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}