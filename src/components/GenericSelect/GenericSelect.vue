<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { selectState } from '../../types';

const props = withDefaults(defineProps<{
    placeholder: string,
    options: string[],
    state?: selectState,
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

const model = defineModel({ type: [String, Number, undefined] as PropType<string | number | undefined> })

const selectStates = computed(() => {
    const state: Record<selectState, string> = {
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
      <select
        :id="props.id"
        v-model="model"
        autocomplete="on"
        :class="selectStates"
        :disabled="props.state === 'disabled'"
        class="
              appearance-none
              w-full
              p-4
              font-inter
              text-gray-600
              ring hover:ring-2 rounded-lg outline-primary-400
          "
      >
        <option
          value=""
          selected
        >
          {{ props.placeholder }}
        </option>
        <option
          v-for="(option, index) in props.options ?? []"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 w-5.5 h-5.5 cursor-pointer items-center justify-center"
      >
        <span
          class="material-symbols-outlined w-full h-full"
        >keyboard_arrow_down</span>
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
