<script setup lang="ts">
import SOAddDialog from '@/components/dialogs/SOAddDialog.vue';
import StockOpnameTable from '@/components/tables/StockOpnameTable.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
</script>
<template>
    <admin-layout>
        <div class="d-flex ga-2">
            <h2>Stock Opname</h2>
            <VChip color="primary" append-icon="mdi-plus" variant="flat" @click="null">
                Buat
                <SOAddDialog/>
            </VChip>
        </div>
        <StockOpnameTable/>
    </admin-layout>
</template>