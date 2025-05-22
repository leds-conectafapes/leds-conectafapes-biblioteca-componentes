import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import GenericStatusTag from '../components/GenericStatusTag.vue'

describe('GenericStatusTag.vue', () => {
  it('renderiza o texto corretamente', () => {
    const { getByText } = render(GenericStatusTag, {
      props: {
        text: 'Aprovado'
      }
    })

    expect(getByText('Aprovado')).toBeInTheDocument()
  })
})
