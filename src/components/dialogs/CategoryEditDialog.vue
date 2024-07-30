<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import { useCategoryStore } from "@/stores/category";
import type { Category } from "@/types/category";
import { ref, watch } from "vue";

const props = defineProps<{
	categoryProp: Category;
	isActive: boolean;
}>();

const data = ref<Category>({
	id: props.categoryProp?.id || 0,
	name: props.categoryProp?.name || "",
} as Category);

watch(
	() => props.isActive,
	(newVal) => {
		if (newVal) {
			data.value = { ...props.categoryProp };
		}
	},
);

const saveCategory = () => {
	const category = useCategoryStore();
    category.updateCategory(data.value);
};
</script>

<template>
    <v-dialog v-model="props.isActive" max-width="400">
        <v-card title="Edit category" prepend-icon="mdi-pencil">
            <v-card-text>
                <v-text-field label="Name" v-model="data.name"></v-text-field>
            </v-card-text>
            <template v-slot:actions>
                <v-btn class="ml-auto" text="Save" @click="saveCategory(); $emit('closeDialog')" color="primary">Save</v-btn>
                <v-btn text="Close" @click="$emit('closeDialog')" color="error">Close</v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>
