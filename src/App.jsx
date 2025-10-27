import './App.css'
import Cabecalho from './components/Cabecalho'
import Principal from './telas/Principal'
import Cadastro from './telas/Cadastro'
import Erro404 from './telas/Erro404'
import Rodape from './components/Rodape'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from './telas/Login'
import { AppProvider } from './AppContext'
import { useApp } from './AppContext'

function App() {
  return (
    <AppProvider>
      <InnerApp />
    </AppProvider>
  )
}

function InnerApp() {
  const { pathPadrao } = useApp()

  return (
    <div className="min-h-screen">
      <Router>
        <Cabecalho />
      
        <main className="min-h-screen">        
          <Routes>
            <Route path={pathPadrao} element={<Principal />} />
            <Route path='*' element={<Erro404 />} />
            <Route path={pathPadrao + 'cadastro'} element={<Cadastro />} />
            <Route path={pathPadrao + 'login'} element={<Login />} />
          </Routes>        
        </main>
      
        <Rodape />
      </Router>
    </div>
  )
}

export default App
