export default function Sobre() {

  const values = [
    {
      icon: '❤️',
      title: 'Empatia',
      description: 'Entendemos as necessidades de saúde mental e física de cada pessoa'
    },
    {
      icon: '🔒',
      title: 'Segurança',
      description: 'Seus dados são protegidos com os mais altos padrões de segurança'
    },
    {
      icon: '🌱',
      title: 'Inovação',
      description: 'Constantemente melhorando para oferecer a melhor experiência'
    },
    {
      icon: '🤝',
      title: 'Comunidade',
      description: 'Juntos construindo uma comunidade de bem-estar'
    }
  ]

  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Sobre o HAVEN
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              HAVEN é um assistente digital inteligente criado para promover bem-estar e saúde mental através de tecnologia inovadora e acessível.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Democratizar o acesso a ferramentas de bem-estar e saúde mental, permitindo que cada pessoa cuide de sua saúde física e emocional de forma inteligente e personalizada.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acreditamos que a tecnologia deve servir as pessoas, promovendo qualidade de vida e bem-estar para todos.
              </p>
            </div>
            <div className="bg-linear-to-br from-green-400 to-blue-500 rounded-3xl p-12 text-white text-center shadow-xl">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-xl font-bold">Bem-estar para todos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nossos Valores</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Por que escolher HAVEN?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inteligente</h3>
                <p className="text-gray-600">
                  Algoritmos inteligentes que se adaptam às suas necessidades e preferências
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personalizado</h3>
                <p className="text-gray-600">
                  Lembretes e conteúdos adaptados especificamente para você
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Seguro</h3>
                <p className="text-gray-600">
                  Seus dados são criptografados e protegidos conforme LGPD
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Acessível</h3>
                <p className="text-gray-600">
                  Interface intuitiva e funciona em qualquer dispositivo
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conteúdo Profissional</h3>
                <p className="text-gray-600">
                  Desenvolvido por especialistas em saúde e bem-estar
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Suporte 24/7</h3>
                <p className="text-gray-600">
                  Nossa equipe está sempre disponível para ajudar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-green-600 to-blue-600 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl mb-8 text-green-100">
            Junte-se a milhares de pessoas que já estão cuidando de sua saúde com HAVEN
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 transition-all duration-200 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl">
            Começar Agora
          </button>
        </div>
      </section>
    </main>
  )
}
