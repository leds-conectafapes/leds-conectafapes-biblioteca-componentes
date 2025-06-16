import type { Meta, StoryObj } from '@storybook/vue3'
import GenericSelect from './GenericSelect.vue'
import type { selectOption } from '../../types'
import type { ConcreteComponent } from 'vue'

const meta: Meta<typeof GenericSelect> = {
  title: 'Components/GenericSelect',
  component: GenericSelect as unknown as ConcreteComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**GenericSelect** é um componente de select tipado com suporte a genéricos e slots.

Principais características:
- Suporta v-model com tipo genérico (string | number | undefined);
- Aceita props para opções, estado, placeholder, erros e classes;
- Permite customizar o label, opções e mensagens de erro via slots;
- Prop containerClass para estilização do container;
- Gerencia estados visuais como 'default', 'error', 'warning' e 'disabled'.

### Exemplos de uso:

\`\`\`vue
<GenericSelect
  v-model="selected"
  :options="[
    { id: '1', label: 'Opção 1', value: '1' },
    { id: '2', label: 'Opção 2', value: '2' }
  ]"
  label="Escolha uma opção"
  placeholder="Selecione..."
/>
\`\`\`

\`\`\`vue
<GenericSelect v-model="selected" :options="options" state="error">
  <template #label>
    <span style="font-weight: bold;">Selecione seu país</span>
  </template>
  <template #error>
    <div style="color: red;">Erro personalizado</div>
  </template>
  <template #options>
    <option disabled value="">Selecione uma opção (customizada)</option>
    <option v-for="opt in options" :key="opt.id" :value="opt.value">{{ opt.label }}</option>
  </template>
</GenericSelect>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    // @ts-expect-error O Typescript junto com o Storybook não conseguem entender que o modelValue tem um type genérico
    modelValue: {
      control: 'text',
      description: 'Valor selecionado do select',
      table: {
        type: { summary: 'string | number | undefined' },
      },
    },
    options: {
      control: 'object',
      description: 'Lista de opções para o select',
      table: {
        type: { summary: 'selectOption<T>[]' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto do label (ignorando se usar slot label)',
      table: {
        type: { summary: 'string' },
      },
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'warning', 'disabled'],
      description: 'Estado visual do componente',
      table: {
        type: { summary: 'selectState' },
        defaultValue: { summary: 'default' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto do placeholder quando nenhuma opção está selecionada',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Selecione uma opção' },
      },
    },
    containerClass: {
      control: 'text',
      description: 'Classes adicionais para o container',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    errorMessages: {
      control: 'object',
      description: 'Mensagens de erro a serem exibidas',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof GenericSelect>

export const Default: Story = {
  args: {
    modelValue: undefined,
    label: 'Escolha uma opção',
    options: [
      // @ts-expect-error O Typescript junto com o Storybook não conseguem entender que o options tem um type genérico
      { id: 'opt1', label: 'Opção 1', value: '1' },
      { id: 'opt2', label: 'Opção 2', value: '2' },
      { id: 'opt3', label: 'Opção 3', value: '3' },
    ] satisfies selectOption<string>[],
    placeholder: 'Selecione uma opção',
    state: 'default',
    errorMessages: [],
  },
}

export const WithSlotLabel: Story = {
  render: () => ({
    components: { GenericSelect },
    template: `
      <GenericSelect
        v-model="selected"
        :options="options"
        placeholder="Selecione uma opção"
      >
        <template #label>
          <span style="font-weight: bold;">Selecione um valor personalizado</span>
        </template>
      </GenericSelect>
    `,
    data() {
      return {
        selected: '2',
        options: [
          { id: '1', label: 'Opção 1', value: '1' },
          { id: '2', label: 'Opção 2', value: '2' },
          { id: '3', label: 'Opção 3', value: '3' },
        ],
      }
    },
  }),
  name: 'Com slot label',
}

export const WithSlotOptions: Story = {
  render: () => ({
    components: { GenericSelect },
    template: `
      <GenericSelect v-model="selected" :options="options">
        <template #options>
          <option disabled value="">{{ placeholder }}</option>
          <option
            v-for="option in options"
            :key="option.id"
            :value="option.value"
          >
            {{ option.label }} (customizado)
          </option>
        </template>
      </GenericSelect>
    `,
    data() {
      return {
        selected: '',
        placeholder: 'Escolha algo',
        options: [
          { id: '1', label: 'Opção 1', value: '1' },
          { id: '2', label: 'Opção 2', value: '2' },
          { id: '3', label: 'Opção 3', value: '3' },
        ],
      }
    },
  }),
  name: 'Com slot options',
}

export const WithSlotError: Story = {
  render: () => ({
    components: { GenericSelect },
    template: `
      <GenericSelect
        v-model="selected"
        :options="options"
        state="error"
      >
        <template #error>
          <div style="color: red;">Erro personalizado via slot</div>
        </template>
      </GenericSelect>
    `,
    data() {
      return {
        selected: '',
        options: [
          { id: '1', label: 'Opção 1', value: '1' },
          { id: '2', label: 'Opção 2', value: '2' },
        ],
      }
    },
  }),
  name: 'Com slot error',
}
