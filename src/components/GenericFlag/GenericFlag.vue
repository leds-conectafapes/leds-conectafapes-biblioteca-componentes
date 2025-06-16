<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils/cn';
import type { flagVariant } from '../../types';

type NativeFlagAttributes = /* @vue-ignore */ HTMLAttributes

type flagProps = {
  variant?: flagVariant,
  title?: string,
  description?: string,
} & NativeFlagAttributes

const props = withDefaults(defineProps<flagProps>(), {
  variant: 'informative',
  title: '',
  description: '',
})

const FLAG_VARIANTS: Record<flagVariant, {style:{card:string, icon:string, title:string, description:string}, icon:string}> = {
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
      icon: 'text-white',
      title: 'text-white',
      description: 'text-white',
    },
    icon: 'error',
  },
}

const flagVariant = computed(() => FLAG_VARIANTS[props.variant])

const timeout = computed(() => {
  if (props.variant === 'informative' || props.variant === 'success') {
    return 8000
  } else {
    return -1
  }
})

const model = defineModel<boolean>({ default: false })

const close = () => {
  model.value = false
}

const startTimeout = () => {
  setTimeout(() => {
    model.value = false
  }, timeout.value)
}

onMounted(() => {
  if (timeout.value > 0) startTimeout()
})
</script>

<template>
  <div
    class="flex flex-row justify-between gap-x-4 w-full py-5 px-6 border rounded-lg shadow-lg shadow-zinc-600/10 text-base md:min-w-[420px] md:max-w-[700px] font-inter"
    :class="flagVariant.style.card, model ? '' : 'hidden'"
  >
    <span
      id="icon"
      class="material-symbols-outlined text-xl select-none"
      :class="flagVariant.style.icon"
    >{{ flagVariant.icon }}</span>
    <div class="flex flex-col justify-start w-full h-full text-base leading-normal">
      <span
        class="font-bold"
        :class="flagVariant.style.title"
      >{{ props.title }}</span>
      <span
        class="font-normal"
        :class="flagVariant.style.description"
      >{{ props.description }}</span>
    </div>
    <span
      class="material-symbols-outlined text-xl cursor-pointer select-none"
      :class="flagVariant.style.title"
      @click="close"
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
