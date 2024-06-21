import { CartItem } from '../features/cart/cartSlice';

export const calculateTotal = (cartItems: CartItem[]) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};
