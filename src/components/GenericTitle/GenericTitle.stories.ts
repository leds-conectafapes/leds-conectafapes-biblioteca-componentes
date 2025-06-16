import type { Meta, StoryObj } from '@storybook/vue3'
import GenericTitle from './GenericTitle.vue'

const meta: Meta<typeof GenericTitle> = {
  title: 'Components/GenericTitle',
  component: GenericTitle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente **GenericTitle** para exibir títulos com diferentes tipos e estilos, como h1, h2, h3, títulos, legendas, etc.'
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto a ser exibido no título',
      defaultValue: '',
    },
    type: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'title', 'subtitle', 'body', 'caption'],
      },
      description: 'Tipo do título que define o estilo visual',
      defaultValue: 'h1',
    },
    class: {
      control: 'text',
      description: 'Classes CSS adicionais para customização',
    },
  },
}

export default meta

type Story = StoryObj<typeof GenericTitle>

export const Default: Story = {
  args: {
    text: 'Título Exemplo',
    type: 'h1',
  },
}

export const Variations: Story = {
  render: () => ({
    components: { GenericTitle },
    template: `
      <div class="space-y-4">
        <GenericTitle type="h1" text="Título H1" />
        <GenericTitle type="h2" text="Título H2" />
        <GenericTitle type="h3" text="Título H3" />
        <GenericTitle type="title" text="Título Title" />
        <GenericTitle type="subtitle" text="Título Subtitle" />
        <GenericTitle type="body" text="Título Body" />
        <GenericTitle type="caption" text="Título Caption" />
      </div>
    `,
  }),
}

export const WithSlot: Story = {
  render: (args) => ({
    components: { GenericTitle },
    setup: () => ({ args }),
    template: `
      <GenericTitle v-bind="args">
        <template #text>
          <em>Conteúdo via slot de texto</em>
        </template>
      </GenericTitle>
    `,
  }),
  args: {
    type: 'h2',
  },
}
