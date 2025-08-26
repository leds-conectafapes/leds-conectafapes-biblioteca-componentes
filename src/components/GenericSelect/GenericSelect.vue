<script setup lang="ts" generic="T extends string | number | undefined">
import { computed, useAttrs } from 'vue';
import { cn } from '../../utils/cn';
import type { SelectHTMLAttributes } from 'vue';
import type { selectState } from '../../types';
import type { selectOption } from '../../types';

defineOptions({ inheritAttrs: false })

type NativeSelectAttributes = /* @vue-ignore */ SelectHTMLAttributes

type selectProps<T> = {
  options?: selectOption<T>[]
  label?: string
  state?: selectState
  placeholder?: string
  containerClass?: string | string[]
  errorMessages?: string | string[]
  required?: boolean,
} & NativeSelectAttributes

const modelValue = defineModel<T>()

const {
  options = [],
  label = '',
  state = 'default',
  placeholder = 'Selecione uma opção',
  containerClass = [],
  errorMessages = [],
  required = false,
} = defineProps<selectProps<T>>()
  

const attrs = useAttrs()
const id = computed(() => attrs.id as string | undefined)

const isDisabled = computed(() => state === 'disabled')

const SELECT_STATES: Record<selectState, string> = {
  default: 'ring-gray-500',
  error: 'ring-error-300 bg-error-100/10',
  warning: 'ring-warning-100',
  disabled: 'ring-0 bg-gray-100/40',
} as const

const selectState = computed(() => cn(
  'appearance-none w-full p-4 font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400',
  SELECT_STATES[errorMessages.length > 0 ? 'error' : state],
  attrs.class as string | undefined,
))

const _errorMessages = computed(() => {
  if (typeof errorMessages === 'string') {
    return [errorMessages]
  }
  return errorMessages
})

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})
</script>

<template>
  <div :class="cn('w-full relative gap-y-4 flex flex-col', containerClass, { '!bg-red-500': forwarded.multiple })">
    <!-- label -->
    <slot name="label">
      <label
        v-if="label !== ''"
        :for="id"
        class="
        w-fit
        text-base
        font-medium font-inter"
      >
        {{ label }}{{ required ? ' *' : '' }}
      </label>
    </slot>

    <!-- input -->
    <div class="relative">
      <select
        v-bind="forwarded"
        v-model="modelValue"
        :class="selectState"
        :disabled="isDisabled"
      >
        <slot name="options">
          <option
            :value="undefined"
          >
            {{ placeholder }}
          </option>
          <option
            v-for="option in options"
            :key="option.id"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </slot>
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
    <slot name="error">
      <div
        v-if="_errorMessages.length > 0"
        class="text-sm text-error-300"
      >
        <p
          v-for="(error, index) in _errorMessages"
          :key="index"
        >
          {{ error }}
        </p>
      </div>
    </slot>
  </div>
</template>
