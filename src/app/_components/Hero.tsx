import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <section className="flex flex-col gap-1">
                  <div className="mt-12">
                    <div className="flex justify-center lg:justify-start">
                      <div className="overflow-hidden rounded-full h-50 w-50 lg:h-70 lg:w-70 shadow-lg">
                        <Image
                          className="w-full h-full object-cover scale-125"
                          src="/img/pp-img.jpeg"
                          alt="Foto de Ana Paula Zabala"
                          width={280}
                          height={280}
                          priority
                        />
                      </div>
                    </div>
      
                    <div className="opacity-15 hidden lg:block absolute right-[10%] top-48 z-0 w-[540px] h-[160px] pointer-events-none">
                      <Image src="/autocad.svg" className="skill-float absolute left-4 top-2 w-16 h-16 animate-float1" alt="AutoCAD" width={64} height={64} />
                      <Image src="/sketchup.svg" className="skill-float absolute left-40 top-6 w-16 h-16 animate-float2" alt="SketchUp" width={64} height={64} />
                      <Image src="/adobe-photoshop.svg" className="skill-float absolute left-68 top-0 w-16 h-16 animate-float4" alt="Photoshop" width={64} height={64} />
                      <Image src="/v-ray.svg" className="skill-float absolute left-20 top-40 w-16 h-16 animate-float3" alt="V-Ray" width={64} height={64} />
                      <Image src="/enscape.png" className="skill-float absolute left-60 top-44 w-16 h-16 animate-float5 brightness-0" alt="Enscape" width={64} height={64} />
                      <Image src="/archicad.svg" className="skill-float absolute left-[22rem] top-28 w-16 h-16 animate-float2" alt="Archicad" width={64} height={64} />
                    </div>
                    <h1 className="flex flex-col gap-3 font-lora text-6xl lg:text-8xl text-center sm:text-start font-medium mt-5 leading-none text-gray-900">
                      Arquiteta & Urbanista
                      <span className="text-4xl lg:text-6xl leading-none  text-blue-900 bg-clip-text font-normal">
                        Ana Zabala
                      </span>
                    </h1>
                  </div>
                  <ul className="flex flex-col gap-2.5 font-medium mt-8 lg:mt-10 mb-2 text-gray-900 text-[1.225rem]">
                    <li className="flex items-center gap-2 md:gap-4 leading-none ml-2">
                      <Image src="/img/map-pin.svg" alt="" width={24} height={24} />
                      São Paulo, Brasil
                    </li>
                    <li className="flex items-center gap-2 md:gap-4 leading-none ml-2">
                      <Image src="/img/phone.svg" alt="" width={24} height={24} />
                      +55 (11) 9 5079-2001
                    </li>
                    <li className="flex items-center gap-2 md:gap-4 leading-none ml-2">
                      <Image src="/img/mail.svg" alt="" width={24} height={24} />
                      ana.zabala4008@gmail.com
                    </li>
                    <li className="flex items-center gap-2 md:gap-4 leading-none ml-2">
                      <Image src="/img/linkedin.svg" alt="" width={24} height={24} />
                      <Link className="text-blue-600 hover:text-blue-800 hover:underline" href="https://www.linkedin.com/in/ana-paula-zabala-854558327/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </Link>
                    </li>
                  </ul>
                  <p className="font-open text-gray-700 text-lg lg:text-2xl max-w-[48ch] mt-6 ml-2 leading-snug">
                    Sou formada em Arquitetura e Urbanismo pela <strong className="text-gray-900">UNESP</strong>, com{" "}
                    <Link className="text-blue-400 font-medium hover:underline hover:text-blue-600" href="#skills">
                      habilidades
                    </Link>{" "}
                    e interesses em modelagem 3D, renderização e projetos de interiores.
                  </p>
                </section>
    </div>
  );
}