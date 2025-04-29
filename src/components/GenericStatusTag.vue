<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{
    text: string,
    variant?: string,
}>(),{ variant: 'success' });

type Variants = {
  primary: string,
  successOutline: string,
  warning: string,
  secondary: string,
  secondaryDanger: string,
  disabled: string,
}

const variants = computed(() => {
    const currentVariant: Variants = {
        primary: 'bg-success-400',
        successOutline: 'bg-white border border-success-100 !text-success-400',
        warning: 'bg-error-200',
        secondary: 'bg-gray-600',
        secondaryDanger: 'bg-white border border-gray-400 !text-gray-600',
        disabled: 'bg-warning-200',
    }
    return currentVariant[props.variant in currentVariant ? props.variant as keyof typeof currentVariant : 'primary']
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium text-white"
    :class="variants"
  >
    {{ props.text }}
  </span>
</template>
