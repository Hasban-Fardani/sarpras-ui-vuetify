<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import CategoryAddDialog from '@/components/CategoryAddDialog.vue';
import CategoryTable from '@/components/CategoryTable.vue';
</script>
<template>
    <AdminLayout>
        <VBtn color="primary" append-icon="mdi-plus">
            Tambah
            <CategoryAddDialog />
        </VBtn>
        <CategoryTable />
    </AdminLayout>
</template>