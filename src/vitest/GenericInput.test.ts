import { ref } from 'vue'
import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'

import GenericInput from '../components/GenericInput/GenericInput.vue'
import GenericButton from '../components/GenericButton/GenericButton.vue'

import type { inputType, inputState } from '../types'

const inputTypes: inputType[] = ['text', 'search', 'number', 'email', 'password', 'tel', 'url']
const inputStates: inputState[] = ['default', 'error', 'warning', 'disabled']
const requiredValue = [true, false]

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

describe('GenericInput.vue', () => {
  // Teste de estilização para cada combinação de type e state
  it.each(
    inputTypes.flatMap(type =>
      inputStates.flatMap(state => 
        requiredValue.map(required => [type, state, required] as [inputType, inputState, boolean])
      )
    )
  )(
    'estilização correta com type "%s", state "%s" e required %s',
    (type, state, required) => {
      const { getByLabelText, getByText } = render(GenericInput, {
        props: {
          type,
          label: `Input ${state} ${type} ${required ? 'required' : 'optional'}`,
          placeholder: `${state} ${type}`,
          state,
          required
        }
      })

      const input = getByLabelText(`Input ${state} ${type} ${required ? 'required' : 'optional'}`, { exact: false })
      const label = getByText(`Input ${state} ${type} ${required ? 'required' : 'optional'}`, { exact: false })

      // Verifica o tipo do input
      expect(input).toHaveAttribute('type', type)

      // Verifica a aplicação do anel
      expect(input).toHaveClass(`${inputStyleMap[state].ring}`)

      // Verifica a aplicação da cor do background
      if (inputStyleMap[state].bg) {
        expect(input).toHaveClass(`${inputStyleMap[state].bg}`)
      }

      // Verifica a aplicação do placeholder no Input
      expect(input).toHaveAttribute('placeholder', `${state} ${type}`)

      // Verifica a aplicação da label no Input
      expect(label).toBeTruthy()

      // Verifica a aplicação do * de acordo com o valor do required
      if (required) {
        expect(label).toHaveTextContent(/\*/)
      } else {
        expect(label).not.toHaveTextContent(/\*/)
      }

    }
  )

  // Teste de escrita do usuario no campo de input e mudança de valor da v-model para diferentes tipos de input e dados
  it.each(inputTypes)(
    'escrita no campo de input com type "%s"',
    (type) => {
      const { getByLabelText, emitted } = render(GenericInput, {
        props: {
          type,
          label: `Input ${type}`,
          placeholder: `${type}`,
          state: 'default',
          modelValue: '',
          'onUpdate:modelValue': () => {}
        }
      })

      const input = getByLabelText(`Input ${type}`) as HTMLInputElement
      const getLastEmittedValue = () => {
        const events = emitted()['update:modelValue'] as unknown[][] | undefined
        if (!events || events.length === 0) return undefined
        return events[events.length - 1][0]
      }

      if(type !== 'number') {
        // Verifica a escrita de uma string do usuario no campo de input diferente de number
        fireEvent.input(input, { target: { value: 'Teste' } })
        expect(input.value).toBe('Teste')
        expect(getLastEmittedValue()).toBe('Teste')

        // Verifica a escrita de um number do usuario no campo de input diferente de number
        fireEvent.input(input, { target: { value: 123 } })
        expect(input.value).toBe('123')
        expect(getLastEmittedValue()).toBe('123')
      }

      if(type === 'number') {
        // Verifica a escrita de um number do usuario no campo de input type number
        fireEvent.input(input, { target: { value: 123 } })
        expect(input.value).toBe('123')
        expect(getLastEmittedValue()).toBe(123)

        // Verifica a escrita de uma string do usuario no campo de input type number
        fireEvent.input(input, { target: { value: 'Teste' } })
        expect(input.value).toBe('')
        expect(getLastEmittedValue()).toBe('')
      }
      
    }
  )

  // Teste de valor dos inputs mandado ao formulario
  it.each(inputTypes)(
    'envio de formulario com type "%s"',
    (type) => {
      const onSubmit = vi.fn()
      const { getByLabelText, getByText } = render({
        components: { GenericButton, GenericInput },
        template: `
          <form @submit="submitForm">
            <GenericInput v-model="inputModel" label="Input" placeholder="Digite..." type="${type}" />
            <GenericButton label="Enviar" type="submit" />
          </form>
        `,
        setup() {
          const inputModel = ref()
          const submitForm = () => {
            onSubmit(inputModel.value)
          }
          return { inputModel, submitForm, type }
        }
      })

      const input = getByLabelText('Input') as HTMLInputElement
      const button = getByText('Enviar')
      
      // Verifica o envio de formulario com diferentes types de input
      if(type === 'text' || type === 'search' || type === 'tel' || type === 'password') {
        fireEvent.input(input, { target: { value: 'Teste' } })
        fireEvent.click(button)
        expect(onSubmit).toHaveBeenCalledWith('Teste')

        fireEvent.input(input, { target: { value: 123 } })
        fireEvent.click(button)
        expect(onSubmit).toHaveBeenCalledWith('123')

      }

      // Verifica o envio de formulario com input type number
      if(type === 'number') {
        fireEvent.input(input, { target: { value: 123 } })
        fireEvent.click(button)
        expect(onSubmit).toHaveBeenCalledWith(123)

        fireEvent.input(input, { target: { value: 'Teste' } })
        fireEvent.click(button)
        expect(onSubmit).toHaveBeenCalledWith('')
      }

      // Verifica o envio de formulario com input type email
      if(type === 'email') {
        fireEvent.input(input, { target: { value: 'invalid-email' } })
        fireEvent.click(button)
        expect(onSubmit).not.toHaveBeenCalled()

        fireEvent.input(input, { target: { value: 'a@b.com' } })
        fireEvent.click(button)
        expect(onSubmit).toHaveBeenCalledWith('a@b.com')
      }

      // Verifica o envio de formulario com input type url
      if(type === 'url') {
        fireEvent.input(input, { target: { value: 'invalid-url' } })
        fireEvent.click(button)
        expect(onSubmit).not.toHaveBeenCalled()

        fireEvent.input(input, { target: { value: 'https://example.com' } })
        fireEvent.click(button)
        expect(onSubmit).toHaveBeenCalledWith('https://example.com')
      }
      
    }
  )

  // Teste de exebição de mensagens de error e state de error
  it.each(inputTypes)(
    'exibe mensagens de erro corretamente e aplica classe de erro com type "%s"',
    (type) => {
      const { getByText, getByPlaceholderText } = render(GenericInput, {
        props: {
          type,
          label: 'Input',
          placeholder: 'Digite...',
          errorMessages: ['Campo obrigatório', 'Valor inválido'],
        }
      })

      expect(getByText('Campo obrigatório')).toBeInTheDocument()
      expect(getByText('Valor inválido')).toBeInTheDocument()

      const input = getByPlaceholderText('Digite...') as HTMLInputElement
      expect(input.classList.contains('bg-error-100/10')).toBe(true)
    }
  )
})
