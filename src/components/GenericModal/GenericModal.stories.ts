import type { Meta, StoryObj } from "@storybook/vue3";
import GenericModal from "./GenericModal.vue";
import { h, ref } from "vue";
import GenericButton from "../GenericButton/GenericButton.vue";

const meta: Meta<typeof GenericModal> = {
  title: "Components/GenericModal",
  component: GenericModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**GenericModal** é um componente de modal com conteúdo passado por slot, com botões de ação e suporte a variações de estilo.

- v-model booleano controla a visibilidade do componente;
- Aceita as mesmas variações do GenericButton, exceto \`secondary\`.
- Possui dois botões de ação: "close" e "confirm".

### Exemplo:
\`\`\`vue
<script setup lang="ts">
const modal = ref(false);
function confirmarCadastro() {
  modal.value = false
}
</script>

<template>
  <GenericButton label="Concluir cadastro" @click="modal = true"></GenericButton>

  <GenericModal
    v-model="modal"
    title="Confirmar"
    cancel-label="Não"
    confirm-label="Sim"
    @confirm="confirmarCadastro"
  >
    Todas as informações estão corretas?
  </GenericModal>
</template>
\`\`\`
        `.trim(),
      },
      extractArgTypes: false,
      extractComponentDescription: false,
    },
  },
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "Controla se o modal está sendo exibido ou não",
      table: {
        type: { summary: "boolean" },
      },
      required: true
    },
    title: {
      control: "text",
      description: "Título do modal",
      table: {
        type: { summary: "string" },
      },
      required: true,
    },
    closeLabel: {
      control: "text",
      description: "Texto do botão de ação cancelar",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'Fechar'" },
      },
    },
    confirmLabel: {
      control: "text",
      description: "Texto do botão de ação confirmar. Se ausente, este botão não será exibido.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "danger",
        "warning",
        "secondaryDanger",
        "disabled",
      ],
      description: "Variação visual do botão de confirmação",
      table: {
        type: { summary: `'primary' | 'danger' | 'warning' | 'secondaryDanger' | 'disabled'` },
        defaultValue: { summary: "'primary'" },
      },
    },
    hideCloseIcon: {
      control: "boolean",
      description: "Quando verdadeiro, esconde o botão de fechar do título do modal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: 'false' },
      },
    },
    onConfirm: {
      action: "onConfirm",
      description: "Evento emitido ao clicar no botão de confirmação",
      table: {
        category: "Events",
        type: { summary: "() => void" },
      },
    },
    onClose: {
      action: "onClose",
      description: "Evento emitido ao clicar em qualquer botão de fechamento",
      table: {
        category: "Events",
        type: { summary: "() => void" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GenericModal>;

export const Default: Story = {
  render: () => {
    const modal = ref(false)
    function confirmarCadastro() {
      modal.value = false
    }
    return () => [
      h(
        GenericButton,
        {
          label: "Confirmar cadastro",
          onClick: () => modal.value = true,
        }
      ),
      h(
        GenericModal,
        {
          modelValue: modal.value,
          title: "Confirmar",
          cancelLabel: "Não",
          confirmLabel: "Sim",
          onConfirm: confirmarCadastro,
          "onUpdate:modelValue": (newValue) => modal.value = newValue
        },
        () => "Todas as informações estão corretas?"
      )
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
const modal = ref(false);
function confirmarCadastro() {
  modal.value = false
}
</script>

<template>
  <GenericButton label="Concluir cadastro" @click="modal = true"></GenericButton>

  <GenericModal
    v-model="modal"
    title="Confirmar"
    cancel-label="Não"
    confirm-label="Sim"
    @confirm="confirmarCadastro"
  >
    Todas as informações estão corretas?
  </GenericModal>
</template>`
      }
    }
  }
};

