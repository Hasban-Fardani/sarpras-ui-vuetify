<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';

</script>
<template>
    <UserLayout>
        <v-btn prepend-icon="mdi-plus" color="primary" to="/user/pengadaan/tambah">
            Form Pengadaan
        </v-btn>
        <h3 class="mt-3">History Pengadaan</h3>
        <v-data-table class="mt-3">

        </v-data-table>
    </UserLayout>
</template>