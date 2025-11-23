import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import Authpage from './routes/Authpage'   
import Humor from './routes/Humor'
import Conteudos from './routes/Conteudos'
import Lembretes from './routes/Lembretes'
import Sobre from './routes/Sobre'
import FAQ from './routes/FAQ'
import Contato from './routes/Contato'
import Integrantes from './routes/Integrantes'
import Error from './routes/Error'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/authpage" element={<Authpage />} />   
          <Route path="/humor" element={<Humor />} />
          <Route path="/conteudos" element={<Conteudos />} />
          <Route path="/lembretes" element={<Lembretes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App