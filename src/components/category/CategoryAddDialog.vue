<script setup lang="ts">
import { useCategoryStore } from '@/stores/category';
import { ref } from 'vue';

const name = ref('')
const saveCategory = () => {
    const category = useCategoryStore();
    category.addCategory({ name: name.value });
}
</script>
<template>
    <v-dialog activator="parent" max-width="400">
        <template v-slot:default="{ isActive }">
            <v-card title="Tambah category" prepend-icon="mdi-plus">
                <v-card-text>
                    <v-text-field label="Name" v-model="name"></v-text-field>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ml-auto" text="Save" @click="saveCategory(); isActive.value = false" color="primary"></v-btn>
                    <v-btn text="Close" @click="isActive.value = false;" color="error"></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>