import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <div id="localizacao" className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6666b1] mb-8">
          Localização
        </h2>
        
        <div className="flex items-center mb-8">
          <MapPin className="w-8 h-8 text-[#6666b1] mr-3" />
          <p className="text-lg">
            Rua José Versolato 111B, sala 704, Centro, São Bernardo do Campo
          </p>
        </div>
        
        <div className="flex justify-center">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8689.571016136331!2d-46.55178338423708!3d-23.69331208615029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42366628df3b%3A0x56c02829d83e5e5!2sR.%20Jos%C3%A9%20Versolato%2C%20111B%20-%20Centro%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009750-730!5e0!3m2!1spt-BR!2sbr!4v1721414612534!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0, maxWidth: '700px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
