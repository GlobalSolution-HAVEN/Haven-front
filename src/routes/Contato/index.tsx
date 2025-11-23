import React, { useState } from 'react'

interface FormData {
  nome: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  const [mensagemRetorno, setMensagemRetorno] = useState<string>('')
  const [tipoMensagem, setTipoMensagem] = useState<'success' | 'error' | ''>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      setMensagemRetorno('Por favor, preencha todos os campos obrigatórios!')
      setTipoMensagem('error')
    } else {
      setMensagemRetorno('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setTipoMensagem('success')
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
    }
    
    setIsLoading(false)
  }

  const contatos = [
    {
      icon: '📧',
      title: 'E-mail',
      info: 'contato@haven.com.br',
      description: 'Resposta em até 24 horas'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      description: 'Atendimento de segunda a sexta'
    },
    {
      icon: '🏥',
      title: 'HAVEN - Saúde Digital',
      info: 'São Paulo - SP',
      description: 'Brasil'
    }
  ]

  return (
    <main className="flex-1 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl px-5 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Entre em Contato
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Fale Conosco
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas sobre o HAVEN? Nossa equipe está pronta para ajudar você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-semibold text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre o sistema</option>
                    <option value="suporte">Suporte técnico</option>
                    <option value="parceria">Parceria</option>
                    <option value="feedback">Feedback</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 resize-vertical"
                  placeholder="Descreva sua dúvida ou mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-linear-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Enviar Mensagem
                  </div>
                )}
              </button>
            </form>

            {mensagemRetorno && (
              <div className={`mt-6 p-4 rounded-xl font-medium ${
                tipoMensagem === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                <div className="flex items-center gap-2">
                  {tipoMensagem === 'success' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                  {mensagemRetorno}
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Outras Formas de Contato</h2>
              
              <div className="space-y-6">
                {contatos.map((contato, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <div className="text-2xl">{contato.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{contato.title}</h3>
                      <p className="text-green-600 font-medium mb-1">{contato.info}</p>
                      <p className="text-sm text-gray-600">{contato.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-green-100">
                <p>📅 Segunda a Sexta: 8h às 18h</p>
                <p>📅 Sábado: 8h às 12h</p>
                <p>📅 Domingo: Fechado</p>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <p className="text-sm">
                  💡 <strong>Dica:</strong> Para dúvidas urgentes, utilize nosso WhatsApp durante o horário comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
