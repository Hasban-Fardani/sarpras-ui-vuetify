<script setup lang="ts">
import { ref } from 'vue';

const name = ref('')
const saveCategory = () => {
    // Todo: save category
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
                    <v-btn class="ml-auto" text="Save" @click="saveCategory" color="primary"></v-btn>
                    <v-btn text="Close" @click="isActive.value = false;" color="error"></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>