import type { Meta, StoryObj } from '@storybook/vue3';

import GenericFlag from './GenericSnackBar.vue';

const meta = {
  title: 'Basic Components/GenericFlag',
  component: GenericFlag,
  tags: ['autodocs'],

  argTypes: {
    title: { type: 'string', description: 'Título da Flag', required: true },
    description: { type: 'string', description: 'Descrição da Flag', required: true },
    variant: { 
      control: 'select',
      options: [
      'informative',
      'success',
      'warning',
      'error',
      ],
      description: 'Variante da Flag',
      required: false,
    },
  }
} satisfies Meta<typeof GenericFlag>;

export default meta;
type Story = StoryObj<typeof meta>

export const InformativeDefault: Story = {
  args: {
    variant: 'informative',
    title: 'Atualização disponível',
    description: 'Uma nova versão do sistema está pronta para ser instalada.',
    modelValue: true,
  }
}

export const SuccessDefault: Story = {
  args: {
    variant: 'success',
    title: 'Cadastro concluído',
    description: 'Seu registro foi salvo com sucesso.',
    modelValue: true,
  }
}

export const WarningDefault: Story = {
  args: {
    variant: 'warning',
    title: 'Campo obrigatório vazio',
    description: 'Preencha todos os campos antes de enviar.',
    modelValue: true,
  } 
}

export const ErrorDefault: Story = {
  args: {
    variant: 'error',
    title: 'Ação não permitida',
    description: 'Você não tem permissão para executar esta operação.',
    modelValue: true,
  } 
}
