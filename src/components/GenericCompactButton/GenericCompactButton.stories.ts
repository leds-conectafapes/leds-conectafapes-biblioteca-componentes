import type { Meta, StoryObj } from '@storybook/vue3'
import GenericCompactButton from './GenericCompactButton.vue'

const meta: Meta<typeof GenericCompactButton> = {
  title: 'Components/GenericCompactButton',
  component: GenericCompactButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**GenericCompactButton** é similar ao GenericButton, a principal diferença é que o **GenericCompactButton** usa um ícone no lugar do texto.

### Exemplo

\`\`\`vue
<GenericCompactButton icon="visibility" />
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    },
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'Nome do ícone do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      required: true
    },
    variant: {
      control: 'select',
      options: ['default', 'danger'],
      description: 'Variação visual do botão',
      table: {
        type: { summary: `'default' | 'danger'` },
        defaultValue: { summary: "'default'" },
      },
    },
    onClick: {
      action: 'onClick',
      description: 'Evento emitido ao clicar no botão',
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof GenericCompactButton>

export const Default: Story = {
  args: {
    icon: 'visibility',
    variant: 'default',
  },
}

