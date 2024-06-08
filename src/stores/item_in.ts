import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import type { UpdateTableArgs } from '@/types/table'
import type { ItemIn } from '@/types/item_in'
import { itemIn } from './fake/item_in'

export const useItemInStore = defineStore('item_in', () => {
  const items = ref<ItemIn[]>([])
  const total = computed(() => items.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const filtered = computed(() => {
    let res = []
    if (searchName.value) {
      res = items.value.filter(
        (i) => i.unit!.nama.toLocaleLowerCase().search(searchName.value.toLocaleLowerCase()) != -1 || 
          i.supplier?.nama.toLocaleLowerCase().search(searchName.value.toLocaleLowerCase()) != -1
      )
    } else {
      res = items.value
    }
    const start = page.value - 1 > 0 ? (page.value - 1) * perPage.value : 0
    const end = start + perPage.value
    return res.slice(start, end)
  })
  const totalFiltered = computed(() => filtered.value!.length)
  const headers = [
    {
      title: 'Deskripsi',
      key: 'deskripsi'
    },
    {
      title: 'Supplier',
      key: 'supplier.nama'
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
    return axios.get('/items', {
      headers: {
        Authorization: 'Bearer ' + user.data.token
      }
    })
  }

  function get(id: number) {
    return items.value.find((i) => i.id === id)
  }

  function tmpData() {
    items.value = itemIn
  }

  function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage
  }

  function addItem() {
    // const data = new FormData()
  }

  function updateItem() {}

  function deleteItem() {}

  return {
    items,
    filtered,
    total,
    totalFiltered,
    headers,
    perPage,
    page,
    searchName,
    get,
    getAll,
    tmpData,
    updateTable,
    deleteItem,
    updateItem,
    addItem
  }
})
