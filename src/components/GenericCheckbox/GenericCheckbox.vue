<script lang="ts" setup>
import { computed, useAttrs } from 'vue'

import { cn } from '../../utils/cn'

import type { InputHTMLAttributes } from 'vue'

type NativeCheckboxAttributes = /* @vue-ignore */ InputHTMLAttributes

type CheckboxProps = {
  /** Texto do checkbox */
  label?: string
  /** ID do checkbox */
  id?: string
  /** Classe(s) do container */
  containerClass?: string | string[]
} & NativeCheckboxAttributes

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: () => '',
  id: `checkbox-${Math.random().toString(36).slice(2, 11)}`,
  containerClass: () => [],
})

const model = defineModel<boolean>()

const slots = defineSlots<{
  /** Slot para texto da checkbox */
  default(): string
}>()
const attrs = useAttrs()

const hasDefaultSlot = computed(() => !!slots.default)

const checkboxClass = computed(() => cn(
  'w-5 h-5 appearance-none rounded-xs border-1 border-gray-500 cursor-pointer checked:border-0 checked:bg-primary-500',
  attrs.class as string | undefined
))

const forwarded = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _unusedClass, style: _unusedStyle, ...rest } = attrs
  return rest
})
</script>

<template>
  <label
    :for="props.id"
    :class="cn(
      'group relative flex flex-row items-center gap-3 w-fit cursor-pointer select-none font-inter',
      props.containerClass
    )"
  >
    <input
      v-bind="forwarded"
      :id="props.id"
      v-model="model"
      type="checkbox"
      :class="checkboxClass"
    >

    <template v-if="!hasDefaultSlot">
      {{ label }}
    </template>
    <template v-else>
      <slot name="default" />
    </template>

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
  </label>
</template>
