import Image from "next/image";
import Link from "next/link";

const projetos = [
  {
    id: "projeto-1",
    titulo: "Escritório Residencial",
    descricao: "Projeto de escritório residencial em cômodo único, com área de 6m².",
    tecnologias: ["SketchUp", "Vray"],
    imagem: "/img/projetos/office-banner.png",
    alt: "Projeto 1",
  },
  {
    id: "projeto-2",
    titulo: "Projeto 2",
    descricao: "Esse projeto é de uma PPPPP, pensado para utilizar cada espaço",
    tecnologias: ["AutoCAD", "Revit", "Vray"],
    imagem: "/img/placeholder.jpg",
    alt: "Projeto 2",
  },
  {
    id: "projeto-3",
    titulo: "Projeto 3",
    descricao: "Esse projeto é de uma PPPPP, pensado para utilizar cada espaço",
    tecnologias: ["AutoCAD", "Revit", "Vray"],
    imagem: "/img/placeholder.jpg",
    alt: "Projeto 3",
  },
];

export default function Projetos() {
  return (
    <div>
      <section id="projetos" className="pt-12 lg:pt-16 border-t border-gray-200">
        <h2 className="font-medium font-outfit text-4xl lg:text-5xl mb-10 md:mb-12 text-gray-900">
          Projetos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projetos.map((projeto, i) => (
            <Link 
              href={`/projetos/${projeto.id}`} 
              key={i}
              className="group bg-white/80 backdrop-blur-sm rounded-sm shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ease-out"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={projeto.imagem}
                  alt={projeto.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
              <div className="p-6 lg:p-7">
                <h4 className="font-outfit text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {projeto.titulo}
                </h4>
                <p className="font-open text-gray-600 text-base lg:text-lg leading-relaxed mb-5">
                  {projeto.descricao}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tec) => (
                    <span
                      key={tec}
                      className="px-3 py-1.5 bg-gray-50/80 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full font-open border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}