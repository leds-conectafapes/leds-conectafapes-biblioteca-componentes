<script setup lang="ts">
import { ref } from 'vue';
import GenericSelect from './components/GenericSelect/GenericSelect.vue';

const options = [
  { id: 1, label: 'Option 1', value: 1 },
  { id: 2, label: 'Option 2', value: 2 },
  { id: 3, label: 'Option 3', value: 3 },
]

const selected = ref()
</script>

<template>
  <GenericSelect v-model="selected" :options="options" required="true" label="Selecione uma opção"/>
</template>
