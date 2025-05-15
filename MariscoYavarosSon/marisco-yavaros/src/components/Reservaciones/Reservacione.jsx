"use client"

import React from 'react';

function Reservaciones(){


const handleWhatsAppContact = (eventType) => {
  const phoneNumber = '526462271690';
  const message = encodeURIComponent(`Hola, me gustaría hacer una reservación especial para ${eventType} en Yavaros Mariscos.`);
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};


  return (
    <section className="py-20 bg-blue-50" id="reservaciones">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 text-center mb-12">
          Reservaciones Especiales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Birthdays */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/33/79/1f/33791f5dbaa2a81462ef3a53f62e70f2.jpg" 
                alt="Celebración de cumpleaños" 
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Cumpleaños</h3>
              <p className="text-gray-700 mb-4">
                Celebra con sabor y buen ambiente. Te ofrecemos decoración especial, platillos frescos del mar y atención para que tú y tus invitados disfruten como en casa.
              </p>
              <button 
                onClick={() => handleWhatsAppContact('cumpleaños')}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors"
              >
                Reservar por WhatsApp
              </button>
            </div>
          </div>
          
          {/* Anniversaries */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg" 
                alt="Celebración de aniversario" 
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Aniversarios</h3>
              <p className="text-gray-700 mb-4">
                Festeja otro año de amor con una comida especial a la luz de las velas, en un ambiente íntimo y con atención personalizada.
              </p>
              <button 
                onClick={() => handleWhatsAppContact('aniversario')}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors"
              >
                Reservar por WhatsApp
              </button>
            </div>
          </div>
          
          {/* Christmas parties */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/d2/f0/3d/d2f03d5ee9164c7ff0193ed1973598d1.jpg" 
                alt="Fiesta de navidad" 
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Domingos familiares</h3>
              <p className="text-gray-700 mb-4">
                Disfruta de mariscos frescos, menú para niños y un ambiente acogedor ideal para convivir y saborear en familia.
              </p>
              <button 
                onClick={() => handleWhatsAppContact('fiesta navideña')}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors"
              >
                Reservar por WhatsApp
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg mb-4">
            ¿Tienes alguna otra ocasión especial? Contáctanos y diseñaremos una experiencia a tu medida.
          </p>
          <button 
            onClick={() => handleWhatsAppContact('evento personalizado')}
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 6.31a8.551 8.551 0 0 0-6.311-2.939 8.55 8.55 0 0 0-7.3 13.037l-1.289 4.162 4.287-1.109a8.54 8.54 0 0 0 4.3 1.162h.001a8.551 8.551 0 0 0 6.311-14.313Z"/>
              <path d="m12.673 18.858a7.037 7.037 0 0 1-3.694-1.047l-.267-.157-2.73.708.725-2.618-.173-.276a7.079 7.079 0 0 1-1.113-3.814 7.187 7.187 0 0 1 2.076-4.979 7.011 7.011 0 0 1 5.052-2.134 6.982 6.982 0 0 1 5.091 2.134 7.126 7.126 0 0 1 2.095 5.022 7.03 7.03 0 0 1-7.067 7.161Zm3.917-5.336-.538-.284c-.359-.18-.838-.282-1.196.282-.359.564-.717.845-1.255.564-.538-.282-1.793-.676-3.408-2.145-1.256-1.127-2.152-2.533-2.331-2.958-.18-.423 0-.564.18-.704.179-.142.359-.424.538-.564.179-.142.237-.283.356-.424.12-.141.06-.423 0-.564-.18-.282-.717-1.83-1.076-2.533-.179-.423-.358-.353-.538-.353-.179 0-.358 0-.538 0a1.048 1.048 0 0 0-.717.353c-.358.423-.897 1.127-.897 2.676 0 1.549 1.076 3.099 1.255 3.24.179.14 2.331 3.944 5.857 5.352 3.528 1.408 3.528 1.127 4.126 1.127.598 0 1.914-.705 2.152-1.409.237-.704.237-1.267.178-1.409Z"/>
            </svg>
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reservaciones;