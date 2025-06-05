<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { textAreaState } from '../../types';

const props = withDefaults(defineProps<{
  placeholder: string,
  state?: textAreaState,
  label: string,
  required?: boolean,
  errorMessages?: string[],
  id?: string,
}>(), {
  state: 'default',
  required: false,
  errorMessages: () => [],
  id: `textarea-${Math.random().toString(36).slice(2, 11)}`
});

const model = defineModel({ type: [String, undefined] as PropType<string | undefined> })

const textAreaStates = computed(() => {
  const state: Record<textAreaState, string> = {
    default: 'ring-gray-500',
    error: 'ring-error-300 bg-error-100/10',
    warning: 'ring-warning-100',
    disabled: '!ring-0 bg-gray-100/40',
  }
  const verifyError = props.errorMessages.length > 0 ? 'error' : props.state
  return state[verifyError as keyof typeof state] || state.default
})
</script>

<template>
  <label
    :for="id"
    class="
    w-fit
    text-base
    font-medium font-inter"
  >
    {{ props.label }}{{ props.required ? '*' : '' }}
  </label>
  <textarea
    :id="id"
    v-model="model"
    :placeholder="placeholder"
    :class="textAreaStates"
    :disabled="props.state === 'disabled'"
    class="
    w-full
    p-4 leading-tight
    font-inter
    text-gray-600
    ring hover:ring-2 rounded-lg outline-primary-400
    "
  />
  <p
    v-for="errorMessage in errorMessages"
    :key="errorMessage"
    class="text-error-300 text-xs"
  >
    {{ errorMessage }}
  </p>
</template>