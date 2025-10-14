import Carrossel from '../components/Carrossel'
import Sobre from '../components/Sobre'
import Avaliacoes from '../components/Avaliacoes'
import Localizacao from '../components/Localizacao'
import Contato from '../components/Contato'


export default function Principal(){
    
    return (
        <>
            <section id="inicio">
                <Carrossel />
            </section>
            
            <Sobre  />
            <Avaliacoes />
            <Localizacao />
            <Contato />
        </>
    )
}