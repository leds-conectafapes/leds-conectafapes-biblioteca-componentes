<script lang="ts" setup>
import { computed } from 'vue';
import type { subtitleState } from '../../types';

const props = withDefaults(defineProps<{
  text: string,
  state?: subtitleState,
}>(), {
  state: 'default'
});

const subtitleStates = computed(() => {
  const state: Record<subtitleState, string> = {
    default: 'text-gray-500',
    error: 'text-error-300',
  }
  return state[props.state as keyof typeof state] || state.default
})

</script>

<template>
  <legend
    class="
      font-inter
      text-sm"
    :class="subtitleStates"
  >
    {{ props.text }}
  </legend>
</template>
