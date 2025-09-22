<script setup lang="ts" generic="T extends string | number | undefined">
import { computed, useAttrs, useSlots } from "vue";
import type { TextareaHTMLAttributes } from "vue";
import type { inputState } from "../../types";
import { cn } from "../../utils/cn";
import { inputClass, inputStateStyles } from "../../utils/inputClass";

defineOptions({ inheritAttrs: false });

type NativeTextareaAttributes = /* @vue-ignore */ TextareaHTMLAttributes;

type textAreaProps = {
  state?: inputState;
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

const textAreaState = computed(() =>
  cn(
    inputClass,
    "w-full",
    inputStateStyles[props.errorMessages.length > 0 ? "error" : props.state],
    props.state === "disabled" ? "resize-none" : undefined,
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
