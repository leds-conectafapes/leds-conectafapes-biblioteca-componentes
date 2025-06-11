import type { Meta, StoryObj } from '@storybook/vue3';

import GenericInput from './GenericInput.vue';

const meta = {
  title: 'Basic Components/GenericInput',
  component: GenericInput,
  tags: ['autodocs'],

  argTypes: {
    type: { 
      control: 'select',
      options: [
        'text',
        'search',
        'number',
      ],
      description: 'Tipo do input',
      required: false,
    },
    label: { control: 'text', description: 'Nome do input', required: true },
    required: { control: 'boolean', description: 'Simbolo de campo obrigatório', required: false },
    placeholder: { control: 'text', description: 'Placeholder do input' , required: true },
    state: {
      control: 'select',
      options: [
        'default',
        'error',
        'warning',
        'disabled',
      ],
      description: 'Estado do input',
      required: false,
    },
  },
} satisfies Meta<typeof GenericInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextDefault: Story = {
  args: {
    type: 'text',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'default',
    modelValue: '',
  },
};

export const SearchDefault: Story = {
  args: {
    type: 'search',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'default',
    modelValue: '',
  },
};

export const NumberDefault: Story = {
  args: {
    type: 'number',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'default',
    modelValue: '',
  },
};

export const TextError: Story = {
  args: {
    type: 'text',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'error',
    modelValue: '',
  },
};

export const SearchError: Story = {
  args: {
    type: 'search',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'error',
    modelValue: '',
  },
};

export const NumberError: Story = {
  args: {
    type: 'number',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'error',
    modelValue: '',
  },
};

export const TextDisabled: Story = {
  args: {
    type: 'text',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'disabled',
    modelValue: '',
  },
};

export const SearchDisabled: Story = {
  args: {
    type: 'search',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'disabled',
    modelValue: '',
  },
};

export const NumberDisabled: Story = {
  args: {
    type: 'number',
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    state: 'disabled',
    modelValue: '',
  },
};
