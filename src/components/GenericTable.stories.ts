import type { Meta, StoryObj } from '@storybook/vue3';

import GenericTable from './GenericTable.vue';

const meta = {
  title: 'Basic Components/GenericTable',
  component: GenericTable,
  tags: ['autodocs'],

  argTypes: {
    headers: { control: 'object' },
    items: { control: 'object' },
    totalRecords: { control: 'number' },
    itemsPerPage: { control: 'number' },
    totalPages: { control: 'number' },
    page: { control: 'number' },
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
        {name: 'Nome 6', link: 'Link 6', date: '2024-11-30T16:47:56.550Z', status: 'Inativo', actions: ['edit', 'delete']},
        {name: 'Nome 7', link: 'Link 7', date: '2025-08-22T16:47:56.550Z', status: 'Ativo', actions: ['view', 'delete']},
        {name: 'Nome 8', link: 'Link 8', date: '2026-01-14T16:47:56.550Z', status: 'Pendente', actions: ['edit']},
        {name: 'Nome 9', link: 'Link 9', date: '2024-09-05T16:47:56.550Z', status: 'Ativo', actions: ['view', 'edit', 'delete']},
        {name: 'Nome 10', link: 'Link 10', date: '2025-12-18T16:47:56.550Z', status: 'Inativo', actions: ['delete']},
        {name: 'Nome 11', link: 'Link 11', date: '2023-12-25T16:47:56.550Z', status: 'Ativo', actions: ['view']},
        {name: 'Nome 12', link: 'Link 12', date: '2026-04-01T16:47:56.550Z', status: 'Pendente', actions: ['view', 'edit']},
        {name: 'Nome 13', link: 'Link 13', date: '2025-07-11T16:47:56.550Z', status: 'Ativo', actions: ['edit', 'delete']},
        {name: 'Nome 14', link: 'Link 14', date: '2024-03-08T16:47:56.550Z', status: 'Inativo', actions: ['view', 'delete']},
        {name: 'Nome 15', link: 'Link 15', date: '2026-05-19T16:47:56.550Z', status: 'Ativo', actions: ['view', 'edit']},
        {name: 'Nome 16', link: 'Link 16', date: '2023-10-31T16:47:56.550Z', status: 'Pendente', actions: ['delete']},
        {name: 'Nome 17', link: 'Link 17', date: '2025-01-09T16:47:56.550Z', status: 'Ativo', actions: ['view', 'edit', 'delete']},
        {name: 'Nome 18', link: 'Link 18', date: '2024-06-12T16:47:56.550Z', status: 'Inativo', actions: ['view']},
        {name: 'Nome 19', link: 'Link 19', date: '2026-06-30T16:47:56.550Z', status: 'Ativo', actions: ['edit']},
        {name: 'Nome 20', link: 'Link 20', date: '2023-08-15T16:47:56.550Z', status: 'Pendente', actions: ['view', 'delete']},
        {name: 'Nome 21', link: 'Link 21', date: '2025-09-03T16:47:56.550Z', status: 'Ativo', actions: ['view', 'edit']},
        {name: 'Nome 22', link: 'Link 22', date: '2024-12-24T16:47:56.550Z', status: 'Inativo', actions: ['delete']},
        {name: 'Nome 23', link: 'Link 23', date: '2026-07-15T16:47:56.550Z', status: 'Pendente', actions: ['view', 'edit', 'delete']},
        {name: 'Nome 24', link: 'Link 24', date: '2023-11-11T16:47:56.550Z', status: 'Ativo', actions: ['edit']},
        {name: 'Nome 25', link: 'Link 25', date: '2025-03-28T16:47:56.550Z', status: 'Inativo', actions: ['view', 'delete']}
      ],
      totalRecords: 25,
      itemsPerPage: 10,
      totalPages: 3,
      page: 1,
    }
}
