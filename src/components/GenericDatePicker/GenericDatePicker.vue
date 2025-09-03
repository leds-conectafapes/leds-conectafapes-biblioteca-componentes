<script setup lang="ts" generic="T extends string | undefined">
import { computed, useAttrs, useSlots } from "vue";
import type { InputHTMLAttributes } from "vue";
import type { inputState } from "../../types";
import { cn } from "../../utils/cn";
import { inputClass, inputStateStyles } from "../../utils/inputClass";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

defineOptions({ inheritAttrs: false });

type NativeDatePickerAttributes = /* @vue-ignore */ InputHTMLAttributes;

type DatePickerProps = {
  state?: inputState;
  label?: string;
  errorMessages?: string | string[];
  containerClass?: string | string[];
} & NativeDatePickerAttributes;

const modelValue = defineModel<T>();

const props = withDefaults(defineProps<DatePickerProps>(), {
  state: "default",
  label: "",
  errorMessages: () => [],
  containerClass: () => [],
});

const slots = useSlots();
const attrs = useAttrs();
const id = computed(() => attrs.id as string | undefined);

const isDisabled = computed(() => props.state === "disabled");
const hasLabelSlots = computed(() => !!slots.label);
const hasErrorSlots = computed(() => !!slots.error);

const isFirefox = /Firefox\//.test(navigator.userAgent);

const datePickerState = computed(() =>
  cn(
    inputClass,
    "w-full",
    isFirefox ? "" : "calendar-none",
    inputStateStyles[props.errorMessages.length > 0 ? "error" : props.state],
    attrs.class as string | undefined,
  ),
);

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    :class="cn('w-full relative gap-y-4 flex flex-col', props.containerClass)"
  >
    <!-- label -->
    <div v-if="!hasLabelSlots && props.label !== ''">
      <label :for="id" class="w-fit text-base font-medium font-inter">
        {{ props.label }}{{ attrs.required ? "*" : "" }}
      </label>
    </div>
    <div v-else-if="hasLabelSlots">
      <slot name="label" />
    </div>
    <!-- input -->
    <div class="relative">
      <input
        v-bind="forwarded"
        v-model="modelValue"
        type="date"
        :class="datePickerState"
        :disabled="isDisabled"
      />

      <GenericIcon
        v-if="!isFirefox"
        name="date_range"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-lg leading-tight text-gray-500 transition pointer-events-none"
        filled
      />
    </div>
    <!-- errors -->
    <div v-if="!hasErrorSlots && props.errorMessages.length > 0">
      <div class="text-sm text-error-300">
        <div v-if="Array.isArray(props.errorMessages)">
          <p v-for="(error, index) in props.errorMessages" :key="index">
            {{ error }}
          </p>
        </div>
        <div v-else>
          {{ props.errorMessages }}
        </div>
      </div>
    </div>
    <div v-else-if="hasErrorSlots">
      <slot name="error" />
    </div>
  </div>
</template>

<style scoped>
.calendar-none::-webkit-calendar-picker-indicator {
  background: transparent;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  height: auto;
  width: auto;
  z-index: 1;
}
</style>
