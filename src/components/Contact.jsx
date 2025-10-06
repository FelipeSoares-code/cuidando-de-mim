import { Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      text: '(11) 95708-4554',
      href: 'https://wa.me/5511957084554',
      label: 'WhatsApp'
    },
    {
      icon: Mail,
      text: 'rita.soares_psico@hotmail.com',
      href: 'mailto:rita.soares_psico@hotmail.com',
      label: 'Email'
    },
    {
      icon: Instagram,
      text: '@psicologa.rita.soares',
      href: 'https://www.instagram.com/psicologa.rita.soares/',
      label: 'Instagram'
    }
  ];

  return (
    <div id="contato" className="bg-gray-200 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6666b1] mb-8">
          Contato
        </h2>
        
        <div className="space-y-6">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center">
                <IconComponent className="w-8 h-8 text-[#6666b1] mr-4" />
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-oswald text-black hover:text-[#6666b1] transition-colors duration-200 no-underline"
                  aria-label={item.label}
                >
                  {item.text}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
