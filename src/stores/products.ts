import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  supplierId: number | null;
  categoryId: number | null;
  quantityPerUnit: string | null;
  unitPrice: number | null;
  unitsInStock: number | null;
  unitsOnOrder: number | null;
  reorderLevel: number | null;
  discontinued: boolean;
  supplierName: string | null;
}

interface State {
  loading: boolean;
  products: Product[];
  totalProductsSold: { name: string; totalQuantity: number }[];
}

export const useProductsStore = defineStore('products', {
  state: (): State => ({
    products: [],
    loading: false,
    totalProductsSold: [],
  }),
  actions: {
    async create(product: {
      name: string;
      supplierId: number | null;
      categoryId: number | null;
      quantityPerUnit: string | null;
      unitPrice: number | null;
      unitsInStock: number | null;
      unitsOnOrder: number | null;
      reorderLevel: number | null;
      discontinued: boolean;
    }) {
      this.loading = true;
      const response = await fetch('http://localhost:4000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      this.products.push(data.data);
      this.loading = false;
    },
    async update(product: Product) {
      this.loading = true;
      const response = await fetch(
        `http://localhost:4000/products/${product.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        }
      );
      const data = await response.json();
      this.products = this.products.map((p) =>
        p.id === product.id ? data.data : p
      );
      this.loading = false;
    },
    async delete(id: number) {
      this.loading = true;
      await fetch(`http://localhost:4000/products/${id}`, {
        method: 'DELETE',
      });
      this.products = this.products.filter((p) => p.id !== id);
      this.loading = false;
    },
    getAllByPage() {
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(this.products.length / size); i++) {
        result[i] = this.products.slice(i * size, i * size + size);
      }
      return result;
    },
    async fetchProducts() {
      const response = await fetch('http://localhost:4000/products');
      const products = (await response.json()).data as Product[];
      this.products = products;
      const res = await fetch('http://localhost:4000/products/statistic');
      this.totalProductsSold = (await res.json()).data;
    },
  },
});
