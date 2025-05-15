"use client"
import React from "react";
import { useState } from "react";
import { ShoppingCart,  Menu, X } from 'lucide-react';
import { useCart } from "@/Context/CartContext";
import { useRouter } from "next/navigation";


function Header(){
    const [isScrolled, setIsScrolled] = useState(false);
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const { state } = useCart();
    const router = useRouter();

     const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);
     console.log(" Items en el carro: " + cartItemsCount)

    return(
        <>
       <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900 shadow-lg' : 'bg-blue-600 shadow-lg'}`}>

            <div className="container mx-auto px-4 py-4 flex justify-between items-center ">

                <button className="text-white font-serif text-2xl md:text-3xl font-bold cursor-pointer " onClick={() =>  router.push("/")}>
                    Marisco Yavaros
                </button>

                <nav>
                    <ul className="hidden md:flex space-x-8 text-white ">
                        <li className="hover:text-teal-300 transition-colors cursor-pointer" onClick={() =>  router.push("/")}>Inicio</li>
                        <li className="hover:text-teal-300 transition-colors cursor-pointer" ><a href="#menuLanding">Menú</a></li>
                        <li className="hover:text-teal-300 transition-colors cursor-pointer" ><a href="#reservaciones">Reservaciones</a></li>
                        <li className="hover:text-teal-300 transition-colors cursor-pointer relative" onClick={() =>  router.push("/pages/CartPage")} > 
                            <ShoppingCart className="inline" />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-coral-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                                )}
                            
                        </li>
                    </ul>
                </nav>
                
                

                <div className="md:hidden flex items-center">
                            <button 
                                 
                                className="relative mr-4 text-white"
                            >
                                <ShoppingCart />
                                {cartItemsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-coral-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                                )}
                            </button>
                            
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                </div>
                
                

                
            </div>
            {isMenuOpen && (
                        <div className="md:hidden bg-blue-900 shadow-lg py-4 ">
                            <ul className="container mx-auto px-4 flex flex-col space-y-4 text-white">
                                <li className="`py-2 hover:text-teal-300 transition-colors">Inicio</li>
                                <li className="`py-2 hover:text-teal-300 transition-colors">Menu</li>
                                <li className="`py-2 hover:text-teal-300 transition-colors">Reservaciones</li>
                            </ul>
                        </div>
                )}
       </header>
         
        

        </>
    )
}


export default Header;
