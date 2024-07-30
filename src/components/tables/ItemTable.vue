<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import DeleteDialog from '@/components/dialogs/DeleteDialog.vue';
import ItemEditDialog from '@/components/dialogs/ItemEditDialog.vue';
import { categories } from '@/stores/fake/category';
import { useItemStore } from '@/stores/item';
import { useUserStore } from '@/stores/user';
import type { Item } from '@/types/item';
import axios from 'axios';
import { inject, onMounted, ref } from 'vue';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

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

const confirmDeleteITem = (id: number, name: string) => {
    deleteItemDialog.value = true
    selectedDeleteName.value = name
    selectedDeleteId.value = id
}

const deleteItem = async (id: number) => {
    loading.value = true

    const user = useUserStore()
    
    await axios.delete(`${BACKEND_URL}/item/${id}`, {
        headers: {
            Authorization: `Bearer ${user.data.token}`
        }
    })

    item.getAll()

    deleteItemDialog.value = false

    loading.value = false
}

const selectedCategory = ref()

onMounted(() => {
    item.getAll()
})
</script>
<template>
    <item-edit-dialog 
        :item-prop="selectedEditItem" 
        :is-active="editItemDialog"
        @close-dialog="editItemDialog = false" 
    />

    <delete-dialog 
        type="Barang" 
        :id="selectedDeleteId" 
        :name="selectedDeleteName" 
        :is-active="deleteItemDialog"
        @close-dialog="deleteItemDialog = false" 
        @delete="deleteItem" 
    />

    <div class="d-flex flex-wrap w-100 justify-space-between">
        <div class="w-50 w-md-25">
            <v-text-field 
                v-model="item.searchName" 
                class="ma-2" 
                label="cari"
                variant="outlined" 
                density="comfortable"
                placeholder="Cari name..." 
                append-inner-icon="mdi-magnify" 
                hide-details 
            />
        </div>
        <div>
            <v-select 
                v-model="selectedCategory" 
                :items="categories" 
                variant="outlined" 
                label="category" 
                placeholder="select category" 
                max-width="400" 
                width="200" 
                item-title="name" 
                item-value="id" 
                density="comfortable" 
                class="mt-2" 
                multiple 
                clearable
            >
                <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index < 2">
                        <span>{{ item.raw.name }}</span>
                    </v-chip>
                    <span
                        v-if="index === 2"
                        class="text-grey text-caption align-self-center"
                    >
                        (+{{ selectedCategory.length - 2 }} lainnya)
                    </span>
                </template>
            </v-select>
        </div>
    </div>
    <v-data-table-server 
        v-model:items-per-page="item.perPage" 
        :headers="item.headers" 
        :items="item.filtered"
        :items-length="item.total" 
        :loading="loading" 
        :search="item.searchName" 
        item-value="name"
        @update:options="item.updateTable"
    >
        <template v-slot:item.gambar="{ item }">
            <div class="d-flex justify-center w-100">
                <img :src="item.gambar?.toString() ?? 'https://picsum.photos/200'" alt="gambar" width="50">
            </div>
        </template>
        <template v-slot:item.stock="{item}">
            <p>
               <span :class="{'text-red': item.stock! < item.min_stock!}">
                   {{ item.stock }} / {{ item.min_stock }} 
               </span>
               <span class="ml-2">{{ item.unit }}</span>
            </p>
        </template>
        <template v-slot:item.category.name="{item}">
            <v-chip size="small">{{ item?.category?.name }}</v-chip>
        </template>
        <template v-slot:item.price="{ item }">
            <p>{{ toIDR(parseInt(item.price!.toString())) }}</p>
        </template>
        <template v-slot:item.updated_at="{ item }">
            {{ (new Date(item.updated_at as string)).toLocaleDateString() }}
        </template>
        <template v-slot:item.id="{ item }">
            <div class="d-flex ga-2">
                <v-btn 
                    icon="mdi-square-edit-outline" 
                    color="yellow" 
                    @click="editItem(item)" 
                />
                <v-btn 
                    icon="mdi-delete" 
                    color="red"
                    @click="confirmDeleteITem(item.id, item.name)" 
                />
            </div>
        </template>
    </v-data-table-server>
</template>