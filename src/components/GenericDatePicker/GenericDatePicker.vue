<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { datePickerState } from '../../types';

const props = withDefaults(defineProps<{
    placeholder: string,
    state?: datePickerState,
    label: string,
    required?: boolean,
    errorMessages?: string[],
    id?: string,
}>(), {
    state: 'default',
    mandatory: false,
    errorMessages: () => [],
    id: `input-${Math.random().toString(36).slice(2, 11)}`,
})

const model = defineModel({ type: [String, undefined] as PropType<string | undefined> })

const datePickerStates = computed(() => {
    const state: Record<datePickerState, string> = {
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
  <div class="w-full relative gap-y-4 flex flex-col">
    <label
      :for="props.id"
      class="
        w-fit
        text-base
        font-medium font-inter"
    >
      {{ props.label }}{{ props.required ? '*' : '' }}</label>
    <div class="relative">
      <input
        :id="props.id"
        v-model="model"
        type="date"
        :placeholder="props.placeholder"
        :class="datePickerStates"
        :disabled="props.state === 'disabled'"
        class="
              w-full
              p-4 leading-tight
              font-inter
              text-gray-600
              ring hover:ring-2 rounded-lg outline-primary-400
              calendar-none
          "
      >
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 w-5.5 h-5.5 cursor-pointer"
      >
        <span
          class="material-symbols-outlined w-full h-full"
        >date_range</span>
      </button>
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
