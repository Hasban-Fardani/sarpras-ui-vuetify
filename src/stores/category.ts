import type { Category, CreateCategory } from '@/types/category'
import type { UpdateTableArgs } from '@/types/table'
import axios, { type AxiosRequestConfig } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useUserStore } from './user'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const useCategoryStore = defineStore('category', () => {
  const onUpdate = ref(false)
  const categories = ref<Category[]>([])
  const total = ref(0)
  const perPage = ref(5)
  const page = ref(1)
  const shortBy = ref(null)
  const searchName = ref('')

  const headers = [
    {
      title: 'name',
      key: 'name'
    },
    {
      title: 'Action',
      key: 'id',
      sortable: false
    }
  ]

  async function getAll() {
    const user = useUserStore()
    await user.load()
    const {data} = await axios.get(`${BACKEND_URL}/category?page=${page.value}&per_page=${perPage.value}&search=${searchName.value}`, {
      headers: {
        Authorization: `Bearer ${user.data.token}`
      }
    })

    categories.value = data.data
    total.value = data.total
  }

  async function updateTable(args: UpdateTableArgs) {
    page.value = args.page
    perPage.value = args.itemsPerPage

    if (!onUpdate.value) {
      onUpdate.value = true
      setTimeout(async () => {
        await getAll()
        onUpdate.value = false
      }, 1000)
    }
  }

  async function refresh() {
    const args: UpdateTableArgs = {
      page: page.value,
      itemsPerPage: perPage.value,
      shortBy: shortBy.value
    }
    
    updateTable(args)
  }

  async function addCategory(newCategory: CreateCategory) {
    const authToken = useUserStore().data.token;
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${authToken}` }
    };

    await axios.post(`${BACKEND_URL}/category`, { name: newCategory.name }, config);

    await refresh();
  }

  async function updateCategory(categoryToUpdate: Category) {
    try {
      const authToken = useUserStore().data.token;
      const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${authToken}` }
      };

      const updatedCategory = { name: categoryToUpdate.name };

      await axios.put(
        `${BACKEND_URL}/category/${categoryToUpdate.id}`,
        updatedCategory,
        config
      );

      await refresh();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteCategory(categoryId: number) {
    onUpdate.value = true;

    const userStore = useUserStore();
    const token = userStore.data.token;

    await axios.delete(`${BACKEND_URL}/category/${categoryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    onUpdate.value = false;
    refresh();
  }

  return {
    categories,
    total,
    headers,
    perPage,
    page,
    shortBy,
    searchName,
    onUpdate,
    getAll,
    updateTable,
    deleteCategory,
    updateCategory,
    addCategory
  }
})
