<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { itemIn, itemInDetails } from '@/stores/fake/item_in';
import { useRoute } from 'vue-router';

const route = useRoute()
const { id } = route.params
const item = itemIn.find((i) => i.id === parseInt(id.toString()))
const detailItemIn = itemInDetails.filter((i) => i.id_barang_masuk === parseInt(id.toString()))
const headers = [
    {
        title: 'Gambar',
        key: 'barang.gambar',
    },
    {
        title: 'Barang',
        key: 'barang.nama'
    },
    {
        title: 'Jumlah',
        key: 'jumlah'
    }
]
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Detail Barang Masuk #{{ id }}</h2>
        </div>
        <div class="d-flex ga-2 my-3">
            <v-avatar color="brown">
                <span class="text-h5">{{ item?.supplier?.nama[0] }}</span>
            </v-avatar>
            <div>
                <p>{{ item?.supplier?.nama }}</p>
                <p class="font-weight-bold text-caption">{{ item?.tanggal }}</p>
            </div>
        </div>
        <VCard class="w-100">
            <VCardText>
                <VDataTable :items="detailItemIn" :headers="headers">
                    <template v-slot:item.barang.gambar="{ item }">
                        <img :src="item.barang.gambar ?? 'https://picsum.photos/200/200'" :alt="item.barang.nama" width="100px" height="100px">
                    </template>
                </VDataTable>
            </VCardText>
        </VCard>
    </AdminLayout>
</template>