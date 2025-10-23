import { useState } from 'react'
import { Menu, X, CircleUserRound } from 'lucide-react'
import logoSite from '../assets/imagens/logo-site.png'
import AreaControle from './AreaControle'

export default function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isControlOpen, setIsControlOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const path = window.location.pathname
    if (path !== '/') {
      // veriicar se na produção a tela desse até o id
      window.location.href = `/#${sectionId}`
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="bg-[var(--color-azul-padrao)] sticky top-0 z-50 px-4 md:px-8">
        <nav className="flex items-center justify-between py-3">
          {/* Logo e Nome */}
          <a href="/" className="flex items-center">
              <img 
                src={logoSite} 
                alt="Logo Cuidando de Mim" 
                className="w-12 h-12 md:w-15 md:h-15"
              />
              <span className="ml-3 text-[#bcc3cd] text-2xl md:text-4xl font-bold font-dancing-script">
                Clínica Cuidando de Mim
              </span>
          </a>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-[#bcc3cd] transition-colors duration-200 font-medium"
              >
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-white hover:text-[#bcc3cd] transition-colors duration-200 font-medium"
              >
                Contato
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="text-white hover:text-[#bcc3cd] transition-colors duration-200 font-medium"
              >
                Localização
              </button>
            </li>
            <li>
              <button type="button">
                <CircleUserRound
                  className='text-white hover:text-[#bcc3cd] transition-colors duration-200'
                  onClick={() => setIsControlOpen(!isControlOpen)}
                />  
              </button>          
            </li>
          </ul>

          {/* Botão Menu Mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2c6e9a] pb-4">
            <ul className="space-y-2">
              <li>
                <CircleUserRound
                  className='text-white ml-4 hover:text-[#bcc3cd] transition-colors duration-200'
                  onClick={() => setIsControlOpen(!isControlOpen)}
                />
              </li>
              {
                isControlOpen ?
                  <AreaControle modoLista={true} />
                :
                <></>
              }
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-[#1e4a66] transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-[#1e4a66] transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('localizacao')}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-[#1e4a66] transition-colors duration-200"
                >
                  Localização
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
      {isControlOpen ?
        <span className='collapse md:visible'>
          <AreaControle modoLista={false} />
        </span>        
      :
        <></>  
      }      
    </>
  )
}
