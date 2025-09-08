<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { cn } from "../../utils/cn";
import type { ButtonHTMLAttributes } from "vue";
import type { buttonVariant } from "../../types";

defineOptions({ inheritAttrs: false });

type NativeButtonAttributes = /* @vue-ignore */ ButtonHTMLAttributes;

type buttonProps = {
  label?: string;
  variant?: buttonVariant;
} & NativeButtonAttributes;

const props = withDefaults(defineProps<buttonProps>(), {
  label: "",
  variant: "primary",
});

const emit = defineEmits<{
  (e: "onClick"): void;
}>();

const onClick = () => {
  emit("onClick");
};

const isDisabled = computed(() => props.variant === "disabled");
const attrs = useAttrs();

const BUTTON_VARIANTS: Record<buttonVariant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-hover",
  danger: "bg-error-300 text-white hover:bg-error-hover",
  warning: "bg-warning-100 text-white hover:bg-warning-hover",
  secondary: "bg-white text-gray-700 hover:bg-gray-hover",
  secondaryDanger: "bg-white text-error-300 hover:bg-error-secondaryHover",
  disabled: "bg-gray-200 text-gray-500",
} as const;

const buttonVariant = computed(() =>
  cn(
    "w-full flex gap-2.5 items-center justify-center px-6 py-4 leading-tight rounded-lg text-base font-inter font-medium easy-in-out duration-300",
    BUTTON_VARIANTS[props.variant],
    isDisabled.value ? undefined : "cursor-pointer",
    attrs.class as string | undefined,
  ),
);

const type = computed(() => (attrs.type as NativeButtonAttributes['type']) ?? "button")

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});
</script>

<template>
  <button
    v-bind="forwarded"
    :type="type"
    :class="buttonVariant"
    :disabled="isDisabled"
    @click="onClick"
  >
    <slot name="label">
      {{ props.label }}
    </slot>
  </button>
</template>
