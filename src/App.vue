<script setup lang="ts">
import GenericTable from './components/GenericTable/GenericTable.vue';
import type { tableHeader } from './types';

const columns: tableHeader[] = [
  { key: 'name', title: 'Name' },
  { key: 'date', title: 'Date' },
]

const data = [
  { name: 'Item 1', date: '2024-05-01' },
  { name: 'Item 2', date: '2024-04-15' },
]
</script>

<template>
  <div class="m-10">
    <GenericTable
      :columns="columns"
      :data="data"
    />
  </div>
</template>
