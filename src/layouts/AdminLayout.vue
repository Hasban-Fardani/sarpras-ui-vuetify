<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'

const display = useDisplay()
const drawer = ref(!display.mobile.value)
const rail = ref(false)
const route = useRoute()
const routeList = route.path.split('/').splice(1)
const user = useUserStore()

const breadcrumbItems = routeList.map((r, i) => {
    return {
        title: r,
        to: '/' + routeList.slice(0, i + 1).join('/')
    }
})

const toggle = () => {
    if (display.mobile.value) {
        drawer.value = !drawer.value
    } else {
        rail.value = !rail.value
    }
}

const logout = async () => {
    // await user.logout()
    await user.clear()

    router.push('/auth/login')
    location.reload()
}
</script>

<template>
    <v-layout>
        <v-navigation-drawer width="250" color="primary" v-model="drawer" :rail="rail"
            :permanent="!$vuetify.display.mobile" :location="$vuetify.display.mobile ? 'bottom' : undefined">
            <v-list density="compact" nav>
                <v-list-item class="d-flex justify-center align-center gap-2" v-show="!display.mobile" to="/"><img
                        src="/logo/icon.svg" :width="rail ? 25 : 50" /></v-list-item>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"
                    to="/admin/dashboard" />
                <v-list-item prepend-icon="mdi-file-chart" title="Laporan" value="report"
                    to="/admin/laporan" />
                <v-divider/>
                <v-list-item prepend-icon="mdi-tag-multiple" title="Kategori" value="kategori" to="/admin/kategori" />
                <v-list-item to="/admin/items" prepend-icon="mdi-view-list" title="Barang" value="items" />
                <v-list-item to="/admin/barang-masuk" prepend-icon="mdi-arrow-down-bold-hexagon-outline"
                    title="Barang Masuk" value="item-in" />
                <v-list-item to="/admin/barang-keluar" prepend-icon="mdi-logout" title="Barang Keluar"
                    value="item-out" />
                <v-list-item to="/admin/items/so" prepend-icon="mdi-format-list-bulleted-square" title="Stock Opname"
                    value="stock-opname" />
                <v-list-item prepend-icon="mdi-file-document-edit-outline" title="Pengadaan" value="pengadaan"
                    to="/admin/pengadaan" />
                <v-list-item prepend-icon="mdi-clipboard-text-outline" title="Permintaan" value="permintaan" to="/admin/permintaan" />
                <v-list-item prepend-icon="mdi-account-group-outline" title="User" value="users" to="/admin/users" />
            </v-list>
            <template v-slot:append> </template>
        </v-navigation-drawer>

        <v-app-bar :order="1" elevation="1" flat>
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click.stop="toggle()"></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title> Sarana Prasarana </v-app-bar-title>
            <template v-slot:append>
                <v-menu transition="scale-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" elevation="1" v-bind="props" icon="mdi-account"></v-btn>
                    </template>

                    <v-list>
                        <v-list-item> Hello {{ user.data.nama }} </v-list-item>
                        <v-divider />
                        <v-list-item to="/profile"> Akun </v-list-item>
                        <v-list-item @click="logout()"> Logout </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-app-bar>
        <v-main>
            <v-breadcrumbs :items="breadcrumbItems">
                <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
            </v-breadcrumbs>
            <div class="px-4">
                <slot />
            </div>
        </v-main>
    </v-layout>
</template>

<style>
.v-main {
    min-height: 100vh;
}

.no-indent {
    --indent-padding: -8px;
    padding-inline-start: 0;
}
</style>
