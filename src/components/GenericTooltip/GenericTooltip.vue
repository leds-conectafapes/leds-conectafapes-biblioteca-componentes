<script setup lang="ts">
import { autoUpdate, offset, useFloating } from "@floating-ui/vue";
import { computed, ref } from "vue";
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

const placement = computed(() => {
  if (position !== "custom") return position;
  return "top";
});
const tooltip = ref(null);
const reference = ref(null);

const open = ref(false);
const { x, y } = useFloating(reference, tooltip, {
  placement,
  middleware: [offset(8)],
  open,
  whileElementsMounted: autoUpdate,
});

const isCustom = computed(() => position === "custom");
const positionClass = {
  top: "triangle-bottom top-0 left-0",
  right: "triangle-left top-0 left-0",
  bottom: "triangle-top top-0 left-0",
  left: "triangle-right top-0 left-0",
  custom: "",
} as const;

const displayCondition = computed(() => {
  if (modelValue === undefined) {
    return open.value;
  } else {
    return modelValue;
  }
});
const tooltipClass = computed(() => {
  const base = `${width} ${customPosition || positionClass[position]}`;
  return cn(
    "absolute bg-gray-900 rounded-lg px-2 py-3",
    "text-sm text-white font-medium shadow shadow-zinc-600/10",
    base,
  );
});

const floatingStyle = computed(() =>
  isCustom
    ? {}
    : {
        transform: `translate(${x.value}px, ${y.value}px)`,
      },
);
</script>

<template>
  <div
    @mouseenter="open = true"
    @mouseleave="open = false"
    ref="reference"
    class="w-fit"
  >
    <slot></slot>

    <div
      ref="tooltip"
      v-if="displayCondition"
      :class="tooltipClass"
      :style="floatingStyle"
    >
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

    left: 50%;
    transform: translateX(-50%);
    transform: rotate(45deg) translateY(25%) translateX(-50%);
  }
}
.triangle-bottom {
  &::before {
    top: 90%;
  }
}

.triangle-top {
  &::before {
    top: -5%;
  }
}

.triangle-left,
.triangle-right {
  &::before {
    content: "";

    display: block;
    height: 10px;
    width: 10px;

    background-color: var(--color-gray-900);

    position: absolute;
    z-index: -1;

    top: 50%;
    transform: translateX(-50%);
    transform: rotate(45deg) translateX(-50%);
  }
}
.triangle-right {
  &::before {
    left: 95%;
  }
}

.triangle-left {
  &::before {
    left: 0%;
  }
}
</style>
