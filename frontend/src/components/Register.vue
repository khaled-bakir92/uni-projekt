<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const togglePassword = (field: 'password' | 'confirm') => {
  if (field === 'password') {
    showPassword.value = !showPassword.value
  } else {
    showConfirmPassword.value = !showConfirmPassword.value
  }
}

const handleRegister = () => {

  console.log('Registration submitted:', { email: email.value, password: password.value })
}
</script>

<template>
  <div class="max-w-md mx-auto p-8 text-center">
    <div class="flex justify-center">
      <img src="@/assets/images/logo.svg" alt="LexArtes Logo" class="w-30 mb-[30px] mt-[100px] ">
    </div>
    <h2 class=" text-mobile-regular font-semi-bold mb-[24px]">Jetzt kostenfrei registrieren</h2>

    <form @submit.prevent="handleRegister" class="text-left">
      <input
        v-model="email"
        type="email"
        placeholder="E-Mail-Adresse"
        required
        class="w-full px-4 py-2 rounded-lg border  border-gray-200 mb-4 focus:outline-none focus:border-primary placeholder:text-mobile-extralight placeholder:font-light placeholder:text-regular-font placeholder:text-gray-text"
      />

      <div class="relative mb-4">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          required
          class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary placeholder:text-mobile-extralight placeholder:font-light placeholder:text-regular-font placeholder:text-gray-text"
        />
        <button
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-text bg-transparent p-0 w-auto"
          @click="togglePassword('password')"
        >
          {{ showPassword ? '👁️' : '🕶️' }}
        </button>
      </div>

      <div class="relative mb-4">
        <input
          v-model="confirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          placeholder="Passwort wiederholen"
          required
          class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary placeholder:text-mobile-extralight placeholder:font-light placeholder:text-regular-font placeholder:text-gray-text"
        />
        <button
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-text bg-transparent p-0 w-auto"
          @click="togglePassword('confirm')"
        >
          {{ showConfirmPassword ? '👁️' : '🕶️' }}
        </button>
      </div>

      <p class="text-mobile-extralight font-light text-regular-font mb-8">
        Verwende 9 oder mehr Zeichen mit einer Mischung aus Buchstaben, Ziffern und Symbolen.
      </p>
      
      <div class="flex gap-4">
        <a
          href="/login"
          class="flex-1 border-2 border-primary/90 text-primary rounded-lg px-4 py-2 text-center hover:bg-primary/10 transition-colors"
        >
          Login
        </a>
        <button
          type="submit"
          class="flex-1 bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary/90 transition-colors"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>