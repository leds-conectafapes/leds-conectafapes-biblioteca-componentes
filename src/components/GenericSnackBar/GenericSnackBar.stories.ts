import type { Meta, StoryObj } from "@storybook/vue3";
import GenericSnackBar from "./GenericSnackBar.vue";

const meta: Meta<typeof GenericSnackBar> = {
  title: "Components/GenericSnackBar",
  component: GenericSnackBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericSnackBar** é um componente de notificação (toast) posicionado no canto inferior direito da tela.

- \`variant\`: tipo da notificação (informative, success, warning, error).
- \`title\`: título principal da notificação.
- \`description\`: descrição ou corpo da notificação.
- \`timeout\`: tempo em milissegundos para o desaparecimento automático. Use \`0\` para não fechar automaticamente.
- Slots:
  - \`title\`: substitui o título por conteúdo customizado.
  - \`description\`: substitui a descrição por conteúdo customizado.

### Exemplo:

\`\`\`vue
<GenericSnackBar title="Sucesso" description="Ação realizada com sucesso" variant="success" />
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Título da notificação",
    },
    description: {
      control: "text",
      description: "Descrição da notificação",
    },
    variant: {
      control: { type: "select" },
      options: ["informative", "success", "warning", "error"],
      description: "Estilo visual do alerta",
    },
    timeout: {
      control: "number",
      description: "Tempo (ms) para desaparecer (0 = permanente)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericSnackBar>;

export const Informative: Story = {
  render: (args) => ({
    components: { GenericSnackBar },
    data() {
      return {
        key: 0,
        localArgs: args,
      };
    },
    methods: {
      show() {
        this.key++;
      },
    },
    template: `
      <div>
        <button @click="show" class="px-4 py-2 bg-blue-500 text-white rounded">Mostrar Snackbar</button>
        <GenericSnackBar v-if="key" v-bind="localArgs" :key="key" />
      </div>
    `,
  }),
  args: {
    title: "Aviso Informativo",
    description: "Esta é uma mensagem de informação.",
    variant: "informative",
    timeout: 8000,
  },
  parameters: {
    docs: {
      source: {
        code: `
<GenericSnackBar variant="informative" title="Aviso Informativo" description="Esta é uma mensagem de informação." :timeout="8000" />
        `,
      },
    },
  },
};

export const Success: Story = {
  render: Informative.render,
  args: {
    title: "Sucesso!",
    description: "A operação foi realizada corretamente.",
    variant: "success",
    timeout: 5000,
  },
  parameters: {
    docs: {
      source: {
        code: `
<GenericSnackBar variant="success" title="Sucesso!" description="A operação foi realizada corretamente." :timeout="5000" />
        `,
      },
    },
  },
};

export const Warning: Story = {
  render: Informative.render,
  args: {
    title: "Atenção",
    description: "Algo pode estar errado.",
    variant: "warning",
    timeout: 0,
  },
  parameters: {
    docs: {
      source: {
        code: `
<GenericSnackBar variant="warning" title="Atenção" description="Algo pode estar errado." :timeout="0" />
        `,
      },
    },
  },
};

export const Error: Story = {
  render: Informative.render,
  args: {
    title: "Erro",
    description: "Ocorreu um problema inesperado.",
    variant: "error",
    timeout: 7000,
  },
  parameters: {
    docs: {
      source: {
        code: `
<GenericSnackBar variant="error" title="Erro" description="Ocorreu um problema inesperado." :timeout="7000" />
        `,
      },
    },
  },
};

export const CustomSlots: Story = {
  render: (args) => ({
    components: { GenericSnackBar },
    data() {
      return {
        key: 0,
        localArgs: args,
      };
    },
    methods: {
      show() {
        this.key++;
      },
    },
    template: `
      <div>
        <button @click="show" class="px-4 py-2 bg-blue-500 text-white rounded">Mostrar Snackbar</button>
        <GenericSnackBar v-if="key" v-bind="localArgs" :key="key">
          <template #title>
            <strong>Título Customizado</strong>
          </template>
          <template #description>
            <i>Mensagem detalhada com <u>HTML</u> customizado.</i>
          </template>
        </GenericSnackBar>
      </div>
    `,
  }),
  args: {
    variant: "success",
    timeout: 9000,
  },
  name: "Com Slots Title e Description",
  parameters: {
    docs: {
      source: {
        code: `
<GenericSnackBar variant="success" :timeout="9000">
  <template #title>
    <strong>Título Customizado</strong>
  </template>
  <template #description>
    <i>Mensagem detalhada com <u>HTML</u> customizado.</i>
  </template>
</GenericSnackBar>
        `.trim(),
      },
    },
  },
};
