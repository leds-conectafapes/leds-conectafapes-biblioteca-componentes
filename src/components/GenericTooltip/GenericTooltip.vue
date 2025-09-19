<script setup lang="ts">
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { HTMLAttributes } from "vue";

type NativeHTMLAttributes = /* @vue-ignore */ HTMLAttributes;

type TooltipPosition = "top" | "right" | "bottom" | "left" | "custom";

type TooltipProps = {
  text?: string;
  position?: TooltipPosition;
  customPosition?: string;
  width?: string;
  modelValue?: boolean | undefined;
} & NativeHTMLAttributes;

const {
  text,
  position = "top",
  customPosition,
  width = "w-max",
  modelValue = undefined,
} = defineProps<TooltipProps>();

const positionClasses = {
  top: "triangle-bottom bottom-full left-1/2 -translate-x-1/2 mb-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
  bottom: "triangle-top top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  custom: "",
} as const;

const displayClasses = computed(() => {
  if (modelValue === undefined) {
    return "hidden group-hover:block"
  } else if (modelValue === true) {
    return "block"
  } else {
    return "hidden"
  }
})
const tooltipClass = computed(() => {
  const base = `${width} ${customPosition || positionClasses[position]}`;
  return cn(
    displayClasses.value,
    "absolute bg-gray-900 text-sm text-white font-medium rounded-lg px-2 py-3",
    "shadow-lg shadow-zinc-600/10",
    base,
  );
});
</script>

<template>
  <div class="relative group w-fit">
    <slot></slot>

    <div :class="tooltipClass">
      <slot name="text">
        {{ text }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.triangle-top,
.triangle-bottom {
  &::before {
    content: "";

    display: block;
    height: 10px;
    width: 10px;

    background-color: var(--color-gray-900);

    position: absolute;
    z-index: -1;

    transform: translateX(-50%);
    transform: rotate(45deg) translateY(25%) translateX(-50%);
  }
}
.triangle-bottom {
  &::before {
    top: 90%;
    left: 50%;
  }
}

.triangle-top {
  &::before {
    top: -5%;
    left: 50%;
  }
}
</style>
