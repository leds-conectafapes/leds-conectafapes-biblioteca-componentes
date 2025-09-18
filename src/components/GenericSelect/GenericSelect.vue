<script setup lang="ts" generic="T extends string | number | undefined">
import { computed, useAttrs } from "vue";
import { cn } from "../../utils/cn";
import type { SelectHTMLAttributes } from "vue";
import type { inputState } from "../../types";
import type { selectOption } from "../../types";
import { inputClass, inputStateStyles } from "../../utils/inputClass";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

defineOptions({ inheritAttrs: false });

type NativeSelectAttributes = /* @vue-ignore */ SelectHTMLAttributes;

type selectProps<T> = {
  options?: selectOption<T>[];
  label?: string;
  state?: inputState;
  placeholder?: string;
  containerClass?: string | string[];
  errorMessages?: string | string[];
  required?: boolean;
} & NativeSelectAttributes;

const modelValue = defineModel<T>();

const {
  options = [],
  label = "",
  state = "default",
  placeholder = "Selecione uma opção",
  containerClass = [],
  errorMessages = [],
  required = false,
} = defineProps<selectProps<T>>();

const attrs = useAttrs();
const id = computed(() => attrs.id as string | undefined);
const _label = computed(() => (required ? label + " *" : label));

const isDisabled = computed(() => state === "disabled");

const selectState = computed(() =>
  cn(
    inputClass,
    "appearance-none w-full",
    inputStateStyles[errorMessages.length > 0 ? "error" : state],
    attrs.class as string | undefined,
  ),
);

const _errorMessages = computed(() => {
  if (typeof errorMessages === "string") {
    return [errorMessages];
  }
  return errorMessages;
});

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    :class="
      cn('w-full relative gap-y-4 flex flex-col', containerClass, {
        '!bg-red-500': forwarded.multiple,
      })
    "
  >
    <!-- label -->
    <slot name="label">
      <label
        v-if="label !== ''"
        :for="id"
        class="w-fit text-base font-medium font-inter"
      >
        {{ _label }}
      </label>
    </slot>

    <!-- input -->
    <div class="relative">
      <select
        v-bind="forwarded"
        v-model="modelValue"
        :class="selectState"
        :disabled="isDisabled"
        :required="required"
      >
        <slot name="options">
          <option :value="undefined">
            {{ placeholder }}
          </option>
          <option
            v-for="option in options"
            :key="option.id"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </slot>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <GenericIcon
          name="keyboard_arrow_down"
          class="text-xl leading-tight text-gray-500"
        />
      </div>
    </div>
    <!-- errors -->
    <slot name="error">
      <div v-if="_errorMessages.length > 0" class="text-sm text-error-300">
        <p v-for="(error, index) in _errorMessages" :key="index">
          {{ error }}
        </p>
      </div>
    </slot>
  </div>
</template>
