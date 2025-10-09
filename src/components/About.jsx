import clinica4 from '../assets/imagens/foto-clinica4.jpeg';
import rita from '../assets/imagens/foto-rita-2.1.jpg';
import Card from './card';
import { GraduationCap, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 mt-24 font-serif">
      {/* Mensagem de destaque */}
      <div className="text-center mb-16">
        <p className="text-2xl md:text-3xl font-oswald text-[#6666a8] font-normal">
          Atendimento Online e Presencial!
        </p>
      </div>

      {/* Sobre a Clínica */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-dancing-script font-bold mb-6">
          Sobre a Clínica Cuidando de Mim
        </h1>
        <p className="text-lg text-justify leading-relaxed max-w-none md:mr-[40%]">
          A clínica Cuidando de Mim é um espaço dedicado ao bem-estar emocional e saúde mental, 
          fundado pela psicóloga Rita Soares. Minha missão é oferecer suporte psicológico de forma 
          acolhedora e personalizada, ajudando cada pessoa a encontrar saúde mental e autoconhecimento. 
          Cuidar de si é o primeiro passo para uma vida mais plena, significativa e feliz. Venha, 
          vamos caminhar juntos nessa jornada de cuidado e transformação!
        </p>
      </div>

      <hr className="border-gray-300 mb-16" />

      {/* Como cuidar de você */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img 
            src={clinica4} 
            alt="Interior da clínica" 
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-dancing-script font-bold mb-6">
              Como cuidar de você?
            </h1>
            <p className="text-lg text-justify leading-relaxed">
              Utilizo a Terapia Cognitiva Comportamental (TCC) para ajudar você a conhecer, 
              compreender e modificar padrões de pensamentos, sentimentos e comportamentos que 
              podem ser a causa de sofrimentos. Atendo pessoas a partir de 14 anos, oferecendo 
              um espaço seguro e acolhedor para explorar desafios emocionais, melhorar a autoestima 
              e desenvolver estratégias práticas para lidar com transtornos e dificuldades do dia a dia. 
              Juntos, vamos construir um caminho de autoconhecimento, crescimento pessoal e promoção a saúde.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mb-16" />

      {/* Sobre Rita */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-dancing-script font-bold text-center mb-12">
          Sobre mim
        </h1>
        
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <h2 className="text-2xl font-oswald font-bold mb-6">Rita Soares</h2>

            <Card 
              titulo={'Formação Acadêmica'}
              icone={<GraduationCap className="w-16 h-16 mx-auto mb-4 text-gray-800" />}
              descricao={
                'Graduada em Psicologia pela Universidade Metodista de São Paulo (UMESP), com especialização em Neuropsicologia e Gestão Empresarial.'
              }
            />

            <Card 
              titulo={'Abordagem Terapêutica'}
              icone={<Brain className="w-16 h-16 mx-auto mb-4 text-gray-800" />}
              descricao={
                'Utilizo a Terapia Cognitiva Comportamental (TCC) para ajudar pacientes a reestruturarem pensamentos e comportamentos disfuncionais.'
              }
            />
            
            <div className="space-y-4 text-lg text-justify leading-relaxed">
              <p>
                Sou Rita Soares, psicóloga clínica formada pela Universidade Metodista de São Paulo (UMESP), 
                com especialização em Neuropsicologia e Gestão Empresarial. Desde 2016, atendo adolescentes, 
                adultos e idosos, tanto no Brasil quanto no exterior, utilizando a Terapia Cognitiva 
                Comportamental (TCC).
              </p>
              
              <p>
                Procuro integrar minha formação em Gestão Empresarial para auxiliar empreendedores e 
                pacientes com problemas relacionados ao trabalho e ao ambiente corporativo, ajudando-os 
                a lidar com o estresse, a ansiedade e as pressões do mercado.
              </p>
              
              <p>
                Tenho ampla experiência no tratamento de Ansiedade, Depressão, Luto e Traumas. 
                Atendimento a adolescentes que enfrentam dificuldades de interação social, como timidez 
                e problemas decorrentes de bullying, oferecendo suporte para melhorar a autoestima, 
                habilidades sociais e auto conhecimento. Acompanhamento psicológico a pacientes 
                Bariátricos pré e pós operatórios.
              </p>
              
              <p>
                Meu trabalho é voltado para a reestruturação cognitiva, gerenciamento de emoções e a 
                ressignificação de pensamentos disfuncionais, sempre com o objetivo de promover mudanças 
                positivas nos padrões de comportamento e na qualidade de vida dos meus pacientes. Estou 
                sempre em busca de novos conhecimentos e técnicas para ajudar cada pessoa a alcançar sua 
                melhor versão.
              </p>
              
              <p>
                Estou à disposição para entrar nesse processo terapêutico e, juntos, buscar as melhores 
                soluções para seus desafios emocionais e psicológicos.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 order-1 md:order-2">
            <img 
              src={rita} 
              alt="Rita Soares - Psicóloga" 
              className="w-full rounded-lg shadow-lg md:mt-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
