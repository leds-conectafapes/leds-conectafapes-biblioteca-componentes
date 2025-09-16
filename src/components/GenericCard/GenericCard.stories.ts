import type { Meta, StoryObj } from "@storybook/vue3";
import GenericCard from "./GenericCard.vue";
import { ref } from "vue";
import GenericButton from "../GenericButton/GenericButton.vue";

const meta: Meta<typeof GenericCard> = {
  title: "Components/GenericCard",
  component: GenericCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericCard** mostra e destaca informações diversas de modo uniforme.
### Exemplo:
\`\`\`vue
<template>
  <GenericCard
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
    title: {
      control: "text",
      description: "Texto do título",
      table: {
        type: { summary: "string" },
      },
    },
    text: {
      control: "text",
      description: "Texto principal",
      table: {
        type: { summary: "string" },
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
    tooltip: {
      control: "text",
      description: "Texto da tooltip",
      table: {
        type: { summary: "string" },
      },
    },
    tooltipIcon: {
      control: "text",
      description: "Ícone da tooltip",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericCard>;

export const Default: Story = {
  args: {
    title: "Usuários",
    text: "5 novos usuários cadastrados",
    caption: "3 com e-mail confirmado. 2 sem e-mail confirmado.",
    titleClass: "italic",
    tooltip: "tooltip",
  },
  parameters: {
    docs: {
      source: {
        code: `
<GenericCard
  title="Usuários"
  text="5 novos usuários cadastrados"
  caption="3 com e-mail confirmado. 2 sem e-mail confirmado."
/>
        `,
      },
    },
  },
};

export const Slot: Story = {
  name: "Exemplo com slot",
  render: () => ({
    components: { GenericCard, GenericButton },
    setup() {
      const textVariant = ref("default");
      function mudarVariacao() {
        if (textVariant.value === "default") {
          textVariant.value = "success";
        } else if (textVariant.value === "success") {
          textVariant.value = "error";
        } else {
          textVariant.value = "default";
        }
      }
      return {
        textVariant,
        mudarVariacao,
      };
    },
    template: `
<GenericCard
  title="Exemplo com slot"
  text="Card com slot"
  :textVariant="textVariant"
>
  <template #caption>
    <GenericButton label="Mudar variação" @click="mudarVariacao" />
  </template>
</GenericCard>
    `.trim(),
  }),
};

export const CustomClass: Story = {
  name: "Personalizando com class",
  render: () => ({
    components: { GenericCard },
    template: `
<GenericCard
  class="text-blue-500 font-mono"
  title="Usuários"
  titleClass="font-sans"
  text="5 novos usuários cadastrados"
  caption="3 com e-mail confirmado. 2 sem e-mail confirmado."
  captionVariant="success"
  captionClass="font-sans"
>
    `,
  }),
};
