"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';



function Hero(){

    const handleReservation = () => {
    
    const phoneNumber = '526462271690';
    const message = encodeURIComponent('Hola, me gustaría hacer una reservación en Yavaros Mariscos.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

    return(
        <>
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(/Hero.jpg)',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Wave animation */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#1e3a8a" 
            fillOpacity="0.6" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
          Marisco <span className="block md:inline">Yavaros</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
          Sabor que viene del mar.
        </p>
        <button 
          onClick={handleReservation}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full flex items-center mx-auto transition-all transform hover:scale-105 shadow-lg"
        >
          Reservar mesa
          <ChevronRight className="ml-2" />
        </button>
        
        {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="animate-ping inline-flex h-3 w-3 rounded-full bg-white opacity-75 delay-0"></span>
          <span className="animate-ping inline-flex h-3 w-3 rounded-full bg-white opacity-75 delay-150"></span>
          <span className="animate-ping inline-flex h-3 w-3 rounded-full bg-white opacity-75 delay-300"></span>
        </div> */}
      </div>
    </div>
        </>
    )
}

export default Hero;