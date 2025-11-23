import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    dataNascimento: "",
    genero: "",
  })
  const [message, setMessage] = useState("")
  const navigate = useNavigate()   // 🚀 Hook para navegação

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isLogin) {
      // 🔑 Login fake usando localStorage
      const savedUser = localStorage.getItem("user")
      if (savedUser) {
        const user = JSON.parse(savedUser)
        if (user.email === formData.email && user.senha === formData.senha) {
          setMessage("Login realizado com sucesso!")
          // ✅ Redireciona para dashboard
          setTimeout(() => navigate("/dashboard"), 1000)
        } else {
          setMessage("Credenciais inválidas")
        }
      } else {
        setMessage("Nenhum usuário cadastrado")
      }
    } else {
      // 📝 Cadastro fake: salva no localStorage
      localStorage.setItem("user", JSON.stringify(formData))
      setMessage("Cadastro realizado com sucesso!")
      setFormData({
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        dataNascimento: "",
        genero: "",
      })
      // ✅ Depois do cadastro, já pode mandar para login
      setTimeout(() => setIsLogin(true), 1000)
    }

    setTimeout(() => setMessage(""), 3000)
  }

  return (
    <main className="flex-1 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {isLogin ? "Login" : "Cadastro"}
        </h1>

        {message && (
          <div className="mb-6 bg-green-100 border border-green-200 text-green-800 px-6 py-4 rounded-xl text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              {/* Campos extras do cadastro */}
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

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
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="dataNascimento" className="block text-sm font-semibold text-gray-700 mb-2">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="genero" className="block text-sm font-semibold text-gray-700 mb-2">
                  Gênero
                </label>
                <select
                  id="genero"
                  name="genero"
                  value={formData.genero}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Selecione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                  <option value="Prefiro não informar">Prefiro não informar</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-semibold text-gray-700 mb-2">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-green-600 to-blue-600 text-white font-bold py-3 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200"
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-600 font-semibold hover:underline"
          >
            {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
          </button>
        </div>
      </div>
    </main>
  )
}