import type { Meta, StoryObj } from '@storybook/vue3';

import GenericFlag from './GenericFlag.vue';

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

export const Default: Story = {
  args: {
    title: 'Título breve',
    description: 'Descrição, caso necessária'
  }
}
