export default function Formacao() {
  return (
    <div>
      <section id="formacao" className="py-12 lg:py-16 px-8 lg:px-10 border-y border-gray-200 bg-white rounded-sm">
        <h2 className="font-medium font-outfit text-4xl lg:text-5xl mb-8 md:mb-10 text-gray-900">
          Formação
        </h2>
        <div className="px-1 py-3 sm:px-4 sm:py-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Graduação */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
                  <path d="M22 10v6"/>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
                </svg>
                <h3 className="font-open text-sm text-gray-500 px-2 py-1 border border-gray-300 w-fit rounded-sm bg-gray-50">
                  Graduação
                </h3>
              </div>
              <div className="border-b border-gray-100 mb-3"></div>
              <div className="flex flex-col gap-1">
                <h4 className="font-outfit text-xl lg:text-2xl font-semibold text-gray-900">
                  Arquitetura e Urbanismo
                </h4>
                <p className="font-open text-lg lg:text-xl text-gray-700">
                  UNESP • 2020-2025
                </p>
                <span className="font-open text-sm text-gray-500 mt-0.5">
                  Formada
                </span>
              </div>
            </div>

            {/* Cursos Online */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M10 2v2"/>
                  <path d="M14 2v2"/>
                  <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>
                  <path d="M6 2v2"/>
                </svg>
                <h3 className="font-open text-sm text-gray-500 px-2 py-1 border border-gray-300 w-fit rounded-sm bg-gray-50">
                  Cursos Online
                </h3>
              </div>
              <div className="border-b border-gray-100 mb-3"></div>
              <ul className="flex flex-col gap-3">
                <li className="flex flex-col gap-1">
                  <h4 className="font-outfit text-base lg:text-lg font-medium text-gray-800">
                    Curso Enscape + SketchUp + Inteligência Artificial
                  </h4>
                  <p className="font-open text-sm lg:text-base text-gray-600">
                    BM maquetes
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <h4 className="font-outfit text-base lg:text-lg font-medium text-gray-800">
                    Curso V-Ray Next 4.0
                  </h4>
                  <p className="font-open text-sm lg:text-base text-gray-600">
                    BM maquetes
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 