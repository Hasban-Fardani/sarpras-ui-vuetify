<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import ItemSubmissionTable from '@/components/tables/ItemSubmissionTable.vue';

</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Pengadaan</h2>
            <VChip color="primary" append-icon="mdi-plus" variant="flat" to="/admin/pengadaan/tambah">
                Buat
            </VChip>
        </div>
        <ItemSubmissionTable />
    </AdminLayout>
</template>