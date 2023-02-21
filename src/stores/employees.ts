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
  loading: boolean;
}

export const useEmployeesStore = defineStore('employees', {
  state: (): State => ({
    employees: [],
    loading: false,
  }),
  actions: {
    async create(employee: Employee) {
      this.loading = true;
      const response = await fetch('http://localhost:4000/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      const newEmployee = (await response.json()).data as Employee;
      this.employees.push(newEmployee);
      this.loading = false;
    },
    async update(employee: Employee) {
      this.loading = true;
      const response = await fetch(
        `http://localhost:4000/employees/${employee.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employee),
        }
      );
      const updatedEmployee = (await response.json()).data as Employee;
      const index = this.employees.findIndex(
        (e) => e.id === updatedEmployee.id
      );
      this.employees[index] = updatedEmployee;
      this.loading = false;
    },
    async delete(id: number) {
      this.loading = true;
      await fetch(`http://localhost:4000/employees/${id}`, {
        method: 'DELETE',
      });
      const index = this.employees.findIndex((e) => e.id === id);
      this.employees.splice(index, 1);
      this.loading = false;
    },
    getAllByPage() {
      const size = 20;
      const result = [];
      for (let i = 0; i < Math.ceil(this.employees.length / size); i++) {
        result[i] = this.employees.slice(i * size, i * size + size);
      }
      return result;
    },
    async fetchEmployees() {
      const response = await fetch('http://localhost:4000/employees');
      const employees = (await response.json()).data as Employee[];
      this.employees = employees;
    },
  },
});
