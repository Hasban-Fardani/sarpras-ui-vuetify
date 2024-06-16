<script setup lang="ts">
import { ref } from 'vue';
import {useUserStore} from '@/stores/user'
import { items as fakeItem } from '@/stores/fake/item';

const selected = ref()
const user = useUserStore()
const nama = ref(user.data.nama)
const stok = ref(0)
const keterangan = ref('')
const saveSO = () => {
    // Todo: save SO
}
</script>
<template>
    <v-dialog activator="parent" max-width="400">
        <template v-slot:default="{ isActive }">
            <v-card title="Buat SO" prepend-icon="mdi-plus">
                <v-card-text>
                    <v-text-field label="Petugas" v-model="nama"></v-text-field>
                    <v-autocomplete label="Barang" item-title="nama" item-value="id" :items="fakeItem"
                        v-model="selected" required>
                        <template v-slot:item="{ props, item }">
                            <v-list-item v-bind="props" :title="item.raw.nama" />
                        </template>
                    </v-autocomplete>
                    <v-text-field label="Stok Saat ini" v-model="stok" disabled></v-text-field>
                    <v-number-input label="Jumlah SO"></v-number-input>
                    <v-select label="perihal" :items="['pengurangan', 'penambahan']"></v-select>
                    <v-text-field label="Keterangan" v-model="keterangan"></v-text-field>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ml-auto" text="Save" @click="saveSO" color="primary"></v-btn>
                    <v-btn text="Close" @click="isActive.value = false" color="error"></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>