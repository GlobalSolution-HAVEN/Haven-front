import { useState, useEffect } from 'react'

interface Reminder {
  id: number
  titulo: string
  descricao: string
  horario: string
  frequencia: 'diaria' | 'semanal' | 'mensal'
  ativo: boolean
  diasSemana?: string[]
}

export default function Lembretes() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [showForm, setShowForm] = useState(false)
  const [newReminder, setNewReminder] = useState({
    titulo: '',
    descricao: '',
    horario: '',
    frequencia: 'diaria' as const
  })
  const [loading, setLoading] = useState(true)

  const API_BASE = "https://haven-api-f1yp.onrender.com"
  const usuarioId = 1 // 🔗 ajuste para o ID do usuário logado

  // Buscar lembretes da API
  useEffect(() => {
    fetch(`${API_BASE}/lembretes/usuario/${usuarioId}`)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar lembretes")
        return res.json()
      })
      .then(data => {
        setReminders(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  // Criar lembrete
  const handleAddReminder = () => {
    if (newReminder.titulo && newReminder.horario) {
      const reminder = {
        ...newReminder,
        usuarioId, // precisa enviar o usuário
        ativo: true
      }

      fetch(`${API_BASE}/lembretes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reminder)
      })
        .then(res => {
          if (!res.ok) throw new Error("Erro ao criar lembrete")
          return res.json()
        })
        .then(savedReminder => {
          setReminders([...reminders, savedReminder])
          setNewReminder({ titulo: '', descricao: '', horario: '', frequencia: 'diaria' })
          setShowForm(false)
        })
        .catch(err => console.error(err))
    }
  }

  // Desativar lembrete
  const toggleReminder = (id: number) => {
    fetch(`${API_BASE}/lembretes/${id}/desativar`, { method: "PUT" })
      .then(res => {
        if (!res.ok) throw new Error("Erro ao desativar lembrete")
        return res.json()
      })
      .then(updated => {
        setReminders(reminders.map(r => r.id === id ? updated : r))
      })
      .catch(err => console.error(err))
  }

  // Deletar lembrete (apenas local, já que não há endpoint DELETE)
  const deleteReminder = (id: number) => {
    setReminders(reminders.filter(r => r.id !== id))
  }

  const frequencyLabels = {
    diaria: 'Diária',
    semanal: 'Semanal',
    mensal: 'Mensal'
  }

  return (
    <main className="flex-1 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Meus Lembretes</h1>
            <p className="text-gray-600">Crie lembretes personalizados para manter hábitos saudáveis</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-linear-to-r from-green-600 to-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 whitespace-nowrap"
          >
            + Novo Lembrete
          </button>
        </div>

        {loading ? (
          <p className="text-gray-600">Carregando lembretes...</p>
        ) : (
          <>
            {/* Formulário */}
            {showForm && (
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Criar Novo Lembrete</h2>
                {/* ... mantém os inputs iguais */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleAddReminder}
                    className="flex-1 bg-linear-to-r from-green-600 to-blue-600 text-white font-bold py-3 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200"
                  >
                    Criar Lembrete
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-xl hover:border-gray-400 transition-all duration-200"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {/* Lista de lembretes */}
            <div className="space-y-4">
              {reminders.length === 0 ? (
                <p className="text-gray-600">Você não tem lembretes criados ainda</p>
              ) : (
                reminders.map(reminder => (
                  <div key={reminder.id} className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 ${!reminder.ativo ? 'opacity-60' : ''}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{reminder.titulo}</h3>
                        {reminder.descricao && <p className="text-gray-600 mb-3">{reminder.descricao}</p>}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span>🕐 {reminder.horario}</span>
                          <span>📅 {frequencyLabels[reminder.frequencia]}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleReminder(reminder.id)}
                          className="px-4 py-2 rounded-lg font-medium bg-green-100 text-green-700 hover:bg-green-200"
                        >
                          {reminder.ativo ? 'Desativar' : 'Ativar'}
                        </button>
                        <button
                          onClick={() => deleteReminder(reminder.id)}
                          className="px-4 py-2 rounded-lg font-medium bg-red-100 text-red-700 hover:bg-red-200"
                        >
                          Deletar
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}