<script setup lang="ts">
import DeleteDialog from '@/components/DeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useItemInStore } from '@/stores/item_in';

const itemIn = useItemInStore()
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
    itemIn.tmpData()
})
</script>
<template>
    <delete-dialog type="Kategori" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" @delete="deleteItemIn" />
    <div class="d-flex w-100 justify-space-between align-center">
        <div class="w-50">
            <v-text-field v-model="itemIn.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
                placeholder="Cari nama..." append-inner-icon="mdi-magnify" hide-details />
        </div>
        <div>
            <v-btn>
                Filter
                <v-dialog activator="parent" >
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-date-picker/>
                            <template v-slot:actions>
                                <v-btn class="ml-auto" text="Close" @click="isActive.value = false"></v-btn>
                            </template>
                        </v-card>
                    </template>
                </v-dialog>
            </v-btn>
        </div>
    </div>
    <v-data-table-server v-model:items-per-page="itemIn.perPage" :headers="itemIn.headers" :items="itemIn.filtered"
        :items-length="itemIn.total" :loading="loading" :search="itemIn.searchName" item-value="name"
        @update:options="itemIn.updateTable">
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-eye" color="primary" :to="`/admin/items/item-in/${item.id}`" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDelete(item.id, item.tanggal)" />
            </div>
        </template>
    </v-data-table-server>
</template>