import { Cart } from './../../../models/cart';

export const getCarts = () => {
  return Cart.query();
}