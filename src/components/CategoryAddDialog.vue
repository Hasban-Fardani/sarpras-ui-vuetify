<script setup lang="ts">
import { ref } from 'vue';

const nama = ref('')
const saveCategory = () => {
    // Todo: save category
}
</script>
<template>
    <v-dialog activator="parent" max-width="340">
        <template v-slot:default="{ isActive }">
            <v-card title="Tambah Kategori" prepend-icon="mdi-plus">
                <v-card-text>
                    <v-text-field label="Name" v-model="nama"></v-text-field>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ml-auto" text="Save" @click="saveCategory" color="primary"></v-btn>
                    <v-btn text="Close" @click="isActive.value = false;" color="error"></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>