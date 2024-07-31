<script setup lang="ts">
import DeleteDialog from '@/components/dialogs/DeleteDialog.vue';
import { useItemInStore } from '@/stores/item_in';
import { onMounted, ref } from 'vue';
import DateRangePicker from '../DateRangePicker.vue';

const itemIn = useItemInStore()

const confirmDeleteDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const suppliers = ref<string[]>()
const confirmDelete = (id: number, name: string) => {
    confirmDeleteDialog.value = true
    selectedDeleteName.value = name
    selectedDeleteId.value = id
}

const deleteItemIn = () => {

}

onMounted(() => {
    suppliers.value = itemIn.items.map(i => i.supplier!.name)
})
</script>
<template>
    <delete-dialog 
        type="category" 
        :id="selectedDeleteId" 
        :name="selectedDeleteName" 
        :is-active="confirmDeleteDialog"
        @close-dialog="confirmDeleteDialog = false" 
        @delete="deleteItemIn" 
    />
    
    <div class="d-flex flex-wrap w-100 justify-space-between align-center">
        <div class="w-50 w-md-25">
            <v-text-field 
                v-model="itemIn.searchName" 
                class="ma-2" 
                label="cari" 
                variant="outlined" 
                density="comfortable"
                placeholder="Cari deskripsi..." 
                append-inner-icon="mdi-magnify" 
                hide-details 
            />
        </div>
        <div class="d-flex ga-2 ml-2 mt-3">
            <v-btn variant="outlined" height="48px">
                dd/mm/yy
                <date-range-picker/>
            </v-btn>
            <v-select 
                :items="suppliers" 
                label="supplier" 
                variant="outlined" 
                density="comfortable" 
                width="150" 
                multiple chips clearable
            />
        </div>
    </div>
    <v-data-table-server 
        v-model:items-per-page="itemIn.perPage" 
        :headers="itemIn.headers" 
        :items="itemIn.items"
        :items-length="itemIn.total" 
        :loading="itemIn.onUpdate" 
        :search="itemIn.searchName" 
        item-value="name"
        @update:options="itemIn.updateTable"
    >
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn 
                    icon="mdi-eye" 
                    color="primary" 
                    :to="`/admin/barang-masuk/${item.id}`" 
                />
                <v-btn 
                    icon="mdi-delete" 
                    color="red" 
                    @click="confirmDelete(item.id, item.tanggal)" 
                />
            </div>
        </template>
    </v-data-table-server>
</template>