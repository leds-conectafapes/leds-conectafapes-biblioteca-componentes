<script setup lang="ts" generic="T extends string | number | undefined">
import { computed, useSlots, useAttrs } from 'vue';
import { cn } from '../../utils/cn';
import type { SelectHTMLAttributes } from 'vue';
import type { selectState } from '../../types';
import type { selectOption } from '../../types';

type NativeSelectAttributes = /* @vue-ignore */ SelectHTMLAttributes

type selectProps<T> = {
  options?: selectOption<T>[]
  label?: string
  state?: selectState
  placeholder?: string
  containerClass?: string | string[]
  errorMessages?: string | string[]
} & NativeSelectAttributes

const modelValue = defineModel<T>()

const props = withDefaults(defineProps<selectProps<T>>(), {
  state: 'default',
  options: () => [],
  label: '',
  placeholder: 'Selecione uma opção',
  errorMessages: () => [],
  containerClass: () => [],
})

const slots = useSlots()
const attrs = useAttrs()

const isDisabled = computed(() => props.state === 'disabled')
const hasOptionSlots = computed(() => !!slots.options)
const hasErrorSlots = computed(() => !!slots.error)
const hasLabelSlots = computed(() => !!slots.label)

const SELECT_STATES: Record<selectState, string> = {
  default: 'ring-gray-500',
  error: 'ring-error-300 bg-error-100/10',
  warning: 'ring-warning-100',
  disabled: 'ring-0 bg-gray-100/40',
} as const

const selectState = computed(() => cn(
  'appearance-none w-full p-4 font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400',
  SELECT_STATES[props.errorMessages.length > 0 ? 'error' : props.state],
  attrs.class as string | undefined,
))

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})
</script>

<template>
  <div :class="cn('w-full relative gap-y-4 flex flex-col', props.containerClass, { '!bg-red-500': forwarded.multiple })">
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
      <select
        v-bind="forwarded"
        :id="props.id"
        v-model="modelValue"
        :class="selectState"
        :disabled="isDisabled"
      >
        <div v-if="!hasOptionSlots">
          <option
            disabled
            hidden
            :value="undefined"
          >
            {{ props.placeholder }}
          </option>
          <option
            v-for="option in props.options"
            :key="option.id"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </div>

        <div v-else-if="hasOptionSlots">
          <slot name="options" />
        </div>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          class="h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
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
