import { defineStore } from 'pinia';

interface Employee {
  id: number;
  lastName: string;
  firstName: string;
  title: string | null;
  titleOfCourtesy: string | null;
  birthDate: Date | null;
  hireDate: Date | null;
  address: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string | null;
  homePhone: string | null;
  extension: string | null;
  photo: string | null;
  notes: string | null;
  reportsTo: number | null;
  photoPath: string | null;
}

interface State {
  employees: Employee[];
  employeesByPage: Employee[][];
}

export const useEmployeesStore = defineStore('employees', {
  state: (): State => ({
    employees: [],
    employeesByPage: [],
  }),
  actions: {
    async fetchEmployees() {
      const response = await fetch('http://localhost:4000/employees');
      const employees = (await response.json()).data as Employee[];
      this.employees = employees;
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(employees.length / size); i++) {
        result[i] = employees.slice(i * size, i * size + size);
      }
      this.employeesByPage = result;
    },
  },
});
