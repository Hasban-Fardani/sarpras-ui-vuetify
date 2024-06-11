<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import { itemRequestDetail } from '@/stores/fake/item_request';
import { useItemRequestStore } from '@/stores/item_request';
import { ref } from 'vue';
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
    },
    {
        title: 'Aksi',
        key: 'id'
    }
]

const isDone = item?.status != 'diproses'

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
            <h2>Detail Permintaan #{{ id }}</h2>
            <VChip size="small" append-icon="mdi-pencil" @click="null">{{ item?.status }}</VChip>
        </div>

        <div class="w-100 d-flex justify-space-between align-end my-3">
            <div class="d-flex ga-2 my-3">
                <v-avatar color="brown">
                    <span class="text-h5">{{ item?.unit.nama[0] }}</span>
                </v-avatar>
                <div>
                    <p>{{ item?.unit.nama }}</p>
                    <p class="font-weight-bold text-caption">{{ item?.tanggal }}</p>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <VCard class="w-100">
                <VCardText>
                    <VDataTable :items="detailRequest" :headers="headers">
                        <template v-slot:item.barang.gambar="{ item }">
                            <img :src="item.barang.gambar" alt="" width="100px" height="100px">
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