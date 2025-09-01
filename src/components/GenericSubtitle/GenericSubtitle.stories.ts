import type { Meta, StoryObj } from "@storybook/vue3";
import GenericSubtitle from "./GenericSubtitle.vue";

const meta: Meta<typeof GenericSubtitle> = {
  title: "Components/GenericSubtitle",
  component: GenericSubtitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericSubtitle** é um componente simples para legendas/subtítulos com suporte a estados visuais e slot para conteúdo customizado.

- \`text\`: texto do subtítulo (se não usar slot).
- \`state\`: estado visual do subtítulo (default, error).
- Permite adicionar classes via \`class\`.
- Slots disponíveis:
  - \`text\`: substitui o texto do subtitle;

### Exemplo:

\`\`\`vue
<GenericSubtitle text="Subtítulo padrão" />
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    },
  },
  argTypes: {
    text: {
      control: "text",
      description: "Texto exibido no subtítulo (se não usar slot)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    state: {
      control: { type: "select" },
      options: ["default", "error"],
      description: "Estado visual do subtítulo",
      table: {
        type: { summary: "subtitleState" },
        defaultValue: { summary: "default" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericSubtitle>;

export const Default: Story = {
  args: {
    text: "Subtítulo Padrão",
    state: "default",
  },
};

export const ErrorState: Story = {
  args: {
    text: "Subtítulo Com Erro",
    state: "error",
  },
};

export const CustomTextSlot: Story = {
  render: () => ({
    components: { GenericSubtitle },
    template: `
      <GenericSubtitle state="error">
        <template #text>
          <em>Erro customizado no subtítulo via slot</em>
        </template>
      </GenericSubtitle>
    `,
  }),
  name: "Com Slot Text",
  parameters: {
    docs: {
      source: {
        code: `
<GenericSubtitle state="error">
  <template #text>
    <em>Erro customizado no subtítulo via slot</em>
  </template>
</GenericSubtitle>
        `.trim(),
      },
    },
  },
};
