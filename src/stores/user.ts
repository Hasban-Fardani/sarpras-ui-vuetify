import axios from 'axios'
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { Preferences } from '@capacitor/preferences'
import { users } from './fake/user'
import type { Credentials } from '@/types/credential'
import type { User } from '@/types/user'

export const useUserStore = defineStore('user', () => {
  const data = ref<User>({
    name: '',
    role: 'user',
    token: '',
    unit: 'sarpras'
  })
  const isLogin = computed(() => data.value?.token != '')

  async function load() {
    const ret = await Preferences.get({ key: 'user' })

    if (ret.value == null) {
      console.log('tidak ada user')
      return
    }

    data.value = JSON.parse(ret.value)
  }

  async function login(credential: Credentials) {
    const { data } = await axios.post('/auth/login', credential)
    data.value = data
    await Preferences.set({
      key: 'user',
      value: JSON.stringify(data.value)
    })
  }

  async function loginTMP(credential: Credentials) {
    const userFind = users.find(
      (usr) => usr.username == credential.username && usr.password == credential.password
    )
    if (userFind) {
      data.value.name = userFind.username
      data.value.role = userFind.role
      data.value.unit = userFind.role
      data.value.token = 'random token'

      await Preferences.set({
        key: 'user',
        value: JSON.stringify(data.value)
      })

      return true
    }
    return false
  }

  async function clear() {
    data.value = {
      name: '',
      role: '',
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

  return { data, isLogin, load, login, logout, loginTMP, clear }
})
