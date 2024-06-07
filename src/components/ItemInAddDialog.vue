<script setup lang="ts">
import ItemAddDialog from './ItemAddDialog.vue';
import { items as fakeItem } from '@/stores/fake/item'
import { ref } from 'vue';

const selectedItem = ref('')
const saveItemIn = () => {
    // Todo: save item in
}
</script>
<template>
    <v-dialog activator="parent" max-width="340">
        <template v-slot:default="{ isActive }">
            <v-card title="Tambah Barang Masuk" prepend-icon="mdi-plus">
                <v-card-text>
                    <v-btn color="primary" size="small" class="mb-2">
                        barang baru?
                        <item-add-dialog/>
                    </v-btn>
                    <v-file-input label="input dokumen berita acara" class="mt-2"/>
                    <v-textarea label="deskripsi"></v-textarea>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ml-auto" text="Save" @click="saveItemIn" color="primary"></v-btn>
                    <v-btn text="Close" @click="isActive.value = false;" color="error"></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>