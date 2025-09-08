<script setup lang="ts" generic="T extends string | number | undefined">
import type { RadioGroupDirection, radioGroupOptions } from "../../types";
import type { InputHTMLAttributes } from "vue";
import { computed, useAttrs, useSlots } from "vue";
import { cn } from "../../utils/cn";

defineOptions({ inheritAttrs: false });

type NativeInputAttributes = /* @vue-ignore */ InputHTMLAttributes;

type radioGroupProps<T> = {
  options?: radioGroupOptions<T>[];
  label?: string;
  containerClass?: string | string[];
  errorMessages?: string | string[];
  direction?: RadioGroupDirection;
} & NativeInputAttributes;

const props = withDefaults(defineProps<radioGroupProps<T>>(), {
  options: () => [],
  label: "",
  containerClass: () => [],
  errorMessages: () => [],
  direction: "column",
});

const modelValue = defineModel<T>();

const slots = useSlots();
const attrs = useAttrs();

const hasOptionSlots = computed(() => !!slots.options);
const hasErrorSlots = computed(() => !!slots.error);
const hasLabelSlots = computed(() => !!slots.label);

const radioGroupClass = computed(() =>
  cn("accent-primary-500 size-6", attrs.class as string | undefined),
);

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});

const optionWrapperClass = computed(() => {
  const base = "flex gap-y-4 gap-x-8"
  if (props.direction === "column") {
    return base + " flex-col"
  } else {
    return base
  }
})
</script>

<template>
  <div :class="cn('w-full gap-y-4 flex flex-col', props.containerClass)">
    <!-- label -->
    <div v-if="!hasLabelSlots && props.label !== ''">
      <label class="w-fit text-base font-medium font-inter">
        {{ props.label }}{{ attrs.required ? "*" : "" }}
      </label>
    </div>
    <div v-else-if="hasLabelSlots">
      <slot name="label" />
    </div>
    <!-- input -->
    <div>
      <div v-if="!hasOptionSlots" :class="optionWrapperClass">
        <div
          v-for="option in props.options"
          :key="option.id"
          class="flex flex-row gap-x-4"
        >
          <input
            v-bind="forwarded"
            :id="option.id"
            v-model="modelValue"
            :value="option.value"
            :class="radioGroupClass"
            type="radio"
          />
          <label :for="option.id" class="text-base font-inter font-medium">{{
            option.label
          }}</label>
        </div>
      </div>
      <div v-else-if="hasOptionSlots">
        <slot name="options" />
      </div>
    </div>
    <!-- errors -->
    <div v-if="!hasErrorSlots && props.errorMessages.length > 0">
      <div class="text-sm text-error-300">
        <div v-if="Array.isArray(props.errorMessages)">
          <p v-for="(error, index) in props.errorMessages" :key="index">
            {{ error }}
          </p>
        </div>
        <div v-else>
          {{ props.errorMessages }}
        </div>
      </div>
    </div>
    <div v-else-if="hasErrorSlots">
      <slot name="error" />
    </div>
  </div>
</template>
