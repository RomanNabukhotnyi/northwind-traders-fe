<template>
  <aside class="aside">
    <div class="title">
      <span><b class="font-weight">Northwind</b> Traders</span>
    </div>
    <div class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <a activeclassname="active" class="active" href="/" aria-current="page">
            <span class="icon material-icons">home</span>
            <span class="menu-item-label">Home</span>
          </a>
          <a activeclassname="active" class="" href="/dash"><span
              class="icon material-icons">display_settings</span><span class="menu-item-label">Dashboard</span></a>
        </li>
      </ul>
      <p class="menu-label">Backoffice</p>
      <ul class="menu-list">
        <li>
          <a activeclassname="active" class="" href="/suppliers"><span class="icon material-icons">inventory</span><span
              class="menu-item-label">Suppliers</span></a>
        </li>
        <li>
          <a activeclassname="active" class="" href="/products"><span
              class="icon material-icons">production_quantity_limits</span><span
              class="menu-item-label">Products</span></a>
        </li>
        <li>
          <a activeclassname="active" class="" href="/orders"><span
              class="icon material-icons">shopping_cart</span><span class="menu-item-label">Orders</span></a>
        </li>
        <li>
          <a activeclassname="active" class="" href="/employees"><span class="icon material-icons">badge</span><span
              class="menu-item-label">Employees</span></a>
        </li>
        <li>
          <a activeclassname="active" class="" href="/customers"><span class="icon material-icons">group</span><span
              class="menu-item-label">Customers</span></a>
        </li>
        <li>
          <a activeclassname="active" class="" href="/search"><span class="icon material-icons">search</span><span
              class="menu-item-label">Search</span></a>
        </li>
      </ul>
    </div>
  </aside>
  <RouterView />
</template>

<script setup lang="ts"></script>

<style scoped>
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