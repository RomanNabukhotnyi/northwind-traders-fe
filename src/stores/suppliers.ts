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
  suppliersByPage: Supplier[][];
  suppliers: Supplier[];
}

export const useSuppliersStore = defineStore('suppliers', {
  state: (): State => ({
    suppliersByPage: [],
    suppliers: [],
  }),
  actions: {
    async fetchSuppliers() {
      const response = await fetch('http://localhost:4000/suppliers');
      const suppliers = (await response.json()).data as Supplier[];
      this.suppliers = suppliers;
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(suppliers.length / size); i++) {
        result[i] = suppliers.slice(i * size, i * size + size);
      }
      this.suppliersByPage = result;
    },
  },
});
