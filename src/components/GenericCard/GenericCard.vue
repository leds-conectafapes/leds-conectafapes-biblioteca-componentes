<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cn } from "../../utils/cn";
import GenericIcon from "../GenericIcon/GenericIcon.vue";
import GenericTooltip from "../GenericTooltip/GenericTooltip.vue";
import type { GenericCardProps } from "../../types";

const {
  title,
  titleClass,
  text,
  textVariant = "default",
  caption,
  captionVariant = "default",
  captionClass,
  tooltip,
  tooltipIcon,
  tooltipWidth,
} = defineProps<GenericCardProps>();
/**
 * esse tipo um pouco mais complicado serve para aplicar uma
 * regra do Design System de nao colorir ambos o texto principal
 * e a legenda, para que um nao tire a atencao do outro.
 * Dessa forma, os props a seguir sao validos (um exemplo por linha):
 *   textVariant="success"
 *   captionVariant="error"
 *   textVariant="success" captionVariant="default"
 *   textVariant="default" captionVariant="default"
 * Mas props a seguir sao invalidos (um exemplo por linha):
 *   textVariant="success" captionVariant="success"
 *   textVariant="success" captionVariant="error"
 */

defineSlots<{
  title: () => unknown;
  tooltip: () => unknown;
  default: () => unknown;
  caption: () => unknown;
}>();

const attrs = useAttrs();

const textVariantClasses = {
  default: "text-gray-800",
  success: "text-success-400",
  error: "text-red-700",
} as const;
const cardClass = computed(() => {
  return cn(
    "p-8 border border-slate-300 rounded-2xl min-h-38 text-3xl font-extrabold leading-tight break-normal lg:break-all",
    textVariantClasses[textVariant],
    attrs.class as string | undefined,
  );
});

const _titleClass = computed(() => {
  return cn(
    "text-xl font-bold flex justify-between mb-4 text-gray-800",
    titleClass,
  );
});

const captionVariantClasses = {
  default: "text-gray-600",
  success: "text-success-400",
  error: "text-red-800",
} as const;
const _captionClass = computed(() => {
  return cn(
    "text-sm font-medium text-gray-600 mt-2",
    captionVariantClasses[captionVariant],
    captionClass,
  );
});

const _tooltipIcon = computed(() => {
  return tooltipIcon || "info";
});
</script>

<template>
  <div :class="cardClass">
    <slot name="title">
      <div :class="_titleClass">
        {{ title }}

        <slot name="tooltip">
          <GenericTooltip v-if="tooltip" :text="tooltip" :width="tooltipWidth">
            <GenericIcon
              class="text-2xl text-primary-500"
              :name="_tooltipIcon"
            />
          </GenericTooltip>
        </slot>
      </div>
    </slot>

    <slot>
      {{ text }}
    </slot>

    <slot name="caption">
      <div v-if="caption" :class="_captionClass">
        {{ caption }}
      </div>
    </slot>
  </div>
</template>
