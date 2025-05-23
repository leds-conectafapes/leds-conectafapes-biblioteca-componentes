import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericTitle from '../components/GenericTitle/GenericTitle.vue'

describe('GenericTitle.vue', () => {
  it('renderiza o texto corretamente', () => {
    const { getByText } = render(GenericTitle, {
      props: {
        text: 'Título Exemplo'
      }
    })
    expect(getByText('Título Exemplo')).toBeInTheDocument()
  })
})
