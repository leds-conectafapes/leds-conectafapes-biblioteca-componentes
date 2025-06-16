import type { Meta, StoryObj } from '@storybook/vue3'
import GenericTextArea from './GenericTextArea.vue'
import type { ConcreteComponent } from 'vue'

const meta: Meta<typeof GenericTextArea> = {
  title: 'Components/GenericTextArea',
  component: GenericTextArea as unknown as ConcreteComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**GenericTextArea** é um componente textarea genérico com suporte a estados visuais, labels, mensagens de erro e slots para personalização.

### Props principais:
- \`modelValue\`: valor ligado ao textarea.
- \`state\`: estado visual do textarea (default, error, warning, disabled).
- \`label\`: texto do label (se não usar slot).
- \`errorMessages\`: string ou array de strings para mensagens de erro.
- \`containerClass\`: classes CSS customizadas para o container.

### Exemplo básico:

\`\`\`vue
<GenericTextArea v-model="text" label="Comentário" />
\`\`\`

### Exemplo com slot label e error:

\`\`\`vue
<GenericTextArea v-model="text" state="error">
  <template #label>
    <strong>Comentário obrigatório</strong>
  </template>
  <template #error>
    <p>Campo inválido!</p>
  </template>
</GenericTextArea>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Valor ligado ao textarea',
      table: { type: { summary: 'string | number | undefined' } },
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'warning', 'disabled'],
      description: 'Estado visual do textarea',
      table: { defaultValue: { summary: 'default' } },
    },
    label: {
      control: 'text',
      description: 'Texto do label (se não usar slot)',
      table: { defaultValue: { summary: "''" } },
    },
    errorMessages: {
      control: 'object',
      description: 'Mensagens de erro, pode ser string ou array de strings',
      table: { defaultValue: { summary: "[]" } },
    },
    containerClass: {
      control: 'object',
      description: 'Classes CSS para o container (string ou array de strings)',
    },
  },
}

export default meta

type Story = StoryObj<typeof GenericTextArea>

export const Default: Story = {
  args: {
    modelValue: '',
    label: 'Descrição',
    state: 'default',
    errorMessages: [],
    containerClass: [],
  },
}

export const WithErrors: Story = {
  args: {
    modelValue: '',
    label: 'Descrição',
    state: 'error',
    errorMessages: ['Campo obrigatório', 'Mínimo de 10 caracteres'],
  },
}

export const Disabled: Story = {
  args: {
    modelValue: 'Texto desabilitado',
    label: 'Descrição',
    state: 'disabled',
    errorMessages: [],
  },
}

export const CustomSlots: Story = {
  render: () => ({
    components: { GenericTextArea },
    template: `
      <GenericTextArea v-model="value" state="error">
        <template #label>
          <strong>Descrição personalizada</strong>
        </template>
        <template #error>
          <p>Erro customizado no campo</p>
        </template>
      </GenericTextArea>
    `,
    data() {
      return { value: '' }
    },
  }),
  name: 'Com slots label e error',
}
