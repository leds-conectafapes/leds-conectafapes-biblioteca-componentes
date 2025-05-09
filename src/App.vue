<script setup lang="ts">
import GenericTable from './components/GenericTable.vue'
import GenericTitle from './components/GenericTitle.vue'
import GenericSelect from './components/GenericSelect.vue'
import { computed, ref } from 'vue'
const headers = {
  name: { title: 'Nome do bolsista', type: 'text', sortable: true },
  date: { title: 'Data de ingresso', type: 'date', sortable: true },
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
  },
  {
    name: 'Fernanda da Silva Costa',
    date: '2020-10-30T17:02:59-03:00',
    status: 'Inativo',
    actions: ['view', 'delete']
  },
  {
    name: 'Roberto Carlos Almeida',
    date: '2019-09-15T17:02:59-03:00',
    status: 'Ativo',
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'Patrícia de Souza Santos',
    date: '2018-08-05T17:02:59-03:00',
    status: 'Manutenção',
    actions: ['view', 'delete']
  },
  {
    name: 'Ricardo da Silva Oliveira',
    date: '2017-07-10T17:02:59-03:00',
    status: 'Inativo',
    actions: ['view', 'delete']
  },
  {
    name: 'Juliana Maria de Souza',
    date: '2016-06-20T17:02:59-03:00',
    status: 'Ativo',
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'André Luiz Almeida',
    date: '2015-05-15T17:02:59-03:00',
    status: 'Manutenção',
    actions: ['view', 'delete']
  },
  {
    name: 'Tatiane da Silva Costa',
    date: '2014-04-25T17:02:59-03:00',
    status: 'Inativo',
    actions: ['view', 'delete']
  },
  {
    name: 'Gustavo Carlos de Oliveira',
    date: '2013-03-30T17:02:59-03:00',
    status: 'Ativo',
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'Mariana de Souza Santos',
    date: '2012-02-15T17:02:59-03:00',
    status: 'Manutenção',
    actions: ['view', 'delete']
  },
  {
    name: 'Leonardo da Silva Oliveira',
    date: '2011-01-10T17:02:59-03:00',
    status: 'Inativo',
    actions: ['view', 'delete']
  },
  {
    name: 'Camila Maria de Souza',
    date: '2010-12-20T17:02:59-03:00',
    status: 'Ativo',
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'Felipe Almeida Santos',
    date: '2009-11-05T17:02:59-03:00',
    status: 'Manutenção',
    actions: ['view', 'delete']
  }
]
const pageNumber = ref(1)
const totalPages = computed(() => Math.ceil(items.length / 15))
const totalRecords = computed(() => items.length)
const pageSize = ref(5)

const items_paginados = computed(() => items.slice((pageNumber.value -1) * pageSize.value, pageNumber.value * pageSize.value))

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
    :totalRecords="totalRecords"
    @action="onAction"
    v-model:page="pageNumber"
    :totalPages="totalPages"
    :itemsPerPage="pageSize"
  />
  <GenericSelect :options="['A', 'B', 'C']" placeholder="Selecione uma letra" label="Letra" class="w-xl m-2"/>
</template>

<style scoped>
</style>
