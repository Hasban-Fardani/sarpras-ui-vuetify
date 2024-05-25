<script lang="ts" setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import ItemTable from '@/components/ItemTable.vue'
import ItemAddDialog from '@/components/ItemAddDialog.vue'
import ItemImportDialog from '@/components/ItemImportDialog.vue'
import { useItemStore } from '@/stores/item';
import { onMounted } from 'vue';

const item = useItemStore()
onMounted(() => {
    item.tmpData()
})
</script>
<template>
    <AdminLayout>
        <div class="d-flex w-100 justify-space-between">
            <div class="w-50">
                <v-text-field v-model="item.searchName" class="ma-2" density="compact" placeholder="Search name..."
                    hide-details />
            </div>
            <div class="d-flex ga-2">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" append-icon="mdi-plus" dark v-bind="props">
                            add
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item append-icon="mdi-pencil-plus-outline" @click="null">
                            <ItemAddDialog />
                            input
                        </v-list-item>
                        <v-list-item append-icon="mdi-import" @click="null">
                            <ItemImportDialog />
                            import
                        </v-list-item>
                        <v-list-item append-icon="mdi-export">
                            export
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
        <ItemTable />
    </AdminLayout>
</template>
