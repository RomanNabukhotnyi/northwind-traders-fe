<template>
  <MyDialog v-model:show="loginVisible">
    <LoginForm @login="login" :loading="loginLoading" />
  </MyDialog>
  <aside class="aside">
    <div class="title">
      <span><b class="font-weight">Northwind</b> Traders</span>
    </div>
    <div class="menu">
      <!-- <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <a href="/" aria-current="page">
            <span class="icon material-icons">home</span>
            <span class="menu-item-label">Home</span>
          </a>
          <a activeclassname="active" class="" href="/dash"
            ><span class="icon material-icons">display_settings</span
            ><span class="menu-item-label">Dashboard</span></a
          >
        </li>
      </ul> -->
      <p class="menu-label">Backoffice</p>
      <ul class="menu-list">
        <li>
          <RouterLink
            :class="{ active: router.currentRoute.value.path === '/suppliers' }"
            to="/suppliers"
          >
            <span class="icon material-icons">inventory</span>
            <span class="menu-item-label">Suppliers</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="{ active: router.currentRoute.value.path === '/products' }"
            to="/products"
            ><span class="icon material-icons">production_quantity_limits</span
            ><span class="menu-item-label">Products</span></RouterLink
          >
        </li>
        <li>
          <RouterLink
            :class="{ active: router.currentRoute.value.path === '/orders' }"
            to="/orders"
            ><span class="icon material-icons">shopping_cart</span
            ><span class="menu-item-label">Orders</span></RouterLink
          >
        </li>
        <li>
          <RouterLink
            :class="{ active: router.currentRoute.value.path === '/employees' }"
            to="/employees"
            ><span class="icon material-icons">badge</span
            ><span class="menu-item-label">Employees</span></RouterLink
          >
        </li>
        <li>
          <RouterLink
            :class="{ active: router.currentRoute.value.path === '/customers' }"
            to="/customers"
            ><span class="icon material-icons">group</span
            ><span class="menu-item-label">Customers</span></RouterLink
          >
        </li>
        <li>
          <RouterLink
            :class="{ active: router.currentRoute.value.path === '/search' }"
            to="/search"
            ><span class="icon material-icons">search</span
            ><span class="menu-item-label">Search</span></RouterLink
          >
        </li>
      </ul>
    </div>
    <MyButton v-if="!isAdmin" class="adminBtn" @click="showLoginForm"
      >Admin</MyButton
    >
    <MyButton v-else class="logoutBtn" @click="logout">Logout</MyButton>
  </aside>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/users';
import { useProductsStore } from '@/stores/products';
import { useSuppliersStore } from '@/stores/suppliers';
import { useOrdersStore } from '@/stores/orders';
import { useEmployeesStore } from '@/stores/employees';
import { useCustomersStore } from '@/stores/customers';
import MyButton from '@/components/common/MyButton.vue';
import MyDialog from '@/components/common/MyDialog.vue';
import LoginForm from './components/LoginForm.vue';
const productsStore = useProductsStore();
const suppliersStore = useSuppliersStore();
const ordersStore = useOrdersStore();
const employeesStore = useEmployeesStore();
const customersStore = useCustomersStore();
const usersStore = useUsersStore();
const router = useRouter();
const loginVisible = ref(false);
const isAdmin = computed(() => usersStore.isAdmin);
const loginLoading = computed(() => usersStore.loading);
const showLoginForm = () => {
  loginVisible.value = true;
};
const login = (password: string) => {
  usersStore.login(password);
  loginVisible.value = false;
};
const logout = () => {
  usersStore.logout();
};
onMounted(() => {
  productsStore.fetchProducts();
  suppliersStore.fetchSuppliers();
  ordersStore.fetchOrders();
  employeesStore.fetchEmployees();
  customersStore.fetchCustomers();
});
</script>

<style scoped>
.adminBtn {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.logoutBtn {
  position: absolute;
  background-color: #ff4747;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.aside {
  height: 100vh;
  width: 15rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(31 41 55);
}
.title {
  display: flex;
  color: rgb(255 255 255);
  background-color: rgb(17 24 39);
  height: 3.5rem;
  flex-direction: row;
  padding: 0 0.75rem;
  width: 100%;
  align-items: center;
}
.font-weight {
  font-weight: 900;
}
.menu-label {
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem;
  text-transform: uppercase;
  color: rgb(156 163 175);
}
.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-list li > a.active {
  background-color: rgb(55 65 81);
}
.menu-list li a {
  color: rgb(209 213 219);
  display: flex;
  padding: 0.5rem 0;
  text-decoration: inherit;
}
.menu-list li a .icon {
  flex: none;
  width: 3rem;
}
.material-icons {
  align-items: center;
  display: inline-flex;
  height: 1.5rem;
  justify-content: center;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  width: 1.5rem;
}
.menu-list li a .menu-item-label {
  flex-grow: 1;
}
</style>
