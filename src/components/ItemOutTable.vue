<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useItemOutStore } from '@/stores/item_out';

const itemIn = useItemOutStore()
const loading = ref(false)

const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const confirmDelete = (id: number, nama: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = nama
    selectedDeleteId.value = id
}

const deleteItemOut = () => {

}


onMounted(() => {
    itemIn.tmpData()
})
</script>
<template>
    <delete-dialog type="Barang keluar" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteItemOut" />
    <v-data-table-server v-model:items-per-page="itemIn.perPage" :headers="itemIn.headers" :items="itemIn.filtered"
        :items-length="itemIn.total" :loading="loading" :search="itemIn.searchName" item-value="name"
        @update:options="itemIn.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" :to="`/admin/items/item-out/${item.id}`" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDelete(item.id, item.tanggal)" />
            </div>
        </template>
    </v-data-table-server>
</template>