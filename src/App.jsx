import './App.css'
import Cabecalho from './components/Cabecalho'
import Principal from './telas/Principal'
import Cadastro from './telas/Cadastro'
import Erro404 from './telas/Erro404'
import Rodape from './components/Rodape'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from './telas/Login'
import { AppProvider } from './AppContext'

function App() {
  const linkDoctoralia = "https://www.doctoralia.com.br/rita-soares/psicologo/sao-bernardo-do-campo"
  return (
    <AppProvider>
    <div className="min-h-screen">
      <Router>
        <Cabecalho />
      
        <main className="min-h-screen">        
          <Routes>
            <Route path='/' element={<Principal />} />
            <Route path='*' element={<Erro404 />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
          </Routes>        
        </main>
      
        <Rodape />
      </Router>
    </div>
    </AppProvider>
  )
}

export default App
