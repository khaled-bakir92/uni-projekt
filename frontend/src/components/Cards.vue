<script setup lang="ts">
import CardStack from './CardStack.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
  { name: 'ÜBERSICHT', path: '/overview' },
  { name: 'KARTEN', path: '/cards' },
  { name: 'FREUNDE', path: '/friends' }
]

const cardStacks = [
  {
    title: 'BGB Allgemeiner Teil',
    subject: 'civil - Allgemeiner Teil',
    description: 'Grundlegende Konzepte des BGB',
    progress: 75,
    tag: 'LexMea' as const
  },
  {
    title: 'BGB Allgemeiner Teil',
    subject: 'criminal ',
    description: 'Grundlegende Konzepte des BGB',
    progress: 45,
    tag: 'Professor' as const
  },
  {
    title: 'BGB Allgemeiner Teil',
    subject: 'Constitutional',
    description: 'Grundlegende Konzepte des BGB',
    progress: 30,
    tag: 'Custom' as const
  },
  {
    title: 'BGB Allgemeiner Teil',
    subject: 'Constitutional',
    description: 'Grundlegende Konzepte des BGB',
    progress: 90,
    tag: 'LexMea' as const
  }
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-6">
      <nav class="mb-8 flex justify-center">
        <ul class="flex gap-4">
          <li v-for="tab in tabs" :key="tab.name">
            <router-link
              :to="tab.path"
              class="px-[20px] py-[10px] rounded-full transition-colors font-semi-bold text-mobile-extralight tracking-wider"
              :class="[
                route.path === tab.path
                  ? 'bg-[#E4E8EC] text-[#32505A] filter drop-shadow-custom'
                  : 'bg-primary text-white hover:opacity-90 filter drop-shadow-custom'
              ]"
            >
              {{ tab.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="mb-8">
        <h2 class="text-mobile-bold font-bold text-regular-font mb-2">Karteikartenstapel</h2>
        <p class="text-regular-font text-mobile-light ">Verwalte deine Stapel oder erstelle neue</p>
      </div>

      <button class="mb-8 flex items-center gap-1 px-2 py-2 bg-primary border-2 border-gray-200 rounded-lg">
        <span class="text-font-white text-mobile-semibold font-semibold">+</span>
        <span class="text-font-white text-mobile-extralight font-semibold">Stapel hinzufügen</span>
      </button>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CardStack
          v-for="stack in cardStacks"
          :key="stack.title"
          v-bind="stack"
        />
      </div>
    </div>
  </div>
</template>