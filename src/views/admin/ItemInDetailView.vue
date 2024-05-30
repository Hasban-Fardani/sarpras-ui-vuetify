<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { itemIn } from '@/stores/fake/item_in';
import { useRoute } from 'vue-router';

const route = useRoute()
const { id } = route.params
const item = itemIn.find((i) => i.id === parseInt(id.toString()))
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Detail Barang Masuk #{{ id }}</h2>
        </div>
        <div class="d-flex ga-2 mt-3">
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
                <VDataTable>
                </VDataTable>
            </VCardText>
        </VCard>
    </AdminLayout>
</template>