import type { ItemOut } from '@/types/item_out'
import type { UpdateTableArgs } from '@/types/table'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { itemOut } from './fake/item_out'
import { useUserStore } from './user'

export const useItemOutStore = defineStore('item_out', () => {
  const items = ref<ItemOut[]>([])
  const total = computed(() => items.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const filtered = computed(() => {
    let res = []
    if (searchName.value) {
      res = items.value.filter(
        (i) => i.unit.name.toLocaleLowerCase().search(searchName.value.toLocaleLowerCase()) != -1
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
      title: 'Unit',
      key: 'unit.name'
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
    items.value = itemOut
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
