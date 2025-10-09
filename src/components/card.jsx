

export default function Card({ titulo, descricao, icone }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            {icone}
            <h4 className="text-xl font-bold mb-3 text-gray-800">{titulo}</h4>
            <p className="text-gray-600">{descricao}</p>
        </div> 
    )
}