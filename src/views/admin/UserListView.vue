<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import UserTable from '@/components/UserTable.vue'
</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Akun</h2>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-chip color="primary" append-icon="mdi-plus" dark v-bind="props">
                        Tambah
                    </v-chip>
                </template>
                <v-list>
                    <v-list-item append-icon="mdi-pencil-plus-outline" @click="null">
                        input
                    </v-list-item>
                    <v-list-item append-icon="mdi-import" @click="null">
                        import
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <UserTable />
    </AdminLayout>
</template>