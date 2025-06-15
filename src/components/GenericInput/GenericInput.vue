<script lang="ts" setup generic="T extends string | number | undefined">
import { computed, useAttrs, useSlots } from 'vue';
import type { InputHTMLAttributes } from 'vue';
import type { inputState, inputType } from '../../types';
import { cn } from '../../utils/cn';

type NativeInputAttributes = InputHTMLAttributes

type inputProps = {
  label?: string
  state?: inputState
  containerClass?: string | string[]
  errorMessages?: string | string[]
} & NativeInputAttributes

const props = withDefaults(defineProps<inputProps>(), {
  label: '',
  state: 'default',
  containerClass: () => [],
  errorMessages: () => [],
})

const modelValue = defineModel<T>()

const slots = useSlots()
const attrs = useAttrs()

const isDisabled = computed(() => props.state === 'disabled')
const hasLabelSlots = computed(() => !!slots.label)
const hasErrorSlots = computed(() => !!slots.error)

const INPUT_STATES: Record<inputState, string> = {
  default: 'ring-gray-500',
  error: 'ring-error-300 bg-error-100/10',
  warning: 'ring-warning-100',
  disabled: '!ring-0 bg-gray-100/40',
} as const

const inputState = computed(() => cn(
  'w-full p-4 leading-tight font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400',
  INPUT_STATES[props.errorMessages.length > 0 ? 'error' : props.state],
  attrs.class as string | undefined,
))

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})

const inputTypes = computed(() => {
  const type: Record<inputType, { type: inputType, icon: string | null }> = {
    text: { type: 'text', icon: null },
    search: { type: 'search', icon: 'search' },
    number: { type: 'number', icon: null },
    email: { type: 'email', icon: null },
    password: { type: 'password', icon: 'visibility_off' },
    tel: { type: 'tel', icon: null },
    url: { type: 'url', icon: null },
  }
  return type[props.type as keyof typeof type] || type.text
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
        :class="inputState"
        :disabled="isDisabled"
      >
      <button
        v-if="inputTypes.icon !== null "
        class="absolute right-4 top-1/2 -translate-y-1/2 w-5.5 h-5.5 cursor-pointer"
      >
        <span
          class="material-symbols-outlined w-full h-full"
        >{{ inputTypes.icon }}</span>
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
input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

input[type='search']::-webkit-search-cancel-button {
  display: none;
}

input[type='password']::-ms-reveal {
  display: none;
}
</style>