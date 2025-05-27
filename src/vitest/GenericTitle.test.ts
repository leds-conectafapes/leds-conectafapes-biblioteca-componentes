import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericTitle from '../components/GenericTitle/GenericTitle.vue'
import type { titleType } from '../types'

const titleTypes: titleType[] = ['h1', 'h2', 'h3', 'title', 'subtitle', 'body', 'caption']
const titleStyleMap: Record<titleType, {
  text_size: string
  font_weight: string | undefined
}> = {
  h1: {
    text_size: 'text-3xl/[38px]',
    font_weight: 'font-semibold',
  },
  h2: {
    text_size: 'text-2xl',
    font_weight: undefined,
  },
  h3: {
    text_size: 'text-xl',
    font_weight: undefined
  },
  title: {
    text_size: 'text-lg/[26px]',
    font_weight: undefined,
  },
  subtitle: {
    text_size: 'text-base',
    font_weight: undefined,
  },
  body: {
    text_size: 'text-sm/[22px]',
    font_weight: undefined,
  },
  caption: {
    text_size: 'text-xs/[18px]',
    font_weight: undefined,
  },
}

describe('GenericTitle.vue', () => {
  it.each(titleTypes)(
    'renderiza corretamente com type "%s"',
    (type) => {
      const { getAllByRole } = render(GenericTitle, {
        props: { text: `Title ${type}`, type }
      })

      const title = getAllByRole('generic')[1]

      // Testando a aplicação do tamanho do texto
      expect(title).toHaveClass(`${titleStyleMap[type].text_size}`)

      // Testando a aplicação do peso da fonte
      if (titleStyleMap[type].font_weight) {
        expect(title).toHaveClass(`${titleStyleMap[type].font_weight}`)
      }

      // Testa a aplicação do texto no Title
      expect(title).toHaveTextContent('Title')
    }
  )
})
