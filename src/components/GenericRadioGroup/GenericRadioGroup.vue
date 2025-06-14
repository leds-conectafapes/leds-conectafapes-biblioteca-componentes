<script setup lang="ts">
import type { radioGroupOptions } from '../../types';
import type { PropType } from 'vue';

const props = withDefaults(defineProps<{
  options: radioGroupOptions[],
  label: string,
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
          class="accent-primary-500 h-5 w-5"
        >
        <label
          :for="props.id + index"
          class="text-base font-inter font-medium"
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