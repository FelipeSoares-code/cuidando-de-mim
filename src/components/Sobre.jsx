import clinica4 from '../assets/imagens/foto-clinica4.jpeg';
import rita from '../assets/imagens/foto-rita-2.1.jpg';
import Card from './ui/card';
import { GraduationCap, Brain, Sparkles, User } from 'lucide-react';

const About = () => {
  const aboutStyle = { fontFamily: "'Inter', Arial, Helvetica, sans-serif" }

  return (
    <section id='Sobre' className="container mx-auto px-4 mt-24 font-serif" style={aboutStyle}>
      {/* Mensagem de destaque */}
      <div className="text-center mb-16">
        <p className="text-2xl md:text-3xl font-oswald text-[var(--color-azul-padrao)] font-normal">
          Atendimento Online e Presencial!
        </p>
      </div>

      {/* Sobre a Clínica */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-dancing-script font-bold mb-6">
          Sobre a Clínica Cuidando de Mim
        </h1>
        <p className="text-lg text-justify leading-relaxed max-w-none lg:mr-[40%]">
          A Clínica Cuidando de Mim é um espaço dedicado ao bem-estar emocional e saúde mental, 
          fundado pela psicóloga Rita Soares. Minha missão é oferecer suporte psicológico de forma 
          acolhedora e personalizada, ajudando cada pessoa a encontrar saúde mental e autoconhecimento. 
          Cuidar de si é o primeiro passo para uma vida mais plena, significativa e feliz. Venha, 
          vamos caminhar juntos nessa jornada de cuidado e transformação!
        </p>
      </div>

      <hr className="border-gray-300 mb-16" />

      {/* Como cuidar de você */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <img 
            src={clinica4} 
            alt="Interior da clínica" 
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div className="w-full lg:w-1/2">
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
        
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          {/* Cards */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full text-sm">
              <Card 
                titulo={'Formação Acadêmica'}
                icone={<GraduationCap className="w-12 h-12 mx-auto mb-4 text-gray-800" />}
                descricao={
                  'Graduada em Psicologia pela Universidade Metodista de São Paulo (UMESP), com especialização em Neuropsicologia e Gestão Empresarial.'
                }
              />

              <Card 
                titulo={'Abordagem Terapêutica'}
                icone={<Brain className="w-12 h-12 mx-auto mb-4 text-gray-800" />}
                descricao={
                  'Utiliza a Terapia Cognitiva Comportamental (TCC) para ajudar pacientes a reestruturarem pensamentos e comportamentos disfuncionais.'
                }
              />

              <Card 
                titulo={'Experiência Profissional'}
                icone={<Sparkles className="w-12 h-12 mx-auto mb-4 text-gray-800" />}
                descricao={
                  'Atendimento a adolescentes, adultos e idosos desde 2016, tanto no Brasil quanto no exterior, com foco em ansiedade, depressão, luto, traumas e suporte a pacientes bariátricos.'
                }
              />

              <Card 
                titulo={'Forma de Atendimento'}
                icone={<User className="w-12 h-12 mx-auto mb-4 text-gray-800" />}
                descricao={
                  'Oferece atendimentos online e presenciais, proporcionando flexibilidade e acessibilidade para seus pacientes.'
                }
              />        
            </div>
          </div>
          
          {/* Foto */}
          <div className="h-full lg:w-2/5 flex items-center justify-center">
            <img 
              src={rita} 
              alt="Rita Soares - Psicóloga" 
              className="w-full rounded-lg shadow-lg md:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
