<script setup lang="ts">
const saveUser = () => {
    
}
</script>
<template>
    <v-dialog activator="parent" max-width="400">
        <template v-slot:default="{ isActive }">
        <v-card title="Tambah user" prepend-icon="mdi-plus">
            <v-card-text>
                <v-text-field label="Nama"></v-text-field>
                <div class="d-flex ga-3">
                    <v-text-field label="Unit"></v-text-field>
                    <v-text-field label="Role"></v-text-field>
                </div>
                <v-text-field label="NIP"></v-text-field>
                <v-text-field label="Password"></v-text-field>
            </v-card-text>
            <template v-slot:actions>
                <v-btn class="ml-auto" text="Save" @click="saveUser" color="primary">Save</v-btn>
                <v-btn text="Close" @click="isActive.value = false;" color="error">Close</v-btn>
            </template>
        </v-card>
        </template>
    </v-dialog>
</template>