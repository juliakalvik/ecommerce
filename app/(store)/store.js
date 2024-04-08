import { create } from 'zustand';

const useCart = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  product: {},
  openModal: false,
  setOpenModal: () => {
    set((state) => ({ ...state, openModal: !state.openModal }));
  },
  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => ({ ...state, product: newProduct }));
  },
  addItemToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const newCart = [...state.cart, newItem];
      localStorage.setItem('cart', JSON.stringify(newCart)); 
      return { ...state, cart: newCart };
    });
  },
  removeItemFromCart: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((_, index) => index !== itemIndex);
      localStorage.setItem('cart', JSON.stringify(newCart)); 
      return { ...state, cart: newCart };
    });
  },
  emptyCart: () => {
    set((state) => {
      localStorage.removeItem('cart'); // 
      return { ...state, cart: [] };
    });
  },
}));

export default useCart;
