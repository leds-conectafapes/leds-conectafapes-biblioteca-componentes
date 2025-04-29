<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';

const props = withDefaults(defineProps<{
    placeholder: string,
    options: string[],
    state?: string,
    label: string,
    mandatory?: boolean,
}>(), {
    state: 'default',
    mandatory: false,
})

const model = defineModel({ required: true, type: String })

const select = ref<HTMLSelectElement | null>(null)
const openSelect = () => {
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    })
    select.value?.dispatchEvent(event)
}

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
    <select
      ref="select"
      v-model="model"
      autocomplete="on"
      :class="states"
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
      class="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
      @click="openSelect"
    >
      <span
        class="material-symbols-outlined w-full h-full"
      >keyboard_arrow_down</span>
    </button>
  </div>
</template>
