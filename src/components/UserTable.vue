<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useUserTableStore } from '@/stores/user_table';

const userTable = useUserTableStore()
const loading = ref(false)

const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const confirmDelete = (id: number, nama: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = nama
    selectedDeleteId.value = id
}

const deleteItemIn = () => {

}
onMounted(() => {
    userTable.tmpData()
})
</script>
<template>
    <delete-dialog type="Akun" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteItemIn" />
    <v-data-table-server v-model:items-per-page="userTable.perPage" :headers="userTable.headers"
        :items="userTable.filtered" :items-length="userTable.total" :loading="loading" :search="userTable.searchName"
        item-value="name" @update:options="userTable.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" />
                <v-btn icon="mdi-square-edit-outline" color="yellow" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDelete(item.id!, item.nama)" />
            </div>
        </template>
    </v-data-table-server>
</template>