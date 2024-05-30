<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import ItemSubmissionTable from '@/components/ItemSubmissionTable.vue';
import SubmissionForm from '@/components/SubmissionForm.vue';

</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Pengajuan</h2>
            <VChip color="primary" append-icon="mdi-plus" @click="null">
                Buat
                <SubmissionForm />
            </VChip>
        </div>
        <ItemSubmissionTable />
    </AdminLayout>
</template>