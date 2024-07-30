import axios from 'axios'
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { Preferences } from '@capacitor/preferences'
import type { Credentials } from '@/types/credential'
import type { User } from '@/types/user'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
export const useUserStore = defineStore('user', () => {
  const data = ref<User>({
    nama: '',
    role: undefined,
    token: '',
    unit: ''
  })
  const isLogin = computed(() => data.value?.token !== '')

  async function load() {
    const ret = await Preferences.get({ key: 'user' })

    if (ret.value == null) {
      return
    }

    data.value = JSON.parse(ret.value)
  }

  async function login(credential: Credentials) {
    try {
      const { data: dataResponse } = await axios.post(`${BACKEND_URL}/auth/login`, credential)
      const token = dataResponse.token
      const {name, role} = dataResponse.user
      const unit = role
      data.value = {
        token,
        nama: name,
        role,
        unit
      }
      await Preferences.set({
        key: 'user',
        value: JSON.stringify(data.value)
      })
  
      return 'login success'
    } catch (error) {
      return 'login failed'
    }
  }

  async function clear() {
    data.value = {
      nama: '',
      role: undefined,
      token: '',
      unit: ''
    }

    await Preferences.remove({
      key: 'user'
    })
  }

  async function logout() {
    if (!data.value || !data.value.token) {
      return
    }

    try {
      await axios.post('/auth/logout', null, {
        headers: {
          Authorization: 'Bearer ' + data.value.token
        }
      })
    } finally {
      clear()
    }
  }

  return { data, isLogin, load, login, logout, clear }
})
