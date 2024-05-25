<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useItemStore } from '@/stores/item';

const item = useItemStore()
const loading = ref(false)
const toIDR = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num)

onMounted(() => {
    item.tmpData()
})
</script>
<template>
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
</template>