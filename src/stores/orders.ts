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
  quantity: number | null;
  orderUnitPrice: number | null;
  discount: number | null;
}

interface Order {
  id: number;
  customerId: string | null;
  employeeId: number | null;
  orderDate: Date | null;
  requiredDate: Date | null;
  shippedDate: Date | null;
  shipVia: number | null;
  freight: number | null;
  shipName: string | null;
  shipAddress: string | null;
  shipCity: string | null;
  shipRegion: string | null;
  shipPostalCode: string | null;
  shipCountry: string | null;
  totalDiscount: number | null;
  totalItems: string | null;
  totalPrice: string | null;
  totalProducts: number | null;
  products: Product[];
}

interface State {
  ordersByPage: Order[][];
  orders: Order[];
}

export const useOrdersStore = defineStore('orders', {
  state: (): State => ({
    ordersByPage: [],
    orders: [],
  }),
  actions: {
    async fetchOrders() {
      const response = await fetch('http://localhost:4000/orders');
      const orders = (await response.json()).data as Order[];
      this.orders = orders;
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(orders.length / size); i++) {
        result[i] = orders.slice(i * size, i * size + size);
      }
      this.ordersByPage = result;
    },
  },
});
