<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import RequestForm from '@/components/RequestForm.vue';
import ItemRequestTable from '@/components/ItemRequestTable.vue';

</script>
<template>
    <UserLayout>
        <v-btn prepend-icon="mdi-plus" color="primary">
            Form Permintaan
            <RequestForm />
        </v-btn>
        <h3 class="mt-3">History Permintaan</h3>
        
            <ItemRequestTable/>
    </UserLayout>
</template>