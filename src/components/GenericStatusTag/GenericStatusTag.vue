<script setup lang="ts">
import { computed } from 'vue'
import type { statusTagVariant } from '../../types';

const props = withDefaults(defineProps<{
    text: string,
    variant?: statusTagVariant,
}>(),{ variant: 'success' });

const statusTagVariants = computed(() => {
    const variant: Record<statusTagVariant, string> = {
        success: 'bg-success-400',
        successOutline: 'bg-white border border-success-100 !text-success-400',
        warning: 'bg-error-200',
        secondary: 'bg-gray-600',
        secondaryDanger: 'bg-white border border-gray-400 !text-gray-600',
        disabled: 'bg-warning-200',
    }
    return variant[props.variant as keyof typeof variant] || variant.success
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium text-white"
    :class="statusTagVariants"
  >
    {{ props.text }}
  </span>
</template>
