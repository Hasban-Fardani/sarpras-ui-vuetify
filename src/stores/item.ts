import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useUserStore } from './user'
import type { Item } from '@/types/item'

export const useItemStore = defineStore('item', () => {
  const items = ref<Item[]>()

  function getAll() {
    const user = useUserStore()
    return axios.get('/items', {
      headers: {
        Authorization: 'Bearer ' + user.token
      }
    })
  }

  return { items, getAll }
})
