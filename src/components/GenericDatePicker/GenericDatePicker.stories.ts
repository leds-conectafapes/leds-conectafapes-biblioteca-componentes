import type { Meta, StoryObj } from '@storybook/vue3'
import GenericDatePicker from './GenericDatePicker.vue'
import type { ConcreteComponent } from 'vue'

const meta: Meta<typeof GenericDatePicker> = {
  title: 'Components/GenericDatePicker',
  component: GenericDatePicker as unknown as ConcreteComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**GenericDatePicker** é um componente de seleção de data com suporte a estados visuais e mensagens de erro.

Ele suporta:
- O estado visual da data via prop \`state\`, que pode ser 'default', 'error', 'warning' ou 'disabled';
- A prop \`label\` para texto do rótulo do campo;
- A prop \`errorMessages\` para mostrar mensagens de erro, que pode ser string ou array de strings;
- A prop \`containerClass\` para customização do container externo;
- Slots nomeados \`label\` e \`error\` para personalizar o conteúdo do label e das mensagens de erro;
- **Todos os atributos nativos de um \`<input type="date">\` HTML** podem ser passados e serão aplicados diretamente no input (ex: \`id\`, \`name\`, \`disabled\`, \`required\`, \`min\`, \`max\`, etc).

### Exemplo

\`\`\`vue
<GenericDatePicker
  v-model="selectedDate"
  label="Data de nascimento"
  state="default"
/>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Data selecionada no formato ISO (YYYY-MM-DD)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'warning', 'disabled'],
      description: 'Estado visual do componente',
      table: {
        type: { summary: "'default' | 'error' | 'warning' | 'disabled'" },
        defaultValue: { summary: "'default'" },
      },
    },
    label: {
      control: 'text',
      description: 'Texto do rótulo (ignorado se o slot `label` for usado)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    errorMessages: {
      control: 'object',
      description: 'Mensagem(s) de erro (string ou array de strings)',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    containerClass: {
      control: { type: 'object' },
      description: 'Classe CSS para o container externo',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof GenericDatePicker>

export const Default: Story = {
  args: {
    modelValue: '',
    state: 'default',
    label: 'Data',
    errorMessages: [],
  },
}

export const ComErro: Story = {
  args: {
    modelValue: '',
    state: 'error',
    label: 'Data',
    errorMessages: ['Data inválida', 'Por favor escolha uma data válida'],
  },
}

export const Disabled: Story = {
  args: {
    modelValue: '',
    state: 'disabled',
    label: 'Data',
    errorMessages: [],
  },
}

export const ComSlotLabel: Story = {
  render: () => ({
    components: { GenericDatePicker },
    template: `
      <GenericDatePicker v-model="selectedDate" state="default">
        <template #label>
          <span style="font-weight: 700; color: purple;">
            Data customizada com slot
          </span>
        </template>
      </GenericDatePicker>
    `,
    data() {
      return { selectedDate: '' }
    },
  }),
  parameters: {
    docs: {
      source: {
        code: `
<GenericDatePicker v-model="selectedDate" state="default">
  <template #label>
    <span style="font-weight: 700; color: purple;">
      Data customizada com slot
    </span>
  </template>
</GenericDatePicker>
        `.trim(),
      },
    },
  },
}

export const ComSlotError: Story = {
  render: () => ({
    components: { GenericDatePicker },
    template: `
      <GenericDatePicker v-model="selectedDate" state="error">
        <template #error>
          <div style="color: red; font-weight: bold;">
            Erro personalizado: data inválida!
          </div>
        </template>
      </GenericDatePicker>
    `,
    data() {
      return { selectedDate: '' }
    },
  }),
  parameters: {
    docs: {
      source: {
        code: `
<GenericDatePicker v-model="selectedDate" state="error">
  <template #error>
    <div style="color: red; font-weight: bold;">
      Erro personalizado: data inválida!
    </div>
  </template>
</GenericDatePicker>
        `.trim(),
      },
    },
  },
}
