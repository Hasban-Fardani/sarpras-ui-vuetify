<script setup lang="ts">
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
    name: string
    jumlah?: number
}

const selected = ref<number[]>([])
const selectedItem = ref<Item[]>([])
const items = ref(fakeItem)
const unit = ref(user.data.unit)
const pesan = ref('')
const disable = ref<boolean | "next" | "prev" | undefined>(false)

const submit = async () => {

}

watch(() => step.value, (newVal) => {
    if (newVal == 2 && selectedItem.value.length == 0) {
        step.value = 1
    }

    if (newVal === 3) {
        nextText.value = 'kirim'
    } else {
        nextText.value = 'lanjut'
    }

    if (newVal === 4) {
        submit()
    }
})

watch(() => selected.value, (newVal) => {
    selectedItem.value = items.value.filter((i) => newVal.includes(i.id)).map((i) => {
        return { id: i.id, name: i.name }
    })
})
</script>
<template>

    <v-dialog activator="parent">
        <template v-slot:default="{ isActive }">
            <v-stepper :items="['Isi Data', 'Jumlah Barang', '3. Review']" v-model="step">
                <template v-slot:item.1>
                    <v-card title="Isi Data" subtitle="setiap form wajib diisi" flat>
                        <v-card-text>
                            <v-text-field label="Unit" v-model="unit" required></v-text-field>
                            <v-text-field label="Pesan" v-model="pesan"></v-text-field>

                            <v-autocomplete chips label="Barang" item-title="name" item-value="id" :items="items"
                                v-model="selected" multiple closable-chips required>
                                <template v-slot:chip="{ props, item }">
                                    <v-chip v-bind="props" :text="item.raw.name" :prepend-avatar="item.raw.gambar" />
                                </template>
                                <template v-slot:item="{ props, item }">
                                    <v-list-item v-bind="props" :title="item.raw.name" />
                                </template>
                            </v-autocomplete>
                        </v-card-text>
                    </v-card>
                </template>

                <template v-slot:item.2>
                    <v-card title="Jumlah Barang" subtitle="masukkan jumlah untuk setiap barang" flat>
                        <v-card-text>
                            <div class="d-flex flex-wrap ga-2">
                            
                                    <v-number-input v-for="item in selectedItem" :key="item.id" :reverse="false" controlVariant="split" :label="item.name"
                                        :hideInput="false" variant="outlined" class="input-number" v-model="item.jumlah"
                                        :min="1" required >
                                    </v-number-input>
                            </div>
                        </v-card-text>
                    </v-card>
                </template>

                <template v-slot:item.3>
                    <v-card flat>
                        <v-card-title>Review</v-card-title>
                        <v-card-text>
                            <div>
                                <h5>Pesan</h5>
                                <p class="text-caption">{{ pesan }}</p>
                            </div>
                            <h5>Barang:</h5>
                            <v-data-table :items="selectedItem">

                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </template>

                <template v-slot:actions>
                    <v-stepper-actions :disabled="disable" @click:next="next" @click:prev="prev" :nextText="nextText"
                        prevText="kembali"></v-stepper-actions>
                </template>
            </v-stepper>

        </template>
    </v-dialog>
</template>
<style scoped>
.input-number {
    max-width: 200px;
    min-width: 100px;
}
</style>