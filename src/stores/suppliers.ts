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
  loading: boolean;
}

export const useSuppliersStore = defineStore('suppliers', {
  state: (): State => ({
    suppliers: [],
    loading: false,
  }),
  actions: {
    async create(supplier: Supplier) {
      this.loading = true;
      const response = await fetch('http://localhost:4000/suppliers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(supplier),
      });
      const data = await response.json();
      this.suppliers.push(data.data);
      this.loading = false;
    },
    getAllByPage() {
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(this.suppliers.length / size); i++) {
        result[i] = this.suppliers.slice(i * size, i * size + size);
      }
      return result;
    },
    async update(supplier: Supplier) {
      this.loading = true;
      const response = await fetch(
        `http://localhost:4000/suppliers/${supplier.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(supplier),
        }
      );
      const data = await response.json();
      this.suppliers = this.suppliers.map((s) =>
        s.id === supplier.id ? data.data : s
      );
      this.loading = false;
    },
    async delete(id: number) {
      this.loading = true;
      await fetch(`http://localhost:4000/suppliers/${id}`, {
        method: 'DELETE',
      });
      this.suppliers = this.suppliers.filter((s) => s.id !== id);
      this.loading = false;
    },
    async fetchSuppliers() {
      const response = await fetch('http://localhost:4000/suppliers');
      const suppliers = (await response.json()).data as Supplier[];
      this.suppliers = suppliers;
    },
  },
});
