<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useItemOutStore } from '@/stores/item_out';

const itemOut = useItemOutStore()
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
    itemOut.tmpData()
})
</script>
<template>
    <delete-dialog type="Barang keluar" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteItemOut" />
    <div class="d-flex flex-wrap w-100 justify-space-between align-center">
        <div class="w-50 w-md-25">
            <v-text-field v-model="itemOut.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
                placeholder="Cari deskripsi..." append-inner-icon="mdi-magnify" hide-details />
        </div>
        <div class="d-flex ga-2">
            <v-btn variant="outlined" height="48px">
                dd/mm/yy
                <v-dialog activator="parent" max-width="350">
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <div class="d-flex flex-wrap justify-center align-center ga-2 w-100">
                                <v-date-picker title="Tanggal"/>
                            </div>
                            <template v-slot:actions>
                                <v-btn class="ml-auto" text="Close" @click="isActive.value = false"></v-btn>
                            </template>
                        </v-card>
                    </template>
                </v-dialog>
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