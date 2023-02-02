import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/pages/main/MainPage.vue';
import Suppliers from '../components/pages/suppliers/SuppliersPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'suppliers',
          name: 'suppliers',
          component: Suppliers,
        },
      ],
    },
  ],
});

export default router;
