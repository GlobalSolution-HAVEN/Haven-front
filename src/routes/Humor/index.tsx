import { useState, useEffect } from 'react'

interface MoodEntry {
  id: number
  data: string
  sentimento: string
  descricao: string
  intensidade: number
}

export default function Humor() {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([])
  const [selectedMood, setSelectedMood] = useState('')
  const [intensity, setIntensity] = useState(5)
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(true)

  // 🔗 Link base da API
  const API_BASE = "https://haven-api-f1yp.onrender.com"

  // Buscar registros de humor da API
  useEffect(() => {
    fetch(`${API_BASE}/humor`)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar humor")
        return res.json()
      })
      .then(data => {
        setMoodEntries(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const moods = [
    { id: 'feliz', label: 'Feliz', emoji: '😊', color: 'from-yellow-400 to-orange-400' },
    { id: 'neutro', label: 'Neutro', emoji: '😐', color: 'from-gray-400 to-gray-500' },
    { id: 'triste', label: 'Triste', emoji: '😢', color: 'from-blue-400 to-blue-500' },
    { id: 'ansioso', label: 'Ansioso', emoji: '😰', color: 'from-red-400 to-pink-400' },
    { id: 'motivado', label: 'Motivado', emoji: '🚀', color: 'from-green-400 to-emerald-400' },
    { id: 'calmo', label: 'Calmo', emoji: '😌', color: 'from-purple-400 to-indigo-400' }
  ]

  // Registrar novo humor na API
  const handleAddMood = () => {
    if (selectedMood) {
      const newEntry = {
        data: new Date().toISOString().split('T')[0],
        sentimento: moods.find(m => m.id === selectedMood)?.label || '',
        descricao: description,
        intensidade: intensity
      }

      fetch(`${API_BASE}/humor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry)
      })
        .then(res => {
          if (!res.ok) throw new Error("Erro ao registrar humor")
          return res.json()
        })
        .then(savedEntry => {
          setMoodEntries([savedEntry, ...moodEntries]) // adiciona o novo registro
          setSelectedMood('')
          setIntensity(5)
          setDescription('')
        })
        .catch(err => console.error(err))
    }
  }

  const getMoodColor = (moodId: string) => {
    return moods.find(m => m.id === moodId)?.color || 'from-gray-400 to-gray-500'
  }

  const getMoodEmoji = (moodId: string) => {
    return moods.find(m => m.id === moodId)?.emoji || '😐'
  }

  return (
    <main className="flex-1 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Check-in de Humor</h1>
          <p className="text-gray-600">
            Registre seu estado emocional diariamente e acompanhe sua saúde mental
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Carregando registros de humor...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulário */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Como você está se sentindo?</h2>

              {/* Seleção de humor */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Selecione seu sentimento
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {moods.map(mood => (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`p-4 rounded-xl transition-all duration-200 ${
                        selectedMood === mood.id
                          ? `bg-linear-to-br ${mood.color} text-white shadow-lg scale-105`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className="text-3xl mb-2">{mood.emoji}</div>
                      <div className="text-sm font-semibold">{mood.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensidade */}
              <div className="mb-8">
                <label htmlFor="intensity" className="block text-sm font-semibold text-gray-700 mb-3">
                  Intensidade: <span className="text-green-600 font-bold">{intensity}/10</span>
                </label>
                <input
                  type="range"
                  id="intensity"
                  min="1"
                  max="10"
                  value={intensity}
                  onChange={(e) => setIntensity(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
              </div>

              {/* Descrição */}
              <div className="mb-8">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  O que você está sentindo? (opcional)
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical"
                  placeholder="Descreva seus sentimentos, pensamentos ou eventos do dia..."
                  rows={4}
                />
              </div>

              <button
                onClick={handleAddMood}
                disabled={!selectedMood}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-200 ${
                  selectedMood
                    ? 'bg-linear-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Registrar Check-in
              </button>
            </div>

            {/* Histórico */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Histórico Recente</h2>
              {moodEntries.length === 0 ? (
                <p className="text-gray-600">Nenhum check-in registrado ainda</p>
              ) : (
                <div className="space-y-4">
                  {moodEntries.map(entry => (
                    <div
                      key={entry.id}
                      className={`bg-linear-to-br ${getMoodColor(entry.sentimento.toLowerCase())} p-4 rounded-xl text-white shadow-md`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{getMoodEmoji(entry.sentimento.toLowerCase())}</div>
                          <div>
                            <h3 className="font-bold text-lg">{entry.sentimento}</h3>
                            <p className="text-sm opacity-90">
                              {new Date(entry.data).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                        </div>
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                          {entry.intensidade}/10
                        </div>
                      </div>
                      {entry.descricao && <p className="text-sm opacity-95">{entry.descricao}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}