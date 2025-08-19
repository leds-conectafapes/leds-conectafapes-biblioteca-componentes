<script setup lang="ts">
import GenericTable from './components/GenericTable/GenericTable.vue';
import GenericCheckbox from './components/GenericCheckbox/GenericCheckbox.vue';
import { computed, reactive, ref, watch } from 'vue';
import type { tableHeader } from './types';

const columns: tableHeader[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'date', title: 'Date' },
]

const data = [
  { name: 'Item 1', date: '2024-05-01' },
  { name: 'Item 2', date: '2024-04-15' },
]

const currentPage = ref(1)
const itemsPerPage = 5

watch(currentPage, (newPage) => {
  console.log('newPage', newPage)
})

const selectedItems = reactive<Record<number, boolean>>({})
const selectedItemsNames = computed(() => {
  const selected = Object.entries(selectedItems)
    .filter(([_, isSelected]) => isSelected)
    .map(([index, _]) => data[Number(index)].name)
    .join(', ')

  if (selected.length > 0) {
    return `Itens selecionados: ${selected}.`
  } else {
    return 'Não há itens selecionados.'
  }
})
</script>

<template>
  <div class="m-10">
    <h1>Exemplo Básico</h1>
    <GenericTable
      v-model:page="currentPage"
      :columns="columns"
      :data="data"
      :items-per-page="itemsPerPage"
      :actions="['edit', 'delete']"
      class="mb-10"
    />

    <h1>Exemplo de tabela com selecao de linhas</h1>
    <GenericTable
      :columns="columns"
      :data="data"
      :actions="['edit', 'delete']"
    >
      <template #cell-name="{ cellData, rowIndex }">
        <GenericCheckbox v-model="selectedItems[rowIndex]" />
        {{ cellData }}
      </template>
    </GenericTable>
    <p class="mb-10">{{ selectedItemsNames }}</p>

    <h1>Modificando a aparência de todas as células, exceto de ações.</h1>
    <GenericTable
      :columns="columns"
      :data="data"
      :actions="['edit', 'delete']"
      class="mb-10"
    >
      <template #cell="{ rowData }">
        <td
          v-for="(col, index) in columns"
          :key="index"
          class="font-bold p-2"
        >
          {{ rowData[col.key] }}
        </td>
      </template>
    </GenericTable>
  </div>
</template>
