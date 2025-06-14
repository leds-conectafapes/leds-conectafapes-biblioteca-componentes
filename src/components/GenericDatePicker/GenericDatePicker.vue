<script setup lang="ts" generic="T extends string | undefined">
import { computed, useAttrs, useSlots } from 'vue';
import type { InputHTMLAttributes } from 'vue';
import type { datePickerState } from '../../types';
import { cn } from '../../utils/cn';

type NativeDatePickerAttributes = /* @vue-ignore */ InputHTMLAttributes

type DatePickerProps = {
  state?: datePickerState,
  label?: string,
  errorMessages?: string | string[]
  containerClass?: string | string[]
} & NativeDatePickerAttributes

const modelValue = defineModel<T>()

const props = withDefaults(defineProps<DatePickerProps>(), {
  state: 'default',
  label: '',
  errorMessages: () => [],
  containerClass: () => [],
})

const slots = useSlots()
const attrs = useAttrs()

const isDisabled = computed(() => props.state === 'disabled')
const hasLabelSlots = computed(() => !!slots.label)
const hasErrorSlots = computed(() => !!slots.error)

const DATEPICKER_STATES: Record<datePickerState, string> = {
  default: 'ring-gray-500',
  error: 'ring-error-300 bg-error-100/10',
  warning: 'ring-warning-100',
  disabled: '!ring-0 bg-gray-100/40',
} as const

const datePickerState = computed(() => cn(
  'w-full p-4 leading-tight font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400 calendar-none',
  DATEPICKER_STATES[props.errorMessages.length > 0 ? 'error' : props.state],
  attrs.class as string | undefined,
))

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})
</script>

<template>
  <div :class="cn('w-full relative gap-y-4 flex flex-col', props.containerClass)">
    <!-- label -->
    <div v-if="!hasLabelSlots && props.label !== ''">
      <label
        :for="props.id"
        class="
        w-fit
        text-base
        font-medium font-inter"
      >
        {{ props.label }}{{ props.required ? '*' : '' }}
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
        :placeholder="props.placeholder"
        :class="datePickerState"
        :disabled="isDisabled"
      >
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 w-5.5 h-5.5 cursor-pointer"
      >
        <span
          class="material-symbols-outlined w-full h-full"
        >date_range</span>
      </button>
    </div>
    <!-- errors -->
    <div
      v-if="!hasErrorSlots && props.errorMessages.length > 0"
    >
      <div class="text-sm text-error-300">
        <div v-if="Array.isArray(props.errorMessages)">
          <p
            v-for="(error, index) in props.errorMessages"
            :key="index"
          >
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
