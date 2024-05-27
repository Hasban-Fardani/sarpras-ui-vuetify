<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserTableStore } from '@/stores/user_table';

const userTable = useUserTableStore()
const loading = ref(false)

onMounted(() => {
    userTable.tmpData()
})
</script>
<template>
    <v-data-table-server v-model:items-per-page="userTable.perPage" :headers="userTable.headers"
        :items="userTable.filtered" :items-length="userTable.total" :loading="loading" :search="userTable.searchName"
        item-value="name" @update:options="userTable.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" />
                <v-btn icon="mdi-square-edit-outline" color="yellow" />
                <v-btn icon="mdi-delete" color="red" />
            </div>
        </template>
    </v-data-table-server>
</template>