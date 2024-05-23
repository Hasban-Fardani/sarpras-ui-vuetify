<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const user = useUserStore()
</script>
<template>
  <div>
    Todo: Landing page
  </div>
  <p v-if="user.isLogin">You loggen in as {{ user.data.name }}</p>
</template>