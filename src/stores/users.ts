import { defineStore } from 'pinia';

interface State {
  isAdmin: boolean;
  loading: boolean;
}

export const useUsersStore = defineStore('users', {
  state: (): State => ({
    isAdmin: false,
    loading: false,
  }),
  actions: {
    async login(password: string) {
      this.loading = true;
      if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
        this.isAdmin = true;
      }
      this.loading = false;
    },
    async logout() {
      this.isAdmin = false;
    },
  },
});
