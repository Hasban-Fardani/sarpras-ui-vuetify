<script setup lang="ts">

const props = defineProps<{
    id: number,
    name: string,
    type: string,
    isActive: boolean,
}>();
</script>

<template>
    <v-dialog v-model="props.isActive" max-width="400">
        <v-card :title="`Delete ${props.type}`" prepend-icon="mdi-delete">
            <v-card-text>
                <h3 class="text-center">
                    Apakah anda yakin akan menghapus {{ props.name }}?
                </h3>
            </v-card-text>
            <v-card-subtitle>
                <p class="text-center text-wrap">
                    Data yang di hapus tidak dapat dikembalikan, data terkait akan ikut dihapus
                </p>
            </v-card-subtitle>
            <template v-slot:actions>
                <v-btn 
                    class="ml-auto" 
                    color="error" 
                    @click="$emit('delete', props.id); $emit('closeDialog')" 
                    flat
                >
                    Delete
                </v-btn>
                <v-btn @click="$emit('closeDialog')">Cancel</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>