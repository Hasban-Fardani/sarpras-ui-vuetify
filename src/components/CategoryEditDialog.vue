<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import { ref,  watch } from 'vue';
import type { Category } from '@/types/category';

const props = defineProps<{
    categoryProp: Category,
    isActive: boolean
}>();


const data = ref<Category>({
    id: props.categoryProp?.nama || 0,
    nama: props.categoryProp?.nama || '',
} as Category);

watch(() => props.isActive, (newVal) => {
    if (newVal) {
        data.value = { ...props.categoryProp };
    }
});

const saveCategory = () => {
    // Implement save logic here
};
</script>

<template>
    <v-dialog v-model="props.isActive" max-width="340">
        <v-card title="Edit Kategori" prepend-icon="mdi-pencil">
            <v-card-text>
                <v-text-field label="Name" v-model="data.nama"></v-text-field>
            </v-card-text>
            <template v-slot:actions>
                <v-btn class="ml-auto" text="Save" @click="saveCategory" color="primary">Save</v-btn>
                <v-btn text="Close" @click="$emit('closeDialog')" color="error">Close</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>
