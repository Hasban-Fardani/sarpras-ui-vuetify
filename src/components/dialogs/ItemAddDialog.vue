<script setup lang="ts">
import type { CreateItem } from '@/types/item';
import { ref } from 'vue';
import { categories } from '@/stores/fake/category';

const image = ref<File | null>(null)
const imageUrl = ref<string | null>(null)
const data = ref<CreateItem>({
    nama: '',
    gambar: new File([], ''),
    stok: 1,
    satuan: '',
    harga: 0,
    kategori_id: 0
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
                    <v-text-field label="Name" v-model="data.nama"></v-text-field>
                    <v-select label="Kategori" :items="categories" item-value="id" item-title="nama">
                        <template v-slot:item="{ props, item }">
                            <v-list-item v-bind="props" :title="item.raw.nama" />
                        </template>
                    </v-select>
                    <div class="d-flex ga-3">
                        <v-text-field label="Stok" v-model="data.stok"></v-text-field>
                        <v-select label="Satuan"
                            :items="['Unit', 'buat']"
                        v-model="data.satuan"></v-select>
                    </div>
                    <v-text-field label="Harga" v-model="data.harga"></v-text-field>
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
</style>