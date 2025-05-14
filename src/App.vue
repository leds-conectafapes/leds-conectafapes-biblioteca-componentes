<script setup lang="ts">
import GenericTable from './components/GenericTable.vue'
import GenericTitle from './components/GenericTitle.vue'
import GenericSelect from './components/GenericSelect.vue'
import { ref } from 'vue'
const headers = {
  name: { title: 'Nome do bolsista', type: 'text', sortable: true },
  date: { title: 'Data de ingresso', type: 'date', sortable: true },
  status: { title: 'Status da Bolsa', type: 'status', sortable: false },
  dinheiro: { title: 'Dinheiro', type: 'currency', sortable: true },
  actions: { title: 'Ações', type: 'actions', sortable: false }
}


const items = [
  {
    name: 'João Carlos Alberto Alameda',
    date: '2025-04-23T17:02:59-03:00',
    status: 'Manutenção',
    dinheiro: 1000,
    actions: ['view', 'delete']
  },
  {
    name: 'Maria da Conceição Pereira da Silva',
    date: '2024-02-10T17:02:59-03:00',
    status: 'Ativo',
    dinheiro: 2000,
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'José da Silva Santos',
    date: '2023-01-15T17:02:59-03:00',
    status: 'Inativo',
    dinheiro: 3000,
    actions: ['view', 'delete']
  },
  {
    name: 'Ana Maria de Souza',
    date: '2022-12-05T17:02:59-03:00',
    status: 'Ativo',
    dinheiro: 4000,
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'Carlos Alberto de Oliveira',
    date: '2021-11-20T17:02:59-03:00',
    status: 'Manutenção',
    dinheiro: 5000,
    actions: ['view', 'delete']
  },
  {
    name: 'Fernanda da Silva Costa',
    date: '2020-10-30T17:02:59-03:00',
    status: 'Inativo',
    dinheiro: 3400,
    actions: ['view', 'delete']
  },
  {
    name: 'Roberto Carlos Almeida',
    date: '2019-09-15T17:02:59-03:00',
    status: 'Ativo',
    dinheiro: 7020,
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'Patrícia de Souza Santos',
    date: '2018-08-05T17:02:59-03:00',
    status: 'Manutenção',
    dinheiro: 1000,
    actions: ['view', 'delete']
  },
  {
    name: 'Ricardo da Silva Oliveira',
    date: '2017-07-10T17:02:59-03:00',
    status: 'Inativo',
    dinheiro: 9000,
    actions: ['view', 'delete']
  },
  {
    name: 'Juliana Maria de Souza',
    date: '2016-06-20T17:02:59-03:00',
    status: 'Ativo',
    dinheiro: 5500,
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'André Luiz Almeida',
    date: '2015-05-15T17:02:59-03:00',
    status: 'Manutenção',
    dinheiro: 30000,
    actions: ['view', 'delete']
  },
  {
    name: 'Tatiane da Silva Costa',
    date: '2014-04-25T17:02:59-03:00',
    status: 'Inativo',
    dinheiro: 12300,
    actions: ['view', 'delete']
  },
  {
    name: 'Gustavo Carlos de Oliveira',
    date: '2013-03-30T17:02:59-03:00',
    status: 'Ativo',
    dinheiro: 13030,
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'Mariana de Souza Santos',
    date: '2012-02-15T17:02:59-03:00',
    status: 'Manutenção',
    dinheiro: 7020,
    actions: ['view', 'delete']
  },
  {
    name: 'Leonardo da Silva Oliveira',
    date: '2011-01-10T17:02:59-03:00',
    status: 'Inativo',
    dinheiro: 15050,
    actions: ['view', 'delete']
  },
  {
    name: 'Camila Maria de Souza',
    date: '2010-12-20T17:02:59-03:00',
    status: 'Ativo',
    dinheiro: 2004,
    actions: ['view', 'delete', 'edit']
  },
  {
    name: 'Felipe Almeida Santos',
    date: '2009-11-05T17:02:59-03:00',
    status: 'Manutenção',
    dinheiro: 17050,
    actions: ['view', 'delete']
  }
]
const pageNumber = ref(1)
//const totalPages = computed(() => Math.ceil(items.length / 5))
//const totalRecords = computed(() => items.length)
//const pageSize = ref(5)

//const items_paginados = computed(() => items.slice((pageNumber.value -1) * pageSize.value, pageNumber.value * pageSize.value))

const onAction = (action: string, index: number) => {
  console.log(action, index)
}

const letra = ref('')
</script>

<template>
  <GenericTitle text="TESTE" />
  <GenericTable
    :headers="headers"
    :itemsPerPage="5"
    :items="items"
    class="m-2"
    @action="onAction"
    v-model:page="pageNumber"
  />
  <GenericSelect :options="['A', 'B', 'C']" placeholder="Selecione uma letra" label="Letra" class="w-xl m-2" v-model="letra"/>
</template>

<style scoped>
</style>
