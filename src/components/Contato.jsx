import { Mail } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactItems = [
    {
      icon: FaWhatsapp,
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
      icon: FaInstagram,
      text: '@psicologa.rita.soares',
      href: 'https://www.instagram.com/psicologa.rita.soares/',
      label: 'Instagram'
    }
  ];

  return (
    <section id="contato" className="bg-gray-200 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6666b1] mb-8">
          Contato
        </h2>
        
        <div className="space-y-6">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center">
                <Link to={item.href} target='_blank' rel='noopener'>
                  <IconComponent className="w-8 h-8 text-[#6666b1] mr-4" />
                </Link>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-oswald text-black hover:text-[#6666b1] transition-colors duration-200 no-underline"
                  aria-label={item.label}
                >
                  {item.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
