

export default function Card({ titulo, descricao, icone }) {
    const cardStyle = { fontFamily: "'Inter', Arial, Helvetica, sans-serif" };
    return (
        <div className={`w-full bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center`} style={cardStyle}>
            {icone}
            <h4 className="text-xl font-bold mb-3 text-gray-800">{titulo}</h4>
            <p className="text-gray-600">{descricao}</p>
        </div> 
    )
}