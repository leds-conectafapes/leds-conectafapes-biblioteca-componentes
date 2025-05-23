<script lang="ts" setup>
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { inputState, inputType } from '../../types';

const props = withDefaults(defineProps<{
    type?: inputType,
    placeholder: string,
    state?: inputState,
    label: string,
    required?: boolean,
    errorMessages?: string[],
}>(), {
    type: 'text',
    state: 'default',
    mandatory: false,
    errorMessages: () => [],
})

const model = defineModel({ type: [String, Number, Object, undefined] as PropType<string | number | { value: string | undefined } | undefined> })

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

const inputStates = computed(() => {
  const state = {
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
      class="
        text-base
        font-medium font-inter"
    >
      {{ props.label }}{{ props.required ? '*' : '' }}</label>
    <div class="relative">
      <input
        v-model="model"
        :type="inputTypes.type"
        :placeholder="props.placeholder"
        :class="inputStates"
        :disabled="props.state === 'disabled'"
        class="
              w-full
              p-4 leading-tight
              font-inter
              text-gray-600
              ring hover:ring-2 rounded-lg outline-primary-400
          "
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