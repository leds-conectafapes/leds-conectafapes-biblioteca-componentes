import type { Meta, StoryObj } from "@storybook/vue3";
import GenericTitle from "./GenericTitle.vue";

const meta: Meta<typeof GenericTitle> = {
  title: "Components/GenericTitle",
  component: GenericTitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericTitle** é um componente simples para títulos e textos com diferentes estilos visuais, baseado em tipos como \`h1\`, \`h2\`, \`body\`, etc.

- \`text\`: conteúdo textual do título;
- \`type\`: define o estilo do título (h1, h2, body etc.);
- Slots disponíveis:
  - \`text\`: substitui o texto do title;

### Exemplo:
\`\`\`vue
<GenericTitle text="Título Exemplo" type="h1" />
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
      description: "Texto a ser exibido no título",
      defaultValue: "",
    },
    type: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "title", "subtitle", "body", "caption"],
      },
      description: "Tipo do título que define o estilo visual",
      defaultValue: "h1",
    },
    class: {
      control: "text",
      description: "Classes CSS adicionais para customização",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericTitle>;

export const Default: Story = {
  args: {
    text: "Título Exemplo",
    type: "h1",
  },
};

export const Variations: Story = {
  render: () => ({
    components: { GenericTitle },
    template: `
      <div class="space-y-4">
        <GenericTitle type="h1" text="Título H1" />
        <GenericTitle type="h2" text="Título H2" />
        <GenericTitle type="h3" text="Título H3" />
        <GenericTitle type="title" text="Título Title" />
        <GenericTitle type="subtitle" text="Título Subtitle" />
        <GenericTitle type="body" text="Título Body" />
        <GenericTitle type="caption" text="Título Caption" />
      </div>
    `,
  }),
  name: "Variações de Type",
  parameters: {
    docs: {
      source: {
        code: `
<div class="space-y-4">
  <GenericTitle type="h1" text="Título H1" />
  <GenericTitle type="h2" text="Título H2" />
  <GenericTitle type="h3" text="Título H3" />
  <GenericTitle type="title" text="Título Title" />
  <GenericTitle type="subtitle" text="Título Subtitle" />
  <GenericTitle type="body" text="Título Body" />
  <GenericTitle type="caption" text="Título Caption" />
</div>
        `.trim(),
      },
    },
  },
};

export const ComSlotText: Story = {
  render: (args) => ({
    components: { GenericTitle },
    setup: () => ({ args }),
    template: `
      <GenericTitle v-bind="args">
        <template #text>
          <em>Conteúdo via slot de texto</em>
        </template>
      </GenericTitle>
    `,
  }),
  args: {
    type: "h2",
  },
};
