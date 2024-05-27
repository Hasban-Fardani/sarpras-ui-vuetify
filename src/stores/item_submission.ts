import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { itemSubmissions } from './fake/item_submission'
import type { CreateItem } from '@/types/item'
import type { UpdateTableArgs } from '@/types/table'
import type { ItemSubmission } from '@/types/item_submission'

export const useItemSubmissionStore = defineStore('item-submission', () => {
  const items = ref<ItemSubmission[]>([])
  const total = computed(() => items.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const filtered = computed(() => {
    let res = []
    if (searchName.value) {
      res = items.value.filter(
        (i) => i.nama_unit.toLocaleLowerCase().search(searchName.value.toLocaleLowerCase()) != -1
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
      title: 'Nama',
      key: 'nama_unit'
    },
    {
      title: 'Jumlah',
      key: 'jumlah_ajuan'
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

  function tmpData() {
    items.value = itemSubmissions
  }

  function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage
  }

  function addItem(item: CreateItem) {
    const data = new FormData()
    data.append('nama', item.nama)
    data.append('gambar', item.gambar)
    data.append('kategori_id', item.kategori_id.toString())
    data.append('stok', item.stok.toString())
    data.append('harga', item.harga.toString())
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
    getAll,
    tmpData,
    updateTable,
    deleteItem,
    updateItem,
    addItem
  }
})
