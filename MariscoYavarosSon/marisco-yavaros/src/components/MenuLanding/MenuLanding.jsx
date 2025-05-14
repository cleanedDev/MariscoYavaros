"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from 'lucide-react';



function MenuLanding(){

     const router = useRouter();

    return(
    <>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">
              Descubre Nuestro Menú
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Explora nuestra selección de mariscos frescos y platillos preparados por nuestros chefs expertos. 
              Desde ceviches hasta pescados a la talla, cada platillo es una experiencia única.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4 ">
              <button 
                onClick={() =>  router.push("/pages/MenuPage")}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center transition-colors"
              >
                Ver Menú
                <ChevronRight className="ml-2" />
              </button>
              <button 
                // onClick={() => navigate('/cart')}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center transition-colors"
              >
                Ordenar Ahora
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
          <div className="w-[80%] md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/ML2.jpg" 
                alt="Platillo de mariscos" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform delay-100"
              />
              <img 
                src="/ML4.jpg" 
                alt="Camarones preparados" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform delay-100"
              />
              <img 
                src="/ML3.jpg" 
                alt="Ceviche fresco" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform delay-100"
              />
              <img 
                src="/ML1.jpg" 
                alt="Pescado a la talla" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform delay-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
    )
}


export default MenuLanding;