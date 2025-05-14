import React from 'react';





function About(){ 
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <img 
                src="/About.jpg" 
                alt="Interior de Yavaros Mariscos" 
                className="rounded-lg shadow-xl w-full h-auto object-cover filter brightness-[0.80]"
              />
              {/* Accent decorations */}
              {/* <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-teal-500 rounded-lg z-0"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-500 rounded-lg z-0"></div> */}
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">
              Sobre Yavaros
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Bienvenido a <span className="font-semibold">Yavaros Mariscos</span>, un rincón gastronómico único en Sonora donde el mar y la tierra se encuentran para ofrecerte una experiencia sin igual. 
  Ubicado junto a la carretera rumbo a Bahía de Kino, nuestro restaurante recrea el ambiente de un paraje de yates: las mesas están dispuestas sobre embarcaciones reales, creando una atmósfera náutica envolvente.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Aquí, cada platillo es una obra de frescura y sabor. Utilizamos mariscos recién traídos de las costas mexicanas y los transformamos en recetas tradicionales y de autor, gracias a manos expertas en cocina del mar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Frescura</h3>
                <p className="text-sm text-gray-700">Mariscos frescos todos los días</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Ambiente</h3>
                <p className="text-sm text-gray-700">Comer entre yates reales con vista al horizonte sonorense.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Sabor</h3>
                <p className="text-sm text-gray-700">Recetas tradicionales y de autor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;