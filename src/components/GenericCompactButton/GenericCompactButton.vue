<script lang="ts" setup>
import { computed, useAttrs, useSlots } from 'vue';
import { cn } from '../../utils/cn';
import type { ButtonHTMLAttributes } from 'vue';
import type { compactButtonVariant } from '../../types';

defineOptions({ inheritAttrs: false })

type NativeButtonAttributes = /* @vue-ignore */ ButtonHTMLAttributes

type buttonProps = {
  icon: string,
  variant?: compactButtonVariant,
} & NativeButtonAttributes

const props = withDefaults(defineProps<buttonProps>(), {
  variant: 'default',
})

const emit = defineEmits<{
  (e: 'onClick'): void;
}>();

const onClick = () => {
  emit("onClick")
};

const hasIconSlots = computed(() => !!slots.icon)
const slots = useSlots()
const attrs = useAttrs()

const BUTTON_VARIANTS: Record<"default" | "danger", string> = {
  default: 'text-primary-500 hover:bg-slate-200',
  danger: 'text-red-800 hover:bg-red-100',
} as const

const buttonVariant = computed(() => cn(
  'w-11 h-11 rounded-lg p-2.5 bg-white text-2xl leading-tight easy-in-out duration-300 cursor-auto',
  BUTTON_VARIANTS[props.variant],
  attrs.class as string | undefined,
))

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})
</script>

<template>
  <button
    v-bind="forwarded"
    type="button"
    :class="buttonVariant"
    @click="onClick"
  >
    <label v-if="hasIconSlots">
      <span class="material-symbols-outlined">
        <slot name="icon" />
      </span>
    </label>
    <label v-else>
      <span class="material-symbols-outlined">
        {{ props.icon }}
      </span>
    </label>
  </button>
</template>
