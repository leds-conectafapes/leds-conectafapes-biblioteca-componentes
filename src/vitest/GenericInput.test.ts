import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericInput from '../components/GenericInput/GenericInput.vue'
import { ref } from 'vue'
import type { inputType, inputState } from '../types'

const inputTypes: inputType[] = ['text', 'search', 'number', 'email', 'password', 'tel', 'url']
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

describe('GenericInput.vue', () => {
  it.each(inputStates)(
    'renderiza corretamente com state "%s"',
    (state) => {
      const { getByRole } = render(GenericInput, {
        props: {
          label: `Input ${state}`,
          placeholder: `${state}`,
          state
        }
      })

      const input = getByRole('textbox')

      // Testa a aplicação do anel
      expect(input).toHaveClass(`${inputStyleMap[state].ring}`)

      // Testa a aplicação da cor do background
      if (inputStyleMap[state].bg) {
        expect(input).toHaveClass(`${inputStyleMap[state].bg}`)
      }

      // Testa a aplicação do placeholder no Input
      expect(input).toHaveAttribute('placeholder', state)
    }
  )

  it('renderiza o label corretamente', () => {
    const { getByText } = render(GenericInput, {
      props: {
        label: 'Nome completo',
        placeholder: 'Digite seu nome'
      }
    })

    expect(getByText('Nome completo')).toBeInTheDocument()
  })

  it('adiciona "*" ao label quando required for true', () => {
    const { getByText } = render(GenericInput, {
      props: {
        label: 'Email',
        required: true,
        placeholder: 'Digite'
      }
    })

    expect(getByText('Email*')).toBeInTheDocument()
  })

  it.each([
    { label: 'String', initial: 'texto', updated: 'atualizado' },
    { label: 'Number', initial: 42, updated: '99' },
    { label: 'Objeto com value', initial: { value: 'obj' }, updated: 'novo' },
    { label: 'Undefined', initial: undefined, updated: 'preenchido' }
  ])('vincula corretamente o valor com v-model ($label)', async ({ initial, updated }) => {
    const model = ref<string | number | { value: string | undefined } | undefined>(initial)

    const { getByPlaceholderText } = render(GenericInput, {
      props: {
        label: 'Input',
        placeholder: 'Teste',
        modelValue:
          typeof initial === 'object' && initial !== null && 'value' in initial
            ? initial.value
            : initial?.toString() ?? '',
        'onUpdate:modelValue': (val: string | number | { value: string | undefined } | undefined ) => {
          if (typeof model.value === 'object' && model.value !== null && 'value' in model.value) {
            model.value.value = val as string
          } else if (typeof model.value === 'number') {
            model.value = Number(val)
          } else {
            model.value = val
          }
        }
      }
  })

    const input = getByPlaceholderText('Teste') as HTMLInputElement

    await fireEvent.update(input, updated)

    if (typeof model.value === 'object' && model.value !== null && 'value' in model.value) {
      expect(model.value.value).toBe(updated)
    } else if (typeof initial === 'number') {
      expect(model.value).toBe(Number(updated))
    } else {
      expect(model.value).toBe(updated)
    }
  })

  it.each(inputStates.filter(s => s !== 'disabled'))(
    'permite interação quando state = "%s"',
    async (state) => {
      const modelValue = ref<string | number | { value: string | undefined } | undefined>('')

      const { getByPlaceholderText } = render(GenericInput, {
        props: {
          label: 'Campo',
          placeholder: 'Digite...',
          state,
          modelValue: modelValue.value,
          'onUpdate:modelValue': (val: string | number | { value: string | undefined } | undefined) => {
            modelValue.value = val
          }
        }
      })

      const input = getByPlaceholderText('Digite...') as HTMLInputElement
      expect(input.disabled).toBe(false)

      await fireEvent.update(input, 'teste')
      expect(modelValue.value).toBe('teste')
    }
  )

  it.each(inputTypes)(
    'define corretamente o tipo de input "%s"',
    (type) => {
      const { getByPlaceholderText } = render(GenericInput, {
        props: {
          label: 'Campo',
          type,
          placeholder: 'Teste'
        }
      })

      const input = getByPlaceholderText('Teste') as HTMLInputElement
      expect(input.type).toBe(type)
    }
  )

  it('desabilita o campo se state for "disabled"', () => {
    const { getByPlaceholderText } = render(GenericInput, {
      props: {
        label: 'Telefone',
        placeholder: 'DDD + Número',
        state: 'disabled'
      }
    })

    const input = getByPlaceholderText('DDD + Número') as HTMLInputElement
    expect(input.disabled).toBe(true)
  })

  it('exibe ícone quando o tipo tem ícone definido', () => {
    const { getByText } = render(GenericInput, {
      props: {
        label: 'Senha',
        type: 'password',
        placeholder: 'Digite sua senha'
      }
    })

    expect(getByText('visibility_off')).toBeInTheDocument()
  })

  it('não exibe ícone quando o tipo não tem ícone', () => {
    const { queryByText } = render(GenericInput, {
      props: {
        label: 'Nome',
        type: 'text',
        placeholder: 'Digite seu nome'
      }
    })

    expect(queryByText('visibility_off')).not.toBeInTheDocument()
  })

  it('exibe mensagens de erro corretamente', () => {
    const { getByText, getByPlaceholderText } = render(GenericInput, {
      props: {
        label: 'Email',
        placeholder: 'Digite',
        errorMessages: ['Campo obrigatório', 'Formato inválido']
      }
    })

    expect(getByText('Campo obrigatório')).toBeInTheDocument()
    expect(getByText('Formato inválido')).toBeInTheDocument()

    const input = getByPlaceholderText('Digite') as HTMLInputElement
    expect(input.classList.contains('bg-error-100/10')).toBe(true)
  })
})
