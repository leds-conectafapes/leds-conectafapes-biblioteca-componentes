import type { Meta, StoryObj } from '@storybook/vue3'
import GenericButton from './GenericButton.vue'

const meta: Meta<typeof GenericButton> = {
  title: 'Components/GenericButton',
  component: GenericButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**GenericButton** é um botão reutilizável que suporta múltiplas variações de estilo.

Ele pode receber:
- O texto do botão por meio da prop \`label\`;
- Ou, de forma alternativa, através de um **slot nomeado \`label\`**, que permite inserir **qualquer conteúdo personalizado**, como ícones, HTML ou componentes;
- O evento \`onClick\`, que é emitido ao ser clicado;
- **Todos os atributos nativos de um \`<button>\` HTML**, como \`type\`, \`disabled\`, \`aria-*\`, \`autofocus\`, etc.

### Exemplo

\`\`\`vue
<GenericButton label="Salvar" variant="primary" @onClick="handleClick" type="submit" />
\`\`\`

> 💡 Use o slot \`label\` quando quiser personalizar o conteúdo do botão com mais controle visual ou semântica adicional.
        `.trim(),
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto do botão (ignorado se o slot `label` for usado)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'danger', 'warning', 'secondary', 'secondaryDanger', 'disabled'],
      description: 'Variação visual do botão',
      table: {
        type: { summary: `'primary' | 'danger' | 'warning' | 'secondary' | 'secondaryDanger' | 'disabled'` },
        defaultValue: { summary: "'primary'" },
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

type Story = StoryObj<typeof GenericButton>

export const Primary: Story = {
  args: {
    label: 'Confirmar',
    variant: 'primary',
  },
}

export const Danger: Story = {
  args: {
    label: 'Excluir',
    variant: 'danger',
  },
}

export const Warning: Story = {
  args: {
    label: 'Atenção',
    variant: 'warning',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Cancelar',
    variant: 'secondary',
  },
}

export const SecondaryDanger: Story = {
  args: {
    label: 'Remover',
    variant: 'secondaryDanger',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Indisponível',
    variant: 'disabled',
  },
}

export const WithSlot: Story = {
  render: () => ({
    components: { GenericButton },
    template: `
      <GenericButton variant="primary">
        <template #label>
          <span class="text-sm text-white">🔒 Customizado</span>
        </template>
      </GenericButton>
    `,
  }),
  name: 'Com slot',
  parameters: {
    docs: {
      source: {
        code: `
<GenericButton variant="primary">
  <template #label>
    <span class="text-sm text-white">🔒 Customizado</span>
  </template>
</GenericButton>
        `.trim(),
      },
    },
  },
}

