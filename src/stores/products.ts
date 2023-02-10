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
  productsByPage: Product[][];
  products: Product[];
}

export const useProductsStore = defineStore('products', {
  state: (): State => ({
    productsByPage: [],
    products: [],
  }),
  actions: {
    async fetchProducts() {
      const response = await fetch('http://localhost:4000/products');
      const products = (await response.json()).data as Product[];
      this.products = products;
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(products.length / size); i++) {
        result[i] = products.slice(i * size, i * size + size);
      }
      this.productsByPage = result;
    },
  },
});
