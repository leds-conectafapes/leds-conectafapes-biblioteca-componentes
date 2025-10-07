import type { Meta, StoryObj } from "@storybook/vue3";
import GenericIcon from "./GenericIcon.vue";

const meta: Meta<typeof GenericIcon> = {
  title: "Components/GenericIcon",
  component: GenericIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericIcon** oferece ícones do Material Design. Os ícones são renderizados por meio de uma fonte de texto.
Portanto, para controlar o tamanho e espaçamento do GenericIcon, utiliza-se classes Tailwind como 'text-' e
'leading-'. O nome do ícone segue o Material Design Icons, usando '_' (*underline*) em vez de '-' ou espaço.
`.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    },
  },
  argTypes: {
    name: {
      control: "text",
      description: "Nome do ícone, segundo Material Design Icons",
      table: {
        type: { summary: "string" },
      },
      required: true,
    },
    variant: {
      control: "select",
      options: ["outlined", "rounded", "sharp"],
      description: "Variação de estilo do ícone.",
      table: {
        type: { summary: "IconVariant" },
        defaultValue: { summary: "'outlined'" },
      },
    },
    filled: {
      control: "boolean",
      description: "Variação de preenchimento do ícone.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    weight: {
      control: "number",
      description:
        "Peso do ícone. Funciona da mesma forma que o peso de uma fonte de texto, muda a grossura das linhas do desenho.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "400" },
      },
    },
    className: {
      control: "text",
      description: "Classes do componente",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericIcon>;

export const Default: Story = {
  render: () => ({
    components: { GenericIcon },
    template: `
      <GenericIcon name="person" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<GenericIcon name="person" />
        `.trim(),
      },
    },
  },
};

export const Filled: Story = {
  name: "Preenchimento",
  render: () => ({
    components: { GenericIcon },
    template: `
      <GenericIcon name="flag_2" />
      <GenericIcon name="flag_2" filled />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<GenericIcon name="flag_2" />
<GenericIcon name="flag_2" filled />
        `.trim(),
      },
    },
  },
};

export const Variant: Story = {
  name: "Variações de estilo",
  render: () => ({
    components: { GenericIcon },
    template: `
      <GenericIcon name="trophy" />
      <GenericIcon name="trophy" variant="rounded" class-name="text-2xl" />
      <GenericIcon name="trophy" variant="sharp" class-name="text-2xl" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<GenericIcon name="trophy" />
<GenericIcon name="trophy" variant="rounded" class-name="text-2xl" />
<GenericIcon name="trophy" variant="sharp" class-name="text-2xl" />
        `.trim(),
      },
    },
  },
};
