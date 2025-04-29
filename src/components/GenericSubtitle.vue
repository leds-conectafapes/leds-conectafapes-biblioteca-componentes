<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  text: string,
  state?: string,
}>(), {
  state: 'default'
});

type States = {
  default: string,
  error: string
}

const states = computed(() => {
    const currentState: States = {
      default: 'text-gray-500',
      error: 'text-error-300',
    }
    return currentState[props.state in currentState ? props.state as keyof typeof currentState : 'default']
})

</script>

<template>
  <legend
    class="
      font-inter
      text-sm"
    :class="states"
  >
    {{ props.text }}
  </legend>
</template>
