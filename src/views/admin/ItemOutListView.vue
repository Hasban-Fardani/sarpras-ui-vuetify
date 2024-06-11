<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import ItemOutTable from '@/components/ItemOutTable.vue'
import ItemOutAddDialog from '@/components/itemOutAddDialog.vue';

</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2 mb-2">
            <h2>Barang Keluar</h2>
            <VChip color="primary" append-icon="mdi-plus" variant="flat" @click="null">
                Tambah
                <ItemOutAddDialog/> 
            </VChip>
        </div>
        <ItemOutTable />
    </AdminLayout>
</template>