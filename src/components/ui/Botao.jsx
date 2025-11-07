

export default function Botao({ texto, onClick, estilo }) {
    
    return (
        <button
            type="button"
            className="bg-[var(--color-azul-padrao)] text-white p-4 px-9 font-bold rounded-lg hover:text-[var(--color-cinza-padrao)]"
        >
            {texto}
        </button>
    )
}