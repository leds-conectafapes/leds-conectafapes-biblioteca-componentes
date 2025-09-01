<script setup lang="ts">
import type { IconVariant } from "../../types";

type Props = {
  name: string;
  variant?: IconVariant;
  className?: string;
  filled?: boolean;
  weight?: number;
};

withDefaults(defineProps<Props>(), {
  variant: "outlined",
  className: "",
  filled: false,
  weight: 300,
});
</script>

<template>
  <span
    :class="[`material-symbols-${variant.toLowerCase()}`, className]"
    :style="{
      'font-variation-settings': `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}`,
    }"
  >
    {{ name }}
  </span>
</template>
