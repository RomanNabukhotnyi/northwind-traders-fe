import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/pages/main/MainPage.vue';
import Suppliers from '../components/pages/suppliers/SuppliersPage.vue';
import Supplier from '../components/pages/suppliers/SupplierPage.vue';
import Products from '../components/pages/products/ProductsPage.vue';
import Product from '../components/pages/products/ProductPage.vue';
import Orders from '../components/pages/orders/OrdersPage.vue';
import Order from '../components/pages/orders/components/OrderPage.vue';
import Employees from '../components/pages/employees/EmployeesPage.vue';
import Employee from '../components/pages/employees/components/EmployeePage.vue';
import Customers from '../components/pages/customers/CustomersPage.vue';
import Customer from '../components/pages/customers/components/CustomerPage.vue';
import Search from '../components/pages/search/SearchPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/suppliers',
      children: [
        {
          path: 'suppliers',
          name: 'suppliers',
          component: Suppliers,
        },
        {
          path: 'suppliers/:id',
          name: 'supplier',
          component: Supplier,
        },
        {
          path: 'products',
          name: 'products',
          component: Products,
        },
        {
          path: 'products/:id',
          name: 'product',
          component: Product,
        },
        {
          path: 'orders',
          name: 'orders',
          component: Orders,
        },
        {
          path: 'orders/:id',
          name: 'order',
          component: Order,
        },
        {
          path: 'employees',
          name: 'employees',
          component: Employees,
        },
        {
          path: 'employees/:id',
          name: 'employee',
          component: Employee,
        },
        {
          path: 'customers',
          name: 'customers',
          component: Customers,
        },
        {
          path: 'customers/:id',
          name: 'customer',
          component: Customer,
        },
        {
          path: 'search',
          name: 'search',
          component: Search,
        },
      ],
    },
  ],
});

export default router;
