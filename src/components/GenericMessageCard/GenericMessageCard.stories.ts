import type { Meta, StoryObj } from "@storybook/vue3";
import GenericMessageCard from "./GenericMessageCard.vue";

const meta: Meta<typeof GenericMessageCard> = {
  title: "Components/GenericMessageCard",
  component: GenericMessageCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericMessageCard** transmite mensagens de modo compacto.
### Exemplo:
\`\`\`vue
<template>
  <GenericMessageCard
    title="Você possui mensagens não lidas."
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
    title: {
      control: "text",
      description: "Texto do título",
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      control: "select",
      options: ["default", "warning", "error", "disabled"],
      description:
        "Variação do card. Afeta cor de fundo, da borda e do ícone esquerdo.",
      table: {
        type: {
          summary: `'default' | 'warning' | 'error' | 'disabled'`,
        },
        defaultValue: { summary: "'default'" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericMessageCard>;

export const Default: Story = {
  args: {
    title: "Você possui mensagens não lidas.",
  },
};
