<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import { itemSubmissionDetail } from '@/stores/fake/item_submission';
import { useItemSubmissionStore } from '@/stores/item_submission';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

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
    },
    {
        title: 'Aksi',
        key: 'id'
    }
]

const isDone = item?.status != 'diproses'
const getColor = (status: string) => {
    if (status == 'diproses') {
        return 'warning'
    } else if (status == 'ditolak') {
        return 'error'
    } else {
        return 'success'
    }
}

const isConfirm = ref(false)
const selectedConfirmId = ref(0)
const selectedNama = ref('')
const confirm = (id: number, nama: string) => {
    isConfirm.value = true
    selectedConfirmId.value = id
    selectedNama.value = nama
}
</script>
<template>
    <UserLayout>
        <ConfirmDialog :is-active="isConfirm" :id="selectedConfirmId" title="Hapus Barang" :confirm-message="`apakah anda yakin akan menghapus ${selectedNama} dari pengadaan?`" confirm-message-sub="" @close-dialog="isConfirm = false"/>
        <div class="d-flex ga-2">
            <h2>Detail Pengadaan #{{ id }}</h2>
            <VChip size="small" :color="getColor(item!.status)">{{ item?.status }}</VChip>
        </div>
        <p class="my-3">tanggal: {{ item?.tanggal }}</p>
        <div class="d-flex justify-space-between w-100">
            <div class="d-flex ga-2 my-3">
                <v-avatar color="brown">
                    <span class="text-h5">{{ item?.unit.nama[0] }}</span>
                </v-avatar>
                <div>
                    <p>{{ item?.unit.nama }}</p>
                    <p class="font-weight-bold text-caption">NIP: {{ item?.unit.nip ?? '0012102312' }}</p>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <VCard class="w-100">
                <VCardText>
                    <VDataTable :items="detailRequest" :headers="headers">
                        <template v-slot:item.barang.gambar="{ item }">
                            <img :src="item.barang!.gambar" alt="" width="100px" height="100px">
                        </template>
                        <template v-slot:item.id="{ item }">
                            <v-btn icon="mdi-trash-can" color="red" @click="confirm(item.id, item.barang!.nama)"></v-btn>
                        </template>
                    </VDataTable>
                </VCardText>
            </VCard>
        </div>
    </UserLayout>
</template>