import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericInput from '../components/GenericInput/GenericInput.vue'
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
})
