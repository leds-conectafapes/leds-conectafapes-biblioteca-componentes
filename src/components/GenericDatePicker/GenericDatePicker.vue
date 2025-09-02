<script setup lang="ts" generic="T extends string | undefined">
import { computed, useAttrs, useSlots } from "vue";
import type { InputHTMLAttributes } from "vue";
import type { datePickerState } from "../../types";
import { cn } from "../../utils/cn";
import { inputClass } from "../../utils/inputClass";

defineOptions({ inheritAttrs: false });

type NativeDatePickerAttributes = /* @vue-ignore */ InputHTMLAttributes;

type DatePickerProps = {
  state?: datePickerState;
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

const DATEPICKER_STATES: Record<datePickerState, string> = {
  default: "ring-gray-500",
  error: "ring-error-300 bg-error-100/10",
  warning: "ring-warning-100",
  disabled: "!ring-0 bg-gray-100/40",
} as const;

const datePickerState = computed(() =>
  cn(
    inputClass,
    "w-full calendar-none",
    DATEPICKER_STATES[props.errorMessages.length > 0 ? "error" : props.state],
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="absolute right-4 top-1/2 -translate-y-1/2 w-5.5 h-5.5 text-gray-500 pointer-events-none"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 3v2.25m10.5-2.25V5.25M3.75 9h16.5M4.5 6.75h15a.75.75 0 01.75.75v12a.75.75 0 01-.75.75H4.5A.75.75 0 013.75 19.5V7.5a.75.75 0 01.75-.75z"
        />
      </svg>
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
