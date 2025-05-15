"use client"
import React, { useState, useEffect } from 'react';

import OrderSummary from '@/components/OrderSummary/OrdenSummary';

import WhatsAppButton from '@/components/WhatsappButton/WhatsappButton';

import { useCart } from '@/Context/CartContext';

import { useRouter } from "next/navigation";

import { PaymentMethod } from '@/Types';

function OrderPage(){
  const { state, setDeliveryType, setAddress, setPaymentMethod, setChangeAmount } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const router = useRouter();
  
  // Redirect if cart is empty
  useEffect(() => {
    if (state.items.length === 0) {
      router.push("/pages/MenuPage")
    }
  }, [state.items.length]);

  const handleDeliveryTypeChange = (e) => {
    setDeliveryType(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleChangeAmountChange = (e) => {
    setChangeAmount(e.target.value);
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setOrderConfirmed(true);
  };

  if (state.items.length === 0) {
    return null;
  }

  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-blue-900 mb-8 text-center">
          {orderConfirmed ? 'Confirmar Pedido' : 'Detalles del Pedido'}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            {!orderConfirmed ? (
              <form onSubmit={handleConfirmOrder} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Información de Entrega</h2>
                
                {/* Delivery Type */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Tipo de Entrega</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryType"
                        value="recoger"
                        checked={state.deliveryType === 'recoger'}
                        onChange={handleDeliveryTypeChange}
                        className="mr-2"
                      />
                      Para recoger
                    </label>
                    {/* <label className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryType"
                        value="domicilio"
                        checked={state.deliveryType === 'domicilio'}
                        onChange={handleDeliveryTypeChange}
                        className="mr-2"
                      />
                      A domicilio
                    </label> */}
                  </div>
                </div>
                
                {/* Address (only if delivery) */}
                {/* {state.deliveryType === 'domicilio' && (
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-700 mb-2">
                      Dirección de Entrega
                    </label>
                    <textarea
                      id="address"
                      value={state.address}
                      onChange={handleAddressChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      required
                    />
                  </div>
                )}
                 */}
                <h2 className="text-xl font-semibold text-blue-900 mb-4 mt-8">Método de Pago</h2>
                
                {/* Payment Method */}
                <div className="mb-6">
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="efectivo"
                        checked={state.paymentMethod === 'efectivo'}
                        onChange={handlePaymentMethodChange}
                        className="mr-2"
                      />
                      Efectivo
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transferencia"
                        checked={state.paymentMethod === 'transferencia'}
                        onChange={handlePaymentMethodChange}
                        className="mr-2"
                      />
                      Transferencia bancaria
                    </label>
                    {/* <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="tarjeta"
                        checked={state.paymentMethod === 'tarjeta'}
                        onChange={handlePaymentMethodChange}
                        className="mr-2"
                      />
                      Tarjeta (al entregar)
                    </label> */}
                  </div>
                </div>
                
                {/* Change Amount (only if cash) */}
                {state.paymentMethod === 'efectivo' && (
                  <div className="mb-6">
                    <label htmlFor="changeAmount" className="block text-gray-700 mb-2">
                      ¿Con cuánto pagará?
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                      <input
                        id="changeAmount"
                        type="number"
                        value={state.changeAmount}
                        onChange={handleChangeAmountChange}
                        className="w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0.00"
                        required
                      />
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Confirmar Pedido
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Resumen de la Orden</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Productos:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {state.items.map(item => (
                    //   <li key={item.id}>
                    <li key={`${item.id}-${item.size}`}>
                        {item.quantity} x {item.name} - ${(item.price * item.quantity).toFixed(2)} MXN
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Tipo de Entrega:</h3>
                  <p>{state.deliveryType === 'recoger' ? 'Para recoger en el restaurante' : 'A domicilio'}</p>
                  
                  {state.deliveryType === 'domicilio' && (
                    <div className="mt-2">
                      <h3 className="font-medium text-gray-900 mb-1">Dirección de Entrega:</h3>
                      <p className="text-gray-700">{state.address}</p>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Método de Pago:</h3>
                  <p>
                    {state.paymentMethod === 'efectivo' ? 'Efectivo' :
                     state.paymentMethod === 'transferencia' ? 'Transferencia bancaria' :
                     'Tarjeta (al entregar)'}
                  </p>
                  
                  {state.paymentMethod === 'efectivo' && state.changeAmount && (
                    <p className="mt-1">
                      <span className="font-medium">Pagará con: </span>
                      ${state.changeAmount} MXN
                    </p>
                  )}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <WhatsAppButton 
                    text="Enviar Pedido por WhatsApp" 
                    className="py-3 px-6 rounded-lg w-full md:w-auto"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;