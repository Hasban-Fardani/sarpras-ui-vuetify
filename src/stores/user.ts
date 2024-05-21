import { computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { Credentials } from '@/types/credential'

export const useUserStore = defineStore('user', () => {
  const token = computed(() => localStorage.getItem('token'))
  const username = computed(() => localStorage.getItem('token'))

  async function login(credential: Credentials) {
    const { data } = await axios.post('/auth/login', credential)
    localStorage.setItem('token', data.token)
    localStorage.setItem('username', data.user.name)
  }

  async function logout() {
    try {
      await axios.post('/auth/logout', null, {
        headers: {
          Authorization: 'Bearer ' + token.value
        }
      })
    } finally {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
    }
  }

  return { token, username, login, logout }
})
