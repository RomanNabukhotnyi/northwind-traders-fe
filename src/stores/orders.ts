import { defineStore } from 'pinia';

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
  }),
  getters: {
    getOrders: (state) => state.orders,
  },
  actions: {
    async fetchOrders() {
      const response = await fetch('http://localhost:4000/orders');
      const orders = await response.json();
      this.orders = orders;
    },
  },
});
