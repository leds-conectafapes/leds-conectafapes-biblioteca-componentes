<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    placeholder: string,
    state?: string,
    label: string,
    mandatory?: boolean,
}>(), {
    state: 'default',
    mandatory: false,
})

const model = defineModel({ required: true, type: String })

type InputStates = {
    default: string,
    error: string,
    warning: string,
    disabled: string
}

const states = computed(() => {
    const currentState: InputStates = {
        default: 'ring-gray-500',
        error: 'ring-error-300 bg-error-100/10',
        warning: 'ring-warning-100',
        disabled: '!ring-0 bg-gray-100/40',
    }
    return currentState[props.state in currentState ? props.state as keyof typeof currentState : 'default']
})
</script>

<template>
  <div class="w-xs relative gap-y-4 flex flex-col">
    <label
      class="
        text-base
        font-medium font-inter"
    >
      {{ props.label }}{{ props.mandatory ? '*' : '' }}</label>
    <div class="relative">
      <input
        v-model="model"
        type="date"
        :placeholder="props.placeholder"
        :class="states"
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
