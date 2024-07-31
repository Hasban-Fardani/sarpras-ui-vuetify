<script setup lang="ts">
import DeleteDialog from '@/components/dialogs/DeleteDialog.vue';
import { useItemRequestStore } from '@/stores/item_request';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';

const user = useUserStore()
const itemRequest = useItemRequestStore()
const loading = ref(false)

const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const confirmDelete = (id: number, name: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = name
    selectedDeleteId.value = id
}

const deleteItemRequest = () => {

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
    <delete-dialog type="Permintaan" :id="selectedDeleteId" :name="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteItemRequest" />
        <div class="d-flex flex-wrap w-100 justify-space-between align-center">
        <div class="w-50 w-md-25">
            <v-text-field v-model="itemRequest.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
                placeholder="Cari unit..." append-inner-icon="mdi-magnify" hide-details />
        </div>
        <div class="d-flex ga-2 ml-2 mt-3">
            <v-btn variant="outlined" height="48px">
                dd/mm/yy
                <date-range-picker/>
            </v-btn>
            <v-select :items="['diajukan', 'disetujui', 'selesai', 'ditolak']" label="status" variant="outlined" density="comfortable" width="150" multiple chips clearable/>
        </div>
    </div>
    <v-data-table-server v-model:items-per-page="itemRequest.perPage" :headers="itemRequest.headers"
        :items="itemRequest.filtered" :items-length="itemRequest.total" :loading="loading"
        :search="itemRequest.searchName" item-value="name" @update:options="itemRequest.updateTable">
        <template v-slot:item.status="{ item }">
            <v-chip :color="getColor(item.status)">{{ item.status }}</v-chip>
        </template>
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" :to="`/${user.data.role}/permintaan/${item.id}`" />
                <v-btn icon="mdi-delete" color="red"
                    @click="confirmDelete(item.id, 'Permintaan tanggal ' + item.tanggal)" />
            </div>
        </template>
    </v-data-table-server>
</template>