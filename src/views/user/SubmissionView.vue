<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import SubmissionForm from '@/components/SubmissionForm.vue';

</script>
<template>
    <UserLayout>
        <v-btn prepend-icon="mdi-plus" color="primary">
            Form Pengajuan
            <SubmissionForm />
        </v-btn>
        <h3 class="mt-3">History Pengajuan</h3>
        <v-data-table class="mt-3">

        </v-data-table>
    </UserLayout>
</template>