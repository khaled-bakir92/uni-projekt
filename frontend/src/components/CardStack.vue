<script setup lang="ts">
interface Props {
  title: string
  description: string
  subject: string
  progress: number
  tag?: 'LexMea' | 'Professor' | 'Custom'   // ←  'Custom' ergänzt
}

defineProps<Props>()
</script>

<template>
  <div class="relative rounded-[10px] border border-card.border p-4">
    <div class="mb-4 flex items-center gap-3">
      <div class="h-4 w-4 rounded-full bg-[#4A90E2]"></div>
      <span class="text-sm text-gray-600">{{ subject }}</span>
    </div>

    <div v-if="tag" class="absolute right-4 top-4">
      <span
        class="rounded-lg bg-gray-100 px-4 py-1 text-sm font-medium"
        :class="{
          'text-gray-700': tag === 'LexMea',
          'text-gray-600': tag === 'Professor' || tag === 'Custom'   /* ←  Anführungszeichen + Logik */
        }"
      >
        {{ tag }}
      </span>
    </div>

    <h3 class="mb-2 font-bold text-mobile-semibold">{{ title }}</h3>
    <p class="mb-8 text-mobile-light text-gray-600">{{ description }}</p>

    <div class="mb-6">
      <div class="mb-2 flex items-center justify-between">
        <span class="text-mobile-light font-medium">Fortschritt</span>
        <span class="text-mobile-light text-gray-600">{{ progress }}%</span>
      </div>
      <div class="h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          class="h-full rounded-full transition-all"
          :style="{ width: `${progress}%` }"
          :class="{
            'bg-[#C85200]': progress < 33,
            'bg-[#E48646]': progress >= 33 && progress < 66,
            'bg-[#6B8EA4]': progress >= 66 && progress < 80,
            'bg-[#34A372]': progress >= 80 && progress <= 100
          }"
        ></div>
      </div>
    </div>

    <div class="flex items-center justify-between border-t border-gray-100 pt-4">
      <button
        class="flex items-center gap-2 rounded-lg border border-primary px-5 py-2 transition-colors hover:bg-gray-50"
      >
        <span class="text-lg">📚</span>
        <span class="text-mobile-light font-medium">Study</span>
      </button>
      <button class="text-red-500 transition-colors hover:text-red-600">
        <span class="text-lg">🗑️</span>
      </button>
    </div>
  </div>
</template>
