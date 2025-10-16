<script setup lang="ts">
import { computed, ref } from "vue";
import { cn } from "../../utils/cn";
import type { HTMLAttributes } from "vue";
import { autoUpdate, offset, useFloating } from "@floating-ui/vue";

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
  top: "triangle-bottom",
  right: "triangle-left",
  bottom: "triangle-top",
  left: "triangle-right",
  custom: "",
} as const;

const displayClasses = computed(() => {
  if (modelValue === undefined) {
    return "hidden group-hover:block";
  } else if (modelValue === true) {
    return "block";
  } else {
    return "block";
  }
});
const tooltipClass = computed(() => {
  const base = `${width} ${customPosition || positionClasses[position]}`;
  return cn(
    displayClasses.value,
    "absolute bg-gray-900 text-sm text-white font-medium rounded-lg px-2 py-3",
    "shadow-lg shadow-zinc-600/10",
    base,
  );
});

const isCustom = computed(() => position === "custom");

const propPosition = computed(() => {
  if (position !== "custom") return position;
  return "top";
});

const reference = ref(null);
const tooltip = ref(null);

const { floatingStyles } = useFloating(reference, tooltip, {
  placement: propPosition,
  middleware: [offset(12)],
  whileElementsMounted: autoUpdate,
});

const style = computed(() => (isCustom.value ? {} : floatingStyles.value));

const showTooltip = ref(false);

const toggleTooltip = () => {
  showTooltip.value = !showTooltip.value;
};
</script>

<template>
  <div
    @mouseenter="toggleTooltip"
    @mouseleave="toggleTooltip"
    ref="reference"
    class="group w-fit"
  >
    <slot></slot>

    <div ref="tooltip" v-if="showTooltip" :class="tooltipClass" :style="style">
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
    transform: rotate(45deg) translateY(25%) translateX(-50%);
  }
}
.triangle-right {
  &::before {
    left: 100%;
  }
}

.triangle-left {
  &::before {
    left: 0%;
  }
}
</style>
