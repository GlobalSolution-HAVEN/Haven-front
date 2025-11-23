import { useState, useEffect } from 'react'

interface Content {
  id: number
  title: string
  type: 'video' | 'audio'
  category: string
  duration: string
  description: string
  icon: string
}

export default function Conteudos() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [favorites, setFavorites] = useState<number[]>([])
  const [contents, setContents] = useState<Content[]>([])   // <-- agora vem da API
  const [loading, setLoading] = useState(true)

  // Buscar conteúdos da API
  useEffect(() => {
    fetch("https://haven-api-f1yp.onrender.com/conteudos")
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar conteúdos")
        return res.json()
      })
      .then(data => {
        setContents(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'meditacao', label: 'Meditação' },
    { id: 'exercicio', label: 'Exercício' },
    { id: 'respiracao', label: 'Respiração' },
    { id: 'reflexao', label: 'Reflexão' }
  ]

  const filteredContents = selectedCategory === 'todos' 
    ? contents 
    : contents.filter(c => c.category === selectedCategory)

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  return (
    <main className="flex-1 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conteúdos</h1>
          <p className="text-lg text-gray-600">
            Acesse vídeos e áudios de exercícios, meditação e bem-estar criados por especialistas
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-linear-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-green-600 hover:text-green-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Carregando conteúdos...</p>
          </div>
        )}

        {/* Content Grid */}
        {!loading && filteredContents.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContents.map(content => (
              <div 
                key={content.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Content Header */}
                <div className="bg-linear-to-br from-green-400 to-blue-500 p-6 text-white flex items-center justify-between">
                  <div className="text-5xl">{content.icon}</div>
                  <button
                    onClick={() => toggleFavorite(content.id)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      favorites.includes(content.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    ❤️
                  </button>
                </div>

                {/* Content Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{content.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {content.type === 'video' ? '🎥 Vídeo' : '🎧 Áudio'}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      ⏱️ {content.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {content.description}
                  </p>

                  <button className="w-full bg-linear-to-r from-green-600 to-blue-600 text-white font-bold py-3 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                    Assistir Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredContents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Nenhum conteúdo encontrado nesta categoria</p>
          </div>
        )}
      </div>
    </main>
  )
}