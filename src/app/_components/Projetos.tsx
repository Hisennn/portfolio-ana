import Image from "next/image";

export default function Projetos() {
  return (
    <div>
      <section className="pt-12 lg:pt-16 border-t border-gray-200">
                  <h2 className="font-medium font-lora text-4xl lg:text-5xl mb-10 md:mb-12 text-gray-900">Projetos</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                    {[1, 2, 3].map((i) => (
                      <article key={i} className="group bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ease-out">
                        <div className={`aspect-video bg-gradient-to-br ${i === 1 ? "from-blue-300 to-blue-400" : i === 2 ? "from-amber-300 to-yellow-400" : "from-rose-300 to-pink-400"} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                        </div>
                        <div className="p-6 lg:p-7">
                          <h4 className="font-lora text-xl lg:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            HHHHH YYYYYY
                          </h4>
                          <p className="font-open text-gray-600 text-base lg:text-lg leading-relaxed mb-5">
                            Esse projeto é de uma PPPPP, pensado para utilizar cada espaço
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-full font-open border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                              AutoCAD
                            </span>
                            <span className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-full font-open border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                              Revit
                            </span>
                            <span className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-full font-open border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                              Vray
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
    </div>
  );
}