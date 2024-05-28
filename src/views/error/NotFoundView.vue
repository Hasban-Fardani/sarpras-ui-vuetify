<script lang="ts" setup>
</script>
<template>
    <div class="d-flex flex-column w-100 h-screen justify-center align-center">
        <v-empty-state headline="Whoops, 404" title="Halaman Tidak Ditemukan"
            text="halaman yang anda tuju tidak ditemukan" image="/logo/icon-192x192.png">
            <v-btn @click="$router.go(-1)">Kembali</v-btn>
        </v-empty-state>
    </div>
</template>