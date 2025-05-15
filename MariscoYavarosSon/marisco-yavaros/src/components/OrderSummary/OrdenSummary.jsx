import React from 'react';

import { useCart } from '@/Context/CartContext';

function OrderSummary (){
  const { state, getTotalPrice } = useCart();
  const total = getTotalPrice();
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Resumen del Pedido</h2>
      
      <div className="space-y-2">
        {state.items.map(item => (
        //   <div key={item.id} className="flex justify-between text-sm">
        <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
            <span>{item.quantity} x {item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)} MXN</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex justify-between">
          <span className="font-medium">Subtotal</span>
          <span>${total.toFixed(2)} MXN</span>
        </div>
        
        {state.deliveryType === 'domicilio' && (
          <div className="flex justify-between mt-2">
            <span className="font-medium">Costo de envío</span>
            <span>$50.00 MXN</span>
          </div>
        )}
        
        <div className="flex justify-between mt-4 text-lg font-bold">
          <span>Total</span>
          <span>
            ${(total + (state.deliveryType === 'domicilio' ? 50 : 0)).toFixed(2)} MXN
          </span>
        </div>
      </div>
      
      {state.paymentMethod === 'efectivo' && state.changeAmount && (
        <div className="mt-4 bg-blue-50 p-3 rounded">
          <p className="text-sm">
            <span className="font-medium">Cambio para: </span>
            ${state.changeAmount} MXN
          </p>
          <p className="text-sm mt-1">
            <span className="font-medium">Su cambio será: </span>
            ${(parseFloat(state.changeAmount) - (total + (state.deliveryType === 'domicilio' ? 50 : 0))).toFixed(2)} MXN
          </p>
        </div>
      )}
      
      {state.paymentMethod === 'transferencia' && (
        <div className="mt-4 bg-blue-50 p-3 rounded">
          <p className="text-sm font-medium">Datos bancarios:</p>
          <p className="text-sm mt-1">Banco: BBVA</p>
          <p className="text-sm">Cuenta: 0123456789</p>
          <p className="text-sm">CLABE: 012345678901234567</p>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;