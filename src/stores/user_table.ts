import type { UpdateTableArgs } from '@/types/table'
import type { User } from '@/types/user'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { users as fakeUser } from './fake/user'
import { useUserStore } from './user'

export const useUserTableStore = defineStore('userTable', () => {
  const users = ref<User[]>([])
  const total = computed(() => users.value?.length)
  const perPage = ref(5)
  const page = ref(1)
  const searchName = ref('')
  const filtered = computed(() => {
    let res = []
    if (searchName.value) {
      res = users.value.filter(
        (i) => i.name.toLocaleLowerCase().search(searchName.value.toLocaleLowerCase()) != -1
      )
    } else {
      res = users.value
    }
    const start = page.value - 1 > 0 ? (page.value - 1) * perPage.value : 0
    const end = start + perPage.value
    return res.slice(start, end)
  })
  const totalFiltered = computed(() => filtered.value!.length)
  const headers = [
    {
      title: 'name',
      key: 'name'
    },
    {
      title: 'Role',
      key: 'role'
    },
    {
      title: 'Unit',
      key: 'unit'
    },
    {
      title: 'NIP',
      key: 'nip'
    },
    {
      title: 'Action',
      key: 'id',
      sortable: false
    }
  ]

  function getAll() {
    const user = useUserStore()
    return axios.get('/users', {
      headers: {
        Authorization: 'Bearer ' + user.data.token
      }
    })
  }

  function tmpData() {
    users.value = fakeUser
  }

  function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage
  }

  function addUser() {
    // const data = new FormData()
    // data.append('name', item.name)
  }

  function updateCategory() {}

  function deleteCategory() {}

  return {
    users,
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
    addUser
  }
})
