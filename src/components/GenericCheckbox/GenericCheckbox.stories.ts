import type { Meta, StoryObj } from '@storybook/vue3'
import GenericCheckbox from './GenericCheckbox.vue'
import type { ConcreteComponent } from 'vue'

const meta: Meta<typeof GenericCheckbox> = {
  title: 'Components/GenericCheckbox',
  component: GenericCheckbox as unknown as ConcreteComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**GenericCheckbox** é um componente de input que aceita vários tipos de dados (\`string\`, \`number\`, \`boolean\` ou \`undefined\`).

- Suporte a \`v-model\` genérico;
- Todos os atributos nativos de \`<input type="checkbox">\`, incluindo \`true-value\` e \`false-value\` para valores customizados;
- Prop \`state\`: \`default\` | \`error\` | \`warning\` | \`disabled\`;
- Prop \`label\`;
- Slots disponíveis:
  - \`label\`: substitui o texto do rótulo;
- Se \`type="search"\`, exibe ícone de busca e emite \`@search\` com o valor atual;

### Exemplo

\`\`\`vue
<GenericCheckbox
  id="checkbox1"
  v-model="selected"
  true-value="sim"
  false-value="não"
  label="Aceito os termos"
/>
\`\`\`

Nesse caso, \`selected\` será igual a \`"sim"\` quando marcado e \`"não"\` quando desmarcado.
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Valor do checkbox (string, number, boolean ou undefined)',
      table: {
        type: { summary: 'string | number | boolean | undefined' },
        defaultValue: { summary: "''" },
      },
    },
    label: {
      control: 'text',
      description: 'Texto do label do checkbox (ignorado se usar slot `label`)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    containerClass: {
      control: 'text',
      description: 'Classe CSS customizada para o container do checkbox',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof GenericCheckbox>

export const Default: Story = {
  render: () => ({
    components: { GenericCheckbox },
    data() {
      return {
        checked: false,
      }
    },
    template: `
      <GenericCheckbox v-model="checked" label="Aceito os termos" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<GenericCheckbox v-model="checked" label="Aceito os termos" />

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
</script>
        `.trim(),
      },
    },
  },
}

export const ComValoresCustomizados: Story = {
  render: () => ({
    components: { GenericCheckbox },
    data() {
      return {
        selected: 'não',
      }
    },
    template: `
      <GenericCheckbox
        v-model="selected"
        :true-value="'sim'"
        :false-value="'não'"
        label="Aceito os termos"
      />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<GenericCheckbox
  v-model="selected"
  :true-value="'sim'"
  :false-value="'não'"
  label="Aceito os termos"
/>

<script setup lang="ts">
import { ref } from 'vue'
const selected = ref('não')
</script>
        `.trim(),
      },
    },
  },
}

export const ComSlotLabel: Story = {
  render: () => ({
    components: { GenericCheckbox },
    data() {
      return {
        checked: false,
      }
    },
    template: `
      <GenericCheckbox v-model="checked" id="slot-checkbox">
        <template #label>
          <span class="text-sm font-bold">✔ Aceito os <em>termos</em> importantes</span>
        </template>
      </GenericCheckbox>
    `,
    name: 'Com slot label',
  }),
  parameters: {
    docs: {
      source: {
        code: `
<GenericCheckbox v-model="checked" id="slot-checkbox">
  <template #label>
    <span class="text-sm font-bold">✔ Aceito os <em>termos</em> importantes</span>
  </template>
</GenericCheckbox>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
</script>
        `.trim(),
      },
    },
  },
}
