<script lang="ts" setup>
import router from '@/router';
import { useUserStore } from '@/stores/user';
import type { Credentials } from '@/types/credential';
import { ref } from 'vue';

const valid = ref(false)
const data = ref<Credentials>({
    username: '',
    password: '',
})
const rules = {
    username: [
        (v: String) => {
            if (!(v.length < 4)) return true

            return 'Username minimal 4 karakter'
        }
    ],
    password: [
        (v: String) => {
            if (!(v.length < 6)) return true

            return 'Password minimal 6 karakter'
        },
    ]
}

const user = useUserStore()

const login = async () => {
    let isLogin = await user.loginTMP(data.value)
    if (isLogin) {
        router.push('/' + user.data.role)
    }
    return
}
</script>
<template>
    <div class="w-100 d-flex justify-center align-center h-screen">
        <div class="w-100 w-md-50 d-flex flex-column justify-center align-center">
            <img src="/logo/icon.svg" width="100" alt="logo sarpras">
            <v-card class="mt-4 w-75">
                <v-card-title class="text-center">Login</v-card-title>
                <v-card-text class="text-center">masukkan data untuk login ke akun anda</v-card-text>
                <v-card-item>
                    <v-form v-model="valid" @submit.prevent="login">
                        <v-text-field label="Username" v-model="data.username" :rules="rules.username" />
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
</style>