import { defineStore } from 'pinia';

export const useCustomersStore = defineStore('customers', {
  state: () => ({
    customers: [],
  }),
  getters: {
    getCustomers: (state) => state.customers,
  },
  actions: {
    async fetchCustomers() {
      const response = await fetch('http://localhost:4000/customers');
      const customers = await response.json();
      this.customers = customers;
    },
  },
});
