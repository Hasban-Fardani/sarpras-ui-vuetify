<script setup lang="ts">
import UserAddDialog from '@/components/user/UserAddDialog.vue';
import UserTable from '@/components/user/UserTable.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

</script>
<template>
    <AdminLayout>
        <div class="d-flex ga-2">
            <h2>Akun</h2>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-chip color="primary" append-icon="mdi-plus" variant="flat" v-bind="props">
                        Tambah
                    </v-chip>
                </template>
                <v-list>
                    <v-list-item append-icon="mdi-pencil-plus-outline" @click="null">
                        input
                        <user-add-dialog/>
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