// tests/GenericSelect.spec.ts
import { ref } from 'vue'
import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'

import GenericButton from '../components/GenericButton/GenericButton.vue'
import GenericSelect from '../components/GenericSelect/GenericSelect.vue'

import type { selectState } from '../types'

const selectStates: selectState[] = ['default', 'error', 'warning', 'disabled']
const requiredValues = [true, false]

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
  it.each(
    selectStates.flatMap(state =>
      requiredValues.map(required => [state, required] as [selectState, boolean])
    )
  )(
    'renderiza corretamente com state "%s"',
    (state, required) => {
      const { getByLabelText, getByText } = render(GenericSelect, {
        props: {
          label: `Select ${state} ${required ? 'required' : 'optional'}`,
          placeholder: `${state} ${required}`,
          options: [],
          state,
          required
        }
      })

      const label = getByText(`Select ${state} ${required ? 'required' : 'optional'}`, { exact: false })
      const select = getByLabelText(`Select ${state} ${required ? 'required' : 'optional'}`, { exact: false })

      // Verifica a aplicação do anel
      expect(select).toHaveClass(`${selectStyleMap[state].ring}`)

      // Verifica a aplicação da cor do background
      if (selectStyleMap[state].bg) {
        expect(select).toHaveClass(`${selectStyleMap[state].bg}`)
      }

      // Verifica a aplicação do placeholder no Select
      expect(select.firstChild).toHaveTextContent(`${state} ${required}`)
    
      // Verifica a aplicação de label no Select
      expect(label).toBeTruthy()

      // Verifica a aplicação de * quando required
      if (required) {
        expect(label).toHaveTextContent(/\*/)
      } else {
        expect(label).not.toHaveTextContent(/\*/)
      }
    }
  )

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

  it('envio de formulário', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render({
      components: { GenericSelect, GenericButton },
      template: `
        <form @submit="submitForm">
          <GenericSelect v-model="selectModel" label="Select" placeholder="Testando" :options="['Teste', '123']" />
          <GenericButton label="Enviar" type="submit" />
        </form>
      `,
      setup() {
        const selectModel = ref()
        const submitForm = () => {
          onSubmit(selectModel.value)
        }
        return { selectModel, submitForm }
      }
    })

    const select = getByLabelText('Select') as HTMLSelectElement
    const button = getByText('Enviar')

    fireEvent.change(select, { target: { value: '123' } })
    fireEvent.click(button)
    expect(onSubmit).toHaveBeenCalledWith('123')

    fireEvent.change(select, { target: { value: 'Algo' } })
    fireEvent.click(button)
    expect(onSubmit).toHaveBeenCalledWith(undefined)
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
    expect(select).toHaveClass('bg-error-100/10')
  })
})
