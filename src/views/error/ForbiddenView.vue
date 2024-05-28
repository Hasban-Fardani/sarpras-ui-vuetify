<template>
    <div class="d-flex flex-column w-100 h-screen justify-center align-center">
        <v-empty-state headline="Forbidden, 403" title="Tidak Memiliki Akses"
            text="anda tidak memiliki akses untuk halaman yang anda tuju" image="/logo/icon-192x192.png">
            <v-btn @click="$router.go(-1)">Kembali</v-btn>
        </v-empty-state>
    </div>
</template>