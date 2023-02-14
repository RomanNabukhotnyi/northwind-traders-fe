import { defineStore } from 'pinia';

interface Category {
  id: number;
  name: string;
  description: string | null;
}

interface State {
  categories: Category[];
}

export const useCategoriesStore = defineStore('categories', {
  state: (): State => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      const response = await fetch('http://localhost:4000/categories');
      const categories = (await response.json()).data as Category[];
      this.categories = categories;
    },
  },
});
