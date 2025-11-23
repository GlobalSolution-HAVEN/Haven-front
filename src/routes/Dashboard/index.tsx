import { useState, useEffect } from 'react'

interface MoodEntry {
  date: string
  mood: string
  description: string
}

interface Reminder {
  id: number
  title: string
  time: string
  frequency: string
  active: boolean
}

export default function Dashboard() {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([])
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [selectedMood, setSelectedMood] = useState('')
  const [moodDescription, setMoodDescription] = useState('')
  const [loading, setLoading] = useState(true)

  const API_BASE = "https://haven-api-f1yp.onrender.com"
  const usuarioId = 1 // 🔗 ajuste para o ID do usuário logado

  // Buscar humor e lembretes da API
  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/humor`).then(res => res.json()),
      fetch(`${API_BASE}/lembretes/usuario/${usuarioId}`).then(res => res.json())
    ])
      .then(([humorData, lembretesData]) => {
        // Mapear humor para o formato do Dashboard
        const mappedHumor = humorData.map((h: any) => ({
          date: h.data,
          mood: h.sentimento,
          description: h.descricao
        }))
        setMoodEntries(mappedHumor)

        // Mapear lembretes para o formato do Dashboard
        const mappedReminders = lembretesData.map((r: any) => ({
          id: r.id,
          title: r.titulo,
          time: r.horario,
          frequency: r.frequencia,
          active: r.ativo
        }))
        setReminders(mappedReminders)

        setLoading(false)
      })
      .catch(err => {
        console.error("Erro ao carregar dados:", err)
        setLoading(false)
      })
  }, [])

  const moods = ['Feliz', 'Neutro', 'Triste', 'Ansioso', 'Motivado']

  // Registrar humor na API
  const handleAddMood = () => {
    if (selectedMood) {
      const newEntry = {
        data: new Date().toISOString().split('T')[0],
        sentimento: selectedMood,
        descricao: moodDescription,
        intensidade: 5 // valor padrão
      }

      fetch(`${API_BASE}/humor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry)
      })
        .then(res => res.json())
        .then(saved => {
          setMoodEntries([{ date: saved.data, mood: saved.sentimento, description: saved.descricao }, ...moodEntries])
          setSelectedMood('')
          setMoodDescription('')
        })
        .catch(err => console.error("Erro ao registrar humor:", err))
    }
  }

  // Ativar/Desativar lembrete
  const toggleReminder = (id: number) => {
    fetch(`${API_BASE}/lembretes/${id}/desativar`, { method: "PUT" })
      .then(res => res.json())
      .then(updated => {
        setReminders(reminders.map(r =>
          r.id === id ? { id: updated.id, title: updated.titulo, time: updated.horario, frequency: updated.frequencia, active: updated.ativo } : r
        ))
      })
      .catch(err => console.error("Erro ao atualizar lembrete:", err))
  }

  return (
    <main className="flex-1 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Bem-vindo! Acompanhe sua saúde e bem-estar aqui.</p>
        </div>

        {loading ? (
          <p className="text-gray-600">Carregando dados...</p>
        ) : (
          <>
            {/* Cards de estatísticas */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <p className="text-gray-600 text-sm font-medium">Check-ins este mês</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{moodEntries.length}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <p className="text-gray-600 text-sm font-medium">Lembretes ativos</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{reminders.filter(r => r.active).length}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <p className="text-gray-600 text-sm font-medium">Conteúdos assistidos</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Check-in de Humor */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Check-in de Humor</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 gap-2">
                    {moods.map(mood => (
                      <button
                        key={mood}
                        onClick={() => setSelectedMood(mood)}
                        className={`p-3 rounded-xl font-medium transition-all duration-200 ${
                          selectedMood === mood
                            ? 'bg-green-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={moodDescription}
                    onChange={(e) => setMoodDescription(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Como foi seu dia?"
                    rows={3}
                  />
                  <button
                    onClick={handleAddMood}
                    className="w-full bg-linear-to-r from-green-600 to-blue-600 text-white font-bold py-3 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200"
                  >
                    Registrar Check-in
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Histórico Recente</h3>
                  <div className="space-y-3">
                    {moodEntries.slice(0, 3).map((entry, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{entry.mood}</p>
                          <p className="text-sm text-gray-600">{entry.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lembretes */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Meus Lembretes</h2>
                <div className="space-y-3">
                  {reminders.map(reminder => (
                    <div key={reminder.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h3 className="font-semibold text-gray-900">{reminder.title}</h3>
                        <p className="text-sm text-gray-600">{reminder.time} • {reminder.frequency}</p>
                      </div>
                      <button
                        onClick={() => toggleReminder(reminder.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          reminder.active
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {reminder.active ? '✓ Ativo' : 'Inativo'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}