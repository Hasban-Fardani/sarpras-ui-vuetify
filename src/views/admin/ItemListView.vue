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
        <v-text-field v-model="item.searchName" class="ma-2" density="compact" placeholder="Search name..."
            hide-details></v-text-field>
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
                <v-btn icon="mdi-square-edit-outline" color="yellow" />
                <v-btn icon="mdi-delete" color="red" />
            </template>
        </v-data-table-server>
    </AdminLayout>
</template>
