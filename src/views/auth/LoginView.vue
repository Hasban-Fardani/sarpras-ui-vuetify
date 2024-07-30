<script lang="ts" setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';
import type { Credentials } from '@/types/credential';
import router from '@/router';

const alertMessage = ref('')
const showAlert = ref(false)
const valid = ref(false)
const data = ref<Credentials>({
    nip: '',
    password: '',
})
const rules = {
    nip: [
        (v: string) => {
            if (!(v.length < 4)) return true

            return 'NIP minimal 4 karakter'
        }
    ],
    password: [
        (v: string) => {
            if (!(v.length < 6)) return true

            return 'Password minimal 6 karakter'
        },
    ]
}

const user = useUserStore()
const login = async () => {
    const message = await user.login(data.value)
    if (message === 'login success') {
        console.log('sini', user.data);

        switch (user.data.role) {
            case 'admin':
                router.push('/admin/dashboard')
                location.reload()
                return
            case 'unit':
                router.push('/user/home')
                location.reload()
                return
            case 'pengawas':
                router.push('/admin/dashboard')
                location.reload()
                return
            default:
                return;
        }
    }
    // show and hide alert
    showAlert.value = true
    alertMessage.value = message
    setTimeout(() => {
        alertMessage.value = ''
        showAlert.value = false
    }, 3000)
    return
}
</script>
<template>
    <v-alert :text="alertMessage" v-model="showAlert" transition="slide-y-transition" type="error" closable ></v-alert>
    <div class="w-100 d-flex justify-center align-center h-screen base">
        <div class="w-100 w-md-50 d-flex flex-column justify-center align-center">
            <img src="/logo/icon.svg" width="100" alt="logo sarpras">
            <v-card class="mt-4 w-75">
                <v-card-title class="text-center">Login</v-card-title>
                <v-card-text class="text-center">masukkan data untuk login ke akun anda</v-card-text>
                <v-card-item>
                    <v-form v-model="valid" @submit.prevent="login">
                        <v-text-field label="NIP" v-model="data.nip" :rules="rules.nip" />
                        <v-text-field label="Password" v-model="data.password" :rules="rules.password"
                            type="password" />
                        <v-btn type="submit" color="primary" class="mt-2">Login</v-btn>
                    </v-form>
                </v-card-item>
            </v-card>
        </div>
    </div>
</template>
<style scoped>
.v-card {
    border: solid 1px;
}

.base {
    background-color: rgb(248, 248, 255);
}
</style>