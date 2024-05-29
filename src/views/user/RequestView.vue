<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';
import { items as fakeItem } from '@/stores/fake/item';
import { useUserStore } from '@/stores/user';
import { ref, watch } from 'vue';

const user = useUserStore()
const step = ref(1)
const nextText = ref('lanjut')
const next = () => {
    if (step.value < 3) {
        step.value += 1;
    }
}
const prev = () => {
    if (step.value > 1) {
        step.value--
    }
}

type Item = {
    id: number
    nama: string
    jumlah?: number
}

const selected = ref<number[]>([])
const selectedItem = ref<Item[]>([])
const items = ref(fakeItem)
const unit = ref(user.data.unit)
const disable = ref<boolean | string>(false)

watch(() => step.value, (newVal) => {
    if (newVal === 3) {
        nextText.value = 'kirim'
        disable.value = 'next'
    } else {
        nextText.value = 'lanjut'
        disable.value = false
    }
})

watch(() => selected.value, (newVal) => {
    selectedItem.value = items.value.filter((i) => newVal.includes(i.id)).map((i) => {
        return { id: i.id, nama: i.nama }
    })
})
</script>
<template>
    <UserLayout>
        <v-btn>
            Form Permintaan
            <v-dialog activator="parent">
                <template v-slot:default="{ isActive }">

                    <v-stepper :items="['Isi Data', 'Jumlah Barang', '3. Review']" v-model="step">
                        <template v-slot:item.1>
                            <v-card title="Isi Data" flat>
                                <v-card-text>
                                    <v-text-field label="Unit" v-model="unit"></v-text-field>
                                    <v-text-field label="Pesan"></v-text-field>

                                    <v-autocomplete chips label="Barang" item-title="nama" item-value="id"
                                        :items="items" v-model="selected" multiple closable-chips>
                                        <template v-slot:chip="{ props, item }">
                                            <v-chip v-bind="props" :text="item.raw.nama"
                                                :prepend-avatar="item.raw.gambar" />
                                        </template>
                                        <template v-slot:item="{ props, item }">
                                            <v-list-item v-bind="props" :title="item.raw.nama" />
                                        </template>
                                    </v-autocomplete>
                                </v-card-text>
                            </v-card>
                        </template>

                        <template v-slot:item.2>
                            <v-card title="Jumlah Barang" flat>
                                <v-card-text>
                                    <div class="d-flex flex-wrap justify-start align-start">
                                        <v-col v-for="item in selectedItem" :key="item.id">

                                            <v-number-input :reverse="false" controlVariant="split" :label="item.nama"
                                                :hideInput="false" variant="outlined" class="input-number"
                                                v-model="item.jumlah" :min="1">
                                            </v-number-input>
                                        </v-col>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </template>

                        <template v-slot:item.3>
                            <v-card title="Review" flat>
                                <v-card-text>
                                    {{ selectedItem }}
                                </v-card-text>
                            </v-card>
                        </template>

                        <template v-slot:actions>
                            <v-stepper-actions :disabled="disable" @click:next="next" @click:prev="prev"
                                :nextText="nextText" prevText="kembali"></v-stepper-actions>
                        </template>
                    </v-stepper>

                </template>
            </v-dialog>
        </v-btn>
    </UserLayout>
</template>
<style scoped>
.input-number {
    width: 200px;
}
</style>