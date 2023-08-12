import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((store) => ({
      cart: [...store.cart, item],
    })),
  deleteFromCart: (id) =>
    set((store) => ({
      cart: store.cart.filter((item) => item.orderID !== id),
    })),
  clearCart: () =>
    set({
      cart: [],
    }),
  getTotal: () => get().cart.reduce((total, item) => total + item.total, 0),
}));

export default useCartStore;
