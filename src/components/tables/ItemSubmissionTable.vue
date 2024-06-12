<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useItemSubmissionStore } from '@/stores/item_submission';
import { useUserStore } from '@/stores/user';


const user = useUserStore()

const itemRequest = useItemSubmissionStore()
const loading = ref(false)


const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const confirmDelete = (id: number, nama: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = nama
    selectedDeleteId.value = id
}

const deleteItemSubmission = () => {

}

const getColor = (status: string) => {
    if (status == 'diajukan') {
        return 'warning'
    } else if (status == 'ditolak') {
        return 'error'
    } else {
        return 'success'
    }
}

onMounted(() => {
    itemRequest.tmpData()
})
</script>
<template>
    <delete-dialog type="Pengadaan" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteItemSubmission" />
    <div class="w-50 w-md-25">
        <v-text-field v-model="itemRequest.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
            placeholder="Cari unit..." append-inner-icon="mdi-magnify" hide-details />
    </div>
    <v-data-table-server v-model:items-per-page="itemRequest.perPage" :headers="itemRequest.headers"
        :items="itemRequest.filtered" :items-length="itemRequest.total" :loading="loading"
        :search="itemRequest.searchName" item-value="name" @update:options="itemRequest.updateTable">
        <template v-slot:item.status="{ item }">
            <v-chip :color="getColor(item.status)">{{ item.status }}</v-chip>
        </template>
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" :to="`/${user.data.role}/pengadaan/${item.id}`" />
                <v-btn icon="mdi-delete" color="red"
                    @click="confirmDelete(item.id, 'pengadaan tanggal ' + item.tanggal)" />
            </div>
        </template>
    </v-data-table-server>
</template>