import { ref } from 'vue'
import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'

import GenericButton from '../components/GenericButton/GenericButton.vue'
import GenericTextArea from '../components/GenericTextArea/GenericTextArea.vue'

import type { textAreaState } from '../types'

const textAreaStates: textAreaState[] = ['default', 'error', 'warning', 'disabled']
const requiredValues = [true, false]

const textAreaStyleMap: Record<textAreaState, {
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
  describe('testes de estilização', () => {
    it.each(
      textAreaStates.flatMap(state =>
        requiredValues.map(required => [state, required] as [textAreaState, boolean])
      )
    )(
      'renderiza corretamente com state "%s" e required %s',
      (state, required) => {
        const { getByLabelText, getByText } = render(GenericTextArea, {
          props: {
            label: `TextArea ${state} ${required ? 'required' : 'optional'}`,
            placeholder: `${state} ${required}`,
            state,
            required
          }
        })

        const label = getByText(`TextArea ${state} ${required ? 'required' : 'optional'}`, { exact: false })
        const textArea = getByLabelText(`TextArea ${state} ${required ? 'required' : 'optional'}`, { exact: false })

        // Verifica a aplicação do anel
        expect(textArea).toHaveClass(`${textAreaStyleMap[state].ring}`)

        // Verifica a aplicação da cor do background
        if (textAreaStyleMap[state].bg) {
          expect(textArea).toHaveClass(`${textAreaStyleMap[state].bg}`)
        }

        // Verifica a aplicação do placeholder no TextArea
        expect(textArea).toHaveAttribute('placeholder', `${state} ${required}`)

        // Verifica a aplicação da label no TextArea
        expect(label).toBeTruthy()

        // Verifica a aplicação do * quando required
        if (required) {
          expect(label).toHaveTextContent(/\*/)
        } else {
          expect(label).not.toHaveTextContent(/\*/)
        }
      }
    )
  })

  describe('testes de comportamento', () => {
    it('vincula corretamente o valor com v-model', async () => {
      const modelValue = ref<string | undefined>('Teste Testes')

      const { getByLabelText } = render(GenericTextArea, {
        props: {
          label: 'textArea',
          placeholder: 'Escolha',
          modelValue: modelValue.value,
          'onUpdate:modelValue': (val: string | undefined) => {
            modelValue.value = val
          }
        }
      })

      const textArea = getByLabelText('textArea') as HTMLInputElement
      expect(textArea).toHaveValue('Teste Testes')

      await fireEvent.update(textArea, 'Teste')
      expect(modelValue.value).toBe('Teste')
    })

    it('envio de formulário', async () => {
      const onSubmit = vi.fn()
      const { getByLabelText, getByText } = render({
        components: { GenericTextArea, GenericButton },
        template: `
          <form @submit="submitForm">
            <GenericTextArea v-model="textAreaModel" label="TextArea" placeholder="Escolha" />
            <GenericButton label="Enviar" type="submit" />
          </form>
        `,
        setup() {
          const textAreaModel = ref()
          const submitForm = () => {
            onSubmit(textAreaModel.value)
          }
          return { textAreaModel, submitForm }
        }
      })

      const textArea = getByLabelText('TextArea') as HTMLInputElement
      const button = getByText('Enviar')

      await fireEvent.update(textArea, 'Testes')
      fireEvent.click(button)
      expect(onSubmit).toHaveBeenCalledWith('Testes')
    })

    it.each(textAreaStates.filter(s => s !== 'disabled'))(
      'permite interação quando state = "%s"',
      async (state) => {
        const modelValue = ref<string | undefined>('')

        const { getByPlaceholderText } = render(GenericTextArea, {
          props: {
            label: 'TextArea',
            placeholder: 'Digite...',
            state,
            modelValue: modelValue.value,
            'onUpdate:modelValue': (val: string | undefined) => (modelValue.value = val)
          }
        })

        const textArea = getByPlaceholderText('Digite...') as HTMLInputElement
        expect(textArea.disabled).toBe(false)

        await fireEvent.update(textArea, 'Teste Teste')
        expect(modelValue.value).toBe('Teste Teste')
      }
    )

    it('exibe mensagens de erro corretamente', () => {
      const { getByText, getByPlaceholderText } = render(GenericTextArea, {
        props: {
          label: 'TextArea',
          placeholder: 'Digite...',
          errorMessages: ['Campo obrigatório', 'Data inválida']
        }
      })

      expect(getByText('Campo obrigatório')).toBeInTheDocument()
      expect(getByText('Data inválida')).toBeInTheDocument()

      const textArea = getByPlaceholderText('Digite...') as HTMLInputElement
      expect(textArea.classList.contains('bg-error-100/10')).toBe(true)
    })
  })

})