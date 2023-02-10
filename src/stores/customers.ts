import { defineStore } from 'pinia';

interface Customer {
  id: string;
  companyName: string;
  contactName: string | null;
  contactTitle: string | null;
  address: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string | null;
  phone: string | null;
  fax: string | null;
}

interface State {
  customers: Customer[];
  customersByPage: Customer[][];
}

export const useCustomersStore = defineStore('customers', {
  state: (): State => ({
    customers: [],
    customersByPage: [],
  }),
  actions: {
    async fetchCustomers() {
      const response = await fetch('http://localhost:4000/customers');
      const customers = (await response.json()).data as Customer[];
      this.customers = customers;
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(customers.length / size); i++) {
        result[i] = customers.slice(i * size, i * size + size);
      }
      this.customersByPage = result;
    },
  },
});
