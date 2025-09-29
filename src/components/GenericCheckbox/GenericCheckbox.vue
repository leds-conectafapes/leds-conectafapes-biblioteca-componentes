<script
  lang="ts"
  setup
  generic="T extends string | number | boolean | undefined"
>
import { computed, useAttrs, useSlots } from "vue";
import { cn } from "../../utils/cn";
import type { InputHTMLAttributes } from "vue";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

defineOptions({ inheritAttrs: false });

type NativeCheckboxAttributes = /* @vue-ignore */ InputHTMLAttributes;

type CheckboxProps = {
  label?: string;
  containerClass?: string | string[];
} & NativeCheckboxAttributes;

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: "",
  containerClass: () => [],
});

const modelValue = defineModel<T>();

const slots = useSlots();
const attrs = useAttrs();
const id = computed(() => attrs.id as string | undefined);

const hasLabelSlot = computed(() => !!slots.label);

const checkboxClass = computed(() =>
  cn(
    "w-5 h-5 appearance-none rounded-xs border-1 border-gray-500 cursor-pointer checked:border-0 checked:bg-primary-500 block",
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
        'flex flex-row items-center gap-3 w-fit cursor-pointer select-none font-inter',
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
      />

      <GenericIcon
        name="check"
        class="pointer-events-none absolute top-[-1px] left-[-2px] hidden group-has-checked:block leading-none text-2xl text-white"
        variant="rounded"
      />
    </div>

    <label v-if="!hasLabelSlot" :for="id">
      {{ label }}
    </label>
    <label v-else-if="hasLabelSlot" :for="id">
      <slot name="label" />
    </label>
  </div>
</template>
