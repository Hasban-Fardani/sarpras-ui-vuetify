<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import SubmissionPage from '@/components/SubmissionPage.vue';

</script>
<template>
    <UserLayout>
        <VBtn class="mb-3" to="/user/pengadaan">Kembali</VBtn>
        <SubmissionPage/>
    </UserLayout>
</template>