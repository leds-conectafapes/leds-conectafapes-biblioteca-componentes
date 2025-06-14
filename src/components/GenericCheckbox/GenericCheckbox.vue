<script lang="ts" setup generic="T extends string | number | boolean | undefined">
import { computed, useAttrs, useSlots } from 'vue'
import { cn } from '../../utils/cn'
import type { InputHTMLAttributes } from 'vue'

type NativeCheckboxAttributes = /* @vue-ignore */ InputHTMLAttributes

type CheckboxProps = {
  label?: string
  containerClass?: string | string[]
} & NativeCheckboxAttributes

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: '',
  containerClass: () => [],
})

const modelValue = defineModel<T>()

const slots = useSlots()
const attrs = useAttrs()

const hasLabelSlot = computed(() => !!slots.default)

const checkboxClass = computed(() => cn(
  'w-5 h-5 appearance-none rounded-xs border-1 border-gray-500 cursor-pointer checked:border-0 checked:bg-primary-500',
  attrs.class as string | undefined
))

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})
</script>

<template>
  <div :class="cn('group relative flex flex-row items-center gap-3 w-fit cursor-pointer select-none font-inter', props.containerClass)">
    <input
      v-bind="forwarded"
      v-model="modelValue"
      type="checkbox"
      :class="checkboxClass"
    >

    <label
      v-if="!hasLabelSlot"
      :for="props.id"
    >
      {{ label }}
    </label>
    <label
      v-else-if="hasLabelSlot"
      :for="props.id"
    >
      <slot name="Label" />
    </label>

    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      class="absolute left-1 size-3.5 hidden group-has-checked:block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75025 10.0402L1.56941 6.8594C1.21191 6.5019 0.634414 6.5019 0.276914 6.8594C-0.0805859 7.2169 -0.0805859 7.7944 0.276914 8.1519L4.10858 11.9836C4.46608 12.3411 5.04358 12.3411 5.40108 11.9836L15.0994 2.28523C15.4569 1.92773 15.4569 1.35023 15.0994 0.992734C14.7419 0.635234 14.1644 0.635234 13.8069 0.992734L4.75025 10.0402Z"
        fill="white"
      />
    </svg>
  </div>
</template>
