import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { stockOpnames as fakeSO } from './fake/stock_opname'
import type { StockOpname } from '@/types/stock_opname'
import type { UpdateTableArgs } from '@/types/table'

export const useStockOpnameStore = defineStore('stockOpname', () => {
  const stockOpnames = ref<StockOpname[]>([])
  const total = computed(() => stockOpnames.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const filtered = computed(() => {
    let res = []
    if (searchName.value) {
      res = stockOpnames.value.filter(
        (i) => i.barang!.nama.toLocaleLowerCase().search(searchName.value.toLocaleLowerCase()) != -1
      )
    } else {
      res = stockOpnames.value
    }
    const start = page.value - 1 > 0 ? (page.value - 1) * perPage.value : 0
    const end = start + perPage.value
    return res.slice(start, end)
  })
  const totalFiltered = computed(() => filtered.value!.length)
  const headers = [
    {
      title: 'barang',
      key: 'barang.nama'
    },
    {
      title: 'petugas',
      key: 'petugas.nama'
    },
    {
      title: 'tanggal',
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
    return axios.get('/stockOpnames', {
      headers: {
        Authorization: 'Bearer ' + user.data.token
      }
    })
  }

  function tmpData() {
    stockOpnames.value = fakeSO
  }

  function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage
  }

  function addItem() {
    const data = new FormData()
    // data.append('nama', item.nama)
  }

  function updateStockOpname() {}

  function deleteStockOpname() {}

  return {
    stockOpnames,
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
    deleteStockOpname,
    updateStockOpname,
    addItem
  }
})
