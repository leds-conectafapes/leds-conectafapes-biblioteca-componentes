import type { Meta, StoryObj } from "@storybook/vue3";
import GenericRadioGroup from "./GenericRadioGroup.vue";
import type { ConcreteComponent } from "vue";
import type { radioGroupOptions } from "../../types";

const meta: Meta<typeof GenericRadioGroup> = {
  title: "Components/GenericRadioGroup",
  component: GenericRadioGroup as unknown as ConcreteComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericRadioGroup** é um componente de grupo de botões de rádio tipado com suporte a genéricos.

- Suporta \`v-model\` com tipo genérico (string | number | undefined);
- Aceita todos os atributos nativos de \`<input type="radio">\` (como \`name\`, \`disabled\`, \`required\`, etc);
- Prop \`label\` para texto do rótulo (pode ser substituído via slot \`label\`);
- Prop \`options\` para lista de opções com \`id\`, \`label\` e \`value\`;
- Prop \`errorMessages\` para mensagens de erro, ou slot \`error\` para renderização customizada;
- Slots disponíveis:
  - \`label\`: substitui o texto do rótulo;
  - \`error\`: personaliza a exibição de mensagens de erro;
  - \`options\`: para layout personalizado das opções.

### Exemplo:

\`\`\`vue
<GenericRadioGroup
  v-model="value"
  :options="[
    { id: 'opt1', label: 'Sim', value: 'yes' },
    { id: 'opt2', label: 'Não', value: 'no' }
  ]"
  label="Deseja receber notificações?"
/>
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    },
  },
  argTypes: {
    // @ts-expect-error O Typescript junto com o Storybook não conseguem entender que o modelValue tem um type genérico
    modelValue: {
      control: "text",
      description: "Valor selecionado do grupo",
      table: {
        type: { summary: "string | number | undefined" },
      },
    },
    label: {
      control: "text",
      description: "Texto do label (ignorado se usar slot `label`)",
      table: {
        type: { summary: "string" },
      },
    },
    options: {
      control: "object",
      description: "Lista de opções para renderização",
      table: {
        type: { summary: "radioGroupOptions<T>[]" },
      },
    },
    errorMessages: {
      control: "text",
      description: "Mensagem(s) de erro (string ou array de strings)",
      table: {
        type: { summary: "string | string[]" },
      },
    },
    containerClass: {
      control: "text",
      description: "Classe(s) adicionais para o container",
      table: {
        type: { summary: "string | string[]" },
      },
    },
    direction: {
      control: "select",
      description: "Direção da disposição das opções.",
      options: ["column", "row"],
      table: {
        type: { summary: "RadioGroupDirection" },
        defaultValue: { summary: "column" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericRadioGroup>;

export const Default: Story = {
  args: {
    modelValue: "yes",
    label: "Você aceita os termos?",
    options: [
      // @ts-expect-error O Typescript junto com o Storybook não conseguem entender que o radioGroupOptions tem um type genérico
      { id: "yes", label: "Sim", value: "yes" },
      { id: "no", label: "Não", value: "no" },
    ] satisfies radioGroupOptions<string>[],
  },
  parameters: {
    docs: {
      source: {
        code: `
<GenericRadioGroup
  v-model="selected"
  :options="[
    { id: 'yes', label: 'Sim', value: 'yes' },
    { id: 'no', label: 'Não', value: 'no' }
  ]"
  label="Você aceita os termos?"
/>

<script setup>
import { ref } from 'vue'
const selected = ref('yes')
</script>
        `.trim(),
      },
    },
  },
};

export const WithSlotError: Story = {
  render: () => ({
    components: { GenericRadioGroup },
    template: `
      <GenericRadioGroup
        v-model="selected"
        :options="[
          { id: '1', label: 'Opção A', value: 'A' },
          { id: '2', label: 'Opção B', value: 'B' }
        ]"
      >
        <template #error>
          <div style="color: red;">Erro via slot personalizado</div>
        </template>
      </GenericRadioGroup>
    `,
    data() {
      return {
        selected: "A",
      };
    },
  }),
  name: "Com Slot Erro",
  parameters: {
    docs: {
      source: {
        code: `
