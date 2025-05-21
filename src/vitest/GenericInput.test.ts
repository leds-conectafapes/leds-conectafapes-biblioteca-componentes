import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericInput from '../components/GenericInput.vue'
import { ref } from 'vue'

const inputTypes = ['text', 'search', 'number', 'email', 'password', 'tel', 'url'] as const
const states = ['default', 'error', 'warning', 'disabled'] as const

describe('GenericInput.vue', () => {
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
    { label: 'Number', initial: 42, updated: 99 },
    { label: 'Objeto com value', initial: { value: 'obj' }, updated: 'novo' },
    { label: 'Undefined', initial: undefined, updated: 'preenchido' }
  ])('vincula corretamente o valor com v-model ($label)', async ({ initial, updated }) => {
    const model = ref(initial)

    const { getByPlaceholderText } = render(GenericInput, {
      props: {
        label: 'Input',
        placeholder: 'Teste',
        modelValue: model.value,
        'onUpdate:modelValue': (val: string | number | object | undefined) => {
          if (typeof model.value === 'object' && model.value !== null && 'value' in model.value) {
            model.value.value = val
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
    } else {
      expect(model.value).toBe(updated)
    }
  })


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
    const { getByText } = render(GenericInput, {
      props: {
        label: 'Email',
        placeholder: 'Digite',
        errorMessages: ['Campo obrigatório', 'Formato inválido']
      }
    })

    expect(getByText('Campo obrigatório')).toBeInTheDocument()
    expect(getByText('Formato inválido')).toBeInTheDocument()
  })
})
