<script setup lang="ts">
import UserEditDialog from '@/components/dialogs/UserEditDialog.vue';
import DeleteDialog from '@/components/dialogs/DeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useUserTableStore } from '@/stores/user_table';
import type { User } from '@/types/user';


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

const deleteUser = () => {

}

const editUserDialog = ref(false)
const selectedEditUser = ref<User>({} as User)
const editUser = (userEdite: User) => {
    editUserDialog.value = true
    selectedEditUser.value = userEdite
}

onMounted(() => {
    userTable.tmpData()
})
</script>
<template>
    <user-edit-dialog :user-prop="selectedEditUser" :is-active="editUserDialog"
        @close-dialog="editUserDialog = false" />
    <delete-dialog type="Akun" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteUser" />
    <v-data-table-server v-model:items-per-page="userTable.perPage" :headers="userTable.headers"
        :items="userTable.filtered" :items-length="userTable.total" :loading="loading" :search="userTable.searchName"
        item-value="name" @update:options="userTable.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-square-edit-outline" color="yellow" @click="editUser(item)" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDelete(item.id!, item.nama)" />
            </div>
        </template>
    </v-data-table-server>
</template>