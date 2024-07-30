<script setup lang="ts">
import type { Category } from "@/types/category";

import CategoryEditDialog from "@/components/dialogs/CategoryEditDialog.vue";
import DeleteDialog from "@/components/dialogs/DeleteDialog.vue";

import { useCategoryStore } from "@/stores/category";
import { ref } from "vue";

const category = useCategoryStore();

const editDialogShow = ref(false);
const selectedEditCategory = ref<Category>({} as Category);
const editCategory = (category: Category) => {
	selectedEditCategory.value = category;
	editDialogShow.value = true;
};

const deleteDialogShow = ref(false);
const selectedDeleteName = ref("");
const selectedDeleteId = ref(0);
const showDeleteDialog = async (id: number, name: string) => {
	deleteDialogShow.value = true;
	selectedDeleteName.value = name;
  selectedDeleteId.value = id;
};

</script>
<template>
    <category-edit-dialog 
        :is-active="editDialogShow" 
        :category-prop="selectedEditCategory" 
        @close-dialog="editDialogShow = false"
    />

    <delete-dialog 
        type="category" 
        :id="selectedDeleteId" 
        :name="selectedDeleteName" 
        :is-active="deleteDialogShow"
        @close-dialog="deleteDialogShow = false" 
        @delete="category.deleteCategory" 
    />

    <div class="w-50 w-md-25">
        <v-text-field 
            v-model="category.searchName" 
            class="ma-2" 
            label="cari" 
            variant="outlined" 
            density="comfortable"
            placeholder="Cari deskripsi..." 
            append-inner-icon="mdi-magnify" 
            hide-details 
        />
    </div>
    <v-data-table-server 
        v-model:items-per-page="category.perPage" 
        :headers="category.headers"
        :items="category.categories" 
        :items-length="category.total" 
        :loading="category.onUpdate" 
        :search="category.searchName"
        item-value="name" 
        @update:options="category.updateTable"
    >
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn 
                  icon="mdi-square-edit-outline" 
                  color="yellow" 
                  @click="editCategory(item)" 
                />
                <v-btn 
                  icon="mdi-delete" 
                  color="red" 
                  @click="showDeleteDialog(item.id, item.name)" 
                />
            </div>
        </template>
    </v-data-table-server>
</template>