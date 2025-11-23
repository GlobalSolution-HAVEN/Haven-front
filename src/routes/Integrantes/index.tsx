export default function Integrantes() {
  const integrantes = [
    {
      nome: "Eduardo Augusto de Oliveira Souza",
      rm: "565269",
      turma: "1TDSPI",
      color: "from-blue-400 to-blue-600",
      github: "https://github.com/Edu-Ardo18",
      linkedin: "https://www.linkedin.com/in/eduardo-souza-422a19387/",
      foto: "/img/eduardo.jpeg"
    },
    {
      nome: "Enzo Franchin de Souza",
      rm: "565677",
      turma: "1TDSPI",
      color: "from-purple-400 to-purple-600",
      github: "https://github.com/EnzoFranchin",
      linkedin: "https://www.linkedin.com/in/enzo-franchin-6636a6367/",
      foto: "/img/enzo.jpeg"
    },
    {
      nome: "Gustavo Vieira Matos",
      rm: "563304",
      turma: "1TDSPI",
      color: "from-green-400 to-green-600",
      github: "https://github.com/gvm7stack",
      linkedin: "https://www.linkedin.com/in/gustavo-vieira-de-matos-7stack/",
      foto: "/img/gustavo.jpeg"
    }
  ]

  return (
    <main className="flex-1 py-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            Nossa Equipe
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Integrantes da Equipe
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os desenvolvedores responsáveis pela criação do sistema HAVEN.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {integrantes.map((membro, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-32 bg-linear-to-r ${membro.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <img
                    src={membro.foto}
                    alt={`Foto de ${membro.nome}`}
                    className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{membro.nome}</h2>
                  <div className="space-y-1 text-gray-600">
                    <p className="font-medium">RM: {membro.rm}</p>
                    <p className="font-medium">Turma: {membro.turma}</p>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={membro.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.626 0 12 0z" />
                    </svg>
                  </a>
                  <a
                    href={membro.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Project Info */}
        <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sobre o Projeto</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
            O projeto HAVEN foi desenvolvido como parte do Challenge Global Solution FIAP, 
            com o objetivo de criar uma solução inovadora para promover saúde física e mental 
            através de uma inteligência artificial empática, acessível e inclusiva. 
            A plataforma estimula o autocuidado por meio de lembretes personalizados, 
            conteúdos multimídia e análise emocional, oferecendo uma experiência acolhedora 
            e preventiva para usuários e empresas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">Global Solution</h4>
                <p className="text-sm text-gray-600">Projeto acadêmico inovador</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">IA Empática</h4>
                <p className="text-sm text-gray-600">Análise de sentimentos e respostas humanizadas</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">Bem-estar</h4>
                <p className="text-sm text-gray-600">Tecnologia para saúde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
