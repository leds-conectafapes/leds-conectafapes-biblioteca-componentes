<script setup lang="ts">
import GenericTable from './components/GenericTable.vue'
import GenericTitle from './components/GenericTitle.vue'
import { computed, ref } from 'vue'
const headers = {
  date: { title: 'Data de ingresso', type: 'date', sortable: true },
  name: { title: 'Nome do bolsista', type: 'text', sortable: true },
  status: { title: 'Status da Bolsa', type: 'status', sortable: false },
  actions: { title: 'Ações', type: 'actions', sortable: false }
}


const items = [
  {
    name: 'João Carlos Alberto Alameda',
    date: '2025-04-23T17:02:59-03:00',
    status: 'Manutenção',
    actions: ['view', 'delete']
  },
  {
    name: 'Maria da Conceição Pereira da Silva',
    date: '2024-02-10T17:02:59-03:00',
    status: 'Ativo',
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'José da Silva Santos',
    date: '2023-01-15T17:02:59-03:00',
    status: 'Inativo',
    actions: ['view', 'delete']
  },
  {
    name: 'Ana Maria de Souza',
    date: '2022-12-05T17:02:59-03:00',
    status: 'Ativo',
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'Carlos Alberto de Oliveira',
    date: '2021-11-20T17:02:59-03:00',
    status: 'Manutenção',
    actions: ['view', 'delete']
  }
]
const pageNumber = ref(1)
const totalPages = computed(() => Math.ceil(items.length / 2))
const pageSize = ref(2)
const pageSizeOptions = [2, 5, 10, 25, 50]
const hasNextPage = computed(() => pageNumber.value < totalPages.value)
const hasPreviousPage = computed(() => pageNumber.value > 1)

const items_paginados = computed(() => items.slice(pageNumber.value -1, pageNumber.value -1 + pageSize.value))
/* 
"pageNumber": 1,
"pageSize": 25,
"totalRecords": 1,
"totalPages": 1,
"hasNextPage": false,
"hasPreviousPage": false,
*/

const onAction = (action: string, index: number) => {
  console.log(action, index)
}

</script>

<template>
  <GenericTitle text="TESTE" />
  <GenericTable
    :headers="headers"
    :items="items_paginados"
    class="m-2"
    @action="onAction"
    :paginationItems="paginationItems"
    v-model:page="pageNumber"
    v-model:pageSize="pageSize"
    :totalPages="totalPages"
  />
</template>

<style scoped>
</style>
