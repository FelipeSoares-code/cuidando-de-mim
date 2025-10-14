

export default function Botao({ texto, onClick, estilo }) {
    
    return (
        <button className="bg-[var(--color-azul-padrao)] text-white p-5 font-bold rounded-lg">
            {texto}
        </button>
    )
}