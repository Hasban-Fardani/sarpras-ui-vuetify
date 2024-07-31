<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import { useCategoryStore } from '@/stores/category';
import { useItemStore } from '@/stores/item';
import type { Item } from '@/types/item';
import Swal from 'sweetalert2';
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
    itemProp: Item,
    isActive: boolean
}>();

const emit = defineEmits(['update:isActive', 'closeDialog']);

const categoryStore = useCategoryStore();
const itemStore = useItemStore();
const image = ref<File | null>(null);
const imageUrl = ref<string | null>(null);

const data = ref<Item>({ ...props.itemProp });

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

const saveItem = async () => {
    console.log("value: ",data.value)
    closeDialog();
    try {
        await itemStore.updateItem(data.value);
        emit('update:isActive', false);
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Item has been updated',
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update item',
        });
        itemStore.onUpdate = false;
    }
};

const closeDialog = () => {
    emit('update:isActive', false);
    emit('closeDialog');
};

onMounted(() => {
    if (categoryStore.categories.length === 0) {
        categoryStore.getAll();
    }
});
</script>

<template>
    <v-dialog 
        :model-value="isActive" 
        @update:model-value="$emit('update:isActive', $event)" 
        max-width="400"
    >
        <v-card title="Edit Barang" prepend-icon="mdi-pencil">
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
                        :items="categoryStore.categories" 
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
                <v-btn class="ml-auto" text="Save" @click="saveItem" color="primary">Save</v-btn>
                <v-btn text="Close" @click="closeDialog" color="error">Close</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.img-preview {
    max-width: 300px;
}
</style>
