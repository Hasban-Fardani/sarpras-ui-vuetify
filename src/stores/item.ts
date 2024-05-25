import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import type { Item } from '@/types/item'
import { items as fakeItem } from './fake/item'

interface UpdateTableArgs {
  page: number
  itemsPerPage: number
  shortBy: Array<Object> | null
}

export const useItemStore = defineStore('item', () => {
  const items = ref<Item[]>([])
  const total = computed(() => items.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const filtered = computed(() => {
    let res = []
    if (searchName.value) {
      res = items.value.filter(
        (i) => i.nama.toLocaleLowerCase().search(searchName.value.toLocaleLowerCase()) != -1
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
      title: 'Gambar',
      key: 'gambar',
      sortable: false
    },
    {
      title: 'Nama',
      key: 'nama'
    },
    {
      title: 'Kategori',
      key: 'kategori'
    },
    {
      title: 'Harga',
      key: 'harga'
    },
    {
      title: 'Stok',
      key: 'stok'
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

  function tmpData() {
    items.value = fakeItem
  }

  function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage
    console.log('update')
  }

  function addItem() {}

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
    getAll,
    tmpData,
    updateTable,
    deleteItem,
    updateItem,
    addItem
  }
})
