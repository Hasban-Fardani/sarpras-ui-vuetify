<script setup lang="ts">
import DeleteDialog from '@/components/dialogs/DeleteDialog.vue';
import { useStockOpnameStore } from '@/stores/stock_opname';
import { onMounted, ref } from 'vue';


const stockOpname = useStockOpnameStore()
const loading = ref(false)

const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const confirmDelete = (id: number, name: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = name
    selectedDeleteId.value = id
}

const deleteStockOpname = () => {

}

onMounted(() => {
    stockOpname.tmpData()
})
</script>
<template>
    <delete-dialog type="Stock Opname" :id="selectedDeleteId" :name="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteStockOpname" />
    <div class="w-50 w-md-25">
        <v-text-field v-model="stockOpname.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
            placeholder="cari barang..." append-inner-icon="mdi-magnify" hide-details />
    </div>
    <v-data-table-server v-model:items-per-page="stockOpname.perPage" :headers="stockOpname.headers"
        :items="stockOpname.filtered" :items-length="stockOpname.total" :loading="loading" :search="stockOpname.searchName"
        item-value="name" @update:options="stockOpname.updateTable">
        <template v-slot:item.tanggal="{ item }">
                {{ item.tanggal.toLocaleDateString() }}
            </template>
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-square-edit-outline" color="yellow" @click="null" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDelete(item.id, item.barang!.name)" />
            </div>
        </template>
    </v-data-table-server>
</template>