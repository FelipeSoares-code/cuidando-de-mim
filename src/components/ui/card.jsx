
export default function Card({ titulo, descricao, icone, borda }) {

    const cardStyle = { fontFamily: "'Inter', Arial, Helvetica, sans-serif" }

    borda = (borda === true) ? { border: '2px solid var(--color-azul-padrao' } : {}
    Object.assign(cardStyle, borda)

    return (
        <div className={`w-full bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center`} style={cardStyle}>
            {icone}
            <h4 className="text-xl font-bold mb-3 text-gray-800">{titulo}</h4>
            {
            Array.isArray(descricao)
                ? descricao.map((desc, idx) => (
                    <p key={idx} className="text-gray-600">{desc}</p>
                    ))
                : 
                <p className="text-gray-600">{descricao}</p>
            }
        </div> 
    )
}