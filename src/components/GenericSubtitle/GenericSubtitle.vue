<script lang="ts" setup>
import { computed, useAttrs, useSlots } from 'vue';
import type { subtitleState } from '../../types';
import type { HTMLAttributes } from 'vue';
import { cn } from '../../utils/cn';

defineOptions({ inheritAttrs: false })

type NativeTitleAttributes = /* @vue-ignore */ HTMLAttributes

type subtitleProps = {
  text?: string,
  state?: subtitleState,
} & NativeTitleAttributes

const props = withDefaults(defineProps<subtitleProps>(), {
  text: '',
  state: 'default',
})

const slots = useSlots()
const attrs = useAttrs()

const hasTextSlot = computed(() => !!slots.text)

const SUBTITLE_STATES: Record<subtitleState, string> = {
  default: 'text-gray-500',
  error: 'text-error-300',
} as const

const subtitleState = computed(() => cn(
  'font-inter text-sm',
  SUBTITLE_STATES[props.state as keyof typeof SUBTITLE_STATES],
  attrs.class as string | undefined
))

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})
</script>

<template>
  <legend
    v-bind="forwarded"
    :class="subtitleState"
  >
    <div v-if="!hasTextSlot">
      {{ props.text }}
    </div>
    <div v-else-if="hasTextSlot">
      <slot name="text" />
    </div>
  </legend>
</template>
