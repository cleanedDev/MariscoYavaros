"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import CartItem from '@/components/CartItem/CartItem';
import { useCart } from '@/Context/CartContext';

function CartPage(){
  const { state, clearCart } = useCart();
  const router = useRouter();

  console.log(state)
//   const handleCheckout = () => {
//     navigate('/order');
//   };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-blue-900 mb-8 text-center">Tu Carrito</h1>
        
        {state.items.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flow-root">
              <div className="divide-y divide-gray-200">
                {state.items.map(item => (
                  // <CartItem key={item.id} item={item} />
                  <CartItem key={`${item.id}-${item.size}`} item={item} />
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex justify-between text-xl font-bold text-blue-900">
                <span>Total</span>
                <span>
                  ${state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} MXN
                </span>
              </div>
              
              <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button
                  onClick={clearCart}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg md:w-1/2 transition-colors"
                >
                  Vaciar carrito
                </button>
                <button
                  onClick={() =>  router.push("/pages/OrderPage")}
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg md:w-1/2 transition-colors"
                >
                  Finalizar pedido
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">Agrega algunos productos deliciosos de nuestro menú.</p>
            <button
              onClick={() =>  router.push("/pages/MenuPage")}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Ver menú
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;