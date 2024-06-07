<script setup lang="ts">
import router from '@/router';
import { useUserStore } from '@/stores/user';

const user = useUserStore()
const logout = async () => {
    // await user.logout()
    await user.clear()

    router.push('/auth/login')
    location.reload()
}
</script>
<template>
    <v-layout>
        <v-app-bar :order="1" elevation="1" color="primary" class="mx-auto" flat>
            <v-app-bar-title>
                Sarana Prasarana
            </v-app-bar-title>
            <div class="v-app-bar-center d-none d-md-flex">
                <div class="nav-item">
                    <v-btn to="/user/home" prepend-icon="mdi-home">Home</v-btn>
                    <v-btn to="/user/pengadaan" prepend-icon="mdi-playlist-edit">Pengadaan</v-btn>
                    <v-btn to="/user/permintaan" prepend-icon="mdi-forum">Permintaan</v-btn>
                </div>
            </div>
            <template v-slot:append>
                <v-menu transition="scale-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" class="bg-white" elevation="2" v-bind="props" icon="mdi-account"></v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            Hello {{ user.data.nama }}
                        </v-list-item>
                        <v-divider />
                        <v-list-item to="/profile">
                            Akun
                        </v-list-item>
                        <v-list-item @click="logout()">
                            Logout
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
            <template v-slot:extension v-if="$vuetify.display.mobile">
                <v-tabs align-tabs="center" center-active>
                    <v-tab to="/user/home" prepend-icon="mdi-home">Home</v-tab>
                    <v-tab to="/user/pengadaan" prepend-icon="mdi-playlist-edit">Pengadaan</v-tab>
                    <v-tab to="/user/permintaan" prepend-icon="mdi-forum">Permintaan</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-main>
            <div class="pa-4">
                <slot />
            </div>
        </v-main>
    </v-layout>
</template>
<style scoped>
.v-app-bar-center {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-app-bar-title {
    flex: none;
}

.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>