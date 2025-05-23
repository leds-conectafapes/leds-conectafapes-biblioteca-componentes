import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericSubtitle from '../components/GenericSubtitle/GenericSubtitle.vue'

describe('GenericSubtitle.vue', () => {
  it('renderiza o texto corretamente', () => {
    const { getByText } = render(GenericSubtitle, {
      props: {
        text: 'Legenda exemplo'
      }
    })
    expect(getByText('Legenda exemplo')).toBeInTheDocument()
  })
})
