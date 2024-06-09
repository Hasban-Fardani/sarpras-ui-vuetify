<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { itemSubmissionDetail } from '@/stores/fake/item_submission';
import { useItemSubmissionStore } from '@/stores/item_submission';
import { useRoute } from 'vue-router';

const route = useRoute()
const { id } = route.params
const itemSubmissionStore = useItemSubmissionStore()
itemSubmissionStore.tmpData()
const item = itemSubmissionStore.get(parseInt(id.toString()))
const detailRequest = itemSubmissionDetail.filter((i) => i.id_pengajuan === parseInt(id.toString()))
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

const isDone = item?.status === 'selesai' || item?.status === 'ditolak'

const getColor = (status: string) => {
    if (status == 'diproses') {
        return 'warning'
    } else if (status == 'ditolak') {
        return 'error'
    } else {
        return 'success'
    }
}
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Detail Pengadaan #{{ id }}</h2>
            <VChip size="small" :color="getColor(item!.status)">{{ item?.status }}</VChip>
        </div>
        <div class="d-flex justify-space-between w-100">
            <div class="d-flex ga-2 my-3">
                <v-avatar color="brown">
                    <span class="text-h5">{{ item?.unit.nama[0] }}</span>
                </v-avatar>
                <div>
                    <p>{{ item?.unit.nama }}</p>
                    <p class="font-weight-bold text-caption">{{ item?.tanggal }}</p>
                </div>
            </div>
            <div class="d-flex ga-2" v-if="!isDone">
                <v-btn color="green" append-icon="mdi-check">Setujui</v-btn>
                <v-btn color="red" append-icon="mdi-close">Tolak</v-btn>
            </div>
        </div>
        <div class="d-flex">
            <VCard class="w-100">
                <VCardText>
                    <VDataTable :items="detailRequest" :headers="headers">
                        <template v-slot:item.barang.gambar="{ item }">
                            <img :src="item.barang!.gambar" alt="" width="100px" height="100px">
                        </template>
                        <template v-slot:item.jumlah_acc="{ item }">
                            <v-number-input v-model="item.jumlah_acc" controlVariant="split" variant="outlined" :disabled="isDone"></v-number-input>
                        </template>
                    </VDataTable>
                </VCardText>
            </VCard>
        </div>
    </AdminLayout>
</template>