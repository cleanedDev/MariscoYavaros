import React from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';

function Footer() {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Yavaros Mariscos</h2>
            <p className="mb-4">Mariscos frescos servidos en una experiencia náutica única sobre el mar.</p>
            {/* <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
            </div> */}
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="mb-2">📱 Teléfono: (646) 227-1690</p>
            <p className='cursor-pointer'><a href="https://maps.app.goo.gl/avprDgD3Fzrrb8H69">🏙️ Ubicación: Poblado Miguel Aleman, Sonora.</a>
              </p>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Horario</h3>
            <p className="mb-2">Jueves - Domingo: 12:00 - 22:00</p>
            <p className="mb-2">Martes y Miercoles: Descansamos</p>
            
            
            {/* Newsletter */}
            {/* <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Recibe nuestras promociones</h4>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="bg-blue-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-300 w-full"
                />
                <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-r-md transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Yavaros Mariscos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;