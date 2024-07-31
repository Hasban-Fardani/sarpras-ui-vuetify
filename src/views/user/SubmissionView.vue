<script setup lang="ts">
import ItemSubmissionTable from '@/components/submissionItem/ItemSubmissionTable.vue';
import UserLayout from '@/layouts/UserLayout.vue';

</script>
<template>
    <UserLayout>
        <v-btn prepend-icon="mdi-plus" color="primary" to="/user/pengadaan/tambah">
            Form Pengadaan
        </v-btn>
        <h3 class="mt-3">History Pengadaan</h3>
        <ItemSubmissionTable/>
    </UserLayout>
</template>