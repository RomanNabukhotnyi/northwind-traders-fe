<template>
  <section class="section main-section">
    <div class="card has-table">
      <header class="card-header">
        <p class="card-header-title">Suppliers</p>
        <a class="card-header-icon"><span class="material-icons">redo</span></a>
      </header>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Company</th>
              <th>Contact</th>
              <th>Title</th>
              <th>City</th>
              <th>Country</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="supplier in suppliers" :key="supplier.id">
              <td class="image-cell">
                <div class="image">
                  <img
                    :src="getAvatarUrl(supplier.contactName!)"
                    class="rounded-full"
                  />
                </div>
              </td>
              <td data-label="Company">
                <a class="link" href="/supplier/1">{{
                  supplier.companyName
                }}</a>
              </td>
              <td data-label="Contact">{{ supplier.contactName }}</td>
              <td data-label="Title">{{ supplier.contactTitle }}</td>
              <td data-label="Title">{{ supplier.city }}</td>
              <td data-label="Title">{{ supplier.country }}</td>
            </tr>
          </tbody>
        </table>
        <div class="table-pagination">
          <div class="pagination">
            <div class="buttons">
              <button type="button" class="button active">1</button
              ><button type="button" class="button">2</button>
            </div>
            <small>Page 1 of 2</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useSuppliersStore } from '@/stores/suppliers';
const suppliersStore = useSuppliersStore();
const suppliers = computed(() => suppliersStore.suppliers);
const getAvatarUrl = (name: string) => {
  const initials = name.split(' ');
  return `https://avatars.dicebear.com/v2/initials/${initials[0]}-${
    initials[initials.length - 1]
  }.svg`;
};
onMounted(() => {
  suppliersStore.fetchSuppliers();
});
</script>

<style scoped>
.main-section {
  padding: 1.5rem;
}

.card {
  background-color: rgb(255, 255, 255);
  border-color: rgb(243, 244, 246);
  border-radius: 0.25rem;
  border-width: 1px;
}

.card-header {
  align-items: stretch;
  border-bottom-width: 1px;
  border-color: rgb(243, 244, 246);
  display: flex;
}
.card-content {
  padding: 0;
}
.card-header-title {
  flex-grow: 1;
  font-weight: 700;
}

.card-header-title,
.card-header-icon {
  align-items: center;
  display: flex;
  padding: 0.75rem 1rem;
}

.card-header-icon {
  justify-content: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-color: inherit;
  text-indent: 0;
}
thead {
  display: table-header-group;
}

tr {
  display: table-row;
  border-color: rgb(243, 244, 246);
  max-width: 100%;
  position: relative;
}

th {
  padding: 0.5rem 0.75rem;
  text-align: left;
}

tr:nth-child(odd) td {
  background-color: rgb(249, 250, 251);
}

td {
  display: table-cell;
  padding: 0.5rem 0.75rem;
  text-align: left;
  vertical-align: middle;
}

td.image-cell {
  width: 1.5rem;
  border-bottom-width: 0;
}

td.image-cell .image {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}

.link {
  color: rgb(37 99 235);
  text-decoration: inherit;
}

.rounded-full {
  border-radius: 9999px;
}

img {
  height: auto;
  max-width: 100%;
}

.table-pagination {
  border-color: rgb(243, 244, 246);
  border-top-width: 1px;
  padding: 0.75rem 1.5rem;
}

.pagination {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.buttons .button {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.button.active {
  border-color: rgb(209, 213, 219);
}

.button {
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  border-color: rgb(249, 250, 251);
  border-width: 1px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: inline-flex;
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
}

button {
  text-transform: none;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
}

small {
  font-size: 80%;
}
</style>
