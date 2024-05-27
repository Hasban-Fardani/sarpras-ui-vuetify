<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import { ref } from 'vue';

const step = ref(1)
const next = () => {
    if (step.value < 3) {
        step.value++
    } else {
        console.log('lebihh');
    }
}
const prev = () => {
    if (step.value > 1) {
        step.value--
    }
}
const disable = ref(false)
</script>
<template>
    <UserLayout>
        <h2 class="my-3">Form <span class="text-primary">Permintaan</span></h2>
        <v-stepper :items="['1. Isi Data', '2. Tambahkan Barang', '3. Review']" v-model="step">
            <template v-slot:item.1>
                <v-card title="Masukkan Data" flat>
                    <v-card-text>
                        <v-text-field label="Name"></v-text-field>
                        <v-text-field label="Message"></v-text-field>
                    </v-card-text>
                </v-card>
            </template>

            <template v-slot:item.2>
                <v-card title="Tambahkan Barang" flat>
                    <v-card-text></v-card-text>
                </v-card>
            </template>

            <template v-slot:item.3>
                <v-card title="Review" flat>
                    <v-card-text></v-card-text>
                </v-card>
            </template>

            <template v-slot:actions>
                <v-stepper-actions :disabled="disable" @click:next="next" @click:prev="prev"></v-stepper-actions>
            </template>
        </v-stepper>
    </UserLayout>
</template>