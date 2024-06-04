<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import ItemInTable from '@/components/ItemInTable.vue';
import ItemInAddDialog from '@/components/ItemInAddDialog.vue'

</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Barang Masuk</h2>
            <VChip color="primary" append-icon="mdi-plus" variant="flat" @click="null">
                Tambah
                <ItemInAddDialog/>
            </VChip>
        </div>
        <ItemInTable />
    </AdminLayout>
</template>