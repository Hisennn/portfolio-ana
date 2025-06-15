import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="pb-8 border-t border-gray-300 px-6">
            <div className="mt-8 flex flex-col gap-8 md:gap-0 md:flex-row justify-between">
              <div className="md:my-auto">
                <p className="text-gray-900 font-medium text-lg italic md:text-2xl">
                  Gostou dos projetos? Entre em contato e vamos conversar!
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 font-medium lg:text-2xl text-gray-900 md:text-lg">
                <li className="flex items-center gap-2 leading-none ml-2">
                  <Image src="/img/map-pin.svg" alt="" width={24} height={24} />
                  São Paulo, Brasil
                </li>
                <li className="flex items-center gap-2 leading-none ml-2">
                  <Image src="/img/phone.svg" alt="" width={24} height={24} />
                  +55 (11) 9 5079-2001
                </li>
                <li className="flex items-center gap-2 leading-none ml-2">
                  <Image src="/img/mail.svg" alt="" width={24} height={24} />
                  ana.zabala3008@gmail.com
                </li>
                <li className="flex items-center gap-2 leading-none ml-2">
                  <Image src="/img/mail.svg" alt="" width={24} height={24} />
                  <Link className="text-blue-600 hover:text-blue-800 hover:underline" href="https://www.linkedin.com/in/ana-paula-zabala-854558327/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
    </div>
  );
}