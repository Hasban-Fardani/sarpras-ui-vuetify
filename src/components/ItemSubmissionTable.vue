<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useItemSubmissionStore } from '@/stores/item_submission';

const itemRequest = useItemSubmissionStore()
const loading = ref(false)

onMounted(() => {
    itemRequest.tmpData()
})
</script>
<template>
    <v-data-table-server v-model:items-per-page="itemRequest.perPage" :headers="itemRequest.headers"
        :items="itemRequest.filtered" :items-length="itemRequest.total" :loading="loading"
        :search="itemRequest.searchName" item-value="name" @update:options="itemRequest.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" />
                <v-btn icon="mdi-square-edit-outline" color="yellow" />
                <v-btn icon="mdi-delete" color="red" />
            </div>
        </template>
    </v-data-table-server>
</template>