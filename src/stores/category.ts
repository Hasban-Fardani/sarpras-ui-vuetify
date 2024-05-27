import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { categories as fakeCategory } from './fake/category'
import type { Category, CreateCategory } from '@/types/category'
import type { UpdateTableArgs } from '@/types/table'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])
  const total = computed(() => categories.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const filtered = computed(() => {
    let res = []
    if (searchName.value) {
      res = categories.value.filter(
        (i) => i.nama.toLocaleLowerCase().search(searchName.value.toLocaleLowerCase()) != -1
      )
    } else {
      res = categories.value
    }
    const start = page.value - 1 > 0 ? (page.value - 1) * perPage.value : 0
    const end = start + perPage.value
    return res.slice(start, end)
  })
  const totalFiltered = computed(() => filtered.value!.length)
  const headers = [
    {
      title: 'Nama',
      key: 'nama'
    },
    {
      title: 'Action',
      key: 'id',
      sortable: false
    }
  ]

  function getAll() {
    const user = useUserStore()
    return axios.get('/categories', {
      headers: {
        Authorization: 'Bearer ' + user.data.token
      }
    })
  }

  function tmpData() {
    categories.value = fakeCategory
  }

  function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage
  }

  function addItem(item: CreateCategory) {
    const data = new FormData()
    data.append('nama', item.nama)
  }

  function updateCategory() {}

  function deleteCategory() {}

  return {
    categories,
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
    deleteCategory,
    updateCategory,
    addItem
  }
})
