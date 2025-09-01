<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { cn } from "../../utils/cn";
import type { ButtonHTMLAttributes } from "vue";
import type { compactButtonVariant } from "../../types";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

defineOptions({ inheritAttrs: false });

type NativeButtonAttributes = /* @vue-ignore */ ButtonHTMLAttributes;

type buttonProps = {
  icon: string;
  variant?: compactButtonVariant;
} & NativeButtonAttributes;

const props = withDefaults(defineProps<buttonProps>(), {
  variant: "default",
});

const emit = defineEmits<{
  (e: "onClick"): void;
}>();

const onClick = () => {
  emit("onClick");
};

const attrs = useAttrs();

const BUTTON_VARIANTS: Record<"default" | "danger", string> = {
  default: "text-primary-500 hover:bg-slate-200",
  danger: "text-red-800 hover:bg-red-100",
} as const;

const buttonVariant = computed(() =>
  cn(
    "w-11 h-11 rounded-lg p-2.5 bg-white text-2xl leading-tight easy-in-out duration-300 cursor-pointer",
    BUTTON_VARIANTS[props.variant],
    attrs.class as string | undefined,
  ),
);

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});
</script>

<template>
  <button
    v-bind="forwarded"
    type="button"
    :class="buttonVariant"
    @click="onClick"
  >
    <slot name="icon">
      <GenericIcon :name="props.icon" filled />
    </slot>
  </button>
</template>
