import type { CreateItem, Item } from '@/types/item'
import type { UpdateTableArgs } from '@/types/table'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { items as fakeItem } from './fake/item'
import { useUserStore } from './user'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
export const useItemStore = defineStore('item', () => {
  const items = ref<Item[]>([])
  const total = computed(() => items.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const filtered = computed(() => items.value)
  const totalFiltered = computed(() => filtered.value!.length)
  const headers = [
    {
      title: 'Gambar',
      key: 'gambar',
      sortable: false
    },
    {
      title: 'name',
      key: 'name'
    },
    {
      title: 'category',
      key: 'category.name'
    },
    {
      title: 'price',
      key: 'price'
    },
    {
      title: 'stock/Minimal',
      key: 'stock'
    },
    {
      title: 'SO terakhir',
      key: 'updated_at'
    },
    {
      title: 'Action',
      key: 'id',
      sortable: false
    }
  ]

  async function getAll() {
    const user = useUserStore()
    const {data} = await axios.get(`${BACKEND_URL}/item`, {
      headers: {
        Authorization: `Bearer ${user.data.token}`
      }
    })
    console.log("Dataa:: ",data.data)

    items.value = data.data


    return items.value
  }

  function get(id: number) {
    return items.value.find((i) => i.id === id)
  }

  function tmpData() {
    items.value = fakeItem
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
