<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import UserLayout from '@/layouts/UserLayout.vue';
import { useUserStore } from '@/stores/user';

const user = useUserStore()
const CLayout = user.data.role === 'admin' ? AdminLayout : UserLayout
</script>
<template>
    <c-layout>
        <v-card class="mt-4">
            <v-card-text>
                <div class="d-flex justify-center align-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user avatar" width="200px">
                </div>
                <h3 class="text-center mt-2">Profile</h3>

                <v-row class="mt-3">
                    <v-col>
                        <v-text-field label="Name" v-model="user.data.nama"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="NIP" v-model="user.data.nip"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Role" disabled v-model="user.data.role"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Unit" disabled v-model="user.data.unit"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Password" type="password" value="*****" disabled></v-text-field>    
                    </v-col>
                </v-row>
                <v-btn color="primary">
                    Save
                </v-btn>
            </v-card-text>
        </v-card>
    </c-layout>
</template>