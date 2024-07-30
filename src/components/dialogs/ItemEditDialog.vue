<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import { ref,  watch } from 'vue';
import type { Item } from '@/types/item';

const props = defineProps<{
    itemProp: Item,
    isActive: boolean
}>();

const image = ref<File | null>(null);
const imageUrl = ref<string | null>(null);

const data = ref<Item>({
    name: props.itemProp?.name || '',
    gambar: props.itemProp?.gambar || null,
    stock: props.itemProp?.stock || 0,
    price: props.itemProp?.price || 0,
    category_id: props.itemProp?.category_id || 0,
    updated_at: props.itemProp?.updated_at || '2024-05-22T00:00:00Z'
} as Item);

watch(() => props.isActive, (newVal) => {
    if (newVal) {
        data.value = { ...props.itemProp };
    }
});

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
};

const saveItem = () => {
    // Implement save logic here
};
</script>

<template>
    <v-dialog v-model="props.isActive" max-width="400">
        <v-card title="Edit Barang" prepend-icon="mdi-pencil">
            <v-card-text>
                <img v-if="imageUrl" :src="imageUrl" alt="Preview Image" class="img-preview" />
                <v-file-input label="Input File" @change="uploadImage"></v-file-input>
                <v-text-field label="Name" v-model="data.name"></v-text-field>
                <v-text-field label="stock" v-model="data.stock"></v-text-field>
                <v-text-field label="price" v-model="data.price"></v-text-field>
            </v-card-text>
            <template v-slot:actions>
                <v-btn class="ml-auto" text="Save" @click="saveItem" color="primary">Save</v-btn>
                <v-btn text="Close" @click="$emit('closeDialog')" color="error">Close</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.img-preview {
    max-width: 300px;
}
</style>
