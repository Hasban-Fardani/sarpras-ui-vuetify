<script setup lang="ts">
import DeleteDialog from '@/components/dialogs/DeleteDialog.vue';
import { useItemOutStore } from '@/stores/item_out';
import { onMounted, ref } from 'vue';
import DateRangePicker from '../DateRangePicker.vue';

const itemOut = useItemOutStore()
const loading = ref(false)

const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const confirmDelete = (id: number, name: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = name
    selectedDeleteId.value = id
}

const deleteItemOut = () => {

}


onMounted(() => {
    itemOut.tmpData()
})
</script>
<template>
    <delete-dialog type="Barang keluar" :id="selectedDeleteId" :name="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteItemOut" />
    <div class="d-flex flex-wrap w-100 justify-space-between align-center">
        <div class="w-50 w-md-25">
            <v-text-field v-model="itemOut.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
                placeholder="Cari deskripsi..." append-inner-icon="mdi-magnify" hide-details />
        </div>
        <div class="d-flex ga-2">
            <v-btn variant="outlined" height="48px">
                dd/mm/yy
                <date-range-picker/>
            </v-btn>
        </div>
    </div>
    <v-data-table-server v-model:items-per-page="itemOut.perPage" :headers="itemOut.headers" :items="itemOut.filtered"
        :items-length="itemOut.total" :loading="loading" :search="itemOut.searchName" item-value="name"
        @update:options="itemOut.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" :to="`/admin/barang-keluar/${item.id}`" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDelete(item.id, item.tanggal)" />
            </div>
        </template>
    </v-data-table-server>
</template>