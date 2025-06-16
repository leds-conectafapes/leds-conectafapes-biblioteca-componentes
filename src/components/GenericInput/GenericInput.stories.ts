import type { Meta, StoryObj } from '@storybook/vue3'
import GenericInput from './GenericInput.vue'
import type { ConcreteComponent } from 'vue'

const meta: Meta<typeof GenericInput> = {
  title: 'Components/GenericInput',
  component: GenericInput as unknown as ConcreteComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**GenericInput** é um componente de input genérico que aceita vários tipos de dados (\`string\`, \`number\`, \`boolean\` ou \`undefined\`).

### Características:

- Suporte a \`v-model\` genérico;
- Aceita atributos nativos do \`<input>\`;
- Prop \`state\`: \`default\` | \`error\` | \`warning\` | \`disabled\`;
- Prop \`label\` ou slot \`label\`;
- Prop \`errorMessages\` (\`string | string[]\`);
- Slot \`error\` para erro customizado;
- Se \`type="search"\`, dispara \`@search\`.

### Exemplos

\`\`\`vue
<GenericInput v-model="value" label="Nome" />
\`\`\`

\`\`\`vue
<GenericInput v-model="busca" type="search" label="Buscar" @search="buscar" />
\`\`\`

\`\`\`vue
<GenericInput v-model="value" state="error">
  <template #error>
    <div style="color: red">Erro customizado!</div>
  </template>
</GenericInput>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Valor do input (string, number ou undefined)',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: "''" },
      },
    },
    type: {
      control: 'text',
      description: 'Tipo nativo do input (text, number, search...)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'text'" },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'warning', 'disabled'],
      description: 'Estado visual do input',
      table: {
        type: { summary: "'default' | 'error' | 'warning' | 'disabled'" },
        defaultValue: { summary: "'default'" },
      },
    },
    label: {
      control: 'text',
      description: 'Texto do label (ignorado se usar slot `label`)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    errorMessages: {
      control: 'object',
      description: 'Mensagem(s) de erro (string ou string[])',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    containerClass: {
      control: 'text',
      description: 'Classe CSS customizada para o container externo',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    search: {
      action: 'search',
      description: 'Evento emitido ao clicar no ícone de busca (type="search")',
      table: {
        category: 'Events',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof GenericInput>

export const Default: Story = {
  args: {
    modelValue: '',
    type: 'text',
    label: 'Texto',
    state: 'default',
    errorMessages: [],
  },
}

export const SearchWithEvent: Story = {
  render: () => ({
    components: { GenericInput },
    template: `
      <GenericInput
        v-model="busca"
        type="search"
        label="Buscar usuário"
        @search="onSearch"
      />
    `,
    data() {
      return {
        busca: '',
      }
    },
    methods: {
      onSearch(value: string) {
        console.log('🔍 Busca:', value)
        alert('Buscando por: ' + value)
      },
    },
  }),
  name: 'Com type="search" e @search',
}

export const WithError: Story = {
  args: {
    modelValue: '',
    type: 'text',
    label: 'Email',
    state: 'error',
    errorMessages: ['Campo obrigatório', 'Formato inválido'],
  },
}

export const WithSlotError: Story = {
  render: () => ({
    components: { GenericInput },
    template: `
      <GenericInput v-model="valor" state="error">
        <template #error>
          <div style="color: red; font-weight: bold;">
            Este campo é obrigatório!
          </div>
        </template>
      </GenericInput>
    `,
    data() {
      return {
        valor: '',
      }
    },
  }),
  name: 'Com slot de erro',
}
