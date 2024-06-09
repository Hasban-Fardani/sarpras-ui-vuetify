<script setup lang="ts">
import { ref } from 'vue';
import {useUserStore} from '@/stores/user'
import { watch } from 'vue';
import type { Item } from '@/types/item';


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
const keterangan = ref('')
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
        <v-card title="Buat SO" prepend-icon="mdi-plus">
            <v-card-text>
                <v-text-field label="Petugas" v-model="nama"></v-text-field>
                <v-text-field label="Stok Saat ini" v-model="stok" disabled></v-text-field>
                <v-number-input label="Jumlah SO"></v-number-input>
                <v-select label="perihal" :items="['pengurangan', 'penambahan']"></v-select>
                <v-text-field label="Keterangan" v-model="keterangan"></v-text-field>
            </v-card-text>
            <template v-slot:actions>
                <v-btn class="ml-auto" text="Save" @click="saveSO" color="primary"></v-btn>
                <v-btn text="Close" @click="$emit('closeDialog')" color="error"></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>