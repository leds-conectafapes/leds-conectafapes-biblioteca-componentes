<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  text: string,
  variant?: string,
}>(), {
  variant: 'h1',
});

type Variants = {
  h1: string,
  h2: string,
  h3: string,
  title: string,
  subtitle: string,
  body: string,
  caption: string
}

const variants = computed(() => {
  const currentVariant: Variants = {
    h1: 'text-3xl/[38px] font-semibold',
    h2: 'text-2xl',
    h3: 'text-xl',
    title: 'text-lg/[26px]',
    subtitle: 'text-base',
    body: 'text-sm/[22px]',
    caption: 'text-xs/[18px]',
  }
  return currentVariant[props.variant in currentVariant ? props.variant as keyof typeof currentVariant : 'h1']
})


</script>

<template>
  <span
    :class="variants"
  >
    {{ props.text }}
  </span>
</template>
