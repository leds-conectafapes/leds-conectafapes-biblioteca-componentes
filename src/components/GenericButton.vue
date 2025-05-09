<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  label: string,
  variant?: string,
}>(), {
  variant: 'primary'
});

const emit = defineEmits<{
  (e: 'onClick'): void;
}>();

const onClick = () => {
  emit("onClick")
};

type Variants = {
  primary: string,
  danger: string,
  warning: string,
  secondary: string,
  secondaryDanger: string,
  disabled: string,
}

const variants = computed(() => {
  const currentVariant: Variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-hover',
    danger: 'bg-error-300 text-white hover:bg-error-hover',
    warning: 'bg-warning-100 text-white hover:bg-warning-hover',
    secondary: 'bg-white text-gray-700 hover:bg-gray-hover',
    secondaryDanger: 'bg-white text-error-300 hover:bg-error-secondaryHover',
    disabled: 'bg-gray-200 text-gray-500',
  }
  return currentVariant[props.variant in currentVariant ? props.variant as keyof typeof currentVariant : 'primary']
})
</script>

<template>
  <button
    type="button"
    class="
      w-full
      flex gap-2.5 items-center justify-center
      px-6 py-4 leading-tight
      rounded-lg
      text-base
      easy-in-out duration-300
      cursor-auto
      font-inter font-medium"
    :class="variants"
    :disabled="props.variant === 'disabled'"
    @click="onClick"
  >
    {{ props.label }}
  </button>
</template>
