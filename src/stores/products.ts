import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts: (state) => state.products,
  },
  actions: {
    async fetchProducts() {
      const response = await fetch('http://localhost:4000/products');
      const ptoducts = await response.json();
      this.products = ptoducts;
    },
  },
});
