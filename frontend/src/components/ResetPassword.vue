<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const handleResetPassword = () => {
  // Handle password reset logic here
  console.log('Password reset requested for:', email.value)
}
</script>

<template>
  <div class="max-w-md mx-auto p-8 text-center">
    <div class="relative mb-[76px]">
      <a
        href="/login"
        class="absolute top-1/2 -translate-y-1/2 left-0 text-primary hover:text-primary/80 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </a>
      <div class="flex justify-center">
        <img src="@/assets/images/logo.svg" alt="LexArtes Logo" class="w-30">
      </div>
    </div>
    <h2 class="text-mobile-regular font-semi-bold mb-[24px]">Passwort zurücksetzen</h2>

    <form @submit.prevent="handleResetPassword" class="text-left">
      <input
        v-model="email"
        type="email"
        placeholder="E-Mail-Adresse"
        required
        class="w-full px-4 py-2 rounded-lg border border-gray-200 mb-8 focus:outline-none focus:border-primary placeholder:text-mobile-extralight placeholder:font-light placeholder:text-regular-font placeholder:text-gray-text"
      />

      <button
        type="submit"
        class="w-full bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary/90 transition-colors"
      >
        Passwort zurücksetzen
      </button>
    </form>
  </div>
</template>