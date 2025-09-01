import type { Meta, StoryObj } from "@storybook/vue3";
import GenericTooltip from "./GenericTooltip.vue";
import GenericCompactButton from "../GenericCompactButton/GenericCompactButton.vue";
import { h } from "vue";

const meta: Meta<typeof GenericTooltip> = {
  title: "Components/GenericTooltip",
  component: GenericTooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericTooltip** é um componente usado para fornecer informações complementares de forma discreta. Ele exibe um texto ou outro componente somente quando o usuário está com o *cursor* em cima de outro elemento designado.

### Exemplo

\`\`\`vue
<GenericTooltip text="Excluir">
  <CompactButton icon="delete" variant="danger" />
</GenericTooltip>
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
      description:
        "Texto exibido quando o cursor está em cima do elemento alvo.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left", "custom"],
      description: "Posição da tooltip",
      table: {
        type: { summary: `'top' | 'right' | 'bottom' | 'left' | 'custom'` },
        defaultValue: { summary: "'top'" },
      },
    },
    customPosition: {
      control: "text",
      description:
        "Nome das classes Tailwind quando é necessária uma posição personalizada do componente.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    width: {
      control: "text",
      description:
        "Nome da classe Tailwind que controlará largura do texto da GenericTooltip",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'w-max'" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericTooltip>;

export const Exemplo: Story = {
  name: "Exemplo",
  render: () => {
    return h(
      GenericTooltip,
      { text: "Excluir" },
      h(GenericCompactButton, { icon: "delete", variant: "danger" }),
    );
  },
};

export const slotText: Story = {
  name: 'Com slot "text"',
  render: () => {
    return h(
      GenericTooltip,
      { position: "bottom", class: "ml-50" },
      {
        default: () => h(GenericCompactButton, { icon: "visibility" }),
        text: () =>
          h("img", {
            src: "https://media1.tenor.com/m/I6j5DmlTTk0AAAAd/stare.gif",
          }),
      },
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <GenericTooltip
    position="bottom"
    class="ml-50"
  >
    <GenericCompactButton icon="visibility" />
    <template #text>
      <img src="https://media1.tenor.com/m/I6j5DmlTTk0AAAAd/stare.gif" />
    </template>
  </GenericTooltip>
</template>
        `.trim(),
      },
    },
  },
};
