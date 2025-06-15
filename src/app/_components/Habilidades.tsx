import Image from "next/image";

export default function Habilidades() {
  return (
    <div>
      <section id="skills" className="py-12 lg:py-16 px-8 lg:px-10 border-y border-gray-200 bg-white rounded-sm">
            <h2 className="font-medium font-lora text-4xl lg:text-5xl mb-10 md:mb-12 text-gray-900">Habilidades</h2>
            <div className="px-1 py-3 sm:px-4 sm:py-2">
              <h3 className="font-open text-sm text-gray-500 mb-6 px-2 py-1 border border-gray-300 w-fit rounded-sm bg-gray-50">
                Hard Skills
              </h3>
              <ul className="flex gap-5 md:gap-10 flex-wrap border-b border-gray-200 pb-8 select-none">
                {[
                  { name: "AutoCAD", src: "/autocad.svg", width: 56, percent: 80 },
                  { name: "SketchUp", src: "/sketchup.svg", width: 56, percent: 80 },
                  { name: "V Ray", src: "/v-ray.svg", width: 56, percent: 80 },
                  { name: "Photoshop", src: "/adobe-photoshop.svg", width: 56, percent: 80 },
                  { name: "Enscape", src: "/enscape.png", width: 56, percent: 80, extraClass: "brightness-0" },
                  { name: "Excel", src: "/microsoft-excel.svg", width: 56, percent: 55, extraClass: "brightness-0", color: "from-amber-500 to-orange-500" },
                  { name: "Archicad", src: "/archicad.svg", width: 56, percent: 55, extraClass: "brightness-0", color: "from-amber-500 to-orange-500" },
                  { name: "Revit", src: "/autodeskrevit.svg", width: 56, percent: 45, extraClass: "brightness-0", color: "from-red-500 to-pink-500" },
                  { name: "Illustrator", src: "/adobe-illustrator.svg", width: 56, percent: 30, extraClass: "brightness-0", color: "from-red-500 to-pink-500" },
                ].map((skill) => (
                  <li key={skill.name} className="flex flex-col items-center text-center hover:scale-110 transition-transform duration-300">
                    <span className="mb-1 text-gray-800 font-semibold font-open">{skill.name}</span>
                    <Image
                      className={`w-14 h-14 ${skill.extraClass || ""}`}
                      src={skill.src}
                      alt={skill.name}
                      width={56}
                      height={56}
                    />
                    <div className="mt-3 w-[80px] h-[16px] bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color ? `bg-gradient-to-r ${skill.color}` : "bg-gradient-to-r from-blue-500 to-blue-600"} rounded-full`}
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="font-open text-sm text-gray-500 mt-8 mb-6 px-2 py-1 border border-gray-300 w-fit rounded-sm bg-gray-50">
                Soft Skills
              </h3>
              <ul className="flex flex-col gap-3 list-disc ml-8 md:text-[1.375rem] leading-relaxed">
                <li className="font-open text-gray-800">
                  <strong className="text-gray-900">Inglês</strong> - Avançado
                </li>
                <li className="font-open text-gray-800">
                  Experiência com representação gráfica e modelagem 3D de projetos arquitetônicos
                </li>
                <li className="font-open text-gray-800">
                  Habilidade em desenvolver pranchas técnicas e colaborar em projetos de interiores
                </li>
                <li className="font-open text-gray-800">
                  Facilidade para trabalhar em equipe, organização e proatividade no ambiente profissional
                </li>
              </ul>
            </div>
          </section>
    </div>
  );
}