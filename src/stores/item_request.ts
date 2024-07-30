import type { CreateItem } from '@/types/item'
import type { ItemRequest } from '@/types/item_request'
import type { UpdateTableArgs } from '@/types/table'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { itemRequests } from './fake/item_request'
import { useUserStore } from './user'

export const useItemRequestStore = defineStore('item_request', () => {
  const items = ref<ItemRequest[]>([])
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
      title: 'name',
      key: 'unit.name'
    },
    {
      title: 'Jumlah',
      key: 'jumlah_permintaan'
    },
    {
      title: 'Status',
      key: 'status'
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
    return axios.get('/item-requests', {
      headers: {
        Authorization: 'Bearer ' + user.data.token
      }
    })
  }

  function get(id: number) {
    return items.value.find((i) => i.id === id)
  }

  function tmpData() {
    items.value = itemRequests
  }

  function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage
  }

  function addItem(item: CreateItem) {
    const data = new FormData()
    data.append('name', item.name)
    data.append('gambar', item.gambar)
    data.append('category_id', item.category_id.toString())
    data.append('stock', item.stock.toString())
    data.append('price', item.price.toString())
  }

  function updateRequest() {}

  function deleteReqest() {}

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
    deleteReqest,
    updateRequest,
    addItem
  }
})
