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

- Suporte a \`v-model\` genérico;
- Aceita atributos nativos do \`<input>\`;
- Prop \`state\`: \`default\` | \`error\` | \`warning\` | \`disabled\`;
- Prop \`label\`;
- Prop \`errorMessages\` (\`string | string[]\`);
- Slots disponíveis:
  - \`label\`: substitui o texto do rótulo;
  - \`error\`: personaliza a exibição de mensagens de erro;
- Se \`type="search"\`, exibe ícone de busca e emite \`@search\` com o valor atual;

### Exemplo

\`\`\`vue
<GenericInput v-model="value" type="search" label="Buscar" @search="buscar" />
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
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
      control: { type: 'select' },
      options: ['text', 'number', 'email', 'password', 'search', 'tel', 'url'],
      description: 'Tipo nativo do input',
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

export const Search: Story = {
  args: {
    modelValue: '',
    type: 'search',
    label: 'Buscar usuário',
  },
  parameters: {
    docs: {
      source: {
        code: `
<GenericInput
  v-model="busca"
  type="search"
  label="Buscar usuário"
  @search="onSearch"
/>
        `.trim(),
      },
    },
  },
  render: (args) => ({
    components: { GenericInput },
    data() {
      return {
        busca: args.modelValue,
      }
    },
    watch: {
      busca(val) {
        args['onUpdate:modelValue']?.(val)
      },
      'args.modelValue'(val) {
        this.busca = val
      },
    },
    methods: {
      onSearch() {
        alert('Buscando por: ' + this.busca)
      },
    },
    template: `
      <GenericInput
        type="search"
        :model-value="busca"
        v-bind="args"
        @update:modelValue="val => busca = val"
        @search="onSearch"
      />
    `,
  }),
}

export const ComErro: Story = {
  args: {
    modelValue: '',
    type: 'text',
    label: 'Email',
    state: 'error',
    errorMessages: ['Campo obrigatório', 'Formato inválido'],
  },
}

export const ComSlotDeErro: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<GenericInput v-model="valor" state="error">
  <template #error>
    <div style="color: red; font-weight: bold;">
      Este campo é obrigatório!
    </div>
  </template>
</GenericInput>
        `.trim(),
      },
    },
  },
  render: () => ({
    components: { GenericInput },
    data: () => ({ valor: '' }),
    template: `
      <GenericInput v-model="valor" state="error">
        <template #error>
          <div style="color: red; font-weight: bold;">
            Este campo é obrigatório!
          </div>
        </template>
      </GenericInput>
    `,
  }),
}
