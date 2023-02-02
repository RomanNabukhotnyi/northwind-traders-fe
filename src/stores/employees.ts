import { defineStore } from 'pinia';

export const useEmployeesStore = defineStore('employees', {
  state: () => ({
    employees: [],
  }),
  getters: {
    getEmployees: (state) => state.employees,
  },
  actions: {
    async fetchEmployees() {
      const response = await fetch('http://localhost:4000/employees');
      const employees = await response.json();
      this.employees = employees;
    },
  },
});