<GenericRadioGroup v-model="selected" :options="options">
  <template #error>
    <div style="color: red;">Erro via slot personalizado</div>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('A')
const options = [
  { id: '1', label: 'Opção A', value: 'A' },
  { id: '2', label: 'Opção B', value: 'B' },
]
</script>
        `.trim(),
      },
    },
  },
};

export const WithSlotLabel: Story = {
  render: () => ({
    components: { GenericRadioGroup },
    template: `
      <GenericRadioGroup
        v-model="selected"
        :options="[
          { id: 'sim', label: 'Sim', value: 'yes' },
          { id: 'nao', label: 'Não', value: 'no' }
        ]"
      >
        <template #label>
          <span style="font-weight: bold;">Você aceita os termos de uso?</span>
        </template>
      </GenericRadioGroup>
    `,
    data() {
      return {
        selected: "yes",
      };
    },
  }),
  name: "Com Slot Label",
  parameters: {
    docs: {
      source: {
        code: `
<GenericRadioGroup v-model="selected" :options="options">
  <template #label>
    <span style="font-weight: bold;">Você aceita os termos de uso?</span>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('yes')
const options = [
  { id: 'sim', label: 'Sim', value: 'yes' },
  { id: 'nao', label: 'Não', value: 'no' },
]
</script>
        `.trim(),
      },
    },
  },
};

export const WithSlotOptions: Story = {
  render: () => ({
    components: { GenericRadioGroup },
    template: `
      <GenericRadioGroup v-model="selected" :options="options">
        <template #options>
          <div v-for="option in options" :key="option.id" class="flex items-center gap-2 mb-2">
            <input
              :id="option.id"
              type="radio"
              :value="option.value"
              v-model="selected"
              class="accent-primary-500 h-5 w-5"
            />
            <label :for="option.id" class="text-base font-inter font-medium">
              {{ option.label }}
            </label>
          </div>
        </template>
      </GenericRadioGroup>
    `,
    data() {
      return {
        selected: "op2",
        options: [
          { id: "op1", label: "Opção 1", value: "op1" },
          { id: "op2", label: "Opção 2", value: "op2" },
          { id: "op3", label: "Opção 3", value: "op3" },
        ],
      };
    },
  }),
  name: "Com Slot Options",
  parameters: {
    docs: {
      source: {
        code: `
<GenericRadioGroup v-model="selected" :options="options">
  <template #options>
    <div v-for="option in options" :key="option.id" class="flex items-center gap-2 mb-2">
      <input
        :id="option.id"
        type="radio"
        :value="option.value"
        v-model="selected"
        class="accent-primary-500 h-5 w-5"
      />
      <label :for="option.id" class="text-base font-inter font-medium">
        {{ option.label }}
      </label>
    </div>
  </template>
</GenericRadioGroup>

<script setup>
import { ref } from 'vue'
const selected = ref('op2')
const options = [
  { id: 'op1', label: 'Opção 1', value: 'op1' },
  { id: 'op2', label: 'Opção 2', value: 'op2' },
  { id: 'op3', label: 'Opção 3', value: 'op3' },
]
</script>
        `.trim(),
      },
    },
  },
};

export const RowDirection: Story = {
  name: "Dispor opções por linha",
  args: {
    modelValue: "yes",
    label: "Você aceita os termos?",
    options: [
      // @ts-expect-error O Typescript junto com o Storybook não conseguem entender que o radioGroupOptions tem um type genérico
      { id: "yes", label: "Sim", value: "yes" },
      { id: "no", label: "Não", value: "no" },
    ] satisfies radioGroupOptions<string>[],
    direction: "row",
  },
  parameters: {
    docs: {
      source: {
        code: `
<GenericRadioGroup
  v-model="selected"
  :options="[
    { id: 'yes', label: 'Sim', value: 'yes' },
    { id: 'no', label: 'Não', value: 'no' }
  ]"
  label="Você aceita os termos?"
  direction="row"
/>

<script setup>
import { ref } from 'vue'
const selected = ref('yes')
</script>
        `.trim(),
      },
    },
  },
};
