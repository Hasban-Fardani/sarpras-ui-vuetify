<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import { useUserStore } from '@/stores/user';
import { VCard } from 'vuetify/components';

const user = useUserStore()
</script>
<template>
    <UserLayout>
        <h2 class="text-center my-3">Halo {{ user.data.nama }} 👋</h2>
        <p>Bagaimana cara melakukan pengajuan / permintaan item?</p>
        <div class="w-100 h-100 mt-2 d-flex justify-center ga-3" :class="$vuetify.display.mobile ? 'flex-column' : ''">
            <VCard title="Isi Form Pengajuan / Permintaan" color="primary" class="w-100 border"
                prepend-icon="mdi-numeric-1-circle-outline" elevation="1"></VCard>
            <VCard title="Tunggu Proses Pengecekan" color="primary" class="w-100 border"
                prepend-icon="mdi-numeric-2-circle-outline" elevation="1"></VCard>
            <VCard title="Transaksi Selesai!" color="primary" class="w-100 border"
                prepend-icon="mdi-numeric-3-circle-outline" elevation="1"></VCard>
        </div>
        <div>

        </div>
    </UserLayout>
</template>