<script setup lang="ts">
import { computed, useAttrs } from "vue";
import GenericButton from "../GenericButton/GenericButton.vue";
import { cn } from "../../utils/cn";
import type { ModalVariant } from "../../types";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

defineOptions({ inheritAttrs: false });

const {
  modelValue,
  title,
  closeLabel = "Fechar",
  confirmLabel,
  variant = "primary",
  hideCloseIcon = false,
} = defineProps<{
  modelValue: boolean;
  title: string;
  closeLabel?: string;
  confirmLabel?: string;
  variant?: ModalVariant;
  hideCloseIcon?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
  (e: "confirm"): void;
}>();

function close() {
  emit("update:modelValue", false);
  emit("close");
}

function confirm() {
  emit("confirm");
}

const attrs = useAttrs();

const overlayClass = computed(() => {
  return cn(
    "fixed inset-0 flex items-center justify-center bg-[#0005] backdrop-blur-sm z-50",
    modelValue ? undefined : "hidden",
  );
});

const cardClass = computed(() => {
  return cn(
    "bg-white rounded-lg p-6 flex flex-col gap-6 text-base leading-normal font-normal text-gray-600 overflow-scroll",
    attrs.class as string | undefined,
  );
});
</script>

<template>
  <div :class="overlayClass">
    <div :class="cardClass">
      <div class="flex items-center gap-2">
        <span class="text-xl leading-normal font-bold text-gray-800 grow h-fit">
          {{ title }}
        </span>

        <GenericIcon
          v-if="!hideCloseIcon"
          name="close"
          class="cursor-pointer text-xl leading-normal font-bold text-gray-800"
          :weight="400"
          @click="close"
        />
      </div>

      <slot></slot>

      <div class="flex justify-end gap-6">
        <GenericButton
          class="w-fit"
          variant="secondary"
          :label="closeLabel"
          @click="close"
        />

        <GenericButton
          v-if="confirmLabel"
          class="w-fit"
          :variant="variant"
          :label="confirmLabel"
          @click="confirm"
        />
      </div>
    </div>
  </div>
</template>
