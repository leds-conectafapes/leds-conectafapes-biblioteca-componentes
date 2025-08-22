import type { Meta, StoryObj } from '@storybook/vue3';

import GenericTable from './GenericTable.vue';
import { computed, h, ref } from 'vue';
import type { TableHeader, TableRender } from '../../types';

const meta: Meta<typeof GenericTable> = {
  title: 'Components/GenericTable',
  // https://github.com/storybookjs/storybook/issues/24238
  // @ts-ignore
  component: GenericTable,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: `
**GenericTable** é um componente de tabela tipado com suporte a genéricos e slots.

- Suporta configuração de colunas por meio de *array* de objetos
- Suporta dados das linhas por meio de *array* de objetos
- Agiliza implementação de funcionalidades costumeiras por meio de coluna de ações
- Suporta paginação *server-side*
- Oferece controle fino de exibição de colunas, linhas e até células especificas por meio de *slots* e *render functions*

### Exemplo:
\`\`\`vue
<script setup lang="ts">
import { GenericTable } from '@leds-ifes/components'
import type { TableHeader } from '@leds-ifes/components'

type Data = {
  name: string
  link: string
  date: string
  status: 'Ativo' | 'Inativo'
  currency: number
}

const columns: TableHeader<Data>[] = [
    { key: 'name', title: 'Nome', sortable: true },
    { key: 'link', title: 'Link', sortable: true },
    { key: 'date', title: 'Data', sortable: true },
    { key: 'status', title: 'Status', sortable: true },
    { key: 'currency', title: 'Dinheiro', sortable: true },
]

const data: Data[] = [
  { name: 'Nome 1', link: 'Link 1', date: '2025-05-07', status: 'Ativo', currency: 1000 },
  { name: 'Nome 2', link: 'Link 2', date: '2026-02-28', status: 'Inativo', currency: 2000 },
  { name: 'Nome 3', link: 'Link 3', date: '2023-07-10', status: 'Ativo', currency: 2000 },
  { name: 'Nome 4', link: 'Link 4', date: '2026-03-17', status: 'Ativo', currency: 7000 },
  { name: 'Nome 5', link: 'Link 5', date: '2025-02-15', status: 'Ativo', currency: 400 },
]
</script>
<template>
  <GenericTable
    :columns="columns"
    :data="data"
  />
</template>
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    }
  },

  argTypes: {
    columns: {
      control: 'object',
      description: 'Configurações da coluna da tabela',
      required: true
    },
    data: {
      control: 'object',
      description: 'Itens da tabela',
      required: true
    },
    page: {
      control: 'number',
      description: 'Página em exibição.'
    },
    itemsPerPage: {
      control: 'number',
      description: 'Quantidade de registros por página. Se presente, ativa a paginação.',
    },
    action: {
      control: 'object',
      description: 'Configurações da coluna de ações. A coluna de ações apresenta botões para ações rotineiras como visualização, edição e exclusão de dados. Se presente, coluna de ações é exibida.'
    },
    loading: {
      control: 'boolean',
      description: 'Aponta se os dados da tabela estão sendo carregados ou não.'
    },
    emptyText: {
      control: 'string',
      description: 'Texto exibido quando os dados estão carregados, mas vazios.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: `'Nenhum resultado encontrado'` }
      }
    }
  },

}

export default meta;

type Story = StoryObj<typeof GenericTable>;

export const Default: Story = {
  args: {
    columns: [
        { key: 'name', title: 'Nome', sortable: true},
        { key: 'link', title: 'Link', sortable: true},
        { key: 'date', title: 'Data', sortable: true},
        { key: 'status', title: 'Status', sortable: true},
        { key: 'currency', title: 'Dinheiro', sortable: true},
    ],
    data: [
        { name: 'Nome 1', link: 'Link 1', date: '2025-05-07', status: 'Ativo', currency: 1000 },
        { name: 'Nome 2', link: 'Link 2', date: '2026-02-28', status: 'Inativo', currency: 2000 },
        { name: 'Nome 3', link: 'Link 3', date: '2023-07-10', status: 'Ativo', currency: 2000 },
        { name: 'Nome 4', link: 'Link 4', date: '2026-03-17', status: 'Ativo', currency: 7000 },
        { name: 'Nome 5', link: 'Link 5', date: '2025-02-15', status: 'Ativo', currency: 400 },
      ],
    }
}

export const withPagination: Story = {
  name: 'Com Paginação',
  render: () => {
    const columns = [
      { key: 'name', title: 'Nome', sortable: true },
      { key: 'link', title: 'Link', sortable: true },
      { key: 'date', title: 'Data', sortable: true },
      { key: 'status', title: 'Status', sortable: true },
      { key: 'currency', title: 'Dinheiro', sortable: true },
    ]
    const data = [
      { name: 'Nome 1', link: 'Link 1', date: '2025-05-07', status: 'Ativo', currency: 1000 },
      { name: 'Nome 2', link: 'Link 2', date: '2026-02-28', status: 'Inativo', currency: 2000 },
      { name: 'Nome 3', link: 'Link 3', date: '2023-07-10', status: 'Ativo', currency: 2000 },
      { name: 'Nome 4', link: 'Link 4', date: '2026-03-17', status: 'Ativo', currency: 7000 },
      { name: 'Nome 5', link: 'Link 5', date: '2025-02-15', status: 'Ativo', currency: 400 },
    ]
    const page = ref(1)
    const paginatedData = computed(() => {
      const sliceStart = (page.value - 1) * 2
      const sliceEnd = (page.value) * 2
      return data.slice(sliceStart, sliceEnd)
    })

    return () => h(
      // @ts-ignore
      GenericTable,
      {
        columns,
        data: paginatedData.value,
        itemsPerPage: 2,
        totalItems: data.length,
        page: page.value,
        'onUpdate:page': (value: number) => page.value = value
      }
    )
  },
    parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
const columns = [
  { key: 'name', title: 'Nome', sortable: true },
  { key: 'link', title: 'Link', sortable: true },
  { key: 'date', title: 'Data', sortable: true },
  { key: 'status', title: 'Status', sortable: true },
  { key: 'currency', title: 'Dinheiro', sortable: true },
]
const data = [
  { name: 'Nome 1', link: 'Link 1', date: '2025-05-07', status: 'Ativo', currency: 1000 },
  { name: 'Nome 2', link: 'Link 2', date: '2026-02-28', status: 'Inativo', currency: 2000 },
  { name: 'Nome 3', link: 'Link 3', date: '2023-07-10', status: 'Ativo', currency: 2000 },
  { name: 'Nome 4', link: 'Link 4', date: '2026-03-17', status: 'Ativo', currency: 7000 },
  { name: 'Nome 5', link: 'Link 5', date: '2025-02-15', status: 'Ativo', currency: 400 },
]
const page = ref(1)
const paginatedData = computed(() => {
  const sliceStart = (page.value - 1) * 2
  const sliceEnd = (page.value) * 2
  return data.slice(sliceStart, sliceEnd)
})
</script>
<template>
  <GenericSelect
    v-model:page="currentPage"
    :columns="columns"
    :data="paginatedData"
    :items-per-page="2"
    :total-items="data.length"
  />
</template>
        `.trim(),
      },
    },
  },
}

export const withRenderFunctionPerRow: Story = {
  name: 'Com Render Function em linha',
  render: () => {
    type Flag = {
      bandeira: string
      significado: string
    }
    const columns: TableHeader<Flag>[] = [
      { key: 'bandeira', title: 'Bandeira' },
      { key: 'significado', title: 'Significado' },
    ]
    const data: (Flag & { render?: TableRender<Flag> })[] = [
      { bandeira: '🏴‍☠️', significado: 'Bandeira de pirata' },
      { bandeira: '🪦', significado: 'Anuncio de um cemitério' },
      {
        bandeira: '💀',
        significado: 'Prerigo!',
        render: (value, _row, col, _index) => {
          return h(
            'span',
            col === 'significado'
              ? { class: 'font-bold' }
              : null,
            value
          )
        }
      }
    ]

    return () => h(
      // @ts-ignore
      GenericTable,
      {
        columns,
        data,
      }
    )
  },
    parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
import type { TableHeader, TableRender } from '@leds-ifes/components'
type Flag = {
  bandeira: string
  significado: string
}
const columns: TableHeader<Flag>[] = [
  { key: 'bandeira', title: 'Bandeira' },
  { key: 'significado', title: 'Significado' },
]
const data: (Flag & { render?: TableRender<Flag> })[] = [
  { bandeira: '🏴‍☠️', significado: 'Bandeira de pirata' },
  { bandeira: '🪦', significado: 'Anuncio de um cemitério' },
  {
    bandeira: '💀',
    significado: 'Prerigo!',
    render: (value, _row, col, _index) => {
      return h(
        'span',
        col === 'significado'
          ? { class: 'font-bold' }
          : null,
        value
      )
    }
  }
]
</script>
<template>
  <GenericSelect
    :columns="columns"
    :data="data"
  />
</template>
        `.trim(),
      },
    },
  },
}