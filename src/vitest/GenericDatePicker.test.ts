import { ref } from 'vue'
import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'

import GenericButton from '../components/GenericButton/GenericButton.vue'
import GenericDatePicker from '../components/GenericDatePicker/GenericDatePicker.vue'

import type { inputState } from '../types'

const inputStates: inputState[] = ['default', 'error', 'warning', 'disabled']
const requiredValues = [true, false]

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
  it.each(
    inputStates.flatMap(state =>
      requiredValues.map(required => [state, required] as [inputState, boolean])
    )
  )(
    'renderiza corretamente com state "%s" e required %s',
    (state, required) => {
      const { getByLabelText, getByText } = render(GenericDatePicker, {
        props: {
          label: `DatePicker ${state} ${required ? 'required' : 'optional'}`,
          placeholder: `${state} ${required}`,
          state,
          required
        }
      })

      const label = getByText(`DatePicker ${state} ${required ? 'required' : 'optional'}`, { exact: false })
      const datePicker = getByLabelText(`DatePicker ${state} ${required ? 'required' : 'optional'}`, { exact: false })

      // Verifica a aplicação do anel
      expect(datePicker).toHaveClass(`${inputStyleMap[state].ring}`)

      // Verifica a aplicação da cor do background
      if (inputStyleMap[state].bg) {
        expect(datePicker).toHaveClass(`${inputStyleMap[state].bg}`)
      }

      // Verifica a aplicação do placeholder no DatePicker
      expect(datePicker).toHaveAttribute('placeholder', `${state} ${required}`)

      // Verifica a aplicação da label no DatePicker
      expect(label).toBeTruthy()

      // Verifica a aplicação do * quando required
      if (required) {
        expect(label).toHaveTextContent(/\*/)
      } else {
        expect(label).not.toHaveTextContent(/\*/)
      }
    }
  )

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

  it('envio de formulário', async () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render({
      components: { GenericDatePicker, GenericButton },
      template: `
        <form @submit="submitForm">
          <GenericDatePicker v-model="inputModel" label="DatePicker" placeholder="Escolha" />
          <GenericButton label="Enviar" type="submit" />
        </form>
      `,
      setup() {
        const inputModel = ref()
        const submitForm = () => {
          onSubmit(inputModel.value)
        }
        return { inputModel, submitForm }
      }
    })

    const datePicker = getByLabelText('DatePicker') as HTMLInputElement
    const button = getByText('Enviar')

    expect(datePicker).toHaveTextContent('')
    await fireEvent.update(datePicker, '2022-12-13')
    fireEvent.click(button)
    expect(onSubmit).toHaveBeenCalledWith('2022-12-13')
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