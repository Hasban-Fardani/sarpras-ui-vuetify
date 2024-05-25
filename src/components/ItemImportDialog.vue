<template>
    <v-dialog activator="parent" max-width="340">
        <template v-slot:default="{ isActive }">
            <v-card title="Import Data" prepend-icon="mdi-import">
                <v-card-text>
                    <v-file-input label="input file"></v-file-input>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ml-auto" text="Import" @click="null"></v-btn>
                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>