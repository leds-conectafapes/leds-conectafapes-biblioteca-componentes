import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericDatePicker from '../components/GenericDatePicker/GenericDatePicker.vue'
import { ref } from 'vue'
import type { inputState } from '../types'

const inputStates: inputState[] = ['default', 'error', 'warning', 'disabled']

const inputStyleMap: Record<inputState, {
  ring: string
  bg: string | undefined
}> = {
  default: {
    ring: 'ring-gray-500',
    bg: undefined,
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

describe('GenericDatePicker.vue', () => {
  it.each(inputStates)(
    'renderiza corretamente com state "%s"',
    (state) => {
      const { getByPlaceholderText } = render(GenericDatePicker, {
        props: {
          label: `DatePicker ${state}`,
          placeholder: `${state}`,
          state
        }
      })

      const datePicker = getByPlaceholderText(`${state}`)

      // Testa a aplicação do anel
      expect(datePicker).toHaveClass(`${inputStyleMap[state].ring}`)

      // Testa a aplicação da cor do background
      if (inputStyleMap[state].bg) {
        expect(datePicker).toHaveClass(`${inputStyleMap[state].bg}`)
      }
    }
  )

  it('renderiza o label corretamente', () => {
    const { getByText } = render(GenericDatePicker, {
      props: {
        label: 'Data de nascimento',
        placeholder: 'Selecione uma data'
      }
    })

    expect(getByText('Data de nascimento')).toBeInTheDocument()
  })

  it('adiciona "*" ao label quando "required" for true', () => {
    const { getByText } = render(GenericDatePicker, {
      props: {
        label: 'Data de matrícula',
        required: true,
        placeholder: 'Selecione'
      }
    })

    expect(getByText('Data de matrícula*')).toBeInTheDocument()
  })

  it('vincula corretamente o valor com v-model', async () => {
    const modelValue = ref<string | undefined>('2024-12-31')

    const { getByDisplayValue } = render(GenericDatePicker, {
      props: {
        label: 'Data',
        placeholder: 'Escolha',
        modelValue: modelValue.value,
        'onUpdate:modelValue': (val: string | undefined) => {
          modelValue.value = val
        }
      }
    })

    const input = getByDisplayValue('2024-12-31') as HTMLInputElement
    expect(input.value).toBe('2024-12-31')

    await fireEvent.update(input, '2025-01-01')
    expect(modelValue.value).toBe('2025-01-01')
  })

  it('desabilita o input quando state = "disabled"', () => {
    const { getByPlaceholderText } = render(GenericDatePicker, {
      props: {
        label: 'Data',
        placeholder: 'Selecionar',
        state: 'disabled'
      }
    })

    const input = getByPlaceholderText('Selecionar') as HTMLInputElement
    expect(input.disabled).toBe(true)
  })

  it.each(inputStates.filter(s => s !== 'disabled'))(
    'permite interação quando state = "%s"',
    async (state) => {
      const modelValue = ref<string | undefined>('')

      const { getByPlaceholderText } = render(GenericDatePicker, {
        props: {
          label: 'Data',
          placeholder: 'Digite...',
          state,
          modelValue: modelValue.value,
          'onUpdate:modelValue': (val: string | undefined) => (modelValue.value = val)
        }
      })

      const input = getByPlaceholderText('Digite...') as HTMLInputElement
      expect(input.disabled).toBe(false)

      await fireEvent.update(input, '2025-05-21')
      expect(modelValue.value).toBe('2025-05-21')
    }
  )

  it('exibe mensagens de erro corretamente', () => {
    const { getByText, getByPlaceholderText } = render(GenericDatePicker, {
      props: {
        label: 'Data de início',
        placeholder: 'Selecionar data',
        errorMessages: ['Campo obrigatório', 'Data inválida']
      }
    })

    expect(getByText('Campo obrigatório')).toBeInTheDocument()
    expect(getByText('Data inválida')).toBeInTheDocument()

    const input = getByPlaceholderText('Selecionar data') as HTMLInputElement
    expect(input.classList.contains('bg-error-100/10')).toBe(true)
  })

})