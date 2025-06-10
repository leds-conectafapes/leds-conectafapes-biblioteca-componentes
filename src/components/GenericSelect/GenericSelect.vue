<script setup lang="ts" generic="T extends string | number | undefined">
import { computed, useSlots, useAttrs } from 'vue';
import { cn } from '../../utils/cn';
import type { SelectHTMLAttributes } from 'vue';
import type { selectState } from '../../types';
import type { selectOption } from '../../types';

type NativeSelectAttributes = /* @vue-ignore */ SelectHTMLAttributes

type selectProps<T> = {
  modelValue: T
  options?: selectOption<T>[]
  state?: selectState
  placeholder?: string
  containerClass?: string | string[]
  errorMessages?: string | string[]
  castToNumber?: boolean // Provavelmente temporario
} & NativeSelectAttributes

const props = withDefaults(defineProps<selectProps<T>>(), {
  state: 'default',
  options: () => [],
  placeholder: 'Selecione uma opção',
  errorMessages: () => [],
  containerClass: () => [],
  castToNumber: false
})

const emit = defineEmits<{
  'update:modelValue': [value: T]
}>();

const slots = useSlots()
const attrs = useAttrs()
const isDisabled = computed(() => props.state === 'disabled')

const hasOptionSlots = computed(() => !!slots.options)
const hasErrorSlots = computed(() => !!slots.error)

const SELECT_STATES: Record<selectState, string> = {
  default: 'ring-gray-500',
  error: 'ring-error-300 bg-error-100/10',
  warning: 'ring-warning-100',
  disabled: 'ring-0 bg-gray-100/40',
} as const

const selectState = computed(() => cn(
  'appearance-none w-full p-4 font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400',
  SELECT_STATES[props.errorMessages.length > 0 ? 'error' : props.state],
  attrs.class as string | undefined
))

const forwarded = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class:  _unusedClass, style:  _unusedStyle, ...rest } = attrs
  return rest
})

function parseValue(value: string): T {
  if (props.castToNumber && value !== '') {
    const num = Number(value)
    return (Number.isNaN(num) ? undefined : num) as T
  }
  return value as T
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', parseValue(target.value))
}
</script>

<template>
  <div :class="cn('w-full relative gap-y-4 flex flex-col', props.containerClass, { '!bg-red-500': forwarded.multiple })">
    <div class="relative">
      <select
        v-bind="forwarded"
        :id="props.id"
        :value="props.modelValue"
        :class="selectState"
        :disabled="isDisabled"
        @change="handleInput"
      >
        <template v-if="!hasOptionSlots">
          <option
            disabled
            hidden
            :value="undefined"
          >
            {{ props.placeholder }}
          </option>
          <option
            v-for="option in props.options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </template>

        <template v-else>
          <slot name="options" />
        </template>
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
    <template
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
    </template>

    <template v-else>
      <slot name="error" />
    </template>
  </div>
</template>
