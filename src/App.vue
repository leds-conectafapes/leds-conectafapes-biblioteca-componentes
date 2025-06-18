<script setup lang="ts">
import GenericTablee from './components/GenericTable/GenericTablee.vue';
import type { tableHeaderType, tableItemType } from './types';

const items: tableItemType<tableHeaderType>[] = [
  { id: 1, name: 'Item 1', date: '2024-05-01', status: 'Ativo', link: 'link1' },
  { id: 2, name: 'Item 2', date: '2024-04-15', status: 'Inativo', link: 'link2' },
  { id: 3, name: 'Item 3', date: '2024-03-10', status: 'Ativo', link: 'link3' },
  { id: 4, name: 'Item 4', date: '2024-02-05', status: 'Inativo', link: 'link4' },
  { id: 5, name: 'Item 5', date: '2024-01-20', status: 'Ativo', link: 'link5' },
  { id: 6, name: 'Item 6', date: '2023-12-15', status: 'Inativo', link: 'link6' },
] as const

const header: tableHeaderType = {
  name: { title: 'Nome', type: 'text', sortable: true },
  date: { title: 'Data', type: 'date', sortable: true },
  status: { title: 'Status', type: 'status' },
  link: { title: 'Link', type: 'link' },
  actions: { title: 'Ações', type: 'actions', actions: ['view', 'delete', 'edit', 'open_in_new'] }
} as const

function actionOnClick(action: string, itemKey: number | undefined) {
  console.log(action, itemKey)
}
</script>

<template>
  <GenericTablee
    :items-per-page="5"
    :items="items"
    :header="header"
    @action="actionOnClick"
  >
    <template #date="{ item }">
      {{ item }}
    </template>
  </GenericTablee>
</template>
