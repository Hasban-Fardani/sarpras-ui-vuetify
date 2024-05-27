<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
</script>
<template>
    <UserLayout>
        <h2 class="my-3">Form <span class="text-primary">Pengajuan</span></h2>
        <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
            <template v-slot:item.1>
                <v-card title="Step One" flat>...</v-card>
            </template>

            <template v-slot:item.2>
                <v-card title="Step Two" flat>...</v-card>
            </template>

            <template v-slot:item.3>
                <v-card title="Step Three" flat>...</v-card>
            </template>
        </v-stepper>
    </UserLayout>
</template>