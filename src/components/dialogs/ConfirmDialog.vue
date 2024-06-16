<script setup lang="ts">

const props = defineProps<{
    id: number,
    title: string,
    isActive: boolean,
    confirmMessage: string,
    confirmMessageSub: string,
}>();
</script>

<template>
    <v-dialog v-model="props.isActive" max-width="400">
        <v-card :title="title" prepend-icon="mdi-delete">
            <v-card-text>
                <h3 class="text-center">{{ confirmMessage }}</h3>
            </v-card-text>
            <v-card-subtitle>
                <p class="text-center text-wrap">
                    {{ confirmMessageSub }}
                </p>
            </v-card-subtitle>
            <template v-slot:actions>
                <v-btn class="ml-auto" @click="$emit('confirm', props.id)" color="error" flat>Delete</v-btn>
                <v-btn @click="$emit('closeDialog')">Cancel</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>