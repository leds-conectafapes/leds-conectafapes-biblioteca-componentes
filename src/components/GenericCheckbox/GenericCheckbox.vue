<script
  lang="ts"
  setup
  generic="T extends string | number | boolean | undefined"
>
import { computed, useAttrs } from "vue";
import { cn } from "../../utils/cn";
import type { InputHTMLAttributes } from "vue";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

defineOptions({ inheritAttrs: false });

type NativeCheckboxAttributes = /* @vue-ignore */ InputHTMLAttributes;

type CheckboxProps = {
  label?: string;
  containerClass?: string | string[];
  disabled?: boolean;
} & NativeCheckboxAttributes;

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: "",
  containerClass: () => [],
  disabled: false,
});

const modelValue = defineModel<T>();

const attrs = useAttrs();
const id = computed(() => attrs.id as string | undefined);

const checkboxClass = computed(() =>
  cn(
    "w-5 h-5 appearance-none rounded-xs border-1 border-gray-500 cursor-pointer  block",
    props.disabled
      ? "bg-gray-100 checked:bg-gray-500"
      : "checked:border-0 checked:bg-primary-500",
    attrs.class as string | undefined,
  ),
);

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-row items-center gap-3 w-fit font-inter',
        props.containerClass,
      )
    "
  >
    <div class="group relative">
      <input
        v-bind="forwarded"
        v-model="modelValue"
        type="checkbox"
        :class="checkboxClass"
        :disabled="props.disabled"
      />

      <GenericIcon
        name="check"
        class="pointer-events-none absolute top-[-1px] left-[-2px] hidden group-has-checked:block leading-none text-2xl text-white"
        variant="rounded"
      />
    </div>

    <slot>
      <label v-if="label" :for="id">
        {{ label }}
      </label>
    </slot>
  </div>
</template>
