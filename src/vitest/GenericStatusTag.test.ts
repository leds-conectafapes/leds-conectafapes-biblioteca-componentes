import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericStatusTag from '../components/GenericStatusTag/GenericStatusTag.vue'
import type { statusTagVariant } from '../types'

const statusTagVariants: statusTagVariant[] = ['success', 'successOutline', 'warning', 'secondary', 'secondaryDanger', 'disabled']
const statusTagStyleMap: Record<statusTagVariant, {
  bg: string
  border: string | undefined
  border_color: string | undefined
  text_color: string | undefined
}> = {
  success: {
    bg: 'bg-success-400',
    border: undefined,
    border_color: undefined,
    text_color: undefined,
  },
  successOutline: {
    bg: 'bg-white',
    border: 'border',
    border_color: 'border-success-100',
    text_color: '!text-success-400',
  },
  warning: {
    bg: 'bg-error-200',
    border: undefined,
    border_color: undefined,
    text_color: undefined,
  },
  secondary: {
    bg: 'bg-gray-600',
    border: undefined,
    border_color: undefined,
    text_color: undefined,
  },
  secondaryDanger: {
    bg: 'bg-white',
    border: 'border',
    border_color: 'border-gray-400',
    text_color: '!text-gray-600',
  },
  disabled: {
    bg: 'bg-warning-200',
    border: undefined,
    border_color: undefined,
    text_color: undefined,
  },
}

describe('GenericStatusTag.vue', () => {
  // Testes de estilização para cada variante
  it.each(statusTagVariants)(
    'renderiza corretamente com variant "%s"',
    (variant) => {
      const { getAllByRole } = render(GenericStatusTag, {
        props: { text: `StatusTag ${variant}`, variant}
      })

      const statusTag = getAllByRole('generic')[1]

      // Testa a aplicação do background
      expect(statusTag).toHaveClass(`${statusTagStyleMap[variant].bg}`)

      // Testa a aplicação da borda
      if (statusTagStyleMap[variant].border) {
        expect(statusTag).toHaveClass(`${statusTagStyleMap[variant].border}`)
      }

      // Testa a aplicação da cor da borda
      if (statusTagStyleMap[variant].border_color) {
        expect(statusTag).toHaveClass(`${statusTagStyleMap[variant].border_color}`)
      }

      // Testa a aplicação da cor do texto
      if (statusTagStyleMap[variant].text_color) {
        expect(statusTag).toHaveClass(`${statusTagStyleMap[variant].text_color}`)
      }

      // Testa a aplicação do texto no StatusTag
      expect(statusTag).toHaveTextContent('StatusTag')
    }
  )
})
