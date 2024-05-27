<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    id: number,
    nama: string,
    isActive: boolean
}>();


const deleteItem = () => {
    // Implement save logic here
};
</script>

<template>
    <v-dialog v-model="props.isActive" max-width="340">
        <v-card title="Hapus Barang" prepend-icon="mdi-delete">
            <v-card-text>
                <h3 class="text-center">Apakah anda yakin akan menghapus {{ props.nama }}?</h3>
            </v-card-text>
            <template v-slot:actions>
                <v-btn class="ml-auto" text="Save" @click="deleteItem" color="primary">Delete</v-btn>
                <v-btn text="Close" @click="$emit('closeDialog')" color="error">Cancel</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>