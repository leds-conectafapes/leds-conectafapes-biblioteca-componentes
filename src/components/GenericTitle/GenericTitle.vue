<script setup lang="ts">
import { computed, useAttrs } from 'vue';

import type { HTMLAttributes } from 'vue';
import type { titleType } from '../../types';
import { cn } from '../../utils/cn';

type NativeTitleAttributes = /* @vue-ignore */ HTMLAttributes

type titleProps = {
  /** Texto do título */
  text?: string
  /** Tipo de estilização */
  type?: titleType
} & NativeTitleAttributes

const props = withDefaults(defineProps<titleProps>(), {
  text: () => '',
  type: 'h1',
});

const TITLE_TYPES: Record<titleType, string> = {
  h1: 'text-3xl/[38px] font-semibold',
  h2: 'text-2xl',
  h3: 'text-xl',
  title: 'text-lg/[26px]',
  subtitle: 'text-base',
  body: 'text-sm/[22px]',
  caption: 'text-xs/[18px]',
}

const slots = defineSlots<{
  /** Slot para texto do título */
  default(): string
}>()
const attrs = useAttrs()

const hasDefaultSlot = computed(() => !!slots.default)

const titleTypes = computed(() => cn(
  TITLE_TYPES[props.type as keyof typeof TITLE_TYPES],
  attrs.class as string | undefined
))

const forwarded = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _unusedClass, style: _unusedStyle, ...rest} = attrs
  return rest
})
</script>

<template>
  <span
    v-bind="forwarded"
    :class="titleTypes"
  >
    <template v-if="!hasDefaultSlot">
      {{ props.text }}
    </template>
    <template v-else>
      <slot />
    </template>
  </span>
</template>
