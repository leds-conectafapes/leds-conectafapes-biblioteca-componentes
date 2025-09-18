<script setup lang="ts" generic="T extends string | number | undefined">
import { computed, useAttrs, useSlots } from "vue";
import type { TextareaHTMLAttributes } from "vue";
import type { textAreaState } from "../../types";
import { cn } from "../../utils/cn";

defineOptions({ inheritAttrs: false });

type NativeTextareaAttributes = /* @vue-ignore */ TextareaHTMLAttributes;

type textAreaProps = {
  state?: textAreaState;
  label?: string;
  containerClass?: string | string[];
  errorMessages?: string | string[];
} & NativeTextareaAttributes;

const props = withDefaults(defineProps<textAreaProps>(), {
  state: "default",
  label: "",
  containerClass: () => [],
  errorMessages: () => [],
});

const modelValue = defineModel<T>();

const slots = useSlots();
const attrs = useAttrs();
const id = computed(() => attrs.id as string | undefined);
const label = computed(() =>
  attrs.hasOwnProperty("required") ? props.label + " *" : props.label,
);

const isDisabled = computed(() => props.state === "disabled");
const hasLabelSlots = computed(() => !!slots.label);
const hasErrorSlots = computed(() => !!slots.error);

const TEXTAREA_STATES: Record<textAreaState, string> = {
  default: "ring-gray-500",
  error: "ring-error-300 bg-error-100/10",
  warning: "ring-warning-100",
  disabled: "!ring-0 bg-gray-100/40",
} as const;

const textAreaState = computed(() =>
  cn(
    "w-full p-4 leading-tight font-inter text-gray-600 ring hover:ring-2 rounded-lg outline-primary-400",
    TEXTAREA_STATES[props.errorMessages.length > 0 ? "error" : props.state],
    props.containerClass,
  ),
);

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    :class="cn('w-full relative gap-y-4 flex flex-col', props.containerClass)"
  >
    <!-- label -->
    <div v-if="!hasLabelSlots && props.label !== ''">
      <label :for="id" class="w-fit text-base font-medium font-inter">
        {{ label }}
      </label>
    </div>
    <div v-else-if="hasLabelSlots">
      <slot name="label" />
    </div>
    <!-- textarea -->
    <textarea
      v-bind="forwarded"
      v-model="modelValue"
      :class="textAreaState"
      :disabled="isDisabled"
    />
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
