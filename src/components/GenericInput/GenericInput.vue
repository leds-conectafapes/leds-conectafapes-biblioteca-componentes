<script lang="ts" setup generic="T extends string | number | undefined">
import { computed, useAttrs, useSlots } from "vue";
import type { InputHTMLAttributes } from "vue";
import type { inputState } from "../../types";
import { cn } from "../../utils/cn";
import { inputClass, inputStateStyles } from "../../utils/inputClass";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

defineOptions({ inheritAttrs: false });

type NativeInputAttributes = /* @vue-ignore */ InputHTMLAttributes;

type inputProps = {
  label?: string;
  state?: inputState;
  containerClass?: string | string[];
  errorMessages?: string | string[];
} & NativeInputAttributes;

const props = withDefaults(defineProps<inputProps>(), {
  label: "",
  state: "default",
  containerClass: () => [],
  errorMessages: () => [],
});

const emit = defineEmits<{
  (e: "search", value: T): void;
}>();

const handleSearch = () => {
  emit("search", modelValue.value as T);
};

const modelValue = defineModel<T>();

const slots = useSlots();
const attrs = useAttrs();
const id = computed(() => attrs.id as string | undefined);
const type = computed(() => attrs.type as string | undefined);

const isDisabled = computed(() => props.state === "disabled");
const isSearchType = computed(() => type.value === "search");
const hasLabelSlots = computed(() => !!slots.label);
const hasErrorSlots = computed(() => !!slots.error);

const inputState = computed(() =>
  cn(
    inputClass,
    "w-full",
    inputStateStyles[props.errorMessages.length > 0 ? "error" : props.state],
    attrs.class as string | undefined,
  ),
);

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div :class="cn('w-full gap-y-4 flex flex-col', props.containerClass)">
    <!-- label -->
    <div v-if="!hasLabelSlots && props.label !== ''">
      <label :for="id" class="w-fit text-base font-medium font-inter">
        {{ props.label }}{{ attrs.required ? "*" : "" }}
      </label>
    </div>
    <div v-else-if="hasLabelSlots">
      <slot name="label" />
    </div>
    <!-- input -->
    <div class="relative">
      <input
        v-bind="forwarded"
        v-model="modelValue"
        :class="inputState"
        :disabled="isDisabled"
      />
      <GenericIcon
        v-if="isSearchType"
        name="search"
        class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-lg leading-tight text-gray-500 hover:text-gray-700 transition"
        @click="handleSearch"
      />
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

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
</style>
