<script setup lang="ts">
import GenericTable from './components/GenericTable/GenericTable.vue';
import { ref, watch } from 'vue';
import type { tableHeader } from './types';

const columns: tableHeader[] = [
  { key: 'name', title: 'Name' },
  { key: 'date', title: 'Date' },
]

const data = [
  { name: 'Item 1', date: '2024-05-01' },
  { name: 'Item 2', date: '2024-04-15' },
]

const currentPage = ref(1)
const itemsPerPage = 5
const totalRecords = ref(42)
const totalPages = ref(Math.ceil(totalRecords.value / itemsPerPage))

watch(currentPage, (newPage) => {
  console.log('newPage', newPage)
})
</script>

<template>
  <div class="m-10">
    <GenericTable
      v-model:current-page="currentPage"
      :columns="columns"
      :data="data"
      :total-pages="totalPages"
      :total-records="totalRecords"
      :items-per-page="5"
      :actions="['edit', 'delete']"
    />
  </div>
</template>
