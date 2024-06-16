<script setup lang="ts">
import ItemAddDialog from './ItemAddDialog.vue';
import { items as fakeItem } from '@/stores/fake/item'
import type { Item } from '@/types/item';
import { ref } from 'vue';

const items = ref(fakeItem)
const suppliers = ['supplier 1', 'supplier 2', 'supplier 3', 'supplier 4']
const selected = ref(null)
const selectedItems = ref<Item[]>([])
const headers = [
    {
        title: 'Gambar',
        key: 'gambar',
    },
    {
        title: 'Barang',
        key: 'nama'
    },
    {
        title: 'Jumlah',
        key: 'jumlah'
    }
]
const step = ref(1)
const saveItemIn = () => {
    // Todo: save item in
}

const addItem = () => {
    if (selected.value == null || selected.value == undefined) return

    let i = items.value.filter((i) => i.id === selected?.value)[0]

    // check if selected item is not already in the list
    if (!selectedItems.value.includes(i)) {
        selectedItems.value.push(i)
    } else {
        console.log("udah ada");           
    }

    // remove items from the list
    items.value.splice(items.value.indexOf(i), 1)

    selected.value = null
}

const removeItem = (item: Item) => {
    selectedItems.value.splice(selectedItems.value.indexOf(item), 1)
    items.value.push(item)
}
</script>
<template>
    <v-dialog activator="parent" max-width="500">
        <v-stepper :items="['Isi Data', 'Input barang', 'Review']" v-model="step">
            <template v-slot:item.1>
                <v-card title="Tambah Barang Masuk" prepend-icon="mdi-plus">
                    <v-card-text>
                        <v-file-input label="dokumen pemeriksaan" class="mt-1" density="comfortable"/>
                        <v-file-input label="dokumen berita acara serah terima" class="mt-1" density="comfortable"/>
                        <v-select :items="suppliers" label="supplier" density="comfortable"></v-select>
                        <v-textarea label="deskripsi" rows="3"></v-textarea>
                    </v-card-text>
                </v-card>
            </template>
            <template v-slot:item.2>    
                <v-btn color="primary" size="small" class="mb-2">
                    barang baru?
                    <item-add-dialog/>
                </v-btn>
                <div class="d-flex flex-wrap justify-start align-center mt-1">
                <div class="w-100" v-for="item in selectedItems" :key="item.nama">
                    <div class="d-flex ga-2 w-100 justify-space-between mt-5">
                        <p class="w-50 mt-4">{{ item.nama }}</p>
                        <v-number-input placeholder="jumlah" variant="outlined" controlVariant="stacked" width="150" v-model="item.jumlah" inset required></v-number-input>
                        <v-select label="satuan" width="150" variant="outlined" class="mr-4" :items="['box', 'rim', 'lusin']" v-model="item.satuan"/>
                        <v-btn icon="mdi-delete" color="red" size="small" class="mt-2" @click="removeItem(item)"></v-btn>
                    </div>
                    <v-divider :thickness="2"/>
                </div>
                <div class="d-flex ga-2 w-100 mt-4">
                    <v-autocomplete label="tambah barang" item-title="nama" item-value="id"
                        :items="items" v-model="selected">
                        <template v-slot:item="{ props, item }">
                            <v-list-item v-bind="props" :title="item.raw.nama" />
                        </template>
                    </v-autocomplete>
                    <v-btn icon="mdi-plus" color="green" class="mt-2" @click="addItem" size="small"></v-btn>
                </div>
            </div>
            </template>
            <template v-slot:item.3>    
                <v-card-text>
                    <v-data-table :items="selectedItems" :headers="headers">
                        <template v-slot:item.gambar="{ item }">
                            <img :src="item.gambar?.toString()" alt="gambar" width="50">
                        </template>
                        <template v-slot:item.jumlah="{ item }">
                            <p>{{ item.jumlah }} {{ item.satuan }}</p>
                        </template>
                    </v-data-table>
                </v-card-text>
            </template>
        </v-stepper>
    </v-dialog>
</template>