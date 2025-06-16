<script setup lang="ts">
import { computed, useSlots, useAttrs } from 'vue'
import type { statusTagVariant } from '../../types';
import type { HTMLAttributes } from 'vue';
import { cn } from '../../utils/cn';

defineOptions({ inheritAttrs: false })

type NativeStatusTagAttributes = /* @vue-ignore */ HTMLAttributes

type statusTagProps = {
  text?: string,
  variant?: statusTagVariant
} & NativeStatusTagAttributes

const props = withDefaults(defineProps<statusTagProps>(), {
  text: '',
  variant: 'success'
})

const slots = useSlots()
const attrs = useAttrs()

const hasTextSlots = computed(() => !!slots.text)

const STATUSTAG_VARIANTS: Record<statusTagVariant, string> = {
  success: 'bg-success-400',
  successOutline: 'bg-white border border-success-100 !text-success-400',
  warning: 'bg-error-200',
  secondary: 'bg-gray-600',
  secondaryDanger: 'bg-white border border-gray-400 !text-gray-600',
  disabled: 'bg-warning-200',
} as const

const statusTagVariant = computed(() => cn(
  'inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium text-white',
  STATUSTAG_VARIANTS[props.variant],
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
    <div v-if="!hasTextSlots">
      {{ props.text }}
    </div>
    <div v-else-if="hasTextSlots">
      <slot name="text" />
    </div>
  </span>
</template>
