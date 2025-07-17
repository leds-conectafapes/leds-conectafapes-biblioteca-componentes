<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue';
import { cn } from '../../utils/cn';
import type { HTMLAttributes } from 'vue';

defineOptions({ inheritAttrs: false })

type NativeHTMLAttributes = /* @vue-ignore */ HTMLAttributes

type tooltipProps = {
  text?: string
} & NativeHTMLAttributes

const props = withDefaults(defineProps<tooltipProps>(), {
  text: '',
})

const slots = useSlots()
const attrs = useAttrs()

const hasTextSlot = computed(() => !!slots.text)

const tooltipClass = computed(() => cn(
  'size-fit bg-gray-900 text-sm leading-normal px-2 py-3 shadow-lg shadow-zinc-600/10 font-medium',  
))
</script>

<template>
  <div />
</template>