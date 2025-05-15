"use client"
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  items: [],
  deliveryType: 'recoger',
  address: '',
  paymentMethod: 'efectivo',
  changeAmount: '',
};

const cartReducer = (state, action) => {
  switch (action.type) {
    // 
    case 'ADD_ITEM': {
  const existingItemIndex = state.items.findIndex(
    (item) =>
      item.id === action.payload.id &&
      item.size === action.payload.size // Asegúrate de comparar por tamaño
  );

  if (existingItemIndex !== -1) {
    const updatedItems = [...state.items];
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
      quantity:
        updatedItems[existingItemIndex].quantity + action.payload.quantity,
    };
    return { ...state, items: updatedItems };
  } else {
    return { ...state, items: [...state.items, action.payload] };
  }
}

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    // case 'UPDATE_QUANTITY': {
    //   const { id, quantity } = action.payload;
    //   const updatedItems = state.items.map((item) =>
    //     item.id === id ? { ...item, quantity } : item
    //   );
    //   return { ...state, items: updatedItems };
    // }
    case 'UPDATE_QUANTITY': {
  const updatedItems = state.items.map(item => {
    if (item.id === action.payload.id && item.size === action.payload.size) {
      return { ...item, quantity: action.payload.quantity };
    }
    return item;
  });
  return { ...state, items: updatedItems };
}

    case 'SET_DELIVERY_TYPE':
      return { ...state, deliveryType: action.payload };

    case 'SET_ADDRESS':
      return { ...state, address: action.payload };

    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };

    case 'SET_CHANGE_AMOUNT':
      return { ...state, changeAmount: action.payload };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    console.log('Item recibido en contexto:', item);
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // const updateQuantity = (id, quantity) => {
  //   dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  // };
  const updateQuantity = (id, size, newQuantity) => {
  dispatch({
    type: 'UPDATE_QUANTITY',
    payload: { id, size, quantity: newQuantity }
  });
};

  const setDeliveryType = (type) => {
    dispatch({ type: 'SET_DELIVERY_TYPE', payload: type });
  };

  const setAddress = (address) => {
    dispatch({ type: 'SET_ADDRESS', payload: address });
  };

  const setPaymentMethod = (method) => {
    dispatch({ type: 'SET_PAYMENT_METHOD', payload: method });
  };

  const setChangeAmount = (amount) => {
    dispatch({ type: 'SET_CHANGE_AMOUNT', payload: amount });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        setDeliveryType,
        setAddress,
        setPaymentMethod,
        setChangeAmount,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
