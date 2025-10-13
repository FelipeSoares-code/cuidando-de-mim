import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Navigation, Pagination, A11y } from 'swiper/modules';

const Reviews = () => {
  const reviews = [
    {
      text: "Rita é uma profissional incrível! Acolhedora, humanizada, sábia e muito competente. Tem me ajudado muito no meu processo terapêutico. Obrigada pelo profissionalismo e pela escuta acolhedora. Recomendo demais!",
      author: "Caroline R",
      date: "28 de agosto de 2025"
    },
    {
      text: "Estou muito satisfeita com o atendimento da Dra. Ela me acolheu com empatia e profissionalismo, criando um espaço seguro e acolhedor. Suas orientações e insights têm sido fundamentais na minha jornada. Recomendo a todos que buscam apoio psicológico!",
      author: "Gabriela Alves",
      date: "5 de dezembro de 2024"
    },
    {
      text: "O que dizer da Rita! Excelente profissional, empática e acolhedora. Me ajudou a entender o sofrimento que eu estava enfrentando, a me conhecer, me entender, e lidar com minhas dificuldades. Cheguei até a Rita por indicação e indico ela para todos que buscam por ajuda psicológica seria e ética.",
      author: "Rafaella W.",
      date: "28 de março de 2024"
    },
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

      <Swiper className='h-full m-[3px]'
        spaceBetween={25} 
        slidesPerView={1} 
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2 //tela média
          },
          1024: {
            slidesPerView: 3 //tela grande
          }
        }}  
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Card
              className="h-full"
              titulo={review.author}
              descricao={
                <span className="flex flex-col h-full justify-between">
                  <span key="text" className="block text-justify">{review.text}</span>
                  <span key="date" className="block mt-2 text-sm text-gray-500 text-right self-end">{review.date}</span>
                </span>
              }
              icone={<StarRating />}
              estilo={{ border: '2px solid var(--color-azul-padrao)', height: '400px' }}
            />
          </SwiperSlide>
        ))}
        {/* Botões de navegação */}
        <div className="swiper-button-prev collapse md:visible absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-white p-2 rounded-full shadow-md">
          <ChevronLeft />
        </div>
        <div className="swiper-button-next collapse md:visible absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-white p-2 rounded-full shadow-md">
          <ChevronRight />
        </div>
      </Swiper>
      
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
