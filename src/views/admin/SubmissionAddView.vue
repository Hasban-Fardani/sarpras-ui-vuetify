<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import SubmissionPage from '@/components/SubmissionPage.vue';

</script>
<template>
    <AdminLayout>
        <VBtn class="mb-3" to="/admin/pengadaan">Kembali</VBtn>
        <SubmissionPage/>
    </AdminLayout>
</template>