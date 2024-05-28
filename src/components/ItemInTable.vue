<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useItemInStore } from '@/stores/item_in';

const itemIn = useItemInStore()
const loading = ref(false)

onMounted(() => {
    itemIn.tmpData()
})
</script>
<template>
    <v-data-table-server v-model:items-per-page="itemIn.perPage" :headers="itemIn.headers" :items="itemIn.filtered"
        :items-length="itemIn.total" :loading="loading" :search="itemIn.searchName" item-value="name"
        @update:options="itemIn.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" />
                <v-btn icon="mdi-square-edit-outline" color="yellow" />
                <v-btn icon="mdi-delete" color="red" />
            </div>
        </template>
    </v-data-table-server>
</template>