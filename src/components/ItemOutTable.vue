<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useItemOutStore } from '@/stores/item_out';

const itemIn = useItemOutStore()
const loading = ref(false)

onMounted(() => {
    itemIn.tmpData()
})
</script>
<template>
    <v-data-table-server v-model:items-per-page="itemIn.perPage" :headers="itemIn.headers" :items="itemIn.filtered"
        :items-length="itemIn.total" :loading="loading" :search="itemIn.searchName" item-value="name"
        @update:options="itemIn.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" :to="`/admin/items/item-out/${item.id}`" />
                <v-btn icon="mdi-delete" color="red" />
            </div>
        </template>
    </v-data-table-server>
</template>