<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const display = useDisplay()
const drawer = ref(!display.mobile.value)
const rail = ref(false)
const route = useRoute()
const routeList = route.path.split('/').splice(1)

const breadcrumbItems = routeList.map((r, i) => {
    return {
        title: r,
        href: '/' + routeList.slice(0, i + 1).join('/')
    }
})

const toggle = () => {
    if (display.mobile.value) {
        drawer.value = !drawer.value
    } else {
        rail.value = !rail.value
    }
}
</script>
<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer width="200" color="primary" v-model="drawer" :rail="rail"
                :permanent="!$vuetify.display.mobile" :location="$vuetify.display.mobile ? 'bottom' : undefined">
                <v-list density="compact" nav>
                    <v-list-item class="d-flex justify-center align-center gap-2"><img src="/logo/icon.svg"
                            :width="rail ? 25 : 50"></v-list-item>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" />
                    <v-list-item prepend-icon="mdi-package-variant-closed" title="Barang" value="barang" />
                    <v-list-item prepend-icon="mdi-account-group-outline" title="User" value="users" />
                </v-list>
            </v-navigation-drawer>

            <v-app-bar :order="1" elevation="1" flat>
                <template v-slot:prepend>
                    <v-app-bar-nav-icon @click.stop="toggle()"></v-app-bar-nav-icon>
                </template>
                <v-app-bar-title>
                    Sarana Prasarana
                </v-app-bar-title>
                <template v-slot:append>

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
    </v-card>
</template>
<style>
.v-main {
    min-height: 100vh;
}
</style>