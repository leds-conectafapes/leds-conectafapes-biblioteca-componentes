<script setup lang="ts">
import GenericTable from './components/GenericTable/GenericTable.vue';
import GenericCheckbox from './components/GenericCheckbox/GenericCheckbox.vue';
import GenericTooltip from './components/GenericTooltip/GenericTooltip.vue';
import { computed, reactive, ref, watch, h, type VNode } from 'vue';
import type { TableRender, TableAction, TableHeader } from './types';

type Data = {
  name: string;
  date: string;
}
const columns: TableHeader<Data>[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'date', title: 'Date', },
]

const data: Data[] = [
  { name: 'Item 1', date: '2024-05-01' },
  { name: 'Item 2', date: '2024-04-15' },
  { name: 'Item 3', date: '2024-05-01' },
  { name: 'Item 4', date: '2024-04-15' },
  { name: 'Item 5', date: '2024-05-01' },
  { name: 'Item 6', date: '2024-04-15' },
  { name: 'Item 7', date: '2024-05-01' },
  { name: 'Item 8', date: '2024-04-15' },
  { name: 'Item 9', date: '2024-05-01' },
  { name: 'Item 10', date: '2024-04-15' },
]

const actions: TableAction<Data>[] = [
  {
    type: 'edit',
    onClick: (row) => {
      alert(`O botao para editar a linha com nome "${row.name}" foi clicado.`)
    }
  },
  {
    type: 'delete',
    variant: 'danger',
    onClick: (row) => {
      alert(`O botao para excluir a linha com nome "${row.name}" foi clicado.`)
    }
  },
  {
    type: 'custom',
    icon: 'attach_file_add',
    tooltip: 'Subir arquivo ?',
    onClick: (row) => {
      alert(`Um botao diferente de ação na linha com nome ${row.name} foi clicado.`)
    }
  }
]

const currentPage = ref(1)

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

const columnsWithRender: TableHeader<Data>[] = [
  { key: 'name', title: 'Name', sortable: true },
  {
    key: 'date',
    title: 'Date',
    render: (date, _row, _col, index) => {
      const text = index % 2 == 0
        ? 'O evento começou no dia ' + date
        : 'O evento se encerrou no dia ' + date
      return h('span', { class: 'font-bold text-4xl' }, text)
      // return () => h('span', { class: 'font-bold' }, text)
      /* return () => [
        h('span', { class: 'font-bold' }, text),
        h('button', null, 'clica-me')
      ] */
      /* const cellElements: VNode[] = []
      cellElements.push(h('span', { class: 'font-bold' }, text))
      cellElements.push(h('button', null, 'clica-me'))
      return () => cellElements */
    }
  },
]

const dataWithRender: (Data & { render?: TableRender<Data> })[] = [
  {
    name: 'Item 1',
    date: '2024-05-01'
  },
  {
    name: 'Item 2',
    date: '2024-04-15',
    render: (value) => {
      return h('a', { href: 'https://youtu.be/f-gi8k4IRh8?t=2851', target: '_blank' }, value.toUpperCase())
    }
  },
]

const dataWithActions: (Data & { actions?: TableAction<Data>[] })[] = [
  {
    name: 'Item 1',
    date: '2024-05-01',
    actions: [
      {
        type: 'view',
        tooltip: 'Visualizar',
        onClick: (_) => {
          console.log('Voce clicou no botao de visualizacao da linha com nome "Item 1"')
          alert('Veja o console de desenvolvedor.')
        }
      }
    ]
  },
  {
    name: 'Item 2',
    date: '2024-04-15',
    actions: [
      { type: 'view', onClick: (_) => alert('Voce clicou no botao de visualizacao da linha com nome "Item 2"') }
    ]
  },
  {
    name: 'Item 3',
    date: '2024-04-15',
  },
]
</script>

<template>
  <div class="m-10">
    <h1>Exemplo Básico</h1>
    <GenericTable
      v-model:page="currentPage"
      :columns="columns"
      :data="data"
      :items-per-page="2"
      :total-items="data.length"
      :actions="actions"
      class="mb-10"
    />

    <h1>Exemplo de tabela com selecao de linhas</h1>
    <GenericTable
      :columns="columns"
      :data="data"
      :actions="actions"
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
      :actions="actions"
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

    <h1>Coluna com <em>render function</em></h1>
    <GenericTable
      :columns="columnsWithRender"
      :data="data"
      :actions="actions"
      class="mb-10"
    />

    <h1>Linha com <em>render function</em></h1>
    <GenericTable
      :columns="columns"
      :data="dataWithRender"
      :actions="actions"
      class="mb-10"
    />

    <h1>Linha com ações</h1>
    <GenericTable
      :columns="columns"
      :data="dataWithActions"
      class="mb-10"
    />

    <GenericTooltip
      class="w-fit ml-100"
      text="texto da tooltip aosethusnteoahuansotheusnatoheusntoaheusaonthue"
      position="top"
    >
      <h1>header com tooltip</h1>
    </GenericTooltip>
  </div>
</template>
