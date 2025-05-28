import type { Meta, StoryObj } from '@storybook/vue3';

import GenericDatePicker from './GenericDatePicker.vue';

const meta = {
  title: 'Basic Components/GenericDatePicker',
  component: GenericDatePicker,
  tags: ['autodocs'],

  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder do input' ,required: true },
    state: { control: 'select', options: [
      'default',
      'error',
      'warning',
      'disabled',
    ],
      description: 'Estado do input',
      required: false,
  },
    label: { control: 'text', description: 'Nome do input', required: true },
    required: { control: 'boolean', description: 'Simbolo de campo obrigatório', required: false },
  },

} satisfies Meta<typeof GenericDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    required: true,
    state: 'default',
    modelValue: '',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    required: true,
    state: 'error',
    modelValue: '',
  },
};

export const Warning: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    required: true,
    state: 'warning',
    modelValue: '',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    required: true,
    state: 'disabled',
    modelValue: '',
  },
};
