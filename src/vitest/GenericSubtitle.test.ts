import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericSubtitle from '../components/GenericSubtitle/GenericSubtitle.vue'
import type { subtitleState } from '../types'

const subtitleStates: subtitleState[] = ['default', 'error']
const subtitleStyleMap: Record<subtitleState, {
  text_color: string
}> = {
  default: {
    text_color: 'text-gray-500',
  },
  error: {
    text_color: 'text-error-300',
  },
}

describe('GenericSubtitle.vue', () => {
  describe('testes de estilização', () => {
    // Testa de estilização para cada state
    it.each(subtitleStates)(
      'renderiza corretamente com state "%s"',
      (state) => {
        const { getByText } = render(GenericSubtitle, {
          props: { text: `Subtitle ${state}`, state}
        })

        const subtitle = getByText(`Subtitle ${state}`)

        // Verifica a aplicação da cor do texto
        expect(subtitle).toHaveClass(`${subtitleStyleMap[state].text_color}`)

        // Verifica a aplicação do texto na Subtitle
        expect(subtitle).toHaveTextContent('Subtitle')
      }
    )
  })
})
