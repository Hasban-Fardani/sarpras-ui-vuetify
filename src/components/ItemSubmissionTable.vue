<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useItemSubmissionStore } from '@/stores/item_submission';

const itemRequest = useItemSubmissionStore()
const loading = ref(false)

const getColor = (status: string) => {
    if (status == 'diproses') {
        return 'warning'
    } else if (status == 'ditolak') {
        return 'error'
    } else {
        return 'success'
    }
}

onMounted(() => {
    itemRequest.tmpData()
})
</script>
<template>
    <v-data-table-server v-model:items-per-page="itemRequest.perPage" :headers="itemRequest.headers"
        :items="itemRequest.filtered" :items-length="itemRequest.total" :loading="loading"
        :search="itemRequest.searchName" item-value="name" @update:options="itemRequest.updateTable">
        <template v-slot:item.status="{ item }">
            <v-chip :color="getColor(item.status)">{{ item.status }}</v-chip>
        </template>
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" :to="`/admin/pengajuan/${item.id}`" />
                <v-btn icon="mdi-delete" color="red" />
            </div>
        </template>
    </v-data-table-server>
</template>