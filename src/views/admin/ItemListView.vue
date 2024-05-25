<script lang="ts" setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { useItemStore } from '@/stores/item';
import { onMounted, ref } from 'vue';

const item = useItemStore()
const loading = ref(false)

const toIDR = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num)

onMounted(() => {
    item.tmpData()
})
</script>
<template>
    <AdminLayout>
        <div class="d-flex w-100 justify-space-between">
            <div class="w-50">
                <v-text-field v-model="item.searchName" class="ma-2" density="compact" placeholder="Search name..."
                    hide-details />
            </div>
            <div class="d-flex flex-column ga-2">
                <v-btn size="small">Import</v-btn>
                <v-btn size="small">Export</v-btn>
            </div>
        </div>
        <v-data-table-server v-model:items-per-page="item.perPage" :headers="item.headers" :items="item.filtered"
            :items-length="item.total" :loading="loading" :search="item.searchName" item-value="name"
            @update:options="item.updateTable">
            <template v-slot:item.gambar="{ item }">
                <div class="d-flex justify-center w-100">
                    <img :src="item.gambar.toString()" alt="gambar" width="50">
                </div>
            </template>
            <template v-slot:item.harga="{ item }">
                <p>{{ toIDR(parseInt(item.harga.toString())) }}</p>
            </template>
            <template v-slot:item.id="{ item }">
                <div class="d-flex ga-2">
                    <v-btn icon="mdi-playlist-edit" color="green" />
                    <v-btn icon="mdi-square-edit-outline" color="yellow" />
                    <v-btn icon="mdi-delete" color="red" />
                </div>
            </template>
        </v-data-table-server>
    </AdminLayout>
</template>
