import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              HAVEN
            </span>
            <span className="text-xs font-semibold text-gray-600 hidden sm:block">
              Bem-estar & Saúde
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-2 rounded-lg"
            >
              Início
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-2 rounded-lg"
            >
              Dashboard
            </Link>
            <Link 
              to="/conteudos" 
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-2 rounded-lg"
            >
              Conteúdos
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-2 rounded-lg"
            >
              FAQ
            </Link>
            <Link 
              to="/sobre" 
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-2 rounded-lg"
            >
              Sobre
            </Link>
            <Link 
              to="/integrantes" 
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-2 rounded-lg"
            >
              Integrantes
            </Link>
            <Link 
              to="/authpage" 
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-2 rounded-lg"
            >
              Login
            </Link>
            <Link 
              to="/contato" 
              className="bg-linear-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg"
            >
              Contato
            </Link>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span 
                className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
          style={{ overscrollBehavior: 'contain' }}
          >

          <nav className="py-4 space-y-2 border-t border-gray-100">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link 
              to="/dashboard" 
              className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
              onClick={closeMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/conteudos" 
              className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
              onClick={closeMenu}
            >
              Conteúdos
            </Link>
            <Link 
              to="/faq" 
              className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <Link 
              to="/sobre" 
              className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link 
              to="/integrantes" 
              className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
              onClick={closeMenu}
            >
              Integrantes
            </Link>
            <Link 
              to="/authpage" 
              className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link 
              to="/contato" 
              className="block bg-linear-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-medium px-4 py-3 rounded-lg shadow-md text-center"
              onClick={closeMenu}
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
