import { defineStore } from 'pinia';

interface Supplier {
  id: number;
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
  homePage: string | null;
}

interface State {
  suppliers: Supplier[];
}

export const useSuppliersStore = defineStore('suppliers', {
  state: (): State => ({
    suppliers: [],
  }),
  getters: {
    getSuppliers: (state) => state.suppliers,
  },
  actions: {
    async fetchSuppliers() {
      const response = await fetch('http://localhost:4000/suppliers');
      const suppliers = (await response.json()).data as Supplier[];
      this.suppliers = suppliers;
    },
  },
});
