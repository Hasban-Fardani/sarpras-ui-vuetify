<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import ItemOutTable from '@/components/ItemOutTable.vue'


</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Barang Keluar</h2>
            <VChip color="primary" append-icon="mdi-plus" variant="flat" @click="null">
                Tambah
            </VChip>
        </div>
        <ItemOutTable />
    </AdminLayout>
</template>