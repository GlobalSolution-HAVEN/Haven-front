import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'O que é HAVEN?',
      answer: 'HAVEN é um assistente digital inteligente para bem-estar e saúde. Oferece check-ins de humor, conteúdos multimídia, lembretes personalizados e acompanhamento emocional para promover sua saúde mental e física.'
    },
    {
      id: 2,
      question: 'Como funciona o check-in de humor?',
      answer: 'O check-in de humor permite que você registre seu estado emocional diariamente. Você seleciona um sentimento e pode adicionar uma descrição. Isso ajuda a HAVEN a entender melhor suas necessidades e fornecer recomendações personalizadas.'
    },
    {
      id: 3,
      question: 'Meus dados estão seguros?',
      answer: 'Sim, absolutamente. Cumprimos com a LGPD (Lei Geral de Proteção de Dados) e mantemos sigilo total de seus dados pessoais. Sua privacidade é nossa prioridade máxima.'
    },
    {
      id: 4,
      question: 'Como funcionam os lembretes?',
      answer: 'Você pode criar lembretes personalizados com horários específicos e frequências (diária, semanal ou mensal). A HAVEN enviará notificações para ajudá-lo a manter hábitos saudáveis como pausas, alongamentos e reflexões positivas.'
    },
    {
      id: 5,
      question: 'Quais tipos de conteúdo estão disponíveis?',
      answer: 'Oferecemos vídeos e áudios de exercícios físicos, meditação, alongamento, respiração guiada e reflexões positivas, todos criados por especialistas em bem-estar e saúde mental.'
    },
    {
      id: 6,
      question: 'Como faço para editar meu perfil?',
      answer: 'Acesse a página de Perfil no menu principal. Lá você pode atualizar seu nome, email e telefone. Suas alterações serão salvas automaticamente.'
    },
    {
      id: 7,
      question: 'Posso usar HAVEN em dispositivos móveis?',
      answer: 'Sim, HAVEN é totalmente responsivo e funciona perfeitamente em smartphones e tablets. Você pode acessar todas as funcionalidades de qualquer dispositivo.'
    },
    {
      id: 8,
      question: 'Como entro em contato com o suporte?',
      answer: 'Você pode entrar em contato conosco através da página de Contato. Oferecemos suporte técnico 24/7 via chat, email e canais corporativos como Teams e Slack.'
    },
    {
      id: 9,
      question: 'Há custo para usar HAVEN?',
      answer: 'HAVEN oferece um plano gratuito com funcionalidades básicas. Para empresas e instituições, oferecemos planos corporativos com recursos avançados e suporte dedicado.'
    },
    {
      id: 10,
      question: 'Como posso integrar HAVEN em minha empresa?',
      answer: 'Empresas podem contratar nossos planos corporativos que incluem setup personalizado, painéis analíticos de bem-estar e consultorias. Entre em contato conosco para mais informações.'
    }
  ]

  return (
    <main className="flex-1 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre HAVEN
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-green-600 transition-transform duration-300 shrink-0 ml-4 ${
                    openId === item.id ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </button>

              {openId === item.id && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-linear-to-r from-green-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Não encontrou sua resposta?</h2>
          <p className="mb-6 text-green-100">
            Entre em contato conosco. Estamos aqui para ajudar!
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 transition-all duration-200 font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl">
            Enviar Mensagem
          </button>
        </div>
      </div>
    </main>
  )
}
