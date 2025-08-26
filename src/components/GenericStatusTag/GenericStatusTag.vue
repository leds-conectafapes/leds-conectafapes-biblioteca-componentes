<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { StatusTagVariant } from '../../types';
import type { HTMLAttributes } from 'vue';
import { cn } from '../../utils/cn';

defineOptions({ inheritAttrs: false })

type NativeStatusTagAttributes = /* @vue-ignore */ HTMLAttributes

type statusTagProps = {
  text?: string,
  variant?: StatusTagVariant,
  dontUppercase?: boolean,
} & NativeStatusTagAttributes

const { text, variant = 'success', dontUppercase, } = defineProps<statusTagProps>()

const attrs = useAttrs()

const STATUSTAG_VARIANTS = {
  info: 'bg-zinc-300 text-zinc-700',
  infoStrong: 'bg-gray-600 text-white',
  success: 'bg-success-400',
  warn: 'bg-amber-300 text-zinc-800',
  warnStrong: 'bg-amber-700 text-white',
  critical: 'bg-red-800 text-white',
  custom: ''
} as const

const statusTagVariant = computed(() => cn(
  'inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium text-white',
  STATUSTAG_VARIANTS[variant],
  !dontUppercase && 'uppercase',
  attrs.class as string | undefined,
))

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})

</script>

<template>
  <span
    v-bind="forwarded"
    :class="statusTagVariant"
  >
    <slot>
      {{ text }}
    </slot>
  </span>
</template>
