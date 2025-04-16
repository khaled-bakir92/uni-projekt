<script setup lang="ts">
interface Props {
  title: string
  description: string
  subject: string
  progress: number
  tag?: 'LexMea' | 'Professor'
}

defineProps<Props>()
</script>

<template>
  <div class="rounded-[10px] border border-card.border p-4 relative">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-4 h-4 rounded-full bg-[#4A90E2]"></div>
      <span class="text-sm text-gray-600">{{ subject }}</span>
    </div>

    <div v-if="tag" class="absolute top-4 right-4">
      <span class="px-4 py-1 rounded-lg bg-gray-100 text-sm font-medium" :class="{
        'text-gray-700': tag === 'LexMea',
        'text-gray-600': tag === 'Professor',
        'text-gray-600': tag === 'Custom',
        
      }">
        {{ tag }}
      </span>
    </div>
    
    <h3 class="text-mobile-semibold font-bold mb-2">{{ title }}</h3>
    <p class="text-mobile-light text-gray-600 mb-8">{{ description }}</p>
    
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-mobile-light font-medium">Fortschritt</span>
        <span class="text-mobile-light text-gray-600">{{ progress }}%</span>
      </div>
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
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

    <div class="flex justify-between items-center border-t border-gray-100 pt-4">
      <button class="flex items-center gap-2 px-5 py-2 border border-primary  rounded-lg hover:bg-gray-50 transition-colors">
        <span class="text-lg">📚</span>
        <span class="text-mobile-light font-medium">Study</span>
      </button>
      <button class="text-red-500 hover:text-red-600">
        <span class="text-lg">🗑️</span>
      </button>
    </div>
  </div>
</template>