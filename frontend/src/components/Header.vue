<script setup lang="ts">
import NotificationIcon from './icons/NotificationIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
</script>

<template>
  <header class="bg-[#03364D] shadow-md mx-auto px-4 py-4">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <img src="@/assets/images/logo.svg" alt="LexArtes Logo" class="w-20">
    </div>
    <div class="flex gap-4 items-center">
      <button class="text-white hover:text-white/80">
        <NotificationIcon />
      </button>
      <button class="text-white hover:text-white/80">
        <ProfileIcon />
      </button>
    </div>
  </div>
</header>
</template>