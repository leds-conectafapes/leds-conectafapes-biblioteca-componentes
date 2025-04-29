import type { Meta, StoryObj } from '@storybook/vue3';

import GenericSelect from './GenericSelect.vue';

const meta = {
  title: 'Basic Components/GenericSelect',
  component: GenericSelect,
  tags: ['autodocs'],

  argTypes: {
    placeholder: { control: 'text' },
    options: { control: 'object' },
    label: { control: 'text' },
    mandatory: { control: 'boolean' },
    state: { control: 'select', options: [
      'default',
      'error',
      'warning',
      'disabled',
    ]},
  },
} satisfies Meta<typeof GenericSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    mandatory: true,
    options: ['Option 1', 'Option 2', 'Option 3'],
    state: 'default',
    modelValue: '',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    mandatory: true,
    options: ['Option 1', 'Option 2', 'Option 3'],
    state: 'error',
    modelValue: '',
  },
};

export const Warning: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    mandatory: true,
    options: ['Option 1', 'Option 2', 'Option 3'],
    state: 'warning',
    modelValue: '',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    mandatory: true,
    options: ['Option 1', 'Option 2', 'Option 3'],
    state: 'disabled',
    modelValue: '',
  },
};
