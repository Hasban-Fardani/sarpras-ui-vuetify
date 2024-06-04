<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import { ref,  watch } from 'vue';
import type { User } from '@/types/user';

const props = defineProps<{
    userProp: User,
    isActive: boolean
}>();

// const image = ref<File | null>(null);
// const imageUrl = ref<string | null>(null);

const data = ref<User>({} as User);

watch(() => props.isActive, (newVal) => {
    if (newVal) {
        data.value = { ...props.userProp };
    }
});

// const uploadImage = (event: Event) => {
//     const target = event.target as HTMLInputElement;
//     if (target.files && target.files.length > 0) {
//         image.value = target.files[0];
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             imageUrl.value = e.target?.result as string;
//         };
//         reader.readAsDataURL(image.value);
//     }
// };

const saveUser = () => {
    // Todo: save user logic
};
</script>

<template>
    <v-dialog v-model="props.isActive" max-width="340">
        <v-card title="Edit Barang" prepend-icon="mdi-pencil">
            <v-card-text>
                <v-text-field label="Nama" v-model="data.nama"></v-text-field>
                <v-text-field label="Unit" v-model="data.unit"></v-text-field>
                <v-text-field label="Role" v-model="data.role"></v-text-field>
            </v-card-text>
            <template v-slot:actions>
                <v-btn class="ml-auto" text="Save" @click="saveUser" color="primary">Save</v-btn>
                <v-btn text="Close" @click="$emit('closeDialog')" color="error">Close</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.img-preview {
    max-width: 300px;
}
</style>
