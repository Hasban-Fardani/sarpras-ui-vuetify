<script setup lang="ts">
import type { CreateItem } from '@/types/item';

import { useCategoryStore } from '@/stores/category';
import { useItemStore } from '@/stores/item';
import { onMounted, ref } from 'vue';

import Swal from 'sweetalert2'

const isOpen = ref(false)
const categories = useCategoryStore()
const image = ref<File | null>(null)
const imageUrl = ref<string | null>(null)
const data = ref<CreateItem>({
    name: '',
    gambar: new File([], ''),
    stock: 1,
    min_stock: 1,
    unit: '',
    price: 0,
    category_id: 1,
    merk: '',
})

const uploadImage = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        image.value = target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            imageUrl.value = e.target?.result as string;
        };
        reader.readAsDataURL(image.value);
    }
}

const storeItem = async () => {
    const item = useItemStore()
    try {
        await item.addItem(data.value)
        isOpen.value = false
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Item has been added',
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add item',
        })
    }
}

onMounted(() => {
    if (categories.categories.length === 0) {
        categories.getAll()
    }
})
</script>
<template>
    <v-dialog activator="parent" max-width="400" v-model="isOpen">
        <template v-slot:default="{ isActive }">
            <v-card title="Tambah Barang" prepend-icon="mdi-plus">
                <v-card-text>
                    <img 
                        v-if="imageUrl" 
                        :src="imageUrl" 
                        ref="imagePreview" 
                        alt="Preview Image" 
                        class="img-preview" 
                    />
                    <v-file-input 
                        label="input gambar" 
                        ref="image" 
                        @change="uploadImage"
                    />
                    <v-text-field 
                        label="Name" 
                        v-model="data.name" 
                    />
                    <v-select 
                        :items="categories.categories" 
                        v-model="data.category_id"
                        label="category" 
                        item-value="id" 
                        item-title="name"
                    >
                        <template v-slot:item="{ props, item }">
                            <v-list-item v-bind="props" :title="item.raw.name" />
                        </template>
                    </v-select>
                    <div class="d-flex ga-3">
                        <v-text-field 
                            v-model="data.stock" 
                            label="stock" 
                            class="mt-3"
                        />
                        <v-text-field 
                            v-model="data.min_stock" 
                            label="min. stock" 
                            class="mt-3"
                        />
                    </div>
                    <div class="d-flex ga-3">
                        <div class="w-50">
                            <v-btn size="x-small" variant="plain" prepend-icon="mdi-plus">
                                Tambah unit
                            </v-btn>
                            <v-select 
                                :items="['Unit', 'buat']"
                                label="Satuan"
                                v-model="data.unit"
                                density="comfortable" 
                            />
                        </div>
                        <v-text-field 
                            v-model="data.merk" 
                            label="merk" 
                            class="mt-3"
                        />
                    </div>
                    <v-text-field 
                        label="price" 
                        v-model="data.price"
                    />
                </v-card-text>
                <template v-slot:actions>
                    <v-btn 
                        class="ml-auto" 
                        text="Save" 
                        color="primary"
                        @click="storeItem" 
                    />
                    <v-btn 
                        text="Close"
                        color="error"
                        @click="isActive.value = false;" 
                    />
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>
<style scoped>
.img-preview {
    max-width: 300px;
}
.v-input__details {
    display: none !important;
}
</style>