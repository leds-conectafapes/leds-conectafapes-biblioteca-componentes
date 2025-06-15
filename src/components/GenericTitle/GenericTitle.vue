<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue';
import type { HTMLAttributes } from 'vue';
import type { titleType } from '../../types';
import { cn } from '../../utils/cn';

type NativeTitleAttributes = /* @vue-ignore */ HTMLAttributes

type titleProps = {
  text?: string
  type?: titleType
} & NativeTitleAttributes

const props = withDefaults(defineProps<titleProps>(), {
  text: '',
  type: 'h1',
});

const slots = useSlots()
const attrs = useAttrs()

const hasTextSlot = computed(() => !!slots.text)

const TITLE_TYPES: Record<titleType, string> = {
  h1: 'text-3xl/[38px] font-semibold',
  h2: 'text-2xl',
  h3: 'text-xl',
  title: 'text-lg/[26px]',
  subtitle: 'text-base',
  body: 'text-sm/[22px]',
  caption: 'text-xs/[18px]',
}

const titleTypes = computed(() => cn(
  TITLE_TYPES[props.type as keyof typeof TITLE_TYPES],
  attrs.class as string | undefined
))

const forwarded = computed(() => {
  const { ...rest} = attrs
  return rest
})
</script>

<template>
  <span
    v-bind="forwarded"
    :class="titleTypes"
  >
    <div v-if="!hasTextSlot">
      {{ props.text }}
    </div>
    <div v-else-if="hasTextSlot">
      <slot name="text" />
    </div>
  </span>
</template>
