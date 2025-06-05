<script setup lang="ts">
// import GenericTable from './components/GenericTable/GenericTable.vue'
// import GenericTitle from './components/GenericTitle/GenericTitle.vue'
// import GenericInput from './components/GenericInput/GenericInput.vue'
// import GenericDatePicker from './components/GenericDatePicker/GenericDatePicker.vue'
// import GenericSelect from './components/GenericSelect/GenericSelect.vue'
// import GenericButton from './components/GenericButton/GenericButton.vue'
import GenericRadioGroup from './components/GenericRadioGroup/GenericRadioGroup.vue'
// import GenericCheckbox from './components/GenericCheckbox/GenericCheckbox.vue'
// import GenericTextArea from './components/GenericTextArea/GenericTextArea.vue'
import { ref } from 'vue'

// const headers = {
//   name: { title: 'Nome do bolsista', type: 'text', sortable: true },
//   date: { title: 'Data de ingresso', type: 'date', sortable: true },
//   status: { title: 'Status da Bolsa', type: 'status', sortable: false },
//   dinheiro: { title: 'Dinheiro', type: 'currency', sortable: true },
//   actions: { title: 'Ações', type: 'actions', sortable: false }
// } as const


// const items = [
//   {
//     name: 'João Carlos Alberto Alameda',
//     date: '2025-04-23T17:02:59-03:00',
//     dinheiro: 1000,
//     status: 'Manutenção',
//     actions: ['view', 'delete'],
//   },
//   {
//     name: 'Maria da Conceição Pereira da Silva',
//     date: '2024-02-10T17:02:59-03:00',
//     status: 'Ativo',
//     dinheiro: 2000,
//     actions: ['view', 'delete', 'edit']
//   },
//   {
//     name: 'José da Silva Santos',
//     date: '2023-01-15T17:02:59-03:00',
//     status: 'Inativo',
//     dinheiro: 3000,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Ana Maria de Souza',
//     date: '2022-12-05T17:02:59-03:00',
//     status: 'Ativo',
//     dinheiro: 4000,
//     actions: ['view', 'delete', 'edit']
//   },
//   {
//     name: 'Carlos Alberto de Oliveira',
//     date: '2021-11-20T17:02:59-03:00',
//     status: 'Manutenção',
//     dinheiro: 5000,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Fernanda da Silva Costa',
//     date: '2020-10-30T17:02:59-03:00',
//     status: 'Inativo',
//     dinheiro: 3400,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Roberto Carlos Almeida',
//     date: '2019-09-15T17:02:59-03:00',
//     status: 'Ativo',
//     dinheiro: 7020,
//     actions: ['view', 'delete', 'edit']
//   },
//   {
//     name: 'Patrícia de Souza Santos',
//     date: '2018-08-05T17:02:59-03:00',
//     status: 'Manutenção',
//     dinheiro: 1000,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Ricardo da Silva Oliveira',
//     date: '2017-07-10T17:02:59-03:00',
//     status: 'Inativo',
//     dinheiro: 9000,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Juliana Maria de Souza',
//     date: '2016-06-20T17:02:59-03:00',
//     status: 'Ativo',
//     dinheiro: 5500,
//     actions: ['view', 'delete', 'edit']
//   },
//   {
//     name: 'André Luiz Almeida',
//     date: '2015-05-15T17:02:59-03:00',
//     status: 'Manutenção',
//     dinheiro: 30000,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Tatiane da Silva Costa',
//     date: '2014-04-25T17:02:59-03:00',
//     status: 'Inativo',
//     dinheiro: 12300,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Gustavo Carlos de Oliveira',
//     date: '2013-03-30T17:02:59-03:00',
//     status: 'Ativo',
//     dinheiro: 13030,
//     actions: ['view', 'delete', 'edit']
//   },
//   {
//     name: 'Mariana de Souza Santos',
//     date: '2012-02-15T17:02:59-03:00',
//     status: 'Manutenção',
//     dinheiro: 7020,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Leonardo da Silva Oliveira',
//     date: '2011-01-10T17:02:59-03:00',
//     status: 'Inativo',
//     dinheiro: 15050,
//     actions: ['view', 'delete']
//   },
//   {
//     name: 'Camila Maria de Souza',
//     date: '2010-12-20T17:02:59-03:00',
//     status: 'Ativo',
//     dinheiro: 2004,
//     actions: ['view', 'delete', 'edit']
//   },
//   {
//     name: 'Felipe Almeida Santos',
//     date: '2009-11-05T17:02:59-03:00',
//     status: 'Manutenção',
//     dinheiro: 17050,
//     actions: ['view', 'delete']
//   }
// ]
//const totalPages = computed(() => Math.ceil(items.length / 5))
//const totalRecords = computed(() => items.length)
//const pageSize = ref(5)

//const items_paginados = computed(() => items.slice((pageNumber.value -1) * pageSize.value, pageNumber.value * pageSize.value))

// const onAction = (action: string, index: number) => {
//   console.log(action, index)
// }

// const inputModel = ref('')
// const datePickerModel = ref('')
// const selectModel = ref('')
const radioModel = ref('')
// const checkboxModel = ref()
// const textAreaModel = ref('')
</script>

<template>
  <!-- <GenericTitle text="TESTE" />
  <GenericTable
    :headers="headers"
    :items-per-page="5"
    :items="items"
    class="m-2"
    @action="onAction"
  /> -->
  <!-- <div>
    <GenericInput
      v-model="inputModel"
      type="number"
      placeholder="Placeholder"
      label="Label"
      class="w-xl m-2"
    />
    {{ typeof(inputModel) }}
  </div>

  <div>
    <GenericDatePicker
      v-model="datePickerModel"
      placeholder="Placeholder"
      label="Label"
      class="w-xl m-2"
    />
    {{ datePickerModel }}
  </div>

  <div>
    <GenericSelect
      v-model="selectModel"
      placeholder="Placeholder"
      label="Label"
      class="w-xl m-2"
      :options="['Option 1', 'Option 2', 'Option 3']"
    />
    {{ inputModel }}
  </div> -->

  <!-- <div>
    <GenericButton
      label="Label"
      variant="primary"
    />
  </div> -->

  <div>
    <GenericRadioGroup
      v-model="radioModel"
      label="Label"
      class="w-xl m-2"
      :options="[
        { value: 'Option 1', text: 'Option 1' },
        { value: 'Option 2', text: 'Option 2' },
        { value: 'Option 3', text: 'Option 3' },
      ]"
    />
    {{ radioModel }}
  </div>

  <!-- <div>
    <GenericCheckbox
      v-model="checkboxModel"
      label="Label"
      class="w-xl m-2"
    />
    {{ typeof(checkboxModel) }}
  </div>

  <div class="m-2 w-xl">
    <GenericTextArea
      v-model="textAreaModel"
      placeholder="Placeholder"
      label="Label"
    />
    {{ textAreaModel }}
  </div> -->
</template>

<style scoped>
</style>
