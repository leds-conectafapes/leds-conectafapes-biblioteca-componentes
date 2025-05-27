import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericButton from '../components/GenericButton/GenericButton.vue'
import type { buttonVariant } from '../types'

const buttonVariants: buttonVariant[] = ['primary', 'danger', 'warning', 'secondary', 'secondaryDanger', 'disabled']
const buttonVariantsStyleMap: Record<buttonVariant, {
  bg: string
  text: string
  hover: string | undefined
}> = { 
  primary: {
    bg: 'bg-primary-500',
    text: 'text-white',
    hover: 'hover:bg-primary-hover',
  },
  danger: {
    bg: 'bg-error-300',
    text: 'text-white',
    hover: 'hover:bg-error-hover',
  },
  warning: {
    bg: 'bg-warning-100',
    text: 'text-white',
    hover: 'hover:bg-warning-hover',
  },
  secondary: {
    bg: 'bg-white',
    text: 'text-gray-700',
    hover: 'hover:bg-gray-hover',
  },
  secondaryDanger: {
    bg: 'bg-white',
    text: 'text-error-300',
    hover: 'hover:bg-error-secondaryHover',
  },
  disabled: {
    bg: 'bg-gray-200',
    text: 'text-gray-500',
    hover: undefined
  }
}

describe('GenericButton.vue', () => {
// Testes de estilização para cada variante
it.each(buttonVariants)(
  'renderiza corretamente com variant "%s"',
  (variant) => {
    const { getByRole } = render(GenericButton, {
      props: { label: `Botão ${variant}`, variant }
    })

    const button = getByRole('button')

    // Testa a aplicação do background das variantes
    expect(button).toHaveClass(`${buttonVariantsStyleMap[variant].bg}`)

    // Testa a aplicação do texto das variantes
    expect(button).toHaveClass(`${buttonVariantsStyleMap[variant].text}`)

    // Testa a aplicação do hover das variantes
    if (buttonVariantsStyleMap[variant].hover) {
      expect(button).toHaveClass(`${buttonVariantsStyleMap[variant].hover}`)
    }

    // Testa a aplicação da label do botão
    expect(button).toHaveTextContent(`Botão`)
  }
)

// Testes de comportamento para cada variante
it.each(buttonVariants)(
  'evento emitido corretamente com variant "%s"',
  (variant) => {
    const { getByRole, emitted } = render(GenericButton, {
      props: { label: `Botão ${variant}`, variant }
    })

    const button = getByRole('button')

    // Testa a emissão do onsubmit para um formulario
    fireEvent.click(button)
    if (variant === 'disabled') {
      expect(emitted()).not.toHaveProperty('click')

    } else {
      expect(emitted()).toHaveProperty('click')
    }
  }
)
})