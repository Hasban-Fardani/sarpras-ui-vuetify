<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { itemRequestDetail } from '@/stores/fake/item_request';
import { useItemRequestStore } from '@/stores/item_request';
import { useRoute } from 'vue-router';

const route = useRoute()
const { id } = route.params
const itemRequestStore = useItemRequestStore()
itemRequestStore.tmpData()
const item = itemRequestStore.get(parseInt(id.toString()))
const detailRequest = itemRequestDetail.filter((i) => i.id_permintaan === parseInt(id.toString()))
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
    },
    {
        title: 'Jumlah Acc',
        key: 'jumlah_acc'
    }
]
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Detail Permintaan #{{ id }}</h2>
            <VChip size="small">{{ item?.status }}</VChip>
        </div>
        <div class="d-flex ga-2 my-3">
            <v-avatar color="brown">
                <span class="text-h5">{{ item?.unit.nama[0] }}</span>
            </v-avatar>
            <div>
                <p>{{ item?.unit.nama }}</p>
                <p class="font-weight-bold text-caption">{{ item?.tanggal }}</p>
            </div>
        </div>
        <div class="d-flex">
            <VCard class="w-100">
                <VCardText>
                    <VDataTable :items="detailRequest" :headers="headers">
                        <template v-slot:item.barang.gambar="{ item }">
                            <img :src="item.barang.gambar" alt="" width="100px" height="100px">
                        </template>
                    </VDataTable>
                </VCardText>
            </VCard>
        </div>
    </AdminLayout>
</template>