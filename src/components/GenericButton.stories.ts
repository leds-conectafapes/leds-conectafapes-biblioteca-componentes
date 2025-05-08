import type { Meta, StoryObj } from '@storybook/vue3';

import GenericButton from './GenericButton.vue';

const meta = {
  title: 'Basic Components/GenericButton',
  component: GenericButton,
  tags: ['autodocs'],

  argTypes: {
    label: { control: 'text', description: 'Texto do botão' ,required: true },
    variant: { 
      control: 'select',
      options: [
      'primary',
      'danger',
      'warning',
      'secondary',
      'secondaryDanger',
      'disabled',
      ],
      description: 'Variante do botão',
      required: false,
    },

  },

} satisfies Meta<typeof GenericButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Button',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    label: 'Button',
    variant: 'warning',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
};

export const SecondaryDanger: Story = {
  args: {
    label: 'Button',
    variant: 'secondaryDanger',
  },
};

export const Disable: Story = {
  args: {
    label: 'Button',
    variant: 'disabled',
  },
};
