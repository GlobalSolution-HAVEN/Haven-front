import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main className="flex-1 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-transparent bg-linear-to-r from-green-600 to-blue-600 bg-clip-text mb-4">
          404
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Página não encontrada
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-linear-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl"
          >
            Voltar para Home
          </Link>
          
          <Link
            to="/dashboard"
            className="block w-full border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 transition-all duration-200 font-bold px-8 py-4 rounded-xl"
          >
            Ir para Dashboard
          </Link>
        </div>

        <div className="mt-12 text-6xl">
          😕
        </div>
      </div>
    </main>
  )
}
