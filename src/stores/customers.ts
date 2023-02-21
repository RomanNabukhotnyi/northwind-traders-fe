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
  loading: boolean;
}

export const useCustomersStore = defineStore('customers', {
  state: (): State => ({
    customers: [],
    loading: false,
  }),
  actions: {
    async create(customer: Customer) {
      this.loading = true;
      const response = await fetch('http://localhost:4000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
      });
      const newCustomer = (await response.json()).data as Customer;
      this.customers.push(newCustomer);
      this.loading = false;
    },
    async update(customer: Customer) {
      this.loading = true;
      const response = await fetch(
        `http://localhost:4000/customers/${customer.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(customer),
        }
      );
      const updatedCustomer = (await response.json()).data as Customer;
      const index = this.customers.findIndex(
        (e) => e.id === updatedCustomer.id
      );
      this.customers[index] = updatedCustomer;
      this.loading = false;
    },
    async delete(id: string) {
      this.loading = true;
      await fetch(`http://localhost:4000/customers/${id}`, {
        method: 'DELETE',
      });
      const index = this.customers.findIndex((e) => e.id === id);
      this.customers.splice(index, 1);
      this.loading = false;
    },
    getAllByPage() {
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(this.customers.length / size); i++) {
        result[i] = this.customers.slice(i * size, i * size + size);
      }
      return result;
    },
    async fetchCustomers() {
      const response = await fetch('http://localhost:4000/customers');
      const customers = (await response.json()).data as Customer[];
      this.customers = customers;
    },
  },
});
