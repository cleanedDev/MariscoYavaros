// Menu item structure
export const MenuItem = {
  id: '',
  name: '',
  description: '',
  price: 0,
  image: '',
  category: 'entradas' // or 'platillos' or 'postres' or 'bebidas'
};

// Cart item extends MenuItem with quantity
export const CartItem = {
  ...MenuItem,
  quantity: 0
};

// Payment methods (as constants for usage)
export const PaymentMethod = {
  EFECTIVO: 'efectivo',
  TRANSFERENCIA: 'transferencia',
  TARJETA: 'tarjeta'
};

// Order structure
export const Order = {
  items: [],
  deliveryType: 'recoger', // or 'domicilio'
  address: '', // optional
  paymentMethod: PaymentMethod.EFECTIVO, // default to efectivo
  changeAmount: 0, // optional
  total: 0
};
