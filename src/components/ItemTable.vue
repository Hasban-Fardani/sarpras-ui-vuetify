<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import ItemEditDialog from '@/components/ItemEditDialog.vue';
import DeleteDialog from '@/components/DeleteDialog.vue';
import ItemAddDialog from '@/components/ItemAddDialog.vue'
import ItemImportDialog from '@/components/ItemImportDialog.vue'
import { onMounted, ref } from 'vue';
import { useItemStore } from '@/stores/item';
import type { Item } from '@/types/item';

const item = useItemStore()
const loading = ref(false)
const toIDR = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num)

const editItemDialog = ref(false)
const selectedEditItem = ref<Item>({} as Item)

const deleteItemDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const editItem = (itemEdite: Item) => {
    editItemDialog.value = true
    selectedEditItem.value = itemEdite
}

const confirmDeleteITem = (id: number, nama: string) => {
    deleteItemDialog.value = true
    selectedDeleteName.value = nama
    selectedDeleteId.value = id
}

const deleteItem = (id: number) => {
    console.log('Do delete item with id: ', id);

}

onMounted(() => {
    item.tmpData()
})
</script>
<template>
    <item-edit-dialog :item-prop="selectedEditItem" :is-active="editItemDialog"
        @close-dialog="editItemDialog = false" />

    <delete-dialog type="Barang" :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="deleteItemDialog"
        @close-dialog="deleteItemDialog = false" @delete="deleteItem" />

    <div class="d-flex w-100 justify-space-between">
        <div class="w-50">
            <v-text-field v-model="item.searchName" class="ma-2" label="cari" variant="outlined" density="comfortable"
                placeholder="Cari nama..." append-inner-icon="mdi-magnify" hide-details />
        </div>
        <div class="d-flex ga-2">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" append-icon="mdi-plus" dark v-bind="props">
                        Tambah
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item append-icon="mdi-pencil-plus-outline" @click="null">
                        <ItemAddDialog />
                        input
                    </v-list-item>
                    <v-list-item append-icon="mdi-import" @click="null">
                        <ItemImportDialog />
                        import
                    </v-list-item>
                    <v-list-item append-icon="mdi-export">
                        export
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
    <v-data-table-server v-model:items-per-page="item.perPage" :headers="item.headers" :items="item.filtered"
        :items-length="item.total" :loading="loading" :search="item.searchName" item-value="name"
        @update:options="item.updateTable">
        <template v-slot:item.gambar="{ item }">
            <div class="d-flex justify-center w-100">
                <img :src="item.gambar?.toString()" alt="gambar" width="50">
            </div>
        </template>
        <template v-slot:item.harga="{ item }">
            <p>{{ toIDR(parseInt(item.harga!.toString())) }}</p>
        </template>
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn icon="mdi-playlist-edit" color="green" />
                <v-btn icon="mdi-square-edit-outline" color="yellow" @click="editItem(item)" />
                <v-btn icon="mdi-delete" color="red" @click="confirmDeleteITem(item.id, item.nama.toString())" />
            </div>
        </template>
    </v-data-table-server>
</template>