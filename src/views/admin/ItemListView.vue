<script lang="ts" setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import ItemTable from '@/components/ItemTable.vue'
import { useItemStore } from '@/stores/item';
import { onMounted } from 'vue';

const item = useItemStore()
onMounted(() => {
    item.tmpData()
})
</script>
<template>
    <AdminLayout>
        <ItemTable />
    </AdminLayout>
</template>
