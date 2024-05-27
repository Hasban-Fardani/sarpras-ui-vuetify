<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import UserLayout from '@/layouts/UserLayout.vue';
import { useUserStore } from '@/stores/user';

const user = useUserStore()
const Layout = user.data.role === 'admin' ? AdminLayout : UserLayout
</script>
<template>
    <Layout>
        todo: profile
    </Layout>
</template>