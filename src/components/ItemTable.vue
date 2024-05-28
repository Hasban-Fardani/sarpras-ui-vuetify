<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import ItemEditDialog from '@/components/ItemEditDialog.vue';
import ItemDeleteDialog from '@/components/ItemDeleteDialog.vue';
import { onMounted, ref } from 'vue';
import { useItemStore } from '@/stores/item';
import type { Item } from '@/types/item';

const item = useItemStore()
const loading = ref(false)
const toIDR = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num)

const editItemDialog = ref(false)
const selectedEditItem = ref<Item>(<Item>{})

const deleteItemDialog = ref(false)
const selectedDeleteName = ref('')
const selectedDeleteId = ref(0)
const editItem = (itemEdite: Item) => {
    editItemDialog.value = true
    selectedEditItem.value = itemEdite
}

const deleteITem = (id: number, nama: string) => {
    deleteItemDialog.value = true
    selectedDeleteName.value = nama
    selectedDeleteId.value = id
}

onMounted(() => {
    item.tmpData()
})
</script>
<template>
    <item-edit-dialog :item-prop="selectedEditItem" :is-active="editItemDialog"
        @close-dialog="editItemDialog = false" />

    <item-delete-dialog :id="selectedDeleteId" :nama="selectedDeleteName" :is-active="deleteItemDialog"
        @close-dialog="deleteItemDialog = false" />

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
                <v-btn icon="mdi-delete" color="red" @click="deleteITem(item.id, item.nama.toString())" />
            </div>
        </template>
    </v-data-table-server>
</template>