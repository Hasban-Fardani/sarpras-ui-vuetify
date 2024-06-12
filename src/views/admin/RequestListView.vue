<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import ItemRequestTable from '@/components/tables/ItemRequestTable.vue';
import RequestForm from '@/components/RequestForm.vue';
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Permintaan</h2>
            <VChip color="primary" append-icon="mdi-plus" variant="flat" @click="null">
                Buat
                <RequestForm />
            </VChip>
        </div>
        <ItemRequestTable />
    </AdminLayout>
</template>