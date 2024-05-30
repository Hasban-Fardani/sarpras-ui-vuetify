<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { itemOut } from '@/stores/fake/item_out';
import { useRoute } from 'vue-router';

const route = useRoute()
const { id } = route.params
const item = itemOut.find((i) => i.id === parseInt(id.toString()))
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Detail Barang Keluar #{{ id }}</h2>
        </div>
        <div class="d-flex ga-2 my-3">
            <v-avatar color="brown">
                <span class="text-h5">{{ item?.unit?.nama[0] }}</span>
            </v-avatar>
            <div>
                <p>{{ item?.unit?.nama }}</p>
                <p class="font-weight-bold text-caption">{{ item?.tanggal }}</p>
            </div>
        </div>
        <VCard class="w-100">
            <VCardText>
                <VDataTable>
                </VDataTable>
            </VCardText>
        </VCard>
    </AdminLayout>
</template>