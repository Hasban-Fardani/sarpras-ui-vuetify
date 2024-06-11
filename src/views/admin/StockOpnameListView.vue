<script setup lang="ts">
import StockOpnameTable from '@/components/StockOpnameTable.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
</script>
<template>
    <admin-layout>
        <div class="d-flex ga-2">
            <h2>Stock Opname</h2>
            <VChip color="primary" append-icon="mdi-plus" variant="flat" @click="null">
                Buat
            </VChip>
        </div>
        <StockOpnameTable/>
    </admin-layout>
</template>