<script setup lang="ts">
import { items as fakeItem } from '@/stores/fake/item';
import { useUserStore } from '@/stores/user';
import type { Item } from '@/types/item';
import { ref } from 'vue'


const user = useUserStore()
const selected = ref(null)
const selectedItems = ref<Item[]>([])
const items = ref(fakeItem)
const unit = ref(user.data.unit)
const name = ref(user.data.name)
const pesan = ref('')
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
        <p class="text-h6">Form Pengadaan Barang</p>
        <div>
            <p class="text-subtitle-1 font-weight-bold">Data Pemohon</p>
            <v-text-field label="name" v-model="name" required></v-text-field>
            <v-text-field label="Unit" v-model="unit" required></v-text-field>
            <v-text-field label="Pesan" v-model="pesan"></v-text-field>
            <!-- <v-divider :thickness="8" class="color-black"/> -->
            <p class="text-subtitle-1 mt-3 font-weight-bold">Daftar Barang</p>
            <div class="d-flex flex-wrap justify-start align-center mt-1">
                <div class="w-100" v-for="item in selectedItems" :key="item.name">
                    <div class="d-flex ga-2 w-100 justify-space-between mt-5">
                        <p class="w-50 mt-4">{{ item.name }}</p>
                        <v-number-input placeholder="jumlah" variant="outlined" controlVariant="stacked" class="w-50" inset required></v-number-input>
                        <v-btn icon="mdi-delete" color="red" size="small" class="mt-2" @click="removeItem(item)"></v-btn>
                    </div>
                    <v-divider :thickness="2"/>
                </div>
                <div class="d-flex ga-2 w-100 mt-4">
                    <v-autocomplete label="tambah barang" item-title="name" item-value="id"
                        :items="items" v-model="selected">
                        <template v-slot:item="{ props, item }">
                            <v-list-item v-bind="props" :title="item.raw.name" />
                        </template>
                    </v-autocomplete>
                    <v-btn icon="mdi-plus" color="green" class="mt-2" @click="addItem" size="small"></v-btn>
                </div>
            </div>
            <!-- <v-divider :thickness="8" class="color-black"/> -->
            <div class="mt-3">
                <div class="d-flex w-100 justify-space-between font-weight-bold">
                    <p>Jumlah Barang</p>
                    <p>{{ selectedItems.length }}</p>
                </div>
                <v-btn color="primary" class="mt-3">Submit</v-btn>
            </div>
        </div>
</template>
<style scoped>
.color-black {
    color: black !important;
}
</style>