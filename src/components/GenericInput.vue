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

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const iconClick = () => {
    if (props.type === 'text') {
        emit('update:modelValue', '')
    }
}

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
    text: { type: 'text', icon: 'mdi-close-circle-outline' },
    search: { type: 'search',icon: 'mdi-magnify' },
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
  <div class="w-xs relative gap-y-4 flex flex-col">
    <label
        class="
        text-base
        font-medium font-inter"
    >
        {{ props.label }}{{ props.mandatory ? '*' : '' }}</label>
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
        "
    >
    <button
      class="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
      @click="iconClick"
    >
      <span
        class="material-symbols-outlined w-full h-full"
      >close</span>
    </button>
  </div>
</template>
