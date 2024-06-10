<script setup lang="ts">
import CategoryEditDialog from './CategoryEditDialog.vue';
import DeleteDialog from '@/components/DeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useCategoryStore } from '@/stores/category';
import type { Category } from '@/types/category';

const category = useCategoryStore()
const loading = ref(false)

const editCategoryDialog = ref(false)
const selectedEditCategory = ref<Category>({} as Category)
const editCategory = (category: Category) => {
    selectedEditCategory.value = category
    editCategoryDialog.value = true
}

const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const confirmDelete = (id: number, nama: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = nama
    selectedDeleteId.value = id
}

const deleteCategory = () => {

}

onMounted(() => {
    category.tmpData()
})
</script>
<template>
    <category-edit-dialog :is-active="editCategoryDialog" @close-dialog="editCategoryDialog = false"
        :category-prop="selectedEditCategory" />
    <delete-dialog type="Kategori" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteCategory" />
    <div class="w-50 w-md-25">
        <v-text-field v-model="category.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
            placeholder="Cari deskripsi..." append-inner-icon="mdi-magnify" hide-details />
    </div>
    <v-data-table-server v-model:items-per-page="category.perPage" :headers="category.headers"
        :items="category.filtered" :items-length="category.total" :loading="loading" :search="category.searchName"
        item-value="name" @update:options="category.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-square-edit-outline" color="yellow" @click="editCategory(item)" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDelete(item.id, item.nama)" />
            </div>
        </template>
    </v-data-table-server>
</template>