<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import { ref } from 'vue';

const tab = ref(null)
</script>
<template>
    <admin-layout>
    <v-tabs
      v-model="tab"
      bg-color="primary"
      
    >
      <v-tab value="one">Barang Masuk/Keluar</v-tab>
      <v-tab value="two">stock Barang</v-tab>
    </v-tabs>

      <v-tabs-window v-model="tab" class="mt-4">
        <v-tabs-window-item value="one">
          One
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          Two
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          Three
        </v-tabs-window-item>
      </v-tabs-window>
    </admin-layout>
</template>