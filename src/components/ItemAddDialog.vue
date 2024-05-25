<template>
    <v-dialog activator="parent" max-width="340">
        <template v-slot:default="{ isActive }">
            <v-card title="Tambah Barang" prepend-icon="mdi-plus">
                <v-card-text>
                    <v-text-field label="Name"></v-text-field>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ml-auto" text="Save" @click="null" color="primary"></v-btn>
                    <v-btn text="Close" @click="isActive.value = false" color="error"></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>
</template>