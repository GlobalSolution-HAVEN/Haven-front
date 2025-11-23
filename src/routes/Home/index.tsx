import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Feature {
  icon: string
  title: string
  description: string
  color: string
}

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const features: Feature[] = [
    {
      icon: '❤️',
      title: 'Check-in de Humor',
      description: 'Registre seu estado emocional diariamente e acompanhe sua saúde mental com histórico detalhado.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: '🧠',
      title: 'Conteúdos Inteligentes',
      description: 'Acesse vídeos e áudios de exercícios, meditação e bem-estar criados por especialistas.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: '⚡',
      title: 'Lembretes Personalizados',
      description: 'Receba notificações inteligentes para pausas, alongamentos e reflexões positivas.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🔒',
      title: 'Privacidade Garantida',
      description: 'Seus dados estão seguros. Cumprimos com a LGPD e mantemos sigilo total.',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Bem-estar Digital
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                Bem-vindo ao HAVEN
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Seu assistente digital inteligente para bem-estar e saúde. Cuide de sua mente e corpo com lembretes personalizados, conteúdos multimídia e acompanhamento emocional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/dashboard"
                  className="bg-linear-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl text-center"
                >
                  Acessar Dashboard
                </Link>
                <Link 
                  to="/sobre"
                  className="border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 transition-all duration-200 font-bold px-8 py-4 rounded-xl text-center"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-linear-to-br from-green-400 to-blue-500 rounded-3xl p-8 text-white text-center shadow-2xl">
                <div className="text-6xl mb-4">🌟</div>
                <p className="text-xl font-bold mb-4">Comece sua jornada de bem-estar hoje</p>
                <p className="text-green-100">Milhares de pessoas já estão cuidando de sua saúde mental e física com HAVEN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nossas Funcionalidades
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para cuidar de sua saúde mental e física em um só lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-green-600 to-blue-600 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comece sua jornada de bem-estar hoje
          </h2>
          
          <p className="text-xl mb-8 text-green-100">
            Junte-se a milhares de pessoas que já estão cuidando de sua saúde mental e física com HAVEN
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-600 hover:bg-gray-100 transition-all duration-200 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Começar Agora
            </button>
          </form>

          {subscribed && (
            <div className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl inline-block">
              ✅ Obrigado! Verifique seu email para continuar.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
