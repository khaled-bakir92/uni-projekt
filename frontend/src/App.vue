<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Header.vue'

const route = useRoute()
const router = useRouter()

const isAuthPage = (path: string) => {
  return ['/login', '/', '/reset-password'].includes(path)
}

router.beforeEach((to, from, next) => {
  next()
})
</script>

<template>
  <Header v-if="!isAuthPage(route.path)" />
  <router-view></router-view>
</template>