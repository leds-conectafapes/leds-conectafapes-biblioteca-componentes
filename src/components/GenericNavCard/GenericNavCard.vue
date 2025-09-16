<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cn } from "../../utils/cn";
import type { GenericCardProps, StatusTagVariant } from "../../types";
import GenericCard from "../GenericCard/GenericCard.vue";
import GenericStatusTag from "../GenericStatusTag/GenericStatusTag.vue";

const {
  statusText,
  statusVariant,
  disabled = false,
  ...props
} = defineProps<
  {
    statusText: string;
    statusVariant?: StatusTagVariant;
    disabled?: boolean;
  } & GenericCardProps
>();

const attrs = useAttrs();
const cardClass = computed(() => {
  return cn(
    "break-keep text-xl",
    disabled
      ? ""
      : "hover:bg-blue-50 hover:ring-2 hover:ring-blue-800/60 cursor-pointer",
    attrs.class as string | undefined,
  );
});
</script>

<template>
  <GenericCard :class="cardClass" v-bind="props">
    <template #title>
      <div class="flex mb-4">
        <GenericStatusTag :text="statusText" :variant="statusVariant" />
      </div>
    </template>
  </GenericCard>
</template>
