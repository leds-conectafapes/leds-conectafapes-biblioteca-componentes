// tests/GenericSelect.spec.ts
import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericSelect from '../components/GenericSelect/GenericSelect.vue'
import { ref } from 'vue'
import type { selectState } from '../types'

const selectStates: selectState[] = ['default', 'error', 'warning', 'disabled']

const selectStyleMap: Record<selectState, {
  ring: string
  bg: string | undefined
}> = {
  default: {
    ring: 'ring-gray-500',
    bg: undefined
  },
  error: {
    ring: 'ring-error-300',
    bg: 'bg-error-100/10',
  },
  warning: {
    ring: 'ring-warning-100',
    bg: undefined
  },
  disabled: {
    ring: '!ring-0',
    bg: 'bg-gray-100/40',
  },
}

describe('GenericSelect.vue', () => {
  it.each(selectStates)(
    'renderiza corretamente com state "%s"',
    (state) => {
      const { getByRole } = render(GenericSelect, {
        props: {
          label: `Select ${state}`,
          placeholder: `${state}`,
          options: [],
          state
        }
      })

      const select = getByRole('combobox')

      // Testa a aplicação do anel
      expect(select).toHaveClass(`${selectStyleMap[state].ring}`)

      // Testa a aplicação da cor do background
      if (selectStyleMap[state].bg) {
        expect(select).toHaveClass(`${selectStyleMap[state].bg}`)
      }

      // Testa aplicação do placeholder no Select
      expect(select.firstChild).toHaveTextContent(state)
    }
  )

  it('renderiza o label corretamente', () => {
    const { getByText } = render(GenericSelect, {
      props: {
        label: 'Escolha uma opção',
        placeholder: 'Selecione',
        options: []
      }
    })

    expect(getByText('Escolha uma opção')).toBeInTheDocument()
  })

  it('adiciona "*" ao label quando required for true', () => {
    const { getByText } = render(GenericSelect, {
      props: {
        label: 'Categoria',
        required: true,
        placeholder: 'Escolher',
        options: []
      }
    })

    expect(getByText('Categoria*')).toBeInTheDocument()
  })

  it('vincula corretamente o valor com v-model', async () => {
    const model = ref<string | number | undefined>('banana')

    const { getByDisplayValue } = render(GenericSelect, {
      props: {
        label: 'Fruta',
        placeholder: 'Selecione',
        options: ['banana', 'maçã', 'uva'],
        modelValue: model.value,
        'onUpdate:modelValue': (val: string | number | undefined) => {
          model.value = val
        }
      }
    })

    const select = getByDisplayValue('banana') as HTMLSelectElement
    expect(select.value).toBe('banana')

    await fireEvent.update(select, 'uva')
    expect(model.value).toBe('uva')
  })

  it.each(selectStates.filter(s => s !== 'disabled'))(
    'permite interação quando state = "%s"',
    async (state) => {
      const model = ref<string | number | undefined>('')

      const { getByDisplayValue } = render(GenericSelect, {
        props: {
          label: 'Estado',
          placeholder: 'Selecionar',
          options: ['ativo', 'inativo'],
          state,
          modelValue: model.value,
          'onUpdate:modelValue': (val: string | number | undefined) => {
            model.value = val
          }
        }
      })

      const select = getByDisplayValue('Selecionar') as HTMLSelectElement
      expect(select.disabled).toBe(false)

      await fireEvent.update(select, 'ativo')
      expect(model.value).toBe('ativo')
    }
  )

  it('desabilita o select se state for "disabled"', () => {
    const { getByDisplayValue } = render(GenericSelect, {
      props: {
        label: 'Estado',
        placeholder: 'Selecionar',
        options: ['ativo', 'inativo'],
        state: 'disabled'
      }
    })

    const select = getByDisplayValue('Selecionar') as HTMLSelectElement
    expect(select.disabled).toBe(true)
  })

  it('exibe mensagens de erro corretamente e aplica classe de erro', () => {
    const { getByText, getByDisplayValue } = render(GenericSelect, {
      props: {
        label: 'Curso',
        placeholder: 'Escolha',
        options: ['Engenharia', 'Medicina'],
        errorMessages: ['Campo obrigatório', 'Valor inválido']
      }
    })

    expect(getByText('Campo obrigatório')).toBeInTheDocument()
    expect(getByText('Valor inválido')).toBeInTheDocument()

    const select = getByDisplayValue('Escolha') as HTMLSelectElement
    expect(select.classList.contains('bg-error-100/10')).toBe(true)
  })
})
