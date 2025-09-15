<script setup lang="ts">
import { computed, useAttrs } from "vue";
import GenericIcon from "../GenericIcon/GenericIcon.vue";
import { cn } from "../../utils/cn";
import type { MessageCardVariant } from "../../types";
const { title, variant = "default" } = defineProps<{
  title: string;
  variant?: MessageCardVariant;
}>();

const attrs = useAttrs();

const variantClasses = {
  default:
    "bg-gray-100 border-gray-700 ring-gray-400 hover:bg-gray-200 hover:ring-gray-500",
  warning:
    "bg-orange-50 border-orange-600 ring-orange-500/50 hover:bg-orange-100 hover:ring-orange-500",
  error:
    "bg-red-50 border-red-800 ring-red-400/50 hover:bg-red-100 hover:ring-red-400",
  disabled: "border-gray-700 ring-gray-100",
} as const;
const cardClass = computed(() => {
  return cn(
    "px-6 py-5 rounded-lg border-l-8 flex gap-x-4 ring-2",
    variantClasses[variant],
    variant === "disabled" ? "" : "cursor-pointer",
    attrs.class as string | undefined,
  );
});

const iconVariantClass = {
  default: "text-gray-700",
  warning: "text-orange-600",
  error: "text-red-800",
  disabled: "text-gray-500",
} as const;
const iconClass = computed(() => {
  return ["text-lg leading-none", iconVariantClass[variant]];
});

const iconVariantName = {
  default: "info",
  warning: "warning",
  error: "report",
  disabled: "info",
} as const;
const iconName = computed(() => {
  return iconVariantName[variant];
});

const titleClass = computed(() => {
  const base = ["text-base font-semibold leading-none align-top grow"];
  if (variant === "disabled") {
    base.push("text-gray-600");
  } else {
    base.push("text-gray-800");
  }
  return base;
});
</script>

<template>
  <div :class="cardClass">
    <GenericIcon
      :class="iconClass"
      :name="iconName"
      :filled="variant !== 'disabled'"
    />

    <span :class="titleClass">{{ title }}</span>

    <GenericIcon
      v-if="variant !== 'disabled'"
      class="text-lg leading-none align-middle"
      name="arrow_forward"
    />
  </div>
</template>
