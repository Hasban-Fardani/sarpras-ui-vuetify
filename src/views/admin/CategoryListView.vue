<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import CategoryAddDialog from '@/components/CategoryAddDialog.vue';
import CategoryTable from '@/components/tables/CategoryTable.vue';
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Kategori</h2>
            <VChip color="primary" variant="flat" append-icon="mdi-plus" @click="null">
                Tambah
                <CategoryAddDialog />
            </VChip>
        </div>
        <CategoryTable />
    </AdminLayout>
</template>