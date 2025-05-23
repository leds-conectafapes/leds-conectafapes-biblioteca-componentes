<script setup lang="ts">
import { computed } from 'vue';
import type { titleType } from '../../types';

const props = withDefaults(defineProps<{
  text: string,
  type?: titleType,
}>(), {
  type: 'h1',
});

const titleTypes = computed(() => {
  const variant: Record<titleType, string> = {
    h1: 'text-3xl/[38px] font-semibold',
    h2: 'text-2xl',
    h3: 'text-xl',
    title: 'text-lg/[26px]',
    subtitle: 'text-base',
    body: 'text-sm/[22px]',
    caption: 'text-xs/[18px]',
  }
  return variant[props.type as keyof typeof variant] || variant.h1
})


</script>

<template>
  <span
    :class="titleTypes"
  >
    {{ props.text }}
  </span>
</template>
