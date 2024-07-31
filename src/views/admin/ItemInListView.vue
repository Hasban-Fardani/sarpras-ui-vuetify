<script setup lang="ts">
import ItemInAddDialog from '@/components/itemIn/ItemInAddDialog.vue'
import ItemInTable from '@/components/itemIn/ItemInTable.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2 mb-2">
            <h2>Barang Masuk</h2>
            <VChip color="primary" append-icon="mdi-plus" variant="flat" @click="null">
                Tambah
                <ItemInAddDialog/>
            </VChip>
        </div>
        <ItemInTable />
    </AdminLayout>
</template>