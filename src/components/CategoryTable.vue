<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useCategoryStore } from '@/stores/category';

const category = useCategoryStore()
const loading = ref(false)

onMounted(() => {
    category.tmpData()
})
</script>
<template>
    <v-data-table-server v-model:items-per-page="category.perPage" :headers="category.headers"
        :items="category.filtered" :items-length="category.total" :loading="loading" :search="category.searchName"
        item-value="name" @update:options="category.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-square-edit-outline" color="yellow" />
                <v-btn icon="mdi-delete" color="red" />
            </div>
        </template>
    </v-data-table-server>
</template>