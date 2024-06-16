<script setup lang="ts">
import DeleteDialog from '@/components/dialogs/DeleteDialog.vue';
import DateRangePicker from '../DateRangePicker.vue';
import { onMounted, ref } from 'vue';
import { useItemInStore } from '@/stores/item_in';

const itemIn = useItemInStore()
const loading = ref(false)


const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const suppliers = ref<string[]>()
const confirmDelete = (id: number, nama: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = nama
    selectedDeleteId.value = id
}

const deleteItemIn = () => {

}

onMounted(() => {
    itemIn.tmpData()
    suppliers.value = itemIn.items.map(i => i.supplier!.nama)
})
</script>
<template>
    <delete-dialog type="Kategori" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteItemIn" />
    <div class="d-flex flex-wrap w-100 justify-space-between align-center">
        <div class="w-50 w-md-25">
            <v-text-field v-model="itemIn.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
                placeholder="Cari deskripsi..." append-inner-icon="mdi-magnify" hide-details />
        </div>
        <div class="d-flex ga-2 ml-2 mt-3">
            <v-btn variant="outlined" height="48px">
                dd/mm/yy
                <date-range-picker/>
            </v-btn>
            <v-select :items="suppliers" label="supplier" variant="outlined" density="comfortable" width="150" multiple chips clearable></v-select>
        </div>
    </div>
    <v-data-table-server v-model:items-per-page="itemIn.perPage" :headers="itemIn.headers" :items="itemIn.filtered"
        :items-length="itemIn.total" :loading="loading" :search="itemIn.searchName" item-value="name"
        @update:options="itemIn.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" :to="`/admin/barang-masuk/${item.id}`" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDelete(item.id, item.tanggal)" />
            </div>
        </template>
    </v-data-table-server>
</template>