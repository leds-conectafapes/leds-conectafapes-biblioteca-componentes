import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'
import GenericButton from '../components/GenericButton.vue'
import type { buttonVariant } from '../leds-ifes-types'

const buttonVariants: buttonVariant[] = ['primary', 'danger', 'warning', 'secondary', 'secondaryDanger', 'disabled']

describe('GenericButton.vue', () => {
  it('renderiza o label corretamente', () => {
    const { getByRole } = render(GenericButton, {
      props: { label: 'Clique aqui' }
    })

    expect(getByRole('button')).toHaveTextContent('Clique aqui')
  })

  it('emite "onClick" ao clicar (default: primary)', async () => {
    const onClick = vi.fn()

    const { getByRole } = render(GenericButton, {
      props: { label: 'Clique', onOnClick: onClick }
    })

    await fireEvent.click(getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })

  it('não emite "onClick" se variant for "disabled"', async () => {
    const onClick = vi.fn()

    const { getByRole } = render(GenericButton, {
      props: { label: 'Desabilitado', variant: 'disabled', onOnClick: onClick }
    })

    const button = getByRole('button')
    expect(button).toBeDisabled()

    await fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it.each(buttonVariants.filter(v => v !== 'disabled'))(
    'emite "onClick" corretamente com variant "%s"',
    async (variant) => {
      const onClick = vi.fn()

      const { getByRole } = render(GenericButton, {
        props: { label: `Botão ${variant}`, variant, onOnClick: onClick }
      })

      const button = getByRole('button')
      expect(button).not.toBeDisabled()

      await fireEvent.click(button)
      expect(onClick).toHaveBeenCalled()
    }
  )
})