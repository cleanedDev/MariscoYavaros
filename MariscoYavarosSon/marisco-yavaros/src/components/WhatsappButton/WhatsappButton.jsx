import React from 'react';
// import { useCart } from '../context/CartContext';
import { useCart } from '@/Context/CartContext';



function WhatsAppButton({ text, className }) {
  const { state, getTotalPrice } = useCart();
  
  const generateOrderMessage = () => {
    const total = getTotalPrice();
    const totalWithDelivery = total + (state.deliveryType === 'domicilio' ? 50 : 0);
    
    let message = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';
    
    // Add items
    state.items.forEach(item => {
      message += `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)} MXN\n`;
    });
    
    message += `\nSubtotal: $${total.toFixed(2)} MXN\n`;
    
    // Add delivery info if applicable
    if (state.deliveryType === 'domicilio') {
      message += `Costo de envío: $50.00 MXN\n`;
      message += `Dirección de entrega: ${state.address}\n`;
    } else {
      message += `Tipo de pedido: Para recoger en el restaurante\n`;
    }
    
    message += `\nTotal: $${totalWithDelivery.toFixed(2)} MXN\n\n`;
    
    // Add payment method
    message += `Método de pago: ${state.paymentMethod === 'efectivo' ? 'Efectivo' : 
              state.paymentMethod === 'transferencia' ? 'Transferencia bancaria' : 
              'Tarjeta'}\n`;
    
    // Add change info if applicable
    if (state.paymentMethod === 'efectivo' && state.changeAmount) {
      message += `Pagaré con: $${state.changeAmount} MXN\n`;
    }
    
    return encodeURIComponent(message);
  };
  
  const handleSendOrder = () => {
    const phoneNumber = '526462271690'; // Número de WhatsApp del restaurante
    const message = generateOrderMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  return (
    <button 
      onClick={handleSendOrder}
      className={`flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold transition-colors ${className || 'py-3 px-6 rounded-lg'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.6 6.31a8.551 8.551 0 0 0-6.311-2.939 8.55 8.55 0 0 0-7.3 13.037l-1.289 4.162 4.287-1.109a8.54 8.54 0 0 0 4.3 1.162h.001a8.551 8.551 0 0 0 6.311-14.313Z"/>
        <path d="m12.673 18.858a7.037 7.037 0 0 1-3.694-1.047l-.267-.157-2.73.708.725-2.618-.173-.276a7.079 7.079 0 0 1-1.113-3.814 7.187 7.187 0 0 1 2.076-4.979 7.011 7.011 0 0 1 5.052-2.134 6.982 6.982 0 0 1 5.091 2.134 7.126 7.126 0 0 1 2.095 5.022 7.03 7.03 0 0 1-7.067 7.161Zm3.917-5.336-.538-.284c-.359-.18-.838-.282-1.196.282-.359.564-.717.845-1.255.564-.538-.282-1.793-.676-3.408-2.145-1.256-1.127-2.152-2.533-2.331-2.958-.18-.423 0-.564.18-.704.179-.142.359-.424.538-.564.179-.142.237-.283.356-.424.12-.141.06-.423 0-.564-.18-.282-.717-1.83-1.076-2.533-.179-.423-.358-.353-.538-.353-.179 0-.358 0-.538 0a1.048 1.048 0 0 0-.717.353c-.358.423-.897 1.127-.897 2.676 0 1.549 1.076 3.099 1.255 3.24.179.14 2.331 3.944 5.857 5.352 3.528 1.408 3.528 1.127 4.126 1.127.598 0 1.914-.705 2.152-1.409.237-.704.237-1.267.178-1.409Z"/>
      </svg>
      {text}
    </button>
  );
};

export default WhatsAppButton;