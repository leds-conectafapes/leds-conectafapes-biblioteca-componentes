import type { Meta, StoryObj } from '@storybook/vue3';

import GenericInput from './GenericInput.vue';

const meta = {
  title: 'Basic Components/GenericInput',
  component: GenericInput,
  tags: ['autodocs'],

  argTypes: {
    type: { control: 'select', options: [
      'text',
      'search',
      'number',
    ]},
    label: { control: 'text' },
    mandatory: { control: 'boolean' },
    placeholder: { control: 'text' },
    state: { control: 'select', options: [
      'default',
      'error',
      'warning',
      'disabled',
    ]},
  },
} satisfies Meta<typeof GenericInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextDefault: Story = {
  args: {
    type: 'text',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'default',
  },
};

export const SearchDefault: Story = {
  args: {
    type: 'search',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'default',
  },
};

export const NumberDefault: Story = {
  args: {
    type: 'number',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'default',
  },
};

export const TextError: Story = {
  args: {
    type: 'text',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'error',
  },
};

export const SearchError: Story = {
  args: {
    type: 'search',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'error',
  },
};

export const NumberError: Story = {
  args: {
    type: 'number',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'error',
  },
};

export const TextDisabled: Story = {
  args: {
    type: 'text',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'disabled',
  },
};

export const SearchDisabled: Story = {
  args: {
    type: 'search',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'disabled',
  },
};

export const NumberDisabled: Story = {
  args: {
    type: 'number',
    label: 'Label',
    mandatory: true,
    placeholder: 'Placeholder',
    state: 'disabled',
  },
};
