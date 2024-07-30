<script setup lang="ts">
import { categories } from '@/stores/fake/category';
import type { CreateItem } from '@/types/item';
import { ref } from 'vue';

const image = ref<File | null>(null)
const imageUrl = ref<string | null>(null)
const data = ref<CreateItem>({
    name: '',
    gambar: new File([], ''),
    stock: 1,
    unit: '',
    price: 0,
    category_id: 0
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
</script>
<template>
    <v-dialog activator="parent" max-width="400">
        <template v-slot:default="{ isActive }">
            <v-card title="Tambah Barang" prepend-icon="mdi-plus">
                <v-card-text>
                    <img ref="imagePreview" v-if="imageUrl" :src="imageUrl" alt="Preview Image" class="img-preview" />
                    <v-file-input label="input gambar" ref="image" @change="uploadImage"></v-file-input>
                    <v-text-field label="Name" v-model="data.name"></v-text-field>
                    <v-select label="category" :items="categories" item-value="id" item-title="name">
                        <template v-slot:item="{ props, item }">
                            <v-list-item v-bind="props" :title="item.raw.name" />
                        </template>
                    </v-select>
                    <div class="d-flex ga-3">
                        <v-text-field label="stock" v-model="data.stock" class="mt-3"></v-text-field>
                        <div class="w-50">
                            <v-btn size="x-small" variant="plain" prepend-icon="mdi-plus">
                                Tambah unit
                            </v-btn>
                            <v-select label="unit"
                                :items="['Unit', 'buat']"
                            v-model="data.unit"
                            density="comfortable"></v-select>
                        </div>
                    </div>
                    <v-text-field label="price" v-model="data.price"></v-text-field>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ml-auto" text="Save" @click="null" color="primary"></v-btn>
                    <v-btn text="Close" @click="isActive.value = false;" color="error"></v-btn>
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