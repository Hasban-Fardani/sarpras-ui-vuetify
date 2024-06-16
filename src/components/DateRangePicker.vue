<script setup lang="ts">
import {  ref, watch } from 'vue';
import { useDate } from 'vuetify';

const startDate = ref(new Date())
const endDate = ref(startDate.value)
const date = useDate()
// const allowedEndDate = (date: Date) => date.getTime() >= startDate.value.getTime()
const allowedEndDate = (val: any) => {
    const selected = date.toISO(val).split('-')
    const selectedDate = parseInt(selected[2], 10)
    const selectedMonth = parseInt(selected[1], 10)
    return selectedDate >= startDate.value.getDate() && selectedMonth >= startDate.value.getMonth()
}

watch(() => startDate.value, (newVal) => {
    endDate.value = newVal
})
</script>
<template>
    <v-dialog activator="parent" max-width="350" class="d-flex justify-center align-center">
        <v-card>
            <v-card-text max-width="500">
                <v-date-picker title="Tanggal Awal" width="300" v-model="startDate"/>
                <v-date-picker title="Tanggal Akhir" width="300" v-model="endDate" :allowed-dates="allowedEndDate"/>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
