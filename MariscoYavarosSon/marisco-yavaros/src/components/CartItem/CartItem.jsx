import React from 'react';
import { Trash2 } from 'lucide-react';
// import { CartItem as CartItemType } from '../types';
import { CartItem as CarrItemType } from '@/Types';
// import { useCart } from '../context/CartContext';
import { useCart } from '@/Context/CartContext';

// interface CartItemProps {
//   item: CartItemType;
// }

function CartItem({item}) {
  const { removeItem, updateQuantity } = useCart();
  
  return (
    <div className="flex items-center border-b border-gray-200 py-4 ">
      {/* Item image */}
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Item details */}
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        {item.size && (
          <h2 className="text-md font-medium text-gray-900">{item.size}</h2>
        )}
        <p className="mt-1 text-sm text-gray-500">${item.price}.00 MXN</p>
      </div>
      
      {/* Quantity controls */}
      <div className="flex items-center ml-4">
        <button 
          // onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
           onClick={() =>
    updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))
  }
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <span className="px-2 py-1 border rounded-l border-gray-300">-</span>
        </button>
        <span className="px-4 py-1 border-t border-b border-gray-300">
          {item.quantity}
        </span>
        <button 
          // onClick={() => updateQuantity(item.id, item.quantity + 1)}
           onClick={() =>
    updateQuantity(item.id, item.size, item.quantity + 1)
  }
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <span className="px-2 py-1 border rounded-r border-gray-300">+</span>
        </button>
      </div>
      
      {/* Item total */}
      <div className="ml-4 text-right">
        <p className="text-lg font-medium text-gray-900">
          ${(item.price * item.quantity).toFixed(2)} MXN
        </p>
      </div>
      
      {/* Remove button */}
      <button 
        onClick={() => removeItem(item.id)}
        className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartItem;