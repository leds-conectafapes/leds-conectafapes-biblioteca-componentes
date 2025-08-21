import type { Meta, StoryObj } from '@storybook/vue3';

import GenericTable from './GenericTable.vue';

const meta: Meta<typeof GenericTable> = {
  title: 'Components/GenericTable',
  component: GenericTable,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: 'Tabela',
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
    itemsPerPage: {
      control: 'number',
      description: 'Quantidade de registros por página. Se presente, ativa a paginação.',
      required: false
    },
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
        { name: 'Nome 1', link: 'Link 1', date: '2025-05-07T16:47:56.550Z', status: 'Ativo', currency: 1000, actions: ['delete']},
        { name: 'Nome 2', link: 'Link 2', date: '2026-02-28T16:47:56.550Z', status: 'Inativo', currency: 2000, actions: ['view', 'edit', 'delete']},
        { name: 'Nome 3', link: 'Link 3', date: '2023-07-10T16:47:56.550Z', status: 'Ativo', currency: 2000, actions: ['view', 'edit', 'delete']},
        { name: 'Nome 4', link: 'Link 4', date: '2026-03-17T16:47:56.550Z', status: 'Ativo', currency: 7000, actions: ['view', 'edit']},
        { name: 'Nome 5', link: 'Link 5', date: '2025-02-15T16:47:56.550Z', status: 'Ativo', currency: 400, actions: ['view']},
      ],
    }
}
