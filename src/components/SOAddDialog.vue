<script setup lang="ts">
import { ref } from 'vue';
import {useUserStore} from '@/stores/user'
import type { Item } from '@/types/item';
import { watch } from 'vue';


const props = defineProps<{
    itemProp: Item,
    isActive: boolean
}>();


const data = ref<Item>({
    id: props.itemProp?.id || 0,
    nama: props.itemProp?.nama || '',
    stok: props.itemProp?.stok || 0
});

const user = useUserStore()
const nama = ref(user.data.nama)
const stok = ref(data.value.stok)
const saveSO = () => {
    // Todo: save SO
}

watch(() => props.isActive, (newVal) => {
    if (newVal) {
        data.value = { ...props.itemProp };
    }
});
</script>
<template>
    <v-dialog v-model="props.isActive" max-width="340">
        <template v-slot:default="{ isActive }">
            <v-card title="Tambah Kategori" prepend-icon="mdi-plus">
                <v-card-text>
                    <v-text-field label="Petugas" v-model="nama"></v-text-field>
                    <v-text-field label="Stok" v-model="stok"></v-text-field>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ml-auto" text="Save" @click="saveSO" color="primary"></v-btn>
                    <v-btn text="Close" @click="$emit('closeDialog')" color="error"></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>