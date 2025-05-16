<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    type?: string,
    placeholder: string,
    state?: string,
    label: string,
    mandatory?: boolean,
}>(), {
    type: 'text',
    state: 'default',
    mandatory: false,
})

const model = defineModel({ required: true, type: String })


type InputTypeData = {
  type: string,
  icon?: string | null,
}

type Types = {
    text: InputTypeData,
    search: InputTypeData,
    number: InputTypeData,
}

const types = computed(() => {
  const currentType: Types = {
    text: { type: 'text', icon: null },
    search: { type: 'search',icon: 'search' },
    number: { type: 'number', icon: null },
  }
  return currentType[props.type in currentType ? props.type as keyof typeof currentType : 'text']
})

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
  <div class="w-full relative gap-y-4 flex flex-col">
    <label
      class="
        text-base
        font-medium font-inter"
    >
      {{ props.label }}{{ props.mandatory ? '*' : '' }}</label>
    <div class="relative">
      <input
        v-model="model"
        :type="types.type"
        :placeholder="props.placeholder"
        :class="states"
        :disabled="props.state === 'disabled'"
        class="
              w-full
              p-4 leading-tight
              font-inter
              text-gray-600
              ring hover:ring-2 rounded-lg outline-primary-400
              search-none
          "
      >
      <button
        v-if="types.icon !== null "
        class="absolute right-4 top-1/2 -translate-y-1/2 w-5.5 h-5.5 cursor-pointer"
      >
        <span
          class="material-symbols-outlined w-full h-full"
        >{{ types.icon }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-none::-webkit-search-cancel-button {
    display: none;
    -webkit-appearance: none;
    appearance: none;
}
</style>