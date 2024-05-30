<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import RequestForm from '@/components/RequestForm.vue';

</script>
<template>
    <UserLayout>
        <v-btn prepend-icon="mdi-plus" color="primary">
            Form Permintaan
            <RequestForm />
        </v-btn>
        <h3 class="mt-3">History Permintaan</h3>
        <v-data-table class="mt-3">

        </v-data-table>
    </UserLayout>
</template>