<script setup lang="ts">
import CategoryAddDialog from '@/components/dialogs/CategoryAddDialog.vue';
import CategoryTable from '@/components/tables/CategoryTable.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>category</h2>
            <VChip color="primary" variant="flat" append-icon="mdi-plus" @click="null">
                Tambah
                <CategoryAddDialog />
            </VChip>
        </div>
        <CategoryTable />
    </AdminLayout>
</template>