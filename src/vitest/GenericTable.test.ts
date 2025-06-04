import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericTable from '../components/GenericTable/GenericTable.vue'

const headers = {
  name: { title: 'Nome', type: 'text', sortable: true },
  date: { title: 'Data', type: 'date', sortable: true },
  status: { title: 'Status', type: 'status' },
  actions: { title: 'Ações', type: 'actions' }
} as const

const items = [
  { name: 'Item 1', date: '2024-05-01', status: 'Ativo', actions: ['view', 'edit'] },
  { name: 'Item 2', date: '2024-04-15', status: 'Inativo', actions: ['delete'] },
]

describe('GenericTable', () => {
  it('renderiza os headers e linhas corretamente', () => {
    const { findByText } = render(GenericTable, {
      props: {
        headers,
        items,
      },
    })

    expect(findByText('Nome')).toBeTruthy()
    expect(findByText('Data')).toBeTruthy()
    expect(findByText('Status')).toBeTruthy()
    expect(findByText('Ações')).toBeTruthy()

    expect(findByText('Item 1')).toBeTruthy()
    expect(findByText('01/05/2024')).toBeTruthy()
    expect(findByText('Ativo')).toBeTruthy()
  })

  it('troca página ao clicar no botão next', async () => {
    const manyItems = Array(30).fill(null).map((_, i) => ({
      name: `Item ${i + 1}`,
      date: '2024-05-01',
      status: 'Ativo',
      actions: ['view']
    }))

    const { findByText, getByRole } = render(GenericTable, {
      props: {
        headers,
        items: manyItems,
        itemsPerPage: 15,
        totalRecords: 30,
        totalPages: 2,
      },
    })

    const nextPageBtn = getByRole('button', { name: 'chevron_right' })
    await fireEvent.click(nextPageBtn!)

    expect(findByText('Item 16')).toBeTruthy()
  })
})
