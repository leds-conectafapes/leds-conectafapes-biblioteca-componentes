import type { Meta, StoryObj } from "@storybook/vue3";
import GenericNavCard from "./GenericNavCard.vue";

const meta: Meta<typeof GenericNavCard> = {
  title: "Components/GenericNavCard",
  component: GenericNavCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericNavCard** mostra informação de algo com o propósito de navegação ou ação..
### Exemplo:
\`\`\`vue
<template>
  <GenericNavCard
    title="Usuários"
    text="5 novos usuários cadastrados"
    caption="3 com e-mail confirmado. 2 sem e-mail confirmado."
  />
</template>
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    },
  },
  argTypes: {
    statusText: {
      control: "text",
      description: "Texto do título",
      table: {
        type: { summary: "string" },
      },
    },
    statusVariant: {
      control: { type: "select" },
      options: [
        "info",
        "infoStrong",
        "success",
        "warn",
        "warnStrong",
        "critical",
        "custom",
      ],
      description: "Variação da tag do título",
      table: {
        type: { summary: "StatusTagVariant" },
        defaultValue: { summary: "success" },
      },
    },
    text: {
      control: "text",
      description: "Texto principal",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    caption: {
      control: "text",
      description: "Texto da legenda",
      table: {
        type: { summary: "string" },
      },
    },
    titleClass: {
      control: "text",
      description: "Classe do texto do título",
      table: {
        type: { summary: "string" },
      },
    },
    captionClass: {
      control: "text",
      description: "Classe do texto da legenda",
      table: {
        type: { summary: "string" },
      },
    },
    textVariant: {
      control: "select",
      options: ["default", "success", "error"],
      description: "Variação de cor do texto principal",
      table: {
        type: {
          summary: `'default' | 'success' | 'error'`,
        },
        defaultValue: { summary: "'default'" },
      },
    },
    captionVariant: {
      control: "select",
      options: ["default", "success", "error"],
      description: "Variação de cor do texto da legenda",
      table: {
        type: {
          summary: `'default' | 'success' | 'error'`,
        },
        defaultValue: { summary: "'default'" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericNavCard>;

export const Default: Story = {
  args: {
    statusText: "em execução",
    text: "Cluster região sudeste",
    caption: "uptime: 2 meses, 3 dias e 9 horas",
  },
};
