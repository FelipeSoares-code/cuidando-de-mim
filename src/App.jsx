import './App.css'
import Header from './components/Cabecalho'
import Principal from './telas/Principal'
import Cadastro from './telas/Cadastro'
import Erro404 from './telas/Erro404'
import Footer from './components/Rodape'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Principal />} />
            <Route path='*' element={<Erro404 />} />
            <Route path='/cadastro' element={<Cadastro />} />
          </Routes>
        </Router>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
