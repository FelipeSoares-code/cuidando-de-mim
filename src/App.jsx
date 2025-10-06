import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import About from './components/About'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section id="inicio">
          <Carousel />
        </section>
        
        <About />
        <Reviews />
        <Location />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
