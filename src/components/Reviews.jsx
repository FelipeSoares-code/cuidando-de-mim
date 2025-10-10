import { Star } from 'lucide-react';
import Card from './ui/card';

const Reviews = () => {
  const reviews = [
    {
      text: "A Rita é uma profissional excelente, muito competente, observadora, paciente, empática, atenciosa e com ótima comunicação. Em cada sessão ela promove um ambiente acolhedor, leve, franco, aberto e de muita confiança. Esses são fatores que eu considero primordiais em uma terapia. É uma profissional que eu recomendo com certeza.",
      author: "Patricia",
      date: "22 de junho de 2023"
    },
    {
      text: "Rita é simplesmente maravilhosa! Empática e respeitosa. Respeita seu tempo e faz apontamentos sempre buscando enxergar os pontos em relação ao seu comportamento. Tem me ajudado muito e agradeço imensamente",
      author: "Iris Reis",
      date: "15 de agosto de 2023"
    },
    {
      text: "A Rita é ótima. Objetiva e dinâmica. Interpreta rapidamente o cenário, dando um parecer muito válido. Desde da primeira sessão, gostei muito dela. Recomendo",
      author: "Lilian",
      date: "24 de novembro de 2023"
    }
  ];

  const StarRating = () => (
    <div className="flex space-x-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 md:px-8 mb-16">
      <hr className="border-gray-300 mb-16" />
      
      <h1 className="text-4xl md:text-5xl font-dancing-script font-bold text-center mb-16">
        Avaliações
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <Card 
            key={index}
            titulo={review.author}
            descricao={
              <div className="flex flex-col h-full justify-between">
                <span key="text" className="block text-justify">{review.text}</span>
                <span key="date" className="block mt-2 text-sm text-gray-500 text-right self-end">{review.date}</span>
              </div>
            }
            icone={<StarRating />}
            borda={true}
          />
        ))}
      </div>
      
      <p className="mt-12 text-center text-lg">
        Veja essas e mais avaliações no site{' '}
        <a 
          href="https://www.doctoralia.com.br/rita-soares/psicologo/sao-bernardo-do-campo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          doctoralia.com.br
        </a>
      </p>
    </div>
  );
};

export default Reviews;
