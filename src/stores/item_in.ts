import type { ItemIn, ItemInDetail } from '@/types/item_in'
import type { UpdateTableArgs } from '@/types/table'
import axios, { type AxiosRequestConfig } from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const useItemInStore = defineStore('item_in', () => {
  const items = ref<ItemIn[]>([])
  const total = computed(() => items.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const shortBy = ref(null)
  const onUpdate = ref(false)
  const headers = [
    {
      title: 'Deskripsi',
      key: 'deskripsi'
    },
    {
      title: 'Supplier',
      key: 'supplier.name'
    },
    {
      title: 'Tanggal',
      key: 'tanggal'
    },
    {
      title: 'Action',
      key: 'id',
      sortable: false
    }
  ]

  function getAll() {
    const user = useUserStore()
    return axios.get(`${BACKEND_URL}/item-in`, {
      headers: {
        Authorization: `Bearer ${user.data.token}`
      }
    })
  }

  function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage
  }

  async function refresh() {
    const args: UpdateTableArgs = {
      page: page.value,
      itemsPerPage: perPage.value,
      shortBy: shortBy.value
    }
    
    updateTable(args)
  }

  async function addItem(itemIn: ItemIn) {
    onUpdate.value = true
    const data = new FormData()
    
    data.append('supplier_id', itemIn.supplier_id.toString())
    data.append('note', itemIn.note)

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${useUserStore().data.token}`
      }
    }

    await axios.post(`${BACKEND_URL}/item-in`, data, config)

    onUpdate.value = false
    refresh()
  }

  function updateItem() {}

  function deleteItem() {}

  return {
    items,
    total,
    headers,
    perPage,
    page,
    searchName,
    onUpdate,
    getAll,
    updateTable,
    deleteItem,
    updateItem,
    addItem,
  }
})
