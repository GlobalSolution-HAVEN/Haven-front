import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-gray-900 to-gray-800 text-white p-8 mt-12 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">HAVEN</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Assistente digital inteligente para bem-estar e saúde. Cuide de sua mente e corpo com lembretes personalizados e conteúdos multimídia.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-green-400 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-green-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-green-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-green-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/conteudos" className="text-gray-400 hover:text-green-400 transition-colors">
                  Conteúdos
                </Link>
              </li>
              <li>
                <Link to="/lembretes" className="text-gray-400 hover:text-green-400 transition-colors">
                  Lembretes
                </Link>
              </li>
              <li>
                <Link to="/perfil" className="text-gray-400 hover:text-green-400 transition-colors">
                  Perfil
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 contato@haven.com.br</li>
              <li>📱 (11) 3000-0000</li>
              <li>📍 São Paulo - SP</li>
              <li className="pt-2">
                <span className="text-xs">Suporte 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2025 HAVEN - Bem-estar e Saúde Inteligente. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/" className="hover:text-green-400 transition-colors">
                Privacidade
              </Link>
              <Link to="/" className="hover:text-green-400 transition-colors">
                Termos de Uso
              </Link>
              <Link to="/" className="hover:text-green-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
