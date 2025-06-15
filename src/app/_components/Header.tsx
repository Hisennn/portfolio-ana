import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="flex flex-col px-6 lg:px-8 py-3 sm:py-4 gap-3 md:gap-0 items-center font-open md:flex-row justify-between bg-white/90 backdrop-blur-sm border border-gray-200 rounded-sm shadow-sm">
                <Link href="/" className="text-3xl text-gray-900 font-semibold font-open tracking-tight">
                  Ana Zabala
                </Link>
                <nav>
                  <ul className="flex gap-4 text-gray-700 font-medium leading-snug">
                    <li className="px-4 py-2 bg-gray-100 md:bg-transparent md:text-[1.125rem] rounded-sm hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-50">
                      <Link href="#">Projetos</Link>
                    </li>
                    <li className="px-4 py-2 bg-gray-100 md:bg-transparent md:text-[1.125rem] rounded-sm hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-50">
                      <Link href="#skills">Habilidades</Link>
                    </li>
                  </ul>
                </nav>
              </header>
    </div>
  );
}