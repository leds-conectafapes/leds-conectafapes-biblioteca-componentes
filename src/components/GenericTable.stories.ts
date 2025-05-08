import type { Meta, StoryObj } from '@storybook/vue3';

import GenericTable from './GenericTable.vue';

const meta = {
  title: 'Basic Components/GenericTable',
  component: GenericTable,
  tags: ['autodocs'],

  argTypes: {
    headers: { control: 'object', description: 'Configurações da coluna da tabela', required: true },
    items: { control: 'object', description: 'Itens da tabela', required: true },
    totalRecords: { control: 'number', description: 'Quantidade total de registros' },
    itemsPerPage: { control: 'number', description: 'Quantidade de registros por página', required: true },
    totalPages: { control: 'number', description: 'Quantidade total de páginas' },
    page: { control: 'number', description: 'Página atual' },
  },

} satisfies Meta<typeof GenericTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: {
        name: {title: 'Nome', type: 'text', sortable: true},
        link: {title: 'Link', type: 'link', sortable: true},
        date: {title: 'Data', type: 'date', sortable: true},
        status: {title: 'Status', type: 'status', sortable: true},
        actions: {title: 'Ações', type: 'actions'},
    },
    items: [
        {name: 'Nome 1', link: 'Link 1', date: '2025-05-07T16:47:56.550Z', status: 'Ativo', actions: ['delete']},
        {name: 'Nome 2', link: 'Link 2', date: '2026-02-28T16:47:56.550Z', status: 'Inativo', actions: ['view', 'edit', 'delete']},
        {name: 'Nome 3', link: 'Link 3', date: '2023-07-10T16:47:56.550Z', status: 'Ativo', actions: ['view', 'edit', 'delete']},
        {name: 'Nome 4', link: 'Link 4', date: '2026-03-17T16:47:56.550Z', status: 'Ativo', actions: ['view', 'edit']},
        {name: 'Nome 5', link: 'Link 5', date: '2025-02-15T16:47:56.550Z', status: 'Ativo', actions: ['view']},
      ],
      totalRecords: 25,
      itemsPerPage: 5,
      totalPages: 5,
      page: 1,
    }
}
