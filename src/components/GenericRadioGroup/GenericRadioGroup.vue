<script setup lang="ts">
import { computed } from 'vue';
import type { radioGroupState } from '../../types';
import type { radioGroupOptions } from '../../types';
import type { PropType } from 'vue';

const props = withDefaults(defineProps<{
    options: radioGroupOptions[],
    label: string,
    state?: radioGroupState,
    required?: boolean,
    errorMessages?: string[],
    id?: string,
}>(), {
    state: 'default',
    required: false,
    errorMessages: () => [],
    id: `input-${Math.random().toString(36).slice(2, 11)}`,
})

const model = defineModel({ type: [String, undefined] as PropType<string | undefined> })

const radioGroupStates = computed(() => {
  const state: Record<radioGroupState, string> = {
    default: 'accent-primary-500',
    error: 'accent-error-100',
    warning: 'accent-warning-100',
    disabled: 'text-gray-500',
  }
  const verifyError = props.errorMessages.length > 0 ? 'error' : props.state
  return state[verifyError as keyof typeof state] || state.default
})
</script>

<template>
  <div class="w-full gap-y-4 flex flex-col">
    <label
      class="
        w-fit
        text-base
        font-medium font-inter"
    >
      {{ props.label }}{{ props.required ? '*' : '' }}</label>
    <div class="flex flex-row gap-x-8">
      <div
        v-for="(option, index) in props.options"
        :key="option.value"
        class="flex flex-row gap-x-2"
      >
        <input
          :id="props.id + index"
          v-model="model"
          type="radio"
          :value="option.value"
          :disabled="props.state === 'disabled'"
          class=" h-6 w-6"
          :class="radioGroupStates"
        >
        <label
          :for="props.id + index"
          class="text-base font-inter font-medium"
          :class="radioGroupStates"
        >{{ option.text }}</label>
      </div>
    </div>
    <div
      v-if="props.errorMessages.length > 0"
      class="mt-1 text-sm text-error-300"
    >
      <p
        v-for="(error, index) in props.errorMessages"
        :key="index"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>