import { defineStore } from 'pinia'

interface UserData {
  token?: string
  name?: string
  email?: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as UserData | null,
    token: null as string | null,
  }),
  actions: {
    login(userData: UserData) {
      this.user = userData
      this.token = userData.token || null
    },
    logout() {
      this.user = null
      this.token = null
    },
  },
})
