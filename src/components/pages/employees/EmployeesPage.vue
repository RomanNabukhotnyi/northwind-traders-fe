<template>
  <section class="section main-section">
    <div class="card has-table" v-if="employees.length">
      <header class="card-header">
        <p class="card-header-title">Employees</p>
      </header>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Title</th>
              <th>City</th>
              <th>Phone</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees[page]" :key="employee.id">
              <td class="image-cell">
                <div class="image">
                  <img
                    :src="getAvatarUrl(employee.firstName, employee.lastName)"
                    class="rounded-full"
                  />
                </div>
              </td>
              <td>
                <a class="link" @click="openEmployee(employee.id)">{{
                  employee.firstName + ' ' + employee.lastName
                }}</a>
              </td>
              <td>{{ employee.title }}</td>
              <td>{{ employee.city }}</td>
              <td>{{ employee.homePhone }}</td>
              <td>{{ employee.country }}</td>
            </tr>
          </tbody>
        </table>
        <div class="table-pagination">
          <div class="pagination">
            <div class="buttons">
              <div v-for="num in employees.length" :key="num">
                <button
                  type="button"
                  class="button"
                  v-if="
                    (num <= page + 7 || num >= employees.length - 1) &&
                    (num <= 2 || num >= page - 6)
                  "
                  :class="{ active: page === num - 1 }"
                  @click="selectPage(num - 1)"
                >
                  {{ num }}
                </button>
                <button
                  type="button"
                  v-if="num === page + 7 || num === page - 7"
                  style="background-color: transparent"
                >
                  ...
                </button>
              </div>
            </div>
            <small>Page {{ page + 1 }} of {{ employees.length }}</small>
          </div>
        </div>
      </div>
    </div>
    <div class="card-content" v-else><h2>Loading employees...</h2></div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEmployeesStore } from '@/stores/employees';
const employeesStore = useEmployeesStore();
const router = useRouter();
const employees = computed(() => employeesStore.employeesByPage);
const getAvatarUrl = (firstName: string, lastName: string) => {
  return `https://avatars.dicebear.com/v2/initials/${firstName}-${lastName}.svg`;
};
const page = ref(0);
const selectPage = (num: number) => {
  page.value = num;
};
const openEmployee = (id: number) => {
  router.push(`/employees/${id}`);
};
</script>

<style scoped>
.main-section {
  padding: 1.5rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
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
  cursor: pointer;
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
