<script lang="ts" setup>
import { computed } from 'vue';

import type { flagVariant } from '../../types';

const props = withDefaults(defineProps<{
  variant?: flagVariant,
  title: string,
  description?: string,
}>(), {
  variant: 'informative',
  description: ''
})

const flagVariants = computed(() => {
  const variant: Record<flagVariant, {
    style: {
      card: string
      icon: string
      title: string
      description: string
    }
    icon: string
  }> = {
    informative: {
      style: {
        card: 'border-slate-200 bg-white',
        icon: 'text-gray-500',
        title: 'text-gray-900',
        description: 'text-gray-600',
      },
      icon: 'info',
    },
    success: {
      style: {
        card: 'border-slate-200 bg-white',
        icon: 'text-emerald-500',
        title: 'text-gray-900',
        description: 'text-gray-600',
      },
      icon: 'check_circle',
    },
    warning: {
      style: {
        card: 'border-transparent bg-amber-300',
        icon: 'text-zinc-900',
        title: 'text-zinc-900',
        description: 'text-zinc-900',
      },
      icon: 'warning',
    },
    error: {
      style: {
        card: 'border-transparent bg-red-700',
        icon: 'text-zinc-50',
        title: 'text-zinc-50',
        description: 'text-zinc-50',
      },
      icon: 'report',
    }
  }
  return variant[props.variant as keyof typeof variant] || variant.informative
})
</script>

<template>
  <div
    class="flex flex-row justify-between w-full py-5 px-6 border rounded-lg shadow-lg shadow-zinc-600/10 text-base md:min-w-[420px] md:max-w-[700px] font-inter"
    :class="flagVariants.style.card"
  >
    <span
      id="icon"
      class="material-symbols-outlined text-xl select-all"
      :class="flagVariants.style.icon"
    >{{ flagVariants.icon }}</span>
    <div class="flex flex-col justify-start w-full h-full ml-3 mr-10 ">
      <span
        class="font-bold leading-[150%]"
        :class="flagVariants.style.title"
      >{{ props.title }}</span>
      <span
        class="font-normal leading-[150%]"
        :class="flagVariants.style.description"
      >{{ props.description }}</span>
    </div>
    <span
      class="material-symbols-outlined select-all"
      :class="flagVariants.style.title"
    >close</span>
  </div>
</template>

<style scoped>
#icon {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 22
}
</style>
